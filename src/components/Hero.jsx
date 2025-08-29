import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
         {/* Hero section starts here */}
          <section className="banner">
            <video autoPlay muted loop playsInline className="bg-video">
              <source src="/assets/videos/banner-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    
            {/* ✅ Must be inside .banner */}
            <div className="video-overlay"></div>
    
            <div className="container">
              <div className="banner-left">
                <h1 className="banner-h1 josefin-sans-bold">THE #1 MEMBERSHIP HUB <br />FOR FRESH CUTS<br />& LOYAL CLIENTS</h1>
                <p className="banner-detail josefin-sans-semiblod">
                  Pros get booked. Clients get perks.
                  Elevate the grooming experience
                  with our all-in-one platform.
                </p>
                <div className="btn-grp">
                  <Link href="#" className="secondry-btn josefin-sans-semiblod">Find Your Pro</Link>
                  <Link href="/membership" className="primary-btn josefin-sans-semiblod">Explore Membership Perks</Link>
                </div>
              </div>
            </div>
          </section>
    
          {/* how-it-works section here  */}
    
          {/* How It Works Steps */}
          <section className="how-it-works-steps" id="how-it-work">
            <div className="container">
              <h2 className="secondry-heading" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000"
                data-aos-easing="ease-in-out instrument-sans-bold">How It Works</h2>
              <div className="step-cards" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className="step-card">
                  <h3 className="step-title josefin-sans-bold">Find Your Pro</h3>
                  <Image src="/assets/icons/check.png" alt="Find Your Barber" className="step-icon" width={50} height={50} />
                  <p className="step-description instrument-sans">
                    Discover top-rated barbers, stylists, and locticians near you. View their photos, services, and reviews — then book who fits your vibe.
                  </p>
                </div>
                <div className="step-card">
                  <h3 className="step-title instrument-sans-bold">Pick a Plan</h3>
                  <Image src="/assets/icons/planning.png" alt="Pick Your Plan" className="step-icon" width={50} height={50} />
                  <p className="step-description instrument-sans">
                    Join a monthly membership or book as needed. Each pro sets their own pricing and availability.
                  </p>
                </div>
                <div className="step-card">
                  <h3 className="step-title instrument-sans-bold">Show Up & Stay Fresh</h3>
                  <Image src="/assets/icons/calendar-check.png" alt="Book and Show Up" className="step-icon" width={50} height={50} />
                  <p className="step-description instrument-sans">
                    Your pro handles the rest — from fades to silk presses. No waiting, no hassle, just consistent results.
                  </p>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
