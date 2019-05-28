import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <span className="title">Start Bootstrap</span>
          <div className="menu">
              <p>SERVICES</p>
              <p>PORTFOLIO</p>
              <p>ABOUT</p>
              <p>TEAM</p>
              <p>CONTACT</p>
          </div>
        </div>
          <input id="menu-switch" type="checkbox" />
          <label className="ham">MENU</label>
      </nav>

      <div class="collapsible-menu">
      <span className="title">Start Bootstrap</span>
      <input type="checkbox" id="menu" />
            <label for="menu">Menu</label>
    <div class="menu-content">
        <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
         </ul>
     </div>
</div>

      <header className="masthead">
        <div className="Container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
            <span className="btn btn-primary btn-xl text-uppercase js-scroll-trigger">Tell Me More</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
