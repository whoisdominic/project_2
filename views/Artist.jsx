const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Artist extends React.Component {
  render() {
    const { results, id, tracks } = this.props;
    console.log("these are the top tracks: ", tracks);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <div className="show-wrapper">
            <h1>{results.name}</h1>
            <img src={results.images[0].url} alt="" />
          </div>
          <div className="stats-cont">
            <ul>
              {results.genres.map((genre, i) => {
                return (
                  <li>
                    {" "}
                    <a href="">{genre}</a>
                  </li>
                );
              })}
              <li>Popularity: {results.popularity}</li>
              <li>Spotify Followers: {results.followers.total}</li>
            </ul>
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = Artist;
