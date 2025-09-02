import Link from "next/link";

export default function Membership() {
  return (
    <>
     <section className="custom-membership">
      <div className="container">
         <main className="shell cc-membership" aria-labelledby="cc-membership-title">
        <h1 id="cc-membership-title" className="ccm-title">Membership</h1>
        <section className="ccm-grid" role="list" aria-label="CutzClub Membership Plans">
          {/* Starter */}
          <article className="ccm-card" role="listitem" aria-labelledby="starter-title">
            <h2 id="starter-title" className="ccm-card-title">Starter</h2>
            <span className="ccm-price" aria-label="$9.99 per month">$9.99/mo</span>
            <ul className="ccm-list" aria-label="Starter features">
              <li><span className="dot"></span><span>Max <strong>50 clients</strong></span></li>
              <li><span className="dot"></span><span>Public profile on CutzClub</span></li>
              <li><span className="dot"></span><span>Booking & calendar management</span></li>
              <li><span className="dot"></span><span>Add services, photos, and bios</span></li>
              <li><span className="dot"></span><span>Ratings & review systems</span></li>
              <li><span className="dot"></span><span>Linked contact info</span></li>
              <li><span className="dot"></span><span>Basic support</span></li>
              <li><span className="dot"></span><span><strong>Platform fee: 15%</strong></span></li>
            </ul>
            <hr className="ccm-div" aria-hidden="true" />
            <h3 className="ccm-sub">Optional Add-ons:</h3>
            <ul className="ccm-list ccm-addons" aria-label="Starter optional add-ons">
              <li><span className="dot"></span><span>Advanced analytics</span></li>
              <li><span className="dot"></span><span>AI package builder</span></li>
              <li><span className="dot"></span><span>Text/Email reminder</span></li>
            </ul>
            <div className="ccm-ctas">
              <Link className="btn btn--ghost" href="/compare">Compare</Link>
              <Link className="btn" href="/signup?plan=starter">Choose Starter</Link>
              <Link href="/signup" aria-label="Sign up">Sign Up</Link>
            </div>
          </article>
          {/* Plus */}
          <article className="ccm-card" role="listitem" aria-labelledby="plus-title">
            <h2 id="plus-title" className="ccm-card-title">Plus</h2>
            <span className="ccm-price">$19.99/mo</span>
            <ul className="ccm-list" aria-label="Plus features">
              <li><span className="dot"></span><span><strong>Everything in Starter</strong></span></li>
              <li><span className="dot"></span><span><strong>Unlimited clients</strong></span></li>
              <li><span className="dot"></span><span>Pro badge on profile</span></li>
              <li><span className="dot"></span><span>Priority search visibility</span></li>
              <li><span className="dot"></span><span>Featured in homepage rotation</span></li>
              <li><span className="dot"></span><span>Email + Live chat support</span></li>
              <li><span className="dot"></span><span>Appointment history access</span></li>
              <li><span className="dot"></span><span><strong>Platform fee: 7%</strong></span></li>
            </ul>
            <hr className="ccm-div" aria-hidden="true" />
            <h3 className="ccm-sub">Discounted Add-ons:</h3>
            <ul className="ccm-list ccm-addons" aria-label="Plus discounted add-ons">
              <li><span className="dot"></span><span>Advanced analytics</span></li>
              <li><span className="dot"></span><span>AI package builder</span></li>
              <li><span className="dot"></span><span>Text/Email reminder</span></li>
            </ul>
            <div className="ccm-ctas">
              <Link className="btn btn--ghost" href="/compare">Compare</Link>
              <Link className="btn" href="/signup?plan=plus">Choose Plus</Link>
            </div>
          </article>
          {/* Elite */}
          <article className="ccm-card ccm-card--elite" role="listitem" aria-labelledby="elite-title">
            <h2 id="elite-title" className="ccm-card-title">Elite</h2>
            <span className="ccm-price">$49.99/mo</span>
            <ul className="ccm-list" aria-label="Elite features">
              <li><span className="dot"></span><span><strong>Everything in Plus</strong></span></li>
              <li><span className="dot"></span><span>VIP badge + premium branding</span></li>
              <li><span className="dot"></span><span>Top-tier search priority</span></li>
              <li><span className="dot"></span><span>Advanced analytics</span></li>
              <li><span className="dot"></span><span>AI package builder</span></li>
              <li><span className="dot"></span><span>Text/Email reminder</span></li>
              <li><span className="dot"></span><span>Monthly performance insights</span></li>
              <li><span className="dot"></span><span>Priority concierge support</span></li>
              <li><span className="dot"></span><span><strong>Platform fee: 0%</strong></span></li>
            </ul>
            <div className="ccm-ctas">
              <Link className="btn btn--ghost" href="/compare">Compare</Link>
              <Link className="btn" href="/signup?plan=elite">Choose Elite</Link>
            </div>
          </article>
        </section>
      </main>
      </div>
     </section>
      
    </>
  );
}
