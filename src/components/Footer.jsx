import Image from "next/image";
import facebookk from "../../public/assets/icons/facebookk.png";
import insta from "../../public/assets/icons/insta.png";
import twitter from "../../public/assets/icons/twitter.png"
import footer from "../../public/assets/images/cutzclub.webp"
export default function BarberPreview() {
  return (
    <>
      {/* Footer start here  */}
    <footer className="footer">
        <div className="footer-container container ">
            <div className="footer-section">
                <Image className="footer-logo" src={footer} alt="" width={100} height={100} />
                <p className="instrument-sans">
                    <strong className="footer-desi">pros. Clients. Connected.</strong> <br />
                    Discover top pros near you, book appointments easily, and enjoy a seamless grooming
                    experience.
                    Whether you're a pro pros or just need a great cut — CutzClub connects you instantly.
                </p>
                <div className="subscribe">
                    <input type="email" placeholder="Enter Your Email address" />
                    <button>&#10148;</button>
                </div>
            </div>

            <div className="footer-section instrument-sans">
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


            <div className="footer-section instrument-sans">
                <h4>Contact</h4>
                <p><strong>Phone:</strong> +030212345678</p>
                <p><strong>Fax:</strong> +030212345678</p>
                <p><strong>Email:</strong> support@cutzclub.com</p>
                {/* <p>1394 Argonne Street, New Castle, USA</p>  */}
                <p className="instrument-sans">Follow us:</p>
                <div className="social-icons">
                    <a href="#"><Image src={facebookk} alt="Facebook" width={100} height={100} /></a>
                    <a href="#"><Image src={insta} alt="Instagram" width={100} height={100} /></a>
                    <a href="#"><Image src={twitter} alt="Twitter" width={100} height={100} /> </a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2025 CutzClub. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
}
