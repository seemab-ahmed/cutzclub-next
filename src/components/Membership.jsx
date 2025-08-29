import Image from "next/image";

export default function Membership() {
  return (
    <section className="membership-work" id="membership">
        <div className="container">
          <div className="master-box">
            <h2 className="josefin-sans-bold">Why Membership Works </h2>
            <div className="main-box">
              <div className="image-box">
                <p className="josefin-sans-bold membership-dosktop">
                  Whether you&apos;re new or fully booked, CutzClub helps you attract clients, save time, and
                  boost
                  income — all in one place.
                </p>
                <p className="josefin-sans-bold membership-mobile">
                  Whether you&apos;re new or fully booked, CutzClub helps you attract clients, save time, and
                  boost income — all in one place.
                </p>
                <Image src="/assets/images/membership.png" alt="satisfied-handsome-man-thumb-up-hold-scissors"
                  className="mw-cutout" width={400} height={400} />
              </div>
              <ul className="why-membership-list">
                <li className="wm-item" data-aos="fade-left" data-aos-delay="400" data-aos-duration="700"
                  data-aos-easing="ease-in-out" data-aos-offset="150">
                  <span className="josefin-sans-bold">Smart AI Tools</span>
                  <p className="josefin-sans-semiblod">Build better service packages, see booking trends, and get insights to grow your income.</p>
                  <p className="josefin-sans-semiblod">Elite: Included · Starter & Pro: $14.99/mo add-on</p>
                </li>
                <li className="wm-item" data-aos="fade-left" data-aos-delay="400"
                  data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-offset="150">
                  <span className="josefin-sans-bold">Appointment Reminders</span>
                  <p className="josefin-sans-semiblod">Reduce no-shows with automatic text/email alerts sent to your clients.</p>
                  <p className="josefin-sans-semiblod">Elite: Included · Starter & Pro: $4.99/mo add-on</p>
                </li>
                <li className="wm-item" data-aos="fade-left" data-aos-delay="400"
                  data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-offset="150">
                  <span className="josefin-sans-bold">Recurring Bookings</span>
                  <p className="josefin-sans-semiblod">Turn one-time clients into loyal monthly members with built-in recurring appointments.</p>
                </li>
                <li className="wm-item" data-aos="fade-left" data-aos-delay="400"
                  data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-offset="150">
                  <span className="josefin-sans-bold">Visibility Boost in Search</span>
                  <p className="josefin-sans-semiblod">Pros on paid plans rank higher in search results and show up more often to local clients.</p>
                </li>
                <li className="wm-item" data-aos="fade-left" data-aos-delay="400"
                  data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-offset="150">
                  <span className="josefin-sans-bold">Transparent Earnings, No Surprises</span>
                  <p className="josefin-sans-semiblod">You keep up to 100% of your earnings with low commission tiers designed for real professionals.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image src="/assets/images/cutting-machine.svg" alt="machine" className="mw-machine" width={100} height={100} />
      </section>
  );
}
