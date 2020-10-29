import React from 'react'
import './App.css';

import Header from './Header'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { scrollTop: 0, menu: 'menu-inherit', logo: '/logo/logo-big.png' }
  }

  onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop

    if (scrollTop > 100) {
      this.setState({
        menu: 'menu-fixed',
        logo: '/logo/logo-small.png'
      })
    } else {
      this.setState({
        menu: 'menu-inherit',
        logo: '/logo/logo-big.png'
      })
    }

    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }
  render() {
    const { scrollTop } = this.state
    return (
      <div ref={this.myRef} onScroll={this.onScroll} className="App" >
        <Header menu={this.state.menu} imgLogoSrc={this.state.logo}/>

        <p>
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
          {this.state.logo}<br />
        </p>
      </div>
    );
  }
}

