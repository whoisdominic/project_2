const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Category extends React.Component {
  render() {
    const { result, data, category } = this.props;
    // const goats = ranker(data, 5);
    // console.log("The nominies are!", goats);
    console.log();
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <h2 className="cat-title">{category}</h2>
          <div className="main-cont goat-display">
            <img className="goat-photo" src={result[0].images[0].url} alt="" />
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
