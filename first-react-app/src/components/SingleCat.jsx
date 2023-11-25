import React from 'react';

const SingleCat = ({ id, name, latinName, image, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="single-cat">
      <h3>{id}</h3>
      <img src={image} alt={`${name} - ${latinName}`} />
      <div>
        <span>({name})</span>
        <div>{latinName}</div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default SingleCat;
