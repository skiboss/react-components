

var time = new Date().getHours();
var weather;
const customStyle = {
  color: ""
};
// const greet = () => {
if (time >= 0 && time < 12) {
  weather = "Morning";
  customStyle.color = "red";
} else if (time > 12 && time < 16) {
  weather = "Afternoon";
  customStyle.color = "blue";
} else if (time >= 16 && time <= 23) {
  weather = "Evening";
  customStyle.color = "green";
}

export default weather;
export {customStyle};