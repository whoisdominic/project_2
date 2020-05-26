const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");
const addCommas = require("../controllers/commas.js");

class Artist extends React.Component {
  render() {
    const { results, id, tracks, currentUser } = this.props;
    console.log("HEY", currentUser);
    // console.log("these are the top tracks: ", tracks);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <div className="show-wrapper">
            <div className="stats-cont">
              <h1>{results.name}</h1>
              <h3 className="btn light-blue lighten-1">Vote Below</h3>
              <br />
              <br />
              <br />
              <ul>
                {results.genres.map((genre, i) => {
                  return (
                    <li>
                      <form action={`/categories/${genre}`} method="post">
                        <input name="name" type="hidden" value={genre} />
                        <input name="artistId" type="hidden" value={id} />
                        <input
                          name="user_id"
                          type="hidden"
                          value={currentUser._id}
                        />
                        <input
                          className="btn deep-purple lighten-1"
                          value={genre}
                          type="submit"
                        />
                      </form>
                    </li>
                  );
                })}
                <br />
                <li className="artist-stat">
                  Popularity: {results.popularity}
                </li>
                <li className="artist-stat">
                  Spotify Followers: {addCommas(results.followers.total)}
                </li>
              </ul>
            </div>
            <img
              className="artist-image-show"
              src={results.images[0].url}
              alt=""
            />
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = Artist;
