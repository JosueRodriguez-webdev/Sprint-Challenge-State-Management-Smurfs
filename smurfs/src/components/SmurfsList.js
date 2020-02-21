import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";

import { connect } from "react-redux";

import { getSmurfs } from "../actions";

function SmurfsList(props) {
  console.log(`Console logging props in the SmurfsList.js`, props);

  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div>
      {/* {props.smurfs.data.map((smurf) => {
        // return <SmurfsCard key={smurf.id} smurf={smurf} />;
      })} */}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      smurfs: state.smurfs
    };
  },
  { getSmurfs }
)(SmurfsList);
