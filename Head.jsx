import React from 'react';
import MetaTags from 'react-meta-tags';

class Head extends React.Component
{
    render()
    {
        return(
              <MetaTags>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
                    <script src="JSXTransformer.js"></script>
                    <title>Web Tutorial</title>
              </MetaTags>
        );
    }
}

export default Head;