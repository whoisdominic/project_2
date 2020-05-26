const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class AllCategories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <h1 className="results-search-title">Featured</h1>
          <div className="stats-cont"></div>
        </div>
      </Template>
    );
  }
}

module.exports = AllCategories;
