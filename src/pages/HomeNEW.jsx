import React from 'react'
import '../App.css';
import sliderImg1 from '../assets/home/home_img01.png'
import gallery01 from '../assets/gallery/gallery01.jpg'
import gallery02 from '../assets/gallery/gallery02.jpg'
import gallery03 from '../assets/gallery/gallery03.jpg'
import gallery04 from '../assets/gallery/gallery04.jpg'
import gallery05 from '../assets/gallery/gallery05.jpg'
import team01 from '../assets/team/team01.png'
import team02 from '../assets/team/team02.png'
import team03 from '../assets/team/team03.png'
import team04 from '../assets/team/team04.png'


function Home() {
  return (
    <>
      {/* Hero Area */}
      <section className='hero'>
        <section className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12'>
              <div className='hero-text-container text-center'>
                <h6 className='sub-heading'>live gaming</h6>
                <h2 className='hero-heading'>steaming</h2>
                <p className='hero-details'>video games online</p>
                <div className='contact-btn'>
                  <button type="button" class="btn btn-danger">CONTACT US</button>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className="hero-img">
                <img src={sliderImg1} alt="img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Hero Area Ends */}

      {/* Team Area */}
      <section className='team-area'>
        <section className='continer '>
          {/* Heading */}
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-7 col-md-10 col-sm-12'>
              <div className='team-title text-center mb-60'>
                <h3 className="title">ACTIVE TEAM MEMBERS</h3>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="card">
                <img src={team01} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                  <h4 className="name"><a href="/">John Wick</a></h4>
                  <span className="designation">Blockchain Expert</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="card">
                <img src={team02} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                  <h4 className="name"><a href="/">Khabay Fame</a></h4>
                  <span className="designation">Content Creator</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="card">
                <img src={team03} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                  <h4 className="name"><a href="/">Thomas Scot</a></h4>
                  <span className="designation">Art Director</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="card">
                <img src={team04} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                  <h4 className="name"><a href="/">Ninja</a></h4>
                  <span className="designation">Game Developer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* team-area-end */}

      {/* Gallery Area */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gallery01} alt="img" width={'100%'} />
          </div>
          <div className="carousel-item">
            <img src={gallery02} alt="img" width={'100%'} />
          </div>
          <div className="carousel-item">
            <img src={gallery03} alt="img" width={'100%'} />
          </div>
          <div className="carousel-item">
            <img src={gallery04} alt="img" width={'100%'} />
          </div>
          <div className="carousel-item">
            <img src={gallery05} alt="img" width={'100%'} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Gallery Area Ends */}
    </>
  );
}

export default Home;
