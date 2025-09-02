
import jhon from "../../../public/assets/images/jhon.png";
import jamees from "../../../public/assets/images/jamees.png";
import tyronee from "../../../public/assets/images/tyronee.png";
import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  return (
    <>
    <section  className="cc_searchbar_section">
      <div className="container">
        {/*  Search / Filter Bar */}
        <section className="cc-searchbar " role="search">
          <form className="cc-searchbar__form" action="#" method="get" aria-label="Find a pro">
            <label className="sr-only" htmlFor="serviceSelect">All Services</label>
            <div className="cc-select">
              <select id="serviceSelect" name="service" aria-label="Filter by service">
                <option value="all" selected>All Services</option>
                <option value="barber">Barbers</option>
                <option value="stylist">Stylists</option>
                <option value="loctician">Locticians</option>
              </select>
              <span className="cc-select__icon" aria-hidden="true">▾</span>
            </div>


            <label className="sr-only" htmlFor="q">Search by name, city, or style</label>
            <input
              id="q"
              className="cc-searchbar__input"
              type="search"
              name="q"
              placeholder="Search by name, city, or style"
              autocomplete="off"
            />

          
            <button className="cc-btn cc-btn--gold" type="submit">Search</button>
          </form>
        </section>

        {/* Results List */}
          <ul className="cc-results">
            {/* Barber */}
            <li className="cc-card" data-type="barber">
              <div className="cc-avatar" aria-hidden="true"><Image src={jhon} alt="James Carter" width={100} height={100} /></div>
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <h3 className="cc-name">Jacob W. <span className="cc-rating">(5.0)</span></h3>
                  <Link href="/profile/1"  className="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p className="cc-meta">Barber • Norfolk, VA</p>
                <p className="cc-desc">Razor fade specialist w/ 10 yrs experience.</p>
              </div>
            </li>

            {/* Barber */}
            <li className="cc-card" data-type="barber">
              <div className="cc-avatar" aria-hidden="true"><Image src={jamees} alt="James Carter" width={100} height={100} /></div>
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <h3 className="cc-name">Jay the Barber <span className="cc-rating">(4.8)</span></h3>
                 <Link href="/profile/1"  className="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p className="cc-meta">Barber • Atlanta, GA</p>
                <p className="cc-desc">Clean fades, beard sculpting, premium finishes.</p>
              </div>
            </li>

            {/* Loctician */}
            <li className="cc-card" data-type="loctician">
              <div className="cc-avatar" aria-hidden="true"><Image src={jamees} alt="James Carter" width={100} height={100} /></div>
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <h3 className="cc-name">James C. <span className="cc-rating">(4.7)</span></h3>
                  <Link href="/profile/1"  className="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p className="cc-meta">Loctician • Charlotte, NC</p>
                <p className="cc-desc">Starter locs, retwists, maintenance & care.</p>
              </div>
            </li>

            {/* Stylist */}
            <li className="cc-card" data-type="stylist">
              <div className="cc-avatar" aria-hidden="true"><Image src={tyronee} alt="James Carter" width={100} height={100} /></div>
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <h3 className="cc-name">Omari O. <span className="cc-rating">(5.0)</span></h3>
                  <Link href="/profile/1"  className="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p className="cc-meta">Hairstylist • Washington, DC</p>
                <p className="cc-desc">Silk press, protective styles, color services.</p>
              </div>
            </li>
          </ul>
      </div>
    </section>
    </>
  );
}
