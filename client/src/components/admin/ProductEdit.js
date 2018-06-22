import React from 'react';

const ProductEdit = (props) => {
  return (
    <div>
      <img 
        src={props.product.mainimage}
        alt="img"
        width={240}
        height={240}
      />
    </div>
  )
}

export default ProductEdit;