const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const cors =require('cors');
const connectDb= require('./connect-mongo');
const Router=express.Router;
const router = new Router();
const multer = require('multer');
const fs = require('fs');
const csv=require('fast-csv');
const catSchema =require('./schemas/user-data');
const csvSchema =require('./schemas/csv');
const upload = multer({ dest: 'tmp/csv/' });
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());
app.use('/upload-csv', router);



//database connection
connectDb();
//app routes

//save csv to mongo cloud

router.post('/data',upload.single('my-file'),async (req,res)=>{

try{
  const fileRows = [];
  csv.fromPath(req.file.path)
   .on("data", function (data) {
     fileRows.push(data); // push each row
   })
   .on("end", function () {
     
       let i=1;
       console.log(fileRows.length);
      
      while(i!=fileRows.length){
      
       let dataSchema=new csvSchema({
        "id" :`${fileRows[i][0]}`,
        "user_id" :`${fileRows[i][1]}`,
        "vehical_model_id" :`${fileRows[i][2]}`,
        "package_id" :`${fileRows[i][3]}`,
        "travel_type" :`${fileRows[i][4]}`,
        "from_area_id" :`${fileRows[i][5]}`,
        "to_area_id" :`${fileRows[i][6]}`,
        "from_city_id" :`${fileRows[i][7]}`,
        "to_city_id" :`${fileRows[i][8]}`,
        "from_data" :`${fileRows[i][9]}`,
        "to_data" :`${fileRows[i][10]}`,
        "online_booking" :`${fileRows[i][11]}`,
        "mobile_booking" :`${fileRows[i][12]}`,
        "booking_created" :`${fileRows[i][13]}`,
        "from_lat" :`${fileRows[i][14]}`,
        "from_long" :`${fileRows[i][15]}`,
        "to_lat" :`${fileRows[i][16]}`,
        "to_long" :`${fileRows[i][17]}`,
        "car_cancel" :`${fileRows[i][18]}`
       });   
       
      dataSchema.save(function(err,data){
       if(err)
       {
          console.log(err);
       }
       else{
         console.log("done");
       }
   })
       
       
       i++;
      }
 
     fs.unlinkSync(req.file.path);   // remove temp file
     //process "fileRows" and respond
  
   })

   res.json({status:"ok"});
  
}
catch(err){
  console.error(err);
}

});




//test db write operation  hit - http://localhost:5000/test


app.get('/test', (req,res)=>{
  try{
   let dataSchema=new catSchema({"name":"nasdas"});
   dataSchema.save(function(err,data)
   {
       if(err)
       {
           res.json({err:1,msg:'Registration Error'})
       }
       res.sendStatus(200);
       console.log("Success");
   })
  }
  catch(err){
      console.err(err);
  }  
 
 });


// customer loyalty API 


app.post('/customer-loyalty',async(req,res)=>{

  try {
    console.log(req.body);
    let responseData={};
    try {
          const user = await csvSchema.find({'user_id':`${req.body.query_id}`});
      
    //prepare data 
          const total_bookings=user.length;
          const canceled_bookings= user.reduce((count,userinfo)=> count+ +userinfo.car_cancel,0);
          const location_data =user.map((userinfo)=>(
                {
                sourcePosition: [+userinfo.from_long, +userinfo.from_lat], 
                targetPosition: [+userinfo.to_long, +userinfo.to_lat]
                }
            ));
          const online_bookings =user.reduce((count,userinfo)=> count+ +userinfo.online_booking,0);

   //inject data 

          responseData={location_data ,online_bookings,canceled_bookings,total_bookings};
  
          res.json(responseData);

    } catch (error) {
      console.log(error);
      throw error 
    }
  }catch (error) {
   console.log(error);
   res.json(error);

  }
})


// Main Analytics API

app.post('/filter-data', async (req,res)=>{
  let dude=+req.body.data;
  let regexString = '^'+dude+'\\D';
  let regex = RegExp(regexString, 'g');
 
  console.log(regex);
  let responseData={};
  let monthly_bar={};
  let monthly_bar_desired=[['month','count',{ role: 'style' }]];
  let day;
  try{
  
    const p=10;   
    const monthly_data=await csvSchema.find( { booking_created: { $regex: regex } })  
    const total_bookings=monthly_data.length;  
    console.log(total_bookings)  
    const canceled_bookings= monthly_data.reduce((count,userinfo)=> count+ +userinfo.car_cancel,0);
    const online_bookings =monthly_data.reduce((count,userinfo)=> count+ +userinfo.online_booking,0);
    
    monthly_data.forEach(value=>{

      
    day=value.booking_created.substring(
          value.booking_created.indexOf("/") + 1, 
          value.booking_created.lastIndexOf("/")
       );
 if(day in monthly_bar){
      monthly_bar[day]= +monthly_bar[day]+1;
 }
 else{
   monthly_bar[day] = 1;
 }


    })
    console.log(monthly_bar);

    for (let key in monthly_bar) {
      monthly_bar_desired.push([
        `${key}`, +monthly_bar[key] ,"fill-color:#9C27B0;opacity: 0.8"
      ])
    }
    

    responseData={canceled_bookings ,online_bookings,total_bookings,monthly_bar_desired};
    res.json(responseData);
  }catch(err){

     console.log(err);
     res.json(err);
  }


})


app.get('/filter-location', async (req,res)=>{
 
 let location_data=[];
  try{
    console.log("hi");
    const fetchData = await csvSchema.find({},{ 
    "_id":0,
    "id" :0,
    "user_id" :0,
    "vehical_model_id" :0,
    "package_id" :0,
    "travel_type" :0,
    "from_area_id" :0,
    "to_area_id" :0,
    "from_city_id" :0,
    "to_city_id" :0,
    "from_data" :0,
    "to_data" :0,
    "online_booking" :0,
    "mobile_booking" :0,
    "booking_created" :0,
    "to_lat" :0,
    "to_long" :0,
    "car_cancel" :0}).limit(500);
   
  console.log(fetchData);

    res.json(fetchData);
  }catch(err){

     console.log(err);
     res.json(err);
  }


})



app.use('/', express.static(__dirname + '/build'));

 


app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});