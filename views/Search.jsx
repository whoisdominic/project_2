const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");
const NavSearch = require("./Nav_search.jsx");

class Index extends React.Component {
  render() {
    const { datadata } = this.props;
    return (
      <Template>
        <NavComp></NavComp>

        <div className="main-cont">
          <div className="search-cont">
            <form className="search" action="/search" method="POST">
              <input className="grey lighten-3" type="search" name="search" />
              <input
                className="btn green accent-4"
                type="submit"
                value="Search"
              />
            </form>
            <div className="spotify-cont">
              <h4>POWERED BY</h4>
              <img
                className="spotify-logo"
                src="/img/spotify-logo-png-7072.png"
                alt="spotify logo"
              />
            </div>
          </div>
          <div className="about">
            <div className="about-1">
              <h2>How it works</h2>
              <a href="https://www.dictionary.com/e/slang/g-o-a-t/">
                What is a GOAT anyway?
              </a>
              <p>
                <br /> Here you can search for your favorite artist just like
                you would on Spotify! <br />
                <br />
                Once you find your favorite artist. Take a look at the
                categories and see if you think they are worthy of a greatest of
                all time vote in that genre.
                <br />
              </p>
            </div>
            <div className="about-2">
              <p>
                Most votes in a category will make that artist the GOAT of that
                genre! <br /> <br /> Goats are displayed in their respective
                category pages!
              </p>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = Index;
