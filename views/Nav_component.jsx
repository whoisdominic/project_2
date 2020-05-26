const React = require("react");

const NavComp = (props) => {
  return (
    <>
      <nav>
        <div class="nav-wrapper white">
          <a href="/">
            <img
              className="navcomp-img brand logo"
              src="/img/goat-logo-trans.png"
              alt="Goat Ranker Logo"
            />
          </a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li className="active deep-purple lighten-2">
              <a href="/search">Search</a>
            </li>
            <li className="deep-purple lighten-3">
              <a href="/">Categories</a>
            </li>
            <li className="deep-purple lighten-3">
              <a href="/">My Votes</a>
            </li>
            <li className="deep-purple lighten-3">
              <a href="/user/account">Account</a>
            </li>
            <li className="deep-purple lighten-3">
              <a href="/user/login">Login</a>
            </li>
            <li className="deep-purple lighten-3">
              <a href="/user/signup">Sign up</a>
            </li>

            <li className="deep-purple lighten-3">
              <form action="/user/?_method=delete" method="post">
                <input type="submit" value="Logout" />
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

module.exports = NavComp;
