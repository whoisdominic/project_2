const React = require('react');
const Template = require('./Template.jsx')
const NavComp = require('./Nav_component')

class Index extends React.Component {
    render() {
        const { datadata } = this.props
        return (
            <Template>
                <NavComp>              
                </NavComp>


                <h3 className="test">Is this below the nav?</h3>




            </Template> 
        )
    }
}

module.exports = Index;