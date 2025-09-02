"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileDetail() {
  const [activeTab, setActiveTab] = useState('services');
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    async function fetchProfile() {
      // Get profileId from URL
      const id = window.location.pathname.split('/').pop();
      const res = await fetch('/profile.json');
      const data = await res.json();
      const found = data.find(p => String(p.id) === id);
      setProfile(found);
    }
    fetchProfile();
  }, []);

  // Generate Google Maps embed URL from location
  const mapUrl = profile ? `https://www.google.com/maps?q=${encodeURIComponent(profile.location)}&output=embed` : "";

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <section className="profile_header">
        <div className="container">
          <div className="profile-header">
            <div className="profile-image"><Image src={profile.image} alt="Profile" width={80} height={80} /></div>
            <div className="profile-info">
              <h2 className="profile-name">{profile.name}</h2>
              {profile.elite && <button>Elite</button>}
              <div className="rating">
                <div className="stars">{'★'.repeat(Math.round(profile.rating))}</div>
                <div className="review-count">{profile.reviewCount}</div>
              </div>
              <p className="location">{profile.category.charAt(0).toUpperCase() + profile.category.slice(1)} • {profile.location}</p>
              <p className="specialty">{profile.specialty}</p>
              <p>{profile.serviceTime} • Avg service time • {profile.priceRange} Price range Available </p>
            </div>
            <div className="profile-booking">
              <Link href="#" className="book-btn">Book with</Link>
              <span>see services</span>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs Section */}
      <section className="profile-tabs">
        <div className="container">
          <div className="tab-head">
            <div className="tabs">
              <button className={`tab${activeTab === 'services' ? ' active' : ''}`} onClick={() => setActiveTab('services')} data-tab="services">Services & Pricing</button>
              <button className={`tab${activeTab === 'about' ? ' active' : ''}`} onClick={() => setActiveTab('about')} data-tab="about">About</button>
              <button className={`tab${activeTab === 'gallery' ? ' active' : ''}`} onClick={() => setActiveTab('gallery')} data-tab="gallery">Gallery</button>
              <button className={`tab${activeTab === 'reviews' ? ' active' : ''}`} onClick={() => setActiveTab('reviews')} data-tab="reviews">Reviews</button>
            </div>
          </div>
          <div className="tab-content">
            {/* Services & Pricing */}
            {activeTab === 'services' && (
              <div className="tab-panel active" id="services">
                <div className="services-list">
                  {profile.services.map((service, idx) => (
                    <div className="service-item" key={idx}>
                      <div className="service-info">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                      <div className="service-price">
                        <span>${service.price}</span>
                        <Link href="#" className="book-btn">Book</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* About */}
            {activeTab === 'about' && (
              <div className="tab-panel active" id="about">
                <div className="about-section">
                  <h2>About</h2>
                  <p>{profile.about}</p>
                  <div className="tag-group">
                    {profile.tags.map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                  </div>
                </div>
              </div>
            )}
            {/* Gallery */}
            {activeTab === 'gallery' && (
              <div className="tab-panel active" id="gallery">
                <div className="gallery-section">
                  <div className="map-placeholder">
                      <iframe
                        src={mapUrl}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <p className="location-text">Downtown {profile.location}</p>
                  <ul className="social_icons">
                    {profile.social.map((s, idx) => (
                      <li key={idx}><a href={s.url}>{s.type}</a></li>
                    ))}
                  </ul>
                  <div className="review-box">
                    <div className="review-header">
                      <strong>{profile.rating} ★★★★★</strong>
                      <span>{profile.reviews.length} reviews</span>
                      <Link href="#">Write a review</Link>
                    </div>
                    {profile.reviews.map((review, idx) => (
                      <div className="single-review" key={idx}>
                        <div className="review-top">
                          <span className="reviewer">{review.reviewer}</span>
                          <span className="review-date">{review.date}</span>
                        </div>
                        <div className="review-stars">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                        <p className="review-text">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Reviews */}
            {activeTab === 'reviews' && (
              <div className="tab-panel active" id="reviews">
                <div className="reviews-section">
                  <div className="review-images">
                    {profile.gallery.map((img, idx) => (
                      <Image src={img} alt={`Review ${idx + 1}`} width={60} height={60} key={idx} />
                    ))}
                  </div>
                  <div className="review-tags">
                    {profile.tags.map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                  </div>
                  <div className="review-box">
                    <div className="review-header">
                      <strong>{profile.rating} ★★★★★</strong>
                      <span>{profile.reviews.length} reviews</span>
                      <Link href="#">Write a review</Link>
                    </div>
                    {profile.reviews.map((review, idx) => (
                      <div className="single-review" key={idx}>
                        <div className="review-top">
                          <span className="reviewer">{review.reviewer}</span>
                          <span className="review-date">{review.date}</span>
                        </div>
                        <div className="review-stars">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                        <p className="review-text">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="profile_tabs-data">
        <div className='container'>
         <div className="progile_row">
          <div className="left_col">
            {/* About  */}
            <div className="tab_panel" id="about">
              <div className="about-section">
                <h2>About</h2>
                <p>{profile.about}</p>
                <div className="tag-group">
                  {profile.tags.map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                </div>
              </div>
            </div>
              {/* Reviews  */}
            <div className="tab_panel" id="reviews">
              <div className="reviews-section">
                <h2>Reviews</h2>
                  <div className="review-images">
                    {profile.gallery.map((img, idx) => (
                      <Image src={img} alt={`Review ${idx + 1}`} width={60} height={60} key={idx} />
                    ))}
                  </div>
                  <div className="review-tags">
                    {profile.tags.map((tag, idx) => <span className="tag" key={idx}>{tag}</span>)}
                  </div>
                </div>
            </div>
            {/* policies  */}
            <div className="policies">
              <h2>Policies</h2>
              <ul>
                {profile.policies.map((policy, idx) => (
                  <li key={idx}><span>.</span> <p>{policy}</p></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right_col">
            {/* gallery  */}
            <h2 className="gallery">Gallery</h2>
            <div className="tab_panel" id="gallery">
                <div className="gallery-section">
                  <div className="map-placeholder">
                      <iframe
                        src={mapUrl}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <p className="location-text">Downtown {profile.location}</p>
                  <ul className="social_icons">
                    {profile.social.map((s, idx) => (
                      <li key={idx}><a href={s.url}>{s.type}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
          </div>
        </div>
       </section>
    </>
  );
}
