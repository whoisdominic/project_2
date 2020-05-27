const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");
const NavSearch = require("./Nav_search.jsx");

class Index extends React.Component {
  render() {
    const { user } = this.props;
    console.log("in index", user);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="index-wrapper">
          <div className="main-cont index-background">
            <div className="genre-index">
              <div className="index-img">
                <h2 className="hero-index">
                  Who's <br /> The <br /> Goat?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/

module.exports = Index;
