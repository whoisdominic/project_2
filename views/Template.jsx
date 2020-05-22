const React = require('react');

const Layout = (props) => {
    return (
        <>
        <head>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/> */}
        

        {/* fonts  */}
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        {/* style sheet  */}
            <link rel="stylesheet" href="/css/app.css"/>
            {/* title  */}
            <title>Goat Ranker</title>  
        </head>
        <body>
            <div className="main-cont">
                {props.children}
            </div>
        </body>
        </>
    )
}

module.exports = Layout; 