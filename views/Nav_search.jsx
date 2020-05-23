const React = require('react');

class NavSearch extends React.Component {
    render() {
        return (
                    
        <nav>
            <div class="nav-wrapper">
              <form>
                <div class="input-field">
                  <input id="search" type="search" required/>
                  <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                  <i class="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        )
    }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/


module.exports = NavSearch;