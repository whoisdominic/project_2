const React = require("react");

const Layout = (props) => {
  return (
    <>
      <head>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/> */}

        <link
          rel="shortcut icon"
          href="public/favicon-32x32.png"
          type="image/x-icon"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <link
          rel="shortcut icon"
          href="public/favicon.ico"
          type="image/x-icon"
        ></link>
        {/* fonts  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        {/* style sheet  */}
        <link rel="stylesheet" href="/css/app.css" />
        {/* title  */}
        <title>Goat Ranker</title>
      </head>
      <body>{props.children}</body>
    </>
  );
};

module.exports = Layout;
