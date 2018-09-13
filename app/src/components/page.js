import Nav from './nav';
import React from 'react';
import Title from './title';
import FillText from './filltext';

class Page extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Title />
                <FillText />
            </div>
        );
    }
}
export default Page;