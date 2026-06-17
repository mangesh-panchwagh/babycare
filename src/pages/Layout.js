import { Outlet, Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFacebookF, FaTimes, FaInstagram, FaTwitter  } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";


const Layout = () => {
    return(
      <>
        <nav className="navbar">
        <div className="row-container">
                  <div className="logo">
                
                   <span className="baby">B</span><span>ABY</span><span className="baby">C</span><span>ARE</span>
                  </div>

                  <div className="column">
                        <ul class="nav-links">
                  
                              <li>
                                    <Link to="/" style={{color:"green"}}> <b>HOME </b></Link>
                              </li>
                              <li>
                                    <Link to="/aboutus" style={{color:"green"}}><b> ABOUT US </b></Link>
                              </li>
                              <li>
                                    <Link to="/contactus" style={{color:"green"}}><b> CONTACT US </b></Link>
                              </li>
                              <li>
                                    <Link to="/pages" style={{color:"green"}}><b> PAGES </b></Link>
                              </li>
                        </ul>
                  </div>

                  <div className="column">
                        <button className="quote-btn">GET A QUOTE</button>
                  </div>

            </div>
                     
              </nav>

                 <div className="container">
                  <div className="top-bar">
                        <div className="top-bar-left">
                              <span><FaPhoneAlt/>+1-800-123-4567</span>
                              <span><FaEnvelope />babycare@support.com</span>
                              <span><FaMapMarkerAlt /> 7507 Dewey Route, East Darryville</span>
                        </div>
                        <div className="top-bar-right">
                              <FaSearch />
                              <FaFacebookF />
                              <FaXTwitter />
                              <FaInstagram/>
                        </div>
                  </div>

                  <div className="about-section">
                        <div className="about-content">
                              <h1>About Us</h1>
                              <p>we help busy families</p>
                        </div>
                        <div className="about-cards">
                              <div className="about-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1549924231-f129b911e442"
                                    alt="Quality Care"
                                    className="circle-image"
                                    />
                                    <h3>Quality Care</h3>
                              </div>
                              <div className="about-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3"
                                    alt="Happy baby"
                                    className="full-image-without-content"
                                    />
                              </div>
                              <div className="about-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                    alt="We are Family"
                                     className="full-image"
                                    />
                                    <h3>We are Family</h3>
                              </div>
                        </div>
                  </div>

                  <div className="services-section">
                        <h2>Our services</h2>
                         <div className="services">
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                    alt="Babysitter"
                                    />
                                    <h4>Babysitter</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3"
                                    alt="Permanent Placement"
                                    />
                                    <h4>Permanent Placement</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                    alt="Traveling Sitter"
                                    />
                                    <h4>Traveling Sitter</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>

                               
                        </div>
                        <div className="services-section">
                              <div className="services">
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                    alt="Babysitter"
                                    />
                                    <h4>Mother's Helper</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3"
                                    alt="Permanent Placement"
                                    />
                                    <h4>Senior Companion</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              <div className="service-card">
                                    <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                    alt="Traveling Sitter"
                                    />
                                    <h4>Doula & Birth Support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              </div>
                        </div>

                         <div className="services-section">
                              <div className="services">
                              <div className="service-card">
                                  
                                    <h4>01</h4>
                                   <p>Baby Care Solutions</p>
                              </div>
                              <div className="service-card">
                                   
                                    <h4>02</h4>
                                    <p>Child Care Professionals</p>
                              </div>
                              <div className="service-card">
                                   
                                    <h4>03</h4>
                                     <p>We give children a big boost on learning</p>
                              </div>
                               <div className="service-card">
                                   
                                    <h4>04</h4>
                                    <p>For children 5 months to 6 years of age</p>
                              </div>
                              </div>
                        </div>
                  </div>

                  <div className="testinominal">
                        <h2 className="section-title">Meet Your Babysitter</h2>
                        <div className="babysitter-grid">

                        <div className="card">
                             
                              <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" alt="Jane Matthews" className="avatar"
                              />
                          
                             
                              <h3 className="name">Jane Matthews</h3>
                              <p className="description">
                                    Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                              </p>
                              <div className="social-icons">
                                     <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram/>
                              </div>
                             
                        </div>

                        <div className="card">
                              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="Mary Smith" className="avatar" />
                              <h3 className="name">Mary Smith</h3>
                              <p className="description">
                                    Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                              </p>
                              <div className="social-icons">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram/>
                            </div>
                        </div>

                        <div className="card">
                              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Mila Smith" className="avatar" />
                              <h3 className="name">Mila Smith</h3>
                              <p className="description">
                                    Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                              </p>
                              <div className="social-icons">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram/>
                              </div>
                        </div>

                        <div className="card">
                              <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" alt="Gladys Burton" className="avatar" />
                              <h3 className="name">Gladys Burton</h3>
                              <p className="description">
                                    Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                              </p>
                              <div className="social-icons">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaInstagram/>
                              </div>
                        </div>
                        </div>
                         <p className="credits">Images from <i>Freepik</i></p>

                        <button className="btn">MORE BABYSITTERS NEAR ME</button>
                  </div>
                  <div className="welcome">
                        <div className="learnmore">
                              <h1 className="heading">
                                     Welcome to <br /> Babysitting Agency
                              </h1>
                              <p className="paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                              </p>
                              <ul className="list">
                                    <li>✔ Social and Emotional Development for Children</li>
                                    <li>✔ Enhancing Communication Skills</li>
                                    <li>✔ Learning New Skills and Interests</li>
                              </ul>
                              <div className="button-wrapper">
                                    <button className="learnmorebtn">LEARN MORE</button>
                              </div>
                        </div>
                        <div className="imagecontainer">
                              <img src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3" className="welcomeImage"
                              />
                        </div>
                  </div>
                  <div className="babylove">
                        <div className="babylove-left">
                              <h1>Every Byby with <br/> Love & Safety</h1>
                              <p>
                                    Sample text. Click to select the Text Element. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                              
                               <button className="learn-more-btn">LEARN MORE</button>
                        </div>
                        <div className="babylove-right">
                                   
                        </div>
                  </div>
            </div>
              <Outlet/>
              </>
    );
}
export default Layout;