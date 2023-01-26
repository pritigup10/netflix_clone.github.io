import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(
  <>
    <nav className="navbar">
      <div className="name"><img src="imgs\Netfl.jpeg" /></div>
      <div className="search">
        <span>Watch Unlimited TV Cartoon</span>
        <a href="https://www.netflix.com/in/" className="button1">Join Now</a>
        <a href="https://www.netflix.com/in/login?nextpage=%2Fbrowse%2Fgenre%2F11177%3Flocale%3Den-IN" className="button2">Sign in</a>
      </div>
    </nav>
    <div className="backbody">
    <div className="header">
      <h1>TV Cartoons</h1>
      <p>Cartoons can take us to different worlds, times and dimensions, all without ever leaving the couch. Get ready for laughs, adventure and lots of fun!</p>
    </div>
    <div className="cards1">
      <App
        imgsrc="imgs/ganesha.jpg"
        title="A Netflix Original Series"
        sname="Bal Ganesha"
        link="https://www.netflix.com/in/title/81245404"
      />
      <App
        imgsrc="imgs/3boys.jpg"
        title="A Netflix Original Series"
        sname="Fukrey Boyzzz"
        link="https://www.netflix.com/in/title/81289898"
      />
      <App
        imgsrc="imgs/chasma.jpg"
        title="A Netflix Original Series"
        sname="Taarak Mehta Kka Chhota Chashmah"
        link="https://www.netflix.com/in/title/81570092"
      />
      <App
        imgsrc="imgs/tom.jpg"
        title="A Netflix Original Series"
        sname="Talking Tom and Friends"
        link="https://www.netflix.com/in/title/80162994"
      />
    </div>
    <div className="cards2">
      <App
        imgsrc="imgs/bheem.jpg"
        title="A Netflix Original Series"
        sname="Chhota Bheem"
        link="https://www.netflix.com/in/title/81088331"
      />
      <App
        imgsrc="imgs/akbar.jpg"
        title="A Netflix Original Series"
        sname="Akbar Birbal"
        link="https://www.netflix.com/in/title/81245348"
      />
      <App
        imgsrc="imgs/simba.jpg"
        title="A Netflix Original Series"
        sname="Little Singham"
        link="https://www.netflix.com/in/title/80229852"
      />
      <App
        imgsrc="imgs/22.jpg"
        title="A Netflix Original Series"
        sname="BoBoiboy"
        link="https://www.netflix.com/in/title/81478211"
      />
    </div>
    </div>
    <div className="section">
      <h1>There’s even more to watch.</h1>
      <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</p>
      <a href="https://www.netflix.com/in/" className="button1">Watch Now</a>
    </div>
    <div className="ques">Questions? Contact Us</div>
    <div className="footer">
      <div className="contact">
        <ul>
          <li>FAQ</li>
          <li>Invester relation</li>
          <li>Privacy</li>
          <li>Spend Test</li>
        </ul>
      </div>
      <div className="contact">
      <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Freferences</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div className="contact">
      <ul>
          <li>Accounts</li>
          <li>Ways to watch</li>
          <li>Corporate Information</li>
          <li>only on Netflix</li>
        </ul>
      </div>
      <div className="contact"><ul>
          <li>Media center</li>
          <li>Terms of use</li>
          <li>Contacts us</li>
        </ul></div>
    </div>
  </>,
  document.getElementById("root")
);
      