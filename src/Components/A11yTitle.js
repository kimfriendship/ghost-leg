import React from "react";

const A11yTitle = ({ element, text }) => {
  return (
    <>
      {element === "h2" ? (
        <h2 className="a11yHidden">{text}</h2>
      ) : (
        <h3 className="a11yHidden">{text}</h3>
      )}
    </>
  );
};

export default React.memo(A11yTitle);
