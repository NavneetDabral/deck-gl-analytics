import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { PacmanLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    margin: 0 auto;
    border-color: red;
`;
 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Loader;
