// import { Alert } from 'bootstrap'
// import React from 'react'

// function Rating({rating}) {
//     <Alert>{rating}</Alert>
//     const stars = [...Array(5).keys()].map(k => k + 1)
//     return (
//             <><h1>{rating}</h1><div>
//             {
//             stars.map((star) => 
//             <span style={{ color: "#f8e825" }} key={star}
//                 className={rating >= star ? "fas fa-star" : rating >= star - 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></span>)}

//         </div></>
//   )
// }

// export default Rating

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({rating}) {
  return (
    <>
        <Stack spacing={1}>
              <Rating  defaultValue={rating} precision={0.1} readOnly />
        </Stack>
    </>
  );
}