const React = require('react');
const Template = require('./Template.jsx')
const NavComp = require('./Nav_component')

class SearchRes extends React.Component {
    render() {
        const { results } = this.props
        console.log(`my results ${results}`)
        return (
            <Template>
                <NavComp>              
                </NavComp>

            <div className="main-cont">
        {/* <h1>{results}</h1>                 */}
                





        <div class="collection">
                {results.map((item, i) => {
                    return (

                        
                    <a href="#!" class="collection-item">
                        {item.firstname} {item.lastname} {item.age} {item.nationality}
                    </a>
                    )
                })}     
        </div>

                
            </div>
            </Template> 
        )
    }
}

/////////////////////////////////////////////////
/*
Adds the current top 100 || 10 to the dom    




*/


module.exports = SearchRes;