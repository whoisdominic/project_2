const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class AllCategories extends React.Component {
  render() {
    const { categories } = this.props;
    console.log("these are the top tracks: ", tracks);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          {/* <div className="show-wrapper">{categories.map((item, i) => {})}</div> */}
          <div className="stats-cont"></div>
        </div>
      </Template>
    );
  }
}

module.exports = AllCategories;
