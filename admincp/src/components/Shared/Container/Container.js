import React from "react";

const Container = ({ children, fullWidth = true }) => {
  const classNames = `container${fullWidth ? "--fullWidth" : ""}`;
  return <div className={classNames}>{children}</div>;
};

export default Container;
