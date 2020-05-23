const React = require('react');

const NavComp = (props) => {
  	return (
        <>
{/*           
        <nav>
    			<div class="nav-wrapper  deep-purple lighten-4">
      			<ul class="left hide-on-med-and-down">
        			<li><a href="#">Top Ten</a></li>
        			<li><a href="#">My Votes</a></li>
        			<li><a href="#">Account</a></li>
        			<li><a href="#">Login</a></li>
        			<li><a href="#">Sign up</a></li>
        			<li class="active"><a href="collapsible.html">Search</a></li>
            </ul>
          </div>
        </nav> */}
				<nav>
    <div class="nav-wrapper white">
					<a href="/">
							<img  className="navcomp-img brand logo" src="/img/goat-logo-trans.png" alt="Goat Ranker Logo"/>
					</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">



      			<li className="deep-purple lighten-3"><a href="/">Top Ten</a></li>
      			<li className="deep-purple lighten-3"><a href="/">My Votes</a></li>
      			<li className="deep-purple lighten-3"><a href="/">Account</a></li>
      			<li className="deep-purple lighten-3"><a href="/">Login</a></li>
      			<li className="deep-purple lighten-3"><a href="/">Sign up</a></li>
      			<li className="active deep-purple lighten-2"><a href="collapsible.html">Search</a></li>
      </ul>
    </div>
  		</nav>
{/*           
          
            <nav className="navcomp-cont" >
                
                <div className="links-cont">
                <ul className="navcomp-ul">
                <a href="#">
                    <li className="navcomp-li" >Top 10</li>
                </a>

                <a href="#">
                    <li className="navcomp-li" >Top 100</li>
                </a>


                <a href="#">
                    <li className="navcomp-li" >How to vote</li>
                </a>

                    <a href="/account">
                        <input className="nav-btn btn-secondary" type="button" value="Account"/>
                    </a>
                    <span></span>
                    <a href="#">
                        <input className="nav-btn btn-secondary" type="button" value="Register"/>
                    </a>
                    <span></span>
                    <a href="#">
                        <input className="nav-btn btn-secondary" type="button" value="Login"/>
                    </a>
                    <span></span>
                </ul>
                </div>
            </nav> */}
        </>
    )
}

module.exports = NavComp; 