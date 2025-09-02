"use client";   // ⬅️ add this line at the very top

import Image from "next/image";
import Link from "next/link";
import jamees from "../../public/assets/images/jamees.png";
import jhon from "../../public/assets/images/jhon.png";
import tyronee from "../../public/assets/images/tyronee.png";
import sezor from "../../public/assets/images/sezor.svg";
import dynamic from "next/dynamic";
// ✅ dynamically import react-slick so it only runs client-side
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BarberPreview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <>
      {/* barber profile section start  */}
    <section className="barber-preview">
        <div className="container">
            <h2 className="barber-heading josefin-sans-bold">Top Rated Pros Near You</h2>
            <p className="subheading">Discover highly rated professionals delivering top-notch grooming services in your
                city.</p>

            <div className="barber-card-grid">

                <div className="barber-card">
                    <Image src={jhon} alt="James Carter" width={100} height={100} />
                    <div className="barber-info">
                        <h3 className="josefin-sans-bold">John Baker</h3>
                        <p className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <span>(4.9)</span>
                        </p>
                        <p className="location"><i className="fa-solid fa-location-dot"></i> Brooklyn, NY</p>
                        <p className="specialty">Expert in skin fades and detailed beard grooming with a modern touch.
                        </p>
                        <div className="team-socials">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <a href="#" className="view-profile-btn josefin-sans-bold">View Profile</a>
                    </div>
                    <div className="barber-name">
                        <h4 className="josefin-sans-bold">John Baker</h4>
                    </div>
                </div>

                <div className="barber-card">
                    <Image src={jamees} alt="Vanessa Lopez" width={100} height={100} />
                    <div className="barber-info">
                        <h3 className="josefin-sans-bold">James Carter</h3>
                        <p className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span>(5.0)</span>
                        </p>
                        <p className="location"><i className="fa-solid fa-location-dot"></i> Miami, FL</p>
                        <p className="specialty">Specialist in women's cuts, natural styling, and loc maintenance.</p>
                        <div className="team-socials">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <a href="#" className="view-profile-btn josefin-sans-bold">View Profile</a>
                    </div>
                    <div className="barber-name">
                        <h4 className="josefin-sans-bold">James Carter</h4>
                    </div>
                </div>

                <div className="barber-card">
                    <Image src={tyronee} alt="Tyrone Mitchell" width={100} height={100} />
                    <div className="barber-info">
                        <h3 className="josefin-sans-bold">Tyrone Mitchell</h3>
                        <p className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <span>(4.7)</span>
                        </p>
                        <p className="location"><i className="fa-solid fa-location-dot"></i> Dallas, TX</p>
                        <p className="specialty">Known for sharp linings, classic cuts, and fast turnarounds.</p>
                        <div className="team-socials">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <a href="#" className="view-profile-btn josefin-sans-bold">View Profile</a>
                    </div>
                    <div className="barber-name">
                        <h4 className="josefin-sans-bold">Tyrone Mitchell</h4>
                    </div>
                </div>

            </div>
        </div>
    </section>

     {/* Barber Pitch Section  */}
    <section className="barber-boost-section">
        <div className="container">
            <h2 className="custom-heading josefin-sans-bold ">Pros, This Is More Than Just a Booking Tool. <span>It’s a Business Booster.</span></h2>
            <div className="boost-grid">
                <div className="boost-item">
                    <div>
                        <h3 className="instrument-sans-bold">Transparent Earnings</h3>
                        <p className="instrument-sans-medium">You keep up to 100% with low commissions and clear plans</p>
                    </div>
                </div>

                <div className="boost-item">

                    <div>
                        <h3 className="instrument-sans-bold">Reminders & Recurring Appointments</h3>
                        <p className="instrument-sans-medium">Text/email alerts + monthly booking options = less stress.</p>
                    </div>
                </div>

                <div className="boost-item">

                    <div>
                        <h3 className="instrument-sans-bold">Top Search Visibility</h3>
                        <p className="instrument-sans-medium">Rank higher in local search results and get more clients.</p>
                    </div>
                </div>

                <div className="boost-item">

                    <div>
                        <h3 className="instrument-sans-bold">Tools to Grow</h3>
                        <p className="instrument-sans-medium">AI-powered insights, package builder, and client analytics.</p>
                    </div>
                </div>
            </div>

            <div className="boost-cta josefin-sans-bold">
                <p className="josefin-sans-bold">Ready to grow your pros business?</p>
                <a href="#join" className="primary-btn josefin-sans-bold">Join CutzClub Today</a>
            </div>
        </div>
        <Image src={sezor} alt="sezor" className="sezor-img" width={100} height={100} />
    </section>

      {/* Testimonial Section Starts  */}
    <section className="testimonials-section">
        <div className="container">
          <h2 className="secondry-heading testi-center">What Our Clients Say</h2>

          <Slider {...settings}>
            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                "CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project's manufacturing data collection and retrieval needs."
              </blockquote>
              <div className="testi-detail">
                <img src="./assets/images/client_1.png" alt="Bryan Buchanan - 3M Company"
                  className="testimonial-image" loading="lazy" />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                "CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project's manufacturing data collection and retrieval needs."
              </blockquote>
              <div className="testi-detail">
                <img src="./assets/images/client2.png" alt="Bryan Buchanan - 3M Company" className="testimonial-image"
                  loading="lazy" />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                "CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project's manufacturing data collection and retrieval needs."
              </blockquote>
              <div className="testi-detail">
                <img src="./assets/images/client3.jpg" alt="Bryan Buchanan - 3M Company" className="testimonial-image"
                  loading="lazy" />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                "After using CutzClub's services for only a few months now, I feel that the quality of
                service is truly outstanding and indeed beyond our expectations."
              </blockquote>
              <div className="testi-detail">
                <img src="./assets/images/testi_logo2.jpg" alt="Lt. John Vilano - U.S. Army"
                  className="testimonial-image" loading="lazy" />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Lt. John Vilano</h3>
                  <span className="testimonial-role">U.S. Army</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                "I can easily say that CutzClub has been one of the most professional and knowledgeable IT
                companies I have done business with."
              </blockquote>
              <div className="testi-detail">
                <img src="./assets/images/testi_logo3.png" alt="Mark Garcia - McAllen Foreign Trade Zone"
                  className="testimonial-image" loading="lazy" />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Mark Garcia</h3>
                  <span className="testimonial-role">McAllen Foreign Trade Zone</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

        {/* Pricing Plans Section  */}
    <section className="section-pricing-plans">
        <div className="container pricing-main-dev">
            <h2 className="custom-heading">Choose the Right Plan for You</h2>
            <p className="default-text" data-aos-offset="80">Simple, transparent pricing designed to match your growth.
            </p>

            <div className="pricing-cards-grid">
                <div className="pricing-card">
                    <h3 className="plan-name">Starter</h3>
                    <p className="plan-price" data-aos-offset="100">$9.99 <span>/month</span></p>
                    <ul className="plan-features">
                        <li>15% platform fee (you keep 85% of earnings)</li>
                        <li> Manage up to 50 clients</li>
                        <li> Listed in the CutzClub directory</li>
                        <li> Basic booking & calendar tools</li>
                        <li> Profile, service menu, and reviews</li>
                        <li> Optional Add-Ons: </li>
                        <div><span> -</span> AI Analytics – $14.99/month</div>
                        <div><span> -</span> Text & Email Reminders – $4.99/month</div>
                       
                    </ul>
                </div>

                <div className="pricing-card pricing-card-featured">
                    <h3 className="plan-name">Pro</h3>
                    <p className="plan-price">$19.99 <span>/month</span></p>
                     <ul className="plan-features">
                        <li>7% platform fee (you keep 93% of earnings)</li>
                        <li>Unlimited clients</li>
                        <li>Priority search placement</li>
                        <li>Photo gallery & reviews</li>
                        <li>Performance insights & monthly reports</li>
                        <li>Optional Add-Ons: </li>
                        <div><span> -</span> AI Analytics – $14.99/month</div>
                        <div><span> -</span> Text & Email Reminders – $4.99/month</div>
                       
                    </ul>

                </div>
                <div className="pricing-card .elite-highlight">
                    <h3 className="plan-name">Elite</h3>
                    <p className="plan-price">$49.99 <span>/month</span></p>
                    <div></div>
                    <ul className="plan-features">
                        <li>0% platform fee (you keep 100% of earnings)</li>
                        <li>Unlimited clients</li>
                        <li>Featured homepage placement</li>
                        <li>Advanced analytics & business trends</li>
                        <li>AI-powered service builder</li>
                        <li>Text & Email Reminders included</li>
                        <li>Premium Elite badge + branding</li>
                        <li>Priority support + onboarding</li>
                        <li>Early access to new features</li>
                    </ul>
                     {/* <div className="badge">Most Popular</div>  */}

                </div>
            </div>
        </div>
    </section>
    </>
  );
}
