"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    async function fetchProfiles() {
      const res = await fetch('/profile.json');
      const data = await res.json();
      setProfiles(data);
    }
    fetchProfiles();
  }, []);

  // Filter profiles based on search and category
  const filteredProfiles = profiles.filter((profile) => {
    const matchesCategory = category === "all" || profile.category === category;
    const matchesSearch = profile.name.toLowerCase().includes(search.toLowerCase()) || profile.location.toLowerCase().includes(search.toLowerCase()) || (profile.specialty && profile.specialty.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="cc_searchbar_section">
      <div className="container">
        {/* Search / Filter Bar */}
        <section className="cc-searchbar" role="search">
          <form className="cc-searchbar__form" onSubmit={e => e.preventDefault()} aria-label="Find a pro">
            <label className="sr-only" htmlFor="serviceSelect">All Categories</label>
            <div className="cc-select">
              <select
                id="serviceSelect"
                name="service"
                aria-label="Filter by category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="barber">Barbers</option>
                <option value="stylists">Stylists</option>
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
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <button className="cc-btn cc-btn--gold" type="submit">Search</button>
          </form>
        </section>

        {/* Results List */}
        <ul className="cc-results">
          {filteredProfiles.length === 0 ? (
            <li>No results found.</li>
          ) : (
            filteredProfiles.map(profile => (
              <li className="cc-card" data-type={profile.category} key={profile.id}>
                <div className="cc-avatar" aria-hidden="true">
                  <Image src={profile.image} alt={profile.name} width={100} height={100} />
                </div>
                <div className="cc-card__body">
                  <div className="cc-card__top">
                    <h3 className="cc-name">{profile.name} <span className="cc-rating">({profile.rating})</span></h3>
                    <Link href={`/profile/${profile.id}`} className="cc-btn cc-btn--outline">View Profile</Link>
                  </div>
                  <p className="cc-meta">{profile.category.charAt(0).toUpperCase() + profile.category.slice(1)} • {profile.location}</p>
                  <p className="cc-desc">{profile.specialty}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
