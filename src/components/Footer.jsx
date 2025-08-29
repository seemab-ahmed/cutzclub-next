import Image from "next/image";
import Link from "next/link";
import facebookk from "../../public/assets/icons/facebookk.png";
import insta from "../../public/assets/icons/insta.png";
import twitter from "../../public/assets/icons/twitter.png"
import footer from "../../public/assets/images/cutzclub.webp"
export default function BarberPreview() {
  return (
    <>
      {/* Pricing Plans Section  */}
    <section class="section-pricing-plans">
        <div class="container pricing-main-dev">
            <h2 class="custom-heading">Choose the Right Plan for You</h2>
            <p class="default-text" data-aos-offset="80">Simple, transparent pricing designed to match your growth.
            </p>

            <div class="pricing-cards-grid">
                <div class="pricing-card">
                    <h3 class="plan-name">Starter</h3>
                    <p class="plan-price" data-aos-offset="100">$9.99 <span>/month</span></p>
                    <ul class="plan-features">
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

                <div class="pricing-card pricing-card-featured">
                    <h3 class="plan-name">Pro</h3>
                    <p class="plan-price">$19.99 <span>/month</span></p>
                     <ul class="plan-features">
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
                <div class="pricing-card .elite-highlight">
                    <h3 class="plan-name">Elite</h3>
                    <p class="plan-price">$49.99 <span>/month</span></p>
                    <div></div>
                    <ul class="plan-features">
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
                     {/* <div class="badge">Most Popular</div>  */}

                </div>
            </div>
        </div>
    </section>

      {/* Footer start here  */}
    <footer class="footer">
        <div class="footer-container container ">
            <div class="footer-section">
                <Image class="footer-logo" src={footer} alt="" width={100} height={100} />
                <p class="instrument-sans">
                    <strong class="footer-desi">pros. Clients. Connected.</strong> <br />
                    Discover top pros near you, book appointments easily, and enjoy a seamless grooming
                    experience.
                    Whether you're a pro pros or just need a great cut — CutzClub connects you instantly.
                </p>
                <div class="subscribe">
                    <input type="email" placeholder="Enter Your Email address" />
                    <button>&#10148;</button>
                </div>
            </div>

            <div class="footer-section instrument-sans">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="#">  Home</a></li>
                    <li><a href="#">  About</a></li>
                    <li><a href="#"> Find a pros</a></li>
                    <li><a href="#"> I'm a pros</a></li>
                    <li><a href="#"> Pricing</a></li>
                    <li><a href="#"> How it work</a></li>
                </ul>
            </div>


            <div class="footer-section instrument-sans">
                <h4>Contact</h4>
                <p><strong>Phone:</strong> +030212345678</p>
                <p><strong>Fax:</strong> +030212345678</p>
                <p><strong>Email:</strong> support@cutzclub.com</p>
                {/* <p>1394 Argonne Street, New Castle, USA</p>  */}
                <p class="instrument-sans">Follow us:</p>
                <div class="social-icons">
                    <a href="#"><Image src={facebookk} alt="Facebook" width={100} height={100} /></a>
                    <a href="#"><Image src={insta} alt="Instagram" width={100} height={100} /></a>
                    <a href="#"><Image src={twitter} alt="Twitter" width={100} height={100} /> </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 CutzClub. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
}
