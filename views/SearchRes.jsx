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
          <h1>Results for {`"${search}"`}</h1>

          <div class="collection">
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
                  <div key={i} class="row">
                    <div class="col s12 m6">
                      <div class="card ">
                        <div class="card-image">
                          <img id="cheese" src={`${artist.images[0].url}`} />
                          <span class="card-title">{artist.name}</span>
                          <a class="popular btn-floating halfway-fab waves-effect waves-light deep-purple lighten-5">
                            <i class="material-icons popular deep-purple lighten-1">
                              {artist.popularity}
                            </i>
                          </a>
                        </div>
                        <div class="card-content">
                          <ul>
                            <li>{artist.name}</li>
                            <li>{artist.images.length}</li>
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
      </Template>
    );
  }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/

module.exports = SearchRes;
