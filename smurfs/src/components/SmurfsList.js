import React, { useEffect } from "react";

import { connect } from "react-redux";

function SmurfsList(props) {
  console.log(`Console logging props in the SmurfsList.js`, props);

  useEffect(() => {
    // import .get actions here!!!
  }, []);

  return <div></div>;
}

export default connect((state) => {
  return {
    smurfs: state.smurfs
  };
}, {})(SmurfsList);
