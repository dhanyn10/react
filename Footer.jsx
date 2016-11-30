import React from 'react';

class Footer extends React.Component
{
    componentDidMount()
    {
        alert("ciee");
    }
    render()
    {
        return(
            <div>
                <div onLoad={this.componentDidMount}></div>
            </div>
        );
    }
}

export default Footer;