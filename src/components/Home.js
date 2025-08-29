import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* barber profile section start */}
      <section className="barber-preview">
        <div className="container">
          <h2 className="barber-heading josefin-sans-bold">Top Rated Pros Near You</h2>
          <p className="subheading">Discover highly rated professionals delivering top-notch grooming services in your
            city.</p>

          <div className="barber-card-grid">
            <div className="barber-card">
              <Image src="/assets/images/jhon.png" alt="James Carter" width={300} height={300} />
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
                <p className="specialty">Expert in skin fades and detailed beard grooming with a modern touch.</p>
                <div className="team-socials">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <Link href="#" className="view-profile-btn josefin-sans-bold">View Profile</Link>
              </div>
              <div className="barber-name">
                <h4 className="josefin-sans-bold">John Baker</h4>
              </div>
            </div>

            <div className="barber-card">
              <Image src="/assets/images/jamees.png" alt="Vanessa Lopez" width={300} height={300} />
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
                <p className="specialty">Specialist in women&apos;s cuts, natural styling, and loc maintenance.</p>
                <div className="team-socials">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <Link href="#" className="view-profile-btn josefin-sans-bold">View Profile</Link>
              </div>
              <div className="barber-name">
                <h4 className="josefin-sans-bold">James Carter</h4>
              </div>
            </div>

            <div className="barber-card">
              <Image src="/assets/images/tyronee.png" alt="Tyrone Mitchell" width={300} height={300} />
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
                <Link href="#" className="view-profile-btn josefin-sans-bold">View Profile</Link>
              </div>
              <div className="barber-name">
                <h4 className="josefin-sans-bold">Tyrone Mitchell</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Barber Pitch Section */}
      <section className="barber-boost-section">
        <div className="container">
          <h2 className="custom-heading josefin-sans-bold ">Pros, This Is More Than Just a Booking Tool. <span>It&apos;s a Business Booster.</span></h2>
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
            <Link href="#join" className="primary-btn josefin-sans-bold">Join CutzClub Today</Link>
          </div>
        </div>
        <Image src="/assets/images/sezor.svg" alt="sezor" className="sezor-img" width={100} height={100} />
      </section>
      
      {/* Testimonial Section Starts */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="secondry-heading testi-center">What Our Clients Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project&apos;s
                manufacturing data collection and retrieval needs.
              </blockquote>
              <div className="testi-detail">
                <Image src="/assets/images/client_1.png" alt="Bryan Buchanan - 3M Company" className="testimonial-image" loading="lazy" width={60} height={60} />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project&apos;s
                manufacturing data collection and retrieval needs.
              </blockquote>
              <div className="testi-detail">
                <Image src="/assets/images/client2.png" alt="Bryan Buchanan - 3M Company" className="testimonial-image" loading="lazy" width={60} height={60} />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
              <blockquote className="testimonial-review">
                CutzClub delivered ahead of schedule and under budget a full-service solution for our
                project&apos;s
                manufacturing data collection and retrieval needs.
              </blockquote>
              <div className="testi-detail">
                <Image src="/assets/images/client3.jpg" alt="Bryan Buchanan - 3M Company" className="testimonial-image" loading="lazy" width={60} height={60} />
                <div className="testi-role-name">
                  <h3 className="testimonial-name">Bryan Buchanan</h3>
                  <span className="testimonial-role">3M Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans Section */}
      <section className="section-pricing-plans">
        <div className="container pricing-main-dev">
          <h2 className="custom-heading">Choose the Right Plan for You</h2>
          <p className="default-text" data-aos-offset="80">Simple, transparent pricing designed to match your growth.</p>

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
            
            <div className="pricing-card elite-highlight">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer section start */}
      <footer className="footer">
        <div className="footer-container container ">
          {/* Left Section */}
          <div className="footer-section">
            <Image className="footer-logo" src="/assets/images/cutzclub.webp" alt="CutzClub" width={150} height={50} />
            <p className="instrument-sans">
              <strong className="footer-desi">pros. Clients. Connected.</strong> <br />
              Discover top pros near you, book appointments easily, and enjoy a seamless grooming
              experience.
              Whether you&apos;re a pro pros or just need a great cut — CutzClub connects you instantly.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter Your Email address" />
              <button>&#10148;</button>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-section instrument-sans">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><Link href="#">&gt; Home</Link></li>
              <li><Link href="#">&gt; About</Link></li>
              <li><Link href="#">&gt; Find a pros</Link></li>
              <li><Link href="#">&gt; I&apos;m a pros</Link></li>
              <li><Link href="#">&gt; Pricing</Link></li>
              <li><Link href="#">&gt; How it work</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-section instrument-sans">
            <h4>Contact</h4>
            <p><strong>Phone:</strong> +030212345678</p>
            <p><strong>Fax:</strong> +030212345678</p>
            <p><strong>Email:</strong> support@cutzclub.com</p>
            <p className="instrument-sans">Follow us:</p>
            <div className="social-icons">
              <a href="#"><Image src="/assets/icons/facebookk.png" alt="Facebook" width={30} height={30} /></a>
              <a href="#"><Image src="/assets/icons/insta.png" alt="Instagram" width={30} height={30} /></a>
              <a href="#"><Image src="/assets/icons/twitter.png" alt="Twitter" width={30} height={30} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CutzClub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
