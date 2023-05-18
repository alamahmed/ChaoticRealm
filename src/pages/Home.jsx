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
      {/* Slider Area */}
      <section className="slider__area slider__bg">
        <section className='container custom-container'>
          <div className='row justify-content-between'>
            <div className='col-6'>
              <div className='slider__content'>
                <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                <h2 className="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                <p className="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                  <a href="/" className="tg-btn-1"><span>contact us</span></a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className="slider__img text-center">
                <img src={sliderImg1} data-magnetic alt="img" />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Slider Area Ends */}
      {/* team-area */}
      <section className="team__area team-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section__title text-center mb-60">
                <h3 className="title">ACTIVE TEAM MEMBERS</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="team-details.html"><img src={team01} alt="img" /></a>
                </div>
                <div className="team__content">
                  <h4 className="name"><a href="team-details.html">killer master</a></h4>
                  <span className="designation">Blockchain Expert</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="team-details.html"><img src={team02} alt="img" /></a>
                </div>
                <div className="team__content">
                  <h4 className="name"><a href="team-details.html">tanu mark</a></h4>
                  <span className="designation">Developer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="team-details.html"><img src={team03} alt="img" /></a>
                </div>
                <div className="team__content">
                  <h4 className="name"><a href="team-details.html">Thompson Scot</a></h4>
                  <span className="designation">Art Director</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="team-details.html"><img src={team04} alt="img" /></a>
                </div>
                <div className="team__content">
                  <h4 className="name"><a href="team-details.html">Shakh Danial</a></h4>
                  <span className="designation">Crypto Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
