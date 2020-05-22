const React = require('react');

const NavComp = (props) => {
    return (
        <>
            <nav className="navcomp-cont" >
                <a href="/">
                    <img  className="navcomp-img" src="GoatRankerbanner.png" alt="Goat Ranker Logo"/>
                </a>
                
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
            </nav>
        </>
    )
}

module.exports = NavComp; 