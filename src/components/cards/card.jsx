import React from "react";

const Card = ({ onClick, imageUrl, title, url }) => {
  return (
    <a
      className="card card-hover text-white bg-dark p-0 mx-2 my-4 col-5 col-md-2"
      href={url}
    >
      <img className="img-fluid card-img-top" src={imageUrl} alt={title} />
      <div className="card-body p-1">
        <h5 className="card-title w-100 mt-2">{title}</h5>
      </div>
    </a>
  );
};

export default Card;
