const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Category extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          {/* <div className="show-wrapper">{data.map((item, i) => {})}</div> */}
          <div className="stats-cont"></div>
        </div>
      </Template>
    );
  }
}

module.exports = Category;
