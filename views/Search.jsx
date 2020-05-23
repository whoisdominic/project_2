const React = require('react');
const Template = require('./Template.jsx')
const NavComp = require('./Nav_component')
const NavSearch = require('./Nav_search.jsx')

class Index extends React.Component {
    render() {
        const { datadata } = this.props
        return (
            <Template>
							<NavComp>        
              </NavComp>

							<div className="main-cont">
                
                
                
				<form action="/search" method="POST">
					<input type="search" name="search"/>
					<input type="submit" value="Search"/>
        </form>



								</div>

            </Template> 
        )
    }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/


module.exports = Index;