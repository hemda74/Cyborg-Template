import React from 'react'
import featured_01 from '../../assets/images/featured-01.jpg';
import featured_02 from '../../assets/images/featured-02.jpg';
import featured_03 from '../../assets/images/featured-03.jpg';
import avatar_01 from '../../assets/images/avatar-01.jpg'
import avatar_02 from '../../assets/images/avatar-02.jpg'
import avatar_03 from '../../assets/images/avatar-03.jpg'
import avatar_04 from '../../assets/images/avatar-04.jpg'
import stream_05 from '../../assets/images/stream-05.jpg'
import stream_06 from '../../assets/images/stream-06.jpg'
import stream_07 from '../../assets/images/stream-07.jpg'
import stream_08 from '../../assets/images/stream-08.jpg'
import {FaDownload,FaStar,FaCheck,FaEye,FaGamepad} from 'react-icons/fa'
import '../../assets/css/templatemo-cyborg-gaming.css'
import '../../assets/css/animate.css'
import './Stream.css'
import { Link } from 'react-router-dom';
import '../../assets/css/owl.css'
const Stream = () => {
  return (
<>
<div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
          {/* <!-- ***** Featured Games Start ***** --> */}
          <div className="row">
            <div className="col-lg-8">
              <div className="featured-games header-text">
                <div className="heading-section">
                  <h4><em>Live</em> Streams</h4>
                </div>
                <div className="owl-features owl-carousel">
                  <div className="item">
                    <div className="thumb">
                      <img src={featured_01} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                    <img src={featured_02} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                    <img src={featured_03} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                    <img src={featured_01} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                    <img src={featured_02} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                    <img src={featured_02} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><FaStar /> 4.8</li>
                      <li><FaDownload /> 2.3M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="top-streamers">
                <div className="heading-section">
                  <h4><em>Top</em> Streamers</h4>
                </div>
                <ul>
                  <li>
                    <span>01</span>
                    <img src={avatar_01} alt="" className="imgsize"/>
                    <h6><FaCheck/> LahutaM</h6>
                    <div className="main-button">
                      <a href="#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <img src={avatar_02} alt="" className="imgsize"/>
                    <h6><FaCheck/> LahutaM</h6>
                    <div className="main-button">
                      <a href="#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <img src={avatar_03} alt="" className="imgsize"/>
                    <h6><FaCheck/> LahutaM</h6>
                    <div className="main-button">
                      <a href="#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <img src={avatar_04} alt="" className="imgsize"/>
                    <h6><FaCheck/> LahutaM</h6>
                    <div className="main-button">
                      <a href="#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>05</span>
                    <img src={avatar_01} alt="" className="imgsize"/>
                    <h6><FaCheck/> LahutaM</h6>
                    <div className="main-button">
                      <a href="#">Follow</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- ***** Featured Games End ***** -->

          <!-- ***** Live Stream Start ***** --> */}
          <div className="live-stream">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4><em>Most Popular</em> Live Stream</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream_05} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src={avatar_01} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream_06} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_02} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream_06} alt="" />
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_03} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin'</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                  <img src={stream_08} alt="" />
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_04} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                  <img src={stream_05} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_01} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                  <img src={stream_08} alt="" />
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_02} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                      <img src={stream_05} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_03} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin'</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                  <img src={stream_06} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="#">Live</a>
                        </div>
                        <ul>
                          <li><a href="#"><FaEye/> 1.2K</a></li>
                          <li><a href="#"><FaGamepad/> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                    <img src={avatar_04} alt="" className="imgsize2"/>
                    </div>
                    <span><FaCheck/> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link href="streams.html">Load More Streams</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ***** Live Stream End ***** --> */}

        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Stream