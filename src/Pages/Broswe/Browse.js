import React from 'react'
import avatar_01 from '../../assets/images/avatar-01.jpg'
import avatar_02 from '../../assets/images/avatar-02.jpg'
import avatar_03 from '../../assets/images/avatar-03.jpg'
import avatar_04 from '../../assets/images/avatar-04.jpg'
import stream_05 from '../../assets/images/stream-05.jpg'
import stream_06 from '../../assets/images/stream-06.jpg'
import stream_08 from '../../assets/images/stream-08.jpg'
import {FaCheck,FaEye,FaGamepad}from 'react-icons/fa'
import '../../assets/css/templatemo-cyborg-gaming.css'
import '../../assets/css/animate.css'
import '../Stream/Stream.css'
import { Link } from 'react-router-dom';
import '../../assets/css/owl.css'
import GameLibrary from '../../components/Sections/GameLibarary/GameLibrary'
const Browse = () => {
  return (
<>
<div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content mt-0 pt-0">
            <GameLibrary />
          {/*<!-- ***** Live Stream Start ***** --> */}
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

export default Browse