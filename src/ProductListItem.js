import React, {useState} from "react";

export default function ProductListItem({imgNo = imgNo, 
  productName = productName, productPriceFormatted = productPriceFormatted}) {

/*
  const imgNo = props.imgNo;
  const productName = props.productName;
  const productPriceFormatted = props.productPriceFormatted;
  */
  return (
    <>
      <div className="flex flex-col gap - [10px]">
        <img src={`https://picsum.photos/id/${imgNo}/200/300`} />
        <div className="text-center font-bold">
          {productName}
        </div>
        <div className="text-center after:content-['원']">
          {productPriceFormatted}
        </div>
      </div>
    </>
  );
}
