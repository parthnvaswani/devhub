import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import image from '../../img/home.png';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    (function () {
      let speed1 = 150,
        speed2 = 80,
        i = 0,
        index = 0;
      let text = ["of Developers", "by Developers", "for developers"]
      let span = document.querySelector('.written span')
      write()

      function write() {
        let txt = text[index]
        if (i < txt.length) {
          span.innerHTML += txt.charAt(i);
          i++;
          setTimeout(write, speed1);
        } else {
          erase()
        }
      }

      function erase() {
        let txt = text[index]
        if (i >= 0) {
          span.innerHTML = txt.slice(0, i);
          i--;
          setTimeout(erase, speed2);
        } else {
          if (index < text.length - 1) index++
          else index = 0
          write()
        }
      }
    })()
  }
  
  render() {
    return (
      <div className = "home" >
        <img src = {image} alt = "" />
        <div className = "desc" >
        < div className = "breif" > Create a developer profile / portfolio, share posts and get help
        from other developers </div> 
        <div className = "written" > Community < span > </span>
        </div >
        </div> 
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
