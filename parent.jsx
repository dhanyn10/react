import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render()
    {
        return(
            <div>
                <li><Link to="pages/home">Home</Link></li>
                <li><Link to="pages/contact">Contact</Link></li>
                {this.props.children}
            </div>
        );
    }
});