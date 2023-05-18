import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import breadcrumImg01 from '../assets/others/breadcrumb_img01.png'

function About() {
  return (
    <>
      {/* breadcrumb-area */}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="breadcrumb__content">
              <h2 className="title">ABOUT US</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
            <div className="breadcrumb__img">
              <img src={breadcrumImg01} alt="img" />
            </div>
          </div>
        </div >
      </div >
      {/* breadcrumb-area-end */}
    </>
  );
}

export default About;
