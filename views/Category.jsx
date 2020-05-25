const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");
const ranker = require("../controllers/ranker.js");

class Category extends React.Component {
  render() {
    const { data, category } = this.props;
    const goats = ranker(data, 5);
    console.log("The nominies are!", goats);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <h2>{category}</h2>
          <div className="main-cont">
            <ul>
              {data.map((item, i) => {
                return <li>{item.userVotes[0].artistId}</li>;
              })}
            </ul>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
      </Template>
    );
  }
}

module.exports = Category;

// console.log(`This is my data: ${data[3]}`);
// data.map((item, i) => {
//   console.log("mapping", item.userVotes[0].artistId);
// });
