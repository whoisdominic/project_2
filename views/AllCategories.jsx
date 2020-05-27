const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class AllCategories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <Template>
        <NavComp></NavComp>
        <h1 className="results-search-title">Featured</h1>
        <div className="categorie-cont">
          <div className="cat-hero-cont">
            <a className="rap-hero" href="/categories/atl%20hip%20hop">
              <div>
                <h3 className="btn deep-purple darken-1 cat-hero-text">
                  Atl Hip-Hop
                </h3>
              </div>
            </a>

            <a className="pop-hero" href="/categories/pop">
              <div>
                <h3 className="btn deep-purple darken-1 cat-hero-text">Pop</h3>
              </div>
            </a>

            <a className="rnb-hero" href="/categories/r&b">
              <div>
                <h3 className="btn deep-purple darken-1 cat-hero-text">R&B</h3>
              </div>
            </a>
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = AllCategories;
