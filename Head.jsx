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
                    <title>ReactJS Tutorial</title>
              </MetaTags>
        );
    }
}

export default Head;