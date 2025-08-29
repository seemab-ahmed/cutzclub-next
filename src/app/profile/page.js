export default function Profile() {
  return (
    <>
      <section className="cc-searchbar" role="search">
        <div className="container">
          <h2 className="cc-main-heading">Search for Barbers, Stylish, or Locticians</h2>
          <form className="cc-searchbar__form" action="#" method="get" aria-label="Find a pro">
            {/* Dropdown */}
            <label className="sr-only" htmlFor="serviceSelect">All Services</label>
            <div className="cc-select">
              <select id="serviceSelect" name="service" aria-label="Filter by service">
                <option value="all" defaultValue>All Services</option>
                <option value="barber">Barbers</option>
                <option value="stylist">Stylists</option>
                <option value="loctician">Locticians</option>
              </select>
              <span className="cc-select__icon" aria-hidden="true">▾</span>
            </div>
            {/* Search input */}
            <label className="sr-only" htmlFor="q">Search by name, city, or style</label>
            <input
              id="q"
              className="cc-searchbar__input"
              type="search"
              name="q"
              placeholder="Search by name, city, or style"
              autoComplete="off"
            />
            {/* Submit */}
            <button className="cc-btn cc-btn--gold" type="submit">Search</button>
          </form>
        </div>
      </section>
      {/* Results List */}
      <section className="result-section">
        <div className="container">
          <ul className="cc-results">
            {/* Barber */}
            <li className="cc-card" data-type="barber">
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <div className="cc-avatar" aria-hidden="true"></div>
                  <div className="cc-stars">
                    <h3 className="cc-name">Jacob W. <span className="cc-rating">(5.0)</span></h3>
                    <span>★ ★ ★ ★ ★ </span>
                  </div>
                </div>
                <div className="cc-text">
                  <div>
                    <p className="cc-meta">Barber • Norfolk, VA</p>
                    <p className="cc-desc">Razor fade specialist w/ 10 yrs experience.</p>
                  </div>
                  <button className="cc-btn cc-btn--outline">View Profile</button>
                </div>
              </div>
            </li>
            {/* Barber */}
            <li className="cc-card" data-type="barber">
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <div className="cc-avatar" aria-hidden="true"></div>
                  <div className="cc-stars">
                    <h3 className="cc-name">Jay the Barber <span className="cc-rating">(4.8)</span></h3>
                    <span>★ ★ ★ ★ ★ </span>
                  </div>
                </div>
                <div className="cc-text">
                  <div>
                    <p className="cc-meta">Barber • Atlanta, GA</p>
                    <p className="cc-desc">Clean fades, beard sculpting, premium finishes.</p>
                  </div>
                  <button className="cc-btn cc-btn--outline">View Profile</button>
                </div>
              </div>
            </li>
            {/* Loctician */}
            <li className="cc-card" data-type="loctician">
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <div className="cc-avatar" aria-hidden="true"></div>
                  <div className="cc-stars">
                    <h3 className="cc-name">James C. <span className="cc-rating">(4.7)</span></h3>
                    <span>★ ★ ★ ★ ★ </span>
                  </div>
                </div>
                <div className="cc-text">
                  <div>
                    <p className="cc-meta">Loctician • Charlotte, NC</p>
                    <p className="cc-desc">Starter locs, retwists, maintenance & care.</p>
                  </div>
                  <button className="cc-btn cc-btn--outline">View Profile</button>
                </div>
              </div>
            </li>
            {/* Stylist */}
            <li className="cc-card" data-type="stylist">
              <div className="cc-card__body">
                <div className="cc-card__top">
                  <div className="cc-avatar" aria-hidden="true"></div>
                  <div className="cc-stars">
                    <h3 className="cc-name">Omari O. <span className="cc-rating">(5.0)</span></h3>
                    <span>★ ★ ★ ★ ★ </span>
                  </div>
                </div>
                <div className="cc-text">
                  <div>
                    <p className="cc-meta">Hairstylist • Washington, DC</p>
                    <p className="cc-desc">Silk press, protective styles, color services.</p>
                  </div>
                  <button className="cc-btn cc-btn--outline">View Profile</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
