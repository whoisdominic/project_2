const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Index extends React.Component {
  render() {
    const { user } = this.props;
    console.log("in index", user);
    return (
      <Template>
        <NavComp>{user}</NavComp>
        <div className="index-wrapper">
          <div className="main-cont index-background">
            <div className="genre-index">
              <div className="index-img">
                <h2 className="hero-index">
                  <a className="index-link" href="/search">
                    Who's <br /> The <br /> Goat?
                  </a>
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
