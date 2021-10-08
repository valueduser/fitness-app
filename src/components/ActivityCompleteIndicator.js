function ActivityCompleteIndicator(props) {

  if(props.display === true){
    return (<span> ✅</span>);
  } else {
    return null;
  }
}
export default ActivityCompleteIndicator;
