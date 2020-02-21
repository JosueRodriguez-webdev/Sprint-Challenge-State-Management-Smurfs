import React from "react";

const SmurfsCard = (props) => {
  console.log(`Console logging props in the SmurfsCard`, props);
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default SmurfsCard;
