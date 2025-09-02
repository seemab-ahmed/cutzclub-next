
import jhon from "../../../public/assets/images/jhon.png";
import jamees from "../../../public/assets/images/jamees.png";
import tyronee from "../../../public/assets/images/tyronee.png";
import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  return (
    <>
    <section  class="cc_searchbar_section">
      <div className="container">
        {/*  Search / Filter Bar */}
        <section class="cc-searchbar " role="search">
          <form class="cc-searchbar__form" action="#" method="get" aria-label="Find a pro">
            
          
            <label class="sr-only" for="serviceSelect">All Services</label>
            <div class="cc-select">
              <select id="serviceSelect" name="service" aria-label="Filter by service">
                <option value="all" selected>All Services</option>
                <option value="barber">Barbers</option>
                <option value="stylist">Stylists</option>
                <option value="loctician">Locticians</option>
              </select>
              <span class="cc-select__icon" aria-hidden="true">▾</span>
            </div>

        
            <label class="sr-only" for="q">Search by name, city, or style</label>
            <input
              id="q"
              class="cc-searchbar__input"
              type="search"
              name="q"
              placeholder="Search by name, city, or style"
              autocomplete="off"
            />

          
            <button class="cc-btn cc-btn--gold" type="submit">Search</button>
          </form>
        </section>

        {/* Results List */}
          <ul class="cc-results">
            {/* Barber */}
            <li class="cc-card" data-type="barber">
              <div class="cc-avatar" aria-hidden="true"><Image src={jhon} alt="James Carter" width={100} height={100} /></div>
              <div class="cc-card__body">
                <div class="cc-card__top">
                  <h3 class="cc-name">Jacob W. <span class="cc-rating">(5.0)</span></h3>
                  <Link href="/profile/1"  class="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p class="cc-meta">Barber • Norfolk, VA</p>
                <p class="cc-desc">Razor fade specialist w/ 10 yrs experience.</p>
              </div>
            </li>

            {/* Barber */}
            <li class="cc-card" data-type="barber">
              <div class="cc-avatar" aria-hidden="true"><Image src={jamees} alt="James Carter" width={100} height={100} /></div>
              <div class="cc-card__body">
                <div class="cc-card__top">
                  <h3 class="cc-name">Jay the Barber <span class="cc-rating">(4.8)</span></h3>
                 <Link href="/profile/1"  class="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p class="cc-meta">Barber • Atlanta, GA</p>
                <p class="cc-desc">Clean fades, beard sculpting, premium finishes.</p>
              </div>
            </li>

            {/* Loctician */}
            <li class="cc-card" data-type="loctician">
              <div class="cc-avatar" aria-hidden="true"><Image src={jamees} alt="James Carter" width={100} height={100} /></div>
              <div class="cc-card__body">
                <div class="cc-card__top">
                  <h3 class="cc-name">James C. <span class="cc-rating">(4.7)</span></h3>
                  <Link href="/profile/1"  class="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p class="cc-meta">Loctician • Charlotte, NC</p>
                <p class="cc-desc">Starter locs, retwists, maintenance & care.</p>
              </div>
            </li>

            {/* Stylist */}
            <li class="cc-card" data-type="stylist">
              <div class="cc-avatar" aria-hidden="true"><Image src={tyronee} alt="James Carter" width={100} height={100} /></div>
              <div class="cc-card__body">
                <div class="cc-card__top">
                  <h3 class="cc-name">Omari O. <span class="cc-rating">(5.0)</span></h3>
                  <Link href="/profile/1"  class="cc-btn cc-btn--outline">View Profile</Link>
                </div>
                <p class="cc-meta">Hairstylist • Washington, DC</p>
                <p class="cc-desc">Silk press, protective styles, color services.</p>
              </div>
            </li>
          </ul>
      </div>
    </section>
    </>
  );
}
