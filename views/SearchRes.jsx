const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class SearchRes extends React.Component {
  render() {
    const { results, search } = this.props;
    // console.log(`my results ${results}`)
    let displayReady = [];
    return (
      <Template>
        <NavComp></NavComp>

        <div className="main-cont">
          <form action="/search" method="POST">
            <input type="search" name="search" />
            <input type="submit" value="Search" />
          </form>
          <h1 className="results-search-title">Results for {`"${search}"`}</h1>
          <div className="center-the-cont">
            <div id="collection" class="collection">
              {results.artists.items.map((artist, i) => {
                if (artist.images.length > 1) {
                  displayReady.push(artist);
                  // results.splice(i, 1)
                }
              })}
              {displayReady.map((artist, i) => {
                // console.log(artist.images[0].url)
                return (
                  <a href={`/artist/${artist.id}`}>
                    <div key={i} className="row">
                      <div className="col s12 m6">
                        <div className="card ">
                          <div className="card-image">
                            <img
                              className="artist-image-search"
                              src={`${artist.images[0].url}`}
                            />
                            <a className="popular btn-floating halfway-fab waves-effect waves-light deep-purple lighten-5">
                              <i className="material-icons popular deep-purple lighten-1">
                                {artist.popularity}
                              </i>
                            </a>
                          </div>
                          <div className="card-content">
                            <ul>
                              <li>{artist.name}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
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

module.exports = SearchRes;
