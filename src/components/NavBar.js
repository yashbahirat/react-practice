import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="https://facebook.com">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
    </div>
  </div>
</nav>
    )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}
NavBar.defaultProps ={
    title: 'ReactJS'
}