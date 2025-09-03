"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [specialty, setSpecialty] = useState("all");
  const [sort, setSort] = useState("none");
  useEffect(() => {
    async function fetchProfiles() {
      const res = await fetch('/profile.json');
      const data = await res.json();
      setProfiles(data);
    }
    fetchProfiles();
  }, []);

  // Collect all specialties/tags for dropdown
  const allTags = Array.from(new Set(profiles.flatMap(p => p.services.flatMap(s => s.tags))));

  // Filter profiles based on search, category, specialty
  let filteredProfiles = profiles.filter((profile) => {
    const matchesCategory = category === "all" || profile.category === category;
    const matchesSpecialty = specialty === "all" || profile.services.some(s => s.tags.includes(specialty));
    const searchLower = search.toLowerCase();
    const matchesSearch =
      profile.name.toLowerCase().includes(searchLower) ||
      profile.location.toLowerCase().includes(searchLower) ||
      (profile.zip && profile.zip.includes(searchLower)) ||
      (profile.specialty && profile.specialty.toLowerCase().includes(searchLower)) ||
      (profile.about && profile.about.toLowerCase().includes(searchLower)) ||
      profile.services.some(s =>
        s.title.toLowerCase().includes(searchLower) ||
        s.desc.toLowerCase().includes(searchLower) ||
        s.tags.some(tag => tag.includes(searchLower))
      );
    return matchesCategory && matchesSpecialty && matchesSearch;
  });

  // Sorting
  if (sort === "rating") {
    filteredProfiles = filteredProfiles.slice().sort((a, b) => b.rating - a.rating);
  } else if (sort === "servicesCompleted") {
    filteredProfiles = filteredProfiles.slice().sort((a, b) => b.servicesCompleted - a.servicesCompleted);
  } else if (sort === "priceLow") {
    filteredProfiles = filteredProfiles.slice().sort((a, b) => {
      const aMin = parseInt(a.priceRange.replace(/[^\d]/g, ""));
      const bMin = parseInt(b.priceRange.replace(/[^\d]/g, ""));
      return aMin - bMin;
    });
  } else if (sort === "priceHigh") {
    filteredProfiles = filteredProfiles.slice().sort((a, b) => {
      const aMax = parseInt(a.priceRange.split('-')[1]);
      const bMax = parseInt(b.priceRange.split('-')[1]);
      return bMax - aMax;
    });
  }

  return (
    <section className="cc_searchbar_section">
      <div className="container">
        {/* Search / Filter Bar */}
        <section className="cc-searchbar" role="search">
          <form  onSubmit={e => e.preventDefault()} aria-label="Find a pro">
            <div className="cc-searchbar__form">

           
            <label className="sr-only" htmlFor="serviceSelect">Category</label>
            <div className="cc-select">
              <select
                id="serviceSelect"
                name="service"
                aria-label="Filter by category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="serviceSelect1"
              >
                <option value="all">All Categories</option>
                <option value="barber">Barbers</option>
                <option value="stylists">Stylists</option>
                <option value="loctician">Locticians</option>
              </select>
              <span className="cc-select__icon" aria-hidden="true">▾</span>
            </div>

            <label className="sr-only" htmlFor="specialtySelect">Specialty/Service</label>
            <div className="cc-select">
              <select
                id="specialtySelect"
                name="specialty"
                aria-label="Filter by specialty/service"
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
                className="serviceSelect1"
              >
                <option value="all">All Specialties/Services</option>
                {allTags.map(tag => (
                  <option value={tag} key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</option>
                ))}
              </select>
              <span className="cc-select__icon" aria-hidden="true">▾</span>
            </div>

            <label className="sr-only" htmlFor="sortSelect">Sort By</label>
            <div className="cc-select">
              <select
                id="sortSelect"
                name="sort"
                aria-label="Sort results"
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="serviceSelect1"
              >
                <option value="none">Sort By</option>
                <option value="rating">Highest Rated</option>
                <option value="servicesCompleted">Most Active</option>
                <option value="priceLow">Price (Low–High)</option>
                <option value="priceHigh">Price (High–Low)</option>
              </select>
              <span className="cc-select__icon" aria-hidden="true">▾</span>
            </div>
             </div>
             <div className="cc-searchbar__form2">

             

            <label className="sr-only" htmlFor="q">Search by name, city, zip code</label>
            <input
              id="q"
              className="cc-searchbar__input"
              type="search"
              name="q"
              placeholder="Search by name, city, zip code"
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <button className="cc-btn cc-btn--gold" type="submit">Search</button>
            </div>
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
                    <h3 className="cc-name">{profile.name} <span className="cc-rating">{'⭐'.repeat(Math.round(profile.rating))}</span></h3>
                    <Link href={`/profile/${profile.id}`} className="cc-btn cc-btn--gold ghost-gold">View Profile</Link>
                  </div>
                  <p className="cc-meta">{profile.category.charAt(0).toUpperCase() + profile.category.slice(1)} • {profile.location} {profile.zip && `(${profile.zip})`}</p>
                  <p className="cc-desc">{profile.specialty}</p>
                  <div className="cc-tags">
                    {profile.services.flatMap(s => s.tags).map(tag => (
                      <span className="cc-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="cc-stats">
                    <span>Services Completed: {profile.servicesCompleted}</span>
                    <span>Price Range: {profile.priceRange}</span>
                  </div>
                  {/* <div className="cc-services">
                    {profile.services.map((s, idx) => (
                      <span key={idx} className="cc-service">{s.title}</span>
                    ))}
                  </div> */}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
