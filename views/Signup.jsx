const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Signup extends React.Component {
  render() {
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
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
                <div className="input-field col s6">
                  <input
                    placeholder="First Name"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label for="first_name"></label>
                </div>
                <div className="input-field col s6">
                  <input
                    placeholder="Last Name"
                    id="last_name"
                    type="text"
                    className="validate"
                  />
                  <label for="last_name"></label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Password"
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label for="password"></label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label for="email"></label>
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

module.exports = Signup;
