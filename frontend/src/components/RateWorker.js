
import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating=()=>{
    return (
      <div>
        <h1>Hello</h1>
        <StarRatings 
        rating={2}
        starRatedColor="blue"
        changeRating={1}
        numberOfStars={6}
        name='rating'
        />
        {/* <MDBContainer>
          <MDBRating
            iconFaces
            fillClassName='black-text'
            iconRegular
          />
        </MDBContainer> */}
        </div>
      );
}



export default Rating