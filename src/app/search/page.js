import Link from "next/link";

export default function Search() {
  return (
    
  <section  class="cc_searchbar_section">
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
      <div class="cc-avatar" aria-hidden="true"></div>
      <div class="cc-card__body">
        <div class="cc-card__top">
          <h3 class="cc-name">Jacob W. <span class="cc-rating">(5.0)</span></h3>
          <button class="cc-btn cc-btn--outline">View Profile</button>
        </div>
        <p class="cc-meta">Barber • Norfolk, VA</p>
        <p class="cc-desc">Razor fade specialist w/ 10 yrs experience.</p>
      </div>
    </li>

    {/* Barber */}
    <li class="cc-card" data-type="barber">
      <div class="cc-avatar" aria-hidden="true"></div>
      <div class="cc-card__body">
        <div class="cc-card__top">
          <h3 class="cc-name">Jay the Barber <span class="cc-rating">(4.8)</span></h3>
          <button class="cc-btn cc-btn--outline">View Profile</button>
        </div>
        <p class="cc-meta">Barber • Atlanta, GA</p>
        <p class="cc-desc">Clean fades, beard sculpting, premium finishes.</p>
      </div>
    </li>

     {/* Loctician */}
    <li class="cc-card" data-type="loctician">
      <div class="cc-avatar" aria-hidden="true"></div>
      <div class="cc-card__body">
        <div class="cc-card__top">
          <h3 class="cc-name">James C. <span class="cc-rating">(4.7)</span></h3>
          <button class="cc-btn cc-btn--outline">View Profile</button>
        </div>
        <p class="cc-meta">Loctician • Charlotte, NC</p>
        <p class="cc-desc">Starter locs, retwists, maintenance & care.</p>
      </div>
    </li>

     {/* Stylist */}
    <li class="cc-card" data-type="stylist">
      <div class="cc-avatar" aria-hidden="true"></div>
      <div class="cc-card__body">
        <div class="cc-card__top">
          <h3 class="cc-name">Omari O. <span class="cc-rating">(5.0)</span></h3>
          <button class="cc-btn cc-btn--outline">View Profile</button>
        </div>
        <p class="cc-meta">Hairstylist • Washington, DC</p>
        <p class="cc-desc">Silk press, protective styles, color services.</p>
      </div>
    </li>
  </ul>
</section>
  );
}
