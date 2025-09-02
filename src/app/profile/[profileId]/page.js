"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileDetail() {
  const [activeTab, setActiveTab] = useState('services');
  return (
    <>
      <section className="profile_header">
        <div className="container">
          <div className="profile-header">
            <div className="profile-image"><Image src="/assets/images/htw-top1.png" alt="Profile" width={80} height={80} /></div>
            <div className="profile-info">
              <h2 className="profile-name">Jacob W.</h2>
              <button>Elite</button>
              <div className="rating">
                <div className="stars">★★★★★</div>
                <div className="review-count">500</div>
              </div>
              <p className="location">Barber • Norfolk VA</p>
              <p className="specialty">Razor fade specialist 10+ yrs experience.</p>
              <p>45 m • Avg service time • $40-$55 Brice range Available </p>
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
                  <div className="service-item">
                    <div className="service-info">
                      <h3>Skin Fade</h3>
                      <p>45 min · Clippers & shears · Hot towel finish</p>
                    </div>
                    <div className="service-price">
                      <span>$45</span>
                      <Link href="#" className="book-btn">Book</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-info">
                      <h3>Haircut + Beard</h3>
                      <p>60 min · Line-up & beard sculpting</p>
                    </div>
                    <div className="service-price">
                      <span>$65</span>
                      <Link href="#" className="book-btn">Book</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-info">
                      <h3>Kids Cut</h3>
                      <p>30 min · Age 12 and under</p>
                    </div>
                    <div className="service-price">
                      <span>$30</span>
                      <Link href="#" className="book-btn">Book</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* About */}
            {activeTab === 'about' && (
              <div className="tab-panel active" id="about">
                <div className="about-section">
                  <h2>About</h2>
                  <p>
                    I’ve been cutting for over a decade with a focus on precision fades and classic looks.
                    I’m Elite on CutzClub—remders & premium scalding.
                  </p>
                  <div className="tag-group">
                    <span className="tag">Fades</span>
                    <span className="tag">Beard work</span>
                    <span className="tag">Line-ups</span>
                    <span className="tag">Designs</span>
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
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24666421.060869887!2d72.19316504002832!3d29.317231455486397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1756777248063!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ border: 0 }}  
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                  </div>
                  <p className="location-text">Downtown Norfolk, VA</p>
                  <ul className="social_icons">
                    <li><Link href="#"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/></svg></Link></li>
                    <li><Link href="#"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/></svg></Link></li>
                    <li><Link href="#"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/></svg></Link></li>
                  </ul>
                  <div className="review-box">
                    <div className="review-header">
                      <strong>3.0 ★★★★★</strong>
                      <span>128 reviews</span>
                      <Link href="#">Write a review</Link>
                    </div>
                    <div className="single-review">
                      <div className="review-top">
                        <span className="reviewer">Marcus G.</span>
                        <span className="review-date">Jan 9, 2025</span>
                      </div>
                      <div className="review-stars">★★★★★</div>
                      <p className="review-text">Sharpcut on time, and super professional. Booking again.</p>
                    </div>
                    <div className="single-review">
                      <div className="review-top">
                        <span className="reviewer">Alina P.</span>
                        <span className="review-date">Dec 22, 2024</span>
                      </div>
                      <div className="review-stars">★★★★☆</div>
                      <p className="review-text">Loved the fade. Clean workspace and easy scheduling.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Reviews */}
            {activeTab === 'reviews' && (
              <div className="tab-panel active" id="reviews">
                <div className="reviews-section">
                  <div className="review-images">
                      <Image src="/assets/images/htw-top1.png" alt="Review 1" width={60} height={60} />
                      <Image src="/assets/images/htw-top2.jpg" alt="Review 2" width={60} height={60} />
                      <Image src="/assets/images/member-works.webp" alt="Review 3" width={60} height={60} />
                      <Image src="/assets/images/jhon.png" alt="Review 4" width={60} height={60} />
                  </div>
                  <div className="review-tags">
                    <span className="tag">Apriyl&apos;s cut +</span>
                    <span className="tag">price ranks</span>
                  </div>
                  <div className="review-box">
                    <div className="review-header">
                      <strong>3.0 ★★★★★</strong>
                      <span>128 reviews</span>
                      <Link href="#">Write a review</Link>
                    </div>
                    <div className="single-review">
                      <div className="review-top">
                        <span className="reviewer">Marcus G.</span>
                        <span className="review-date">Jan 9, 2025</span>
                      </div>
                      <div className="review-stars">★★★★★</div>
                      <p className="review-text">Sharpcut on time, and super professional. Booking again.</p>
                    </div>
                    <div className="single-review">
                      <div className="review-top">
                        <span className="reviewer">Alina P.</span>
                        <span className="review-date">Dec 22, 2024</span>
                      </div>
                      <div className="review-stars">★★★★☆</div>
                      <p className="review-text">Loved the fade. Clean workspace and easy scheduling.</p>
                    </div>
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
                <p>
                  I’ve been cutting for over a decade with a focus on precision fades and classic looks.
                  I’m Elite on CutzClub—remders & premium scalding.
                </p>

                <div className="tag-group">
                  <span className="tag">Fades</span>
                  <span className="tag">Beard work</span>
                  <span className="tag">Line-ups</span>
                  <span className="tag">Designs</span>
                </div>
              </div>
            </div>
              {/* Reviews  */}
            <div className="tab_panel" id="reviews">
              <div className="reviews-section">
                <h2>Reviews</h2>
                  <div className="review-images">
                   <Image src="/assets/images/htw-top1.png" alt="Review 1" width={60} height={60} />
                      <Image src="/assets/images/htw-top2.jpg" alt="Review 2" width={60} height={60} />
                      <Image src="/assets/images/member-works.webp" alt="Review 3" width={60} height={60} />
                      <Image src="/assets/images/jhon.png" alt="Review 4" width={60} height={60} />
                  </div>

                  <div className="review-tags">
                    <span className="tag">Apriyl&apos;s cut  +</span>
                    <span className="tag">trice rangs</span>
                  </div>

                </div>

            </div>
            {/* policies  */}
            <div className="policies">
              <h2>Policies</h2>
              <ul>
                <li><span>.</span> <p>Late arrivals over 10 minutes-may be resccheduel ded.</p></li>
                <li><span>.</span> <p>24-hour cancellation preferred.</p></li>
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
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24666421.060869887!2d72.19316504002832!3d29.317231455486397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1756777248063!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ border: 0 }}  
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                  </div>
                  <p className="location-text">Downtown Norfolk, VA</p>
                  <ul className="social_icons">
                    <li><a href="#"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                    </a></li>
                    <li><a href="#">
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                      </svg>

                    </a></li>
                    <li><a href="#">
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                      </svg>

                    </a></li>
                  </ul>
                  <div className="review-box">
                      <div className="review-header">
                        <strong>3.0 ★★★★★</strong>
                        <span>128 reviews</span>
                        <a href="#">Write a review</a>
                      </div>

                      <div className="single-review">
                        <div className="review-top">
                          <span className="reviewer">Marcus G.</span>
                          <span className="review-date">Jan 9, 2025</span>
                        </div>
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">Sharpcut on time, and super professional. Booking again.</p>
                      </div>

                      <div className="single-review">
                        <div className="review-top">
                          <span className="reviewer">Alina P.</span>
                          <span className="review-date">Dec 22, 2024</span>
                        </div>
                        <div className="review-stars">★★★★☆</div>
                        <p className="review-text">Loved the fade. Clean workspace and easy scheduling.</p>
                      </div>
                    </div>

                </div>
              </div>
          </div>
          </div>
        </div>
       </section>


    </>
  );
}
