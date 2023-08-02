import React from "react";

function ActivityCompleteIndicator(props: any) {

  if(props.display === true){
    return (<span> ✅</span>);
  } else {
    return null;
  }
}
export default ActivityCompleteIndicator;
