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
            <form action="/user" method="POST" className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="username"
                    placeholder="Username"
                    id="user_name"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    id="last_name"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="password"
                    placeholder="Password"
                    id="password"
                    type="password"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="validate"
                  />
                </div>
              </div>
              <input className="btn submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = Signup;
