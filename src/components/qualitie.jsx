import React from "react";

const Qualitie = (props) => {
  const { color, _id, name } = props;

  return (
    <span className={"badge m-1 bg-" + color} key={_id}>
      {name}
    </span>
  );
};

export default Qualitie;
