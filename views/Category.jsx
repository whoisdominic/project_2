const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");
const addCommas = require("../controllers/commas.js");

class Category extends React.Component {
  render() {
    const { goatRank, result, data, category } = this.props;
    // const goats = ranker(data, 5);
    // console.log("The nominies are!", goats);
    console.log();
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <h2 className="cat-title">{category}</h2>
          <div className="main-cont">
            <div className="goat-display">
              <img
                className="goat-photo"
                src={result[0].images[0].url}
                alt=""
              />
              <div className="goat-stats">
                <ul>
                  <li className="goat-item">{`Goat Rank: ${goatRank}`}</li>
                  <li className="goat-item">{`Spotify Popularity: ${result[0].popularity}`}</li>
                  <li className="goat-item">{`Spotify Followers: ${addCommas(
                    result[0].followers
                  )}`}</li>
                </ul>
              </div>
            </div>
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
