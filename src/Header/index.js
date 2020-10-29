import React from 'react'
import Menu from './Menu'
import Slide from './Slide'

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <Menu menu={this.props.menu} imgLogoSrc={this.props.imgLogoSrc}/>
                <Slide />
            </div>
        );
    }
}