import React from 'react'

export default function Product(props) {
  return (
      <div>Product Details
          <p>ProductName:{props.name}</p>
          <p>ProductName:{props.price}</p>
    </div>
  )
}
