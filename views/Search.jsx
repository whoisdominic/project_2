const React = require('react');
const Template = require('./Template.jsx')
const NavComp = require('./Nav_component')

class Search extends React.Component {
    render() {
        const { results } = this.props
        console.log(`my results ${results}`)
        return (
            <Template>
                <NavComp>              
                </NavComp>

            <div className="main-cont">
        {/* <h1>{results}</h1>                 */}
                






                {results.map((item, i) => {
                    return (
                        <div className="">

                        <h1>hey</h1>
                    <ul>    
                        <li>{item.firstname}</li>
                        <li>{item.lastname}</li>
                        <li>{item.age}</li>
                    </ul>
                        </div>
                    )
                })}     

                
            </div>
            </Template> 
        )
    }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/


module.exports = Search;