const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Login extends React.Component {
  render() {
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont centered-cont">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s4">
                  <input
                    placeholder="Username"
                    id="user_name"
                    type="text"
                    className="validate"
                  />
                  <label for="user_name"></label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s4">
                  <input
                    placeholder="Password"
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label for="password"></label>
                </div>
              </div>
              <input className="btn submit" type="button" value="Submit" />
            </form>
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = Login;
