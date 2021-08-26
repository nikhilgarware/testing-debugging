import React from "react";
import PropTypes from "prop-types";

function Component2({ db1 }) {
  return <div>This is state of component 1 {db1} </div>;
}
Component2.propTypes = {
  db1: PropTypes.number.isRequired,
};
export default Component2;
