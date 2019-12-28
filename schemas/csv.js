var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var csvSchema = new Schema({
    id :String,
    user_id :String,
    vehical_model_id :String,
    package_id :String,
    travel_type :String,
    from_area_id :String,
    to_area_id :String,
    from_city_id :String,
    to_city_id :String,
    from_data :String,
    to_data :String,
    online_booking :String,
    mobile_booking :String,
    booking_created :String,
    from_lat :String,
    from_long :String,
    to_lat :String,
    to_long :String,
    car_cancel :String
})

module.exports = mongoose.model('ride', csvSchema);
