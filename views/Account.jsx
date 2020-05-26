const React = require("react");
const Template = require("./Template.jsx");
const NavComp = require("./Nav_component");

class Account extends React.Component {
  render() {
    const { currentUser, userData } = this.props;
    console.log(currentUser);
    console.log(userData);
    return (
      <Template>
        <NavComp></NavComp>
        <div className="main-cont">
          <h1>{`${userData.username}'s Account`}</h1>
          <div className="stats-cont">
            <ul>
              <li>{`First name: ${userData.firstName}`}</li>
              <li>{`Last name: ${userData.lastName}`}</li>
              <li>{`Email: ${userData.email}`}</li>
            </ul>
          </div>
          <br />
          <a class="waves-effect waves-light btn-large">
            <i class="material-icons left">edit</i>
          </a>
        </div>
      </Template>
    );
  }
}

module.exports = Account;
