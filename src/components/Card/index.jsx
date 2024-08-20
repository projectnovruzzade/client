import React from "react";

const Card = ({title,body}) => {
  return (
    <div className="box border border-red-300 text-center w-1/6 p-2">
      <h1 className="text-sm font-medium my-2">{title}</h1>
      <h2 className="text-sm font-normal m-2">{body}</h2>
    </div>
  );
};

export default Card;
