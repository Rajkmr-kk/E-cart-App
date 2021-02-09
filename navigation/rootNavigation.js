import React from "react";

export const navigationRef = React.createRef();

const navigates = (name, params) =>
  //if(!navigationRef.current)
  navigationRef.current?.navigate(name, params);

export default {
  navigates,
};
