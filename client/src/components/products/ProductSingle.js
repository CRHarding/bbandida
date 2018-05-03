import React from 'react';

const ProductSingle = props => {
  let contributors = props.product.contributors.map(contributor => {
    return props.contributors.filter(contrib => contrib.id === contributor);
  });
  return (
    <div>
      <h1>product Single view</h1>
      {props.images.map(image => {
        return (
          <div key={image}>
            <img src={image.secure_url} />
          </div>
        );
      })}
      {contributors.map(contributor => {
        return (
          <p>
            contributor: {contributor.name}
            <br />
            role: {contributor.role}
            <br />
            link: {contributor.link}
          </p>
        );
      })}
    </div>
  );
};

export default ProductSingle;
