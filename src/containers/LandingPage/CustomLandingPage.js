import React from 'react';
import { NamedLink } from '../../components';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';
import { LayoutComposer } from '../../components';

import css from './CustomLandingPage.module.css';

// ─── SVG Icons ────────────────────────────────────────────────
const IconSearch = () => (
  <svg className={css.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// Excavator bucket — detailed side profile with teeth, hinge pin, back curve
const IconBucket = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12c1-3 4-5 7-5h4l2 2h6l4 3v8c0 3-1 5-3 7l-2 2H13l-3-2c-2-2-3-5-3-8v-4l1-3z" fill="currentColor" opacity="0.12"/>
    <path d="M8 12c1-3 4-5 7-5h4l2 2h6l4 3v8c0 3-1 5-3 7l-2 2H13l-3-2c-2-2-3-5-3-8v-4l1-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M10 20h18" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="30" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M32 14h6l3 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13 29v5M17 29v5M21 29v5M25 29v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M11 29h16" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M38 18l3-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Dozer blade — wide curved moldboard with push arms and cutting edge
const IconBlade = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 32c0-5 4-14 20-14s20 9 20 14" fill="currentColor" opacity="0.12"/>
    <path d="M4 32c0-5 4-14 20-14s20 9 20 14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M4 32h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 34h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 18V10l6-4 6 4v8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M24 6v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 24l10-6 10 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <path d="M8 34v4M40 34v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="10" r="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Auger — helical flight screw with hex drive head and pointed tip
const IconAuger = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3h8l2 4H18l2-4z" fill="currentColor" opacity="0.15"/>
    <path d="M20 3h8l2 4H18l2-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M24 7v37" stroke="currentColor" strokeWidth="2.2"/>
    <path d="M15 11c6 0 9 2 9 4s-3 4-9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="currentColor" opacity="0.08"/>
    <path d="M33 19c-6 0-9 2-9 4s3 4 9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="currentColor" opacity="0.08"/>
    <path d="M15 27c6 0 9 2 9 4s-3 4-9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="currentColor" opacity="0.08"/>
    <path d="M33 35c-6 0-9 2-9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M24 44l-2-3h4l-2 3z" fill="currentColor"/>
  </svg>
);

// Grapple — open jaws with hydraulic cylinder and pin mount
const IconGrapple = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="2" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.12"/>
    <path d="M24 9v5" stroke="currentColor" strokeWidth="2.2"/>
    <path d="M14 14h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="34" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 16c-2 6-4 14-3 18c0 2 2 3 3 2l4-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 16c2 6 4 14 3 18c0 2-2 3-3 2l-4-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16l-1 20c0 1 1 2 2 1l5-16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 16l1 20c0 1-1 2-2 1l-5-16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 14v-3M28 14v-3" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
  </svg>
);

// Plow — moldboard plow with 3 bottoms, coulter discs and hitch
const IconPlow = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8h10l2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 8v4h8" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M14 14c3 4 4 10 4 16h-6c0-5 0-10-4-14l6-2z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M24 14c3 4 4 10 4 16h-6c0-5 0-10-4-14l6-2z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M34 14c3 4 4 10 4 16h-6c0-5 0-10-4-14l6-2z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 30h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 34h30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
    <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
    <circle cx="32" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
  </svg>
);

// Rotary mower — flat deck with gear housing, skid shoes, blades visible
const IconMower = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 16V8l-10-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 4l-2 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="6" y="16" width="36" height="12" rx="3" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="18" cy="22" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
    <circle cx="30" cy="22" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
    <path d="M15 22h6M27 22h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 28v4l2 2h4l1-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M31 28v4l2 2h4l1-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 22h-2M44 22h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M18 36h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

// Sprayer — tank on frame with folding boom arms and nozzle drops
const IconSprayer = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="6" width="20" height="16" rx="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M20 6c0-2 2-3 4-3s4 1 4 3" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M24 22v4" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 26h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 26v4M14 26v4M22 26v4M26 26v4M34 26v4M42 26v4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 30l-1 3M14 30l-0.5 3M22 30l-0.2 3M26 30l0.2 3M34 30l0.5 3M42 30l1 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="6" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="14" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="22" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="26" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="34" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="42" cy="34" r="1" fill="currentColor" opacity="0.5"/>
    <path d="M18 14h12" stroke="currentColor" strokeWidth="1.2" opacity="0.3"/>
  </svg>
);

// Skid steer loader — side profile with cab, raised arms and bucket
const IconLoader = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="22" width="22" height="12" rx="2" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="8" y="18" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
    <path d="M10 20h8v4h-8z" fill="currentColor" opacity="0.08"/>
    <circle cx="9" cy="38" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="21" cy="38" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M4 34h22" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M26 28h4v6h-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M26 22l8-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 10h10l2 5H34" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" opacity="0.12"/>
    <path d="M34 10l1-4h8l1 4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M36 6v2M42 6v2" stroke="currentColor" strokeWidth="1.4" opacity="0.4"/>
  </svg>
);

const IconLock = () => (
  <svg className={css.trustSvgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconMapleLeaf = () => (
  <svg className={css.trustSvgIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L9.5 7.5L4 6.5L6.5 11L2 14h5l-1 4l3.5-2.5L12 22l2.5-6.5L18 18l-1-4h5l-4.5-3L20 6.5l-5.5 1L12 2z" />
  </svg>
);

const IconShield = () => (
  <svg className={css.trustSvgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconChat = () => (
  <svg className={css.trustSvgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconStar = () => (
  <svg className={css.starIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconChevronRight = () => (
  <svg className={css.chevronIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Hero Section ──────────────────────────────────────────────
const HeroSection = () => {
  const handleSearch = e => {
    e.preventDefault();
    const input = e.target.elements.keywords;
    if (input?.value) {
      window.location.href = `/s?keywords=${encodeURIComponent(input.value)}`;
    }
  };

  return (
    <section className={css.hero}>
      <div className={css.heroOverlay} />
      <div className={css.heroContent}>
        <p className={css.heroLabel}>CANADA'S MARKETPLACE</p>
        <h1 className={css.heroTitle}>Buy & Sell Used Equipment Attachments</h1>
        <p className={css.heroSubtitle}>
          Construction and farm attachments — direct from sellers across Canada.
        </p>
        <form className={css.heroSearchWrapper} onSubmit={handleSearch}>
          <div className={css.heroSearchInner}>
            <IconSearch />
            <input
              type="text"
              name="keywords"
              className={css.heroSearchInput}
              placeholder="Search for buckets, blades, grapples..."
            />
          </div>
          <button type="submit" className={css.heroSearchButton}>
            Search
          </button>
        </form>
        <div className={css.heroQuickLinks}>
          <span className={css.heroQuickLabel}>Popular:</span>
          <a href="/s?keywords=bucket" className={css.heroQuickLink}>Buckets</a>
          <a href="/s?keywords=grapple" className={css.heroQuickLink}>Grapples</a>
          <a href="/s?keywords=auger" className={css.heroQuickLink}>Augers</a>
          <a href="/s?keywords=plow" className={css.heroQuickLink}>Plows</a>
          <a href="/s?keywords=mower" className={css.heroQuickLink}>Mowers</a>
        </div>
      </div>
    </section>
  );
};

// ─── Quick Category Icons (separated by sector) ─────────────
const CONSTRUCTION_CATS = [
  { icon: IconBucket, label: 'Buckets', search: 'pub_categoryLevel2=buckets' },
  { icon: IconBlade, label: 'Blades', search: 'pub_categoryLevel2=blades' },
  { icon: IconAuger, label: 'Augers', search: 'pub_categoryLevel2=augers' },
  { icon: IconGrapple, label: 'Grapples', search: 'pub_categoryLevel2=grapples' },
  { icon: IconLoader, label: 'Loaders', search: 'pub_categoryLevel2=loaders' },
];

const FARM_CATS = [
  { icon: IconPlow, label: 'Plows', search: 'pub_categoryLevel2=plows' },
  { icon: IconMower, label: 'Mowers', search: 'pub_categoryLevel2=mowers' },
  { icon: IconSprayer, label: 'Sprayers', search: 'pub_categoryLevel2=sprayers' },
];

const QuickCategoryRow = () => (
  <section className={css.quickCatSection}>
    <div className={css.quickCatGroup}>
      <h3 className={css.quickCatGroupTitle}>Construction</h3>
      <div className={css.quickCatScroll}>
        {CONSTRUCTION_CATS.map(cat => (
          <a key={cat.label} href={`/s?${cat.search}`} className={css.quickCatItem}>
            <div className={css.quickCatCircle}>
              <cat.icon />
            </div>
            <span className={css.quickCatLabel}>{cat.label}</span>
          </a>
        ))}
      </div>
    </div>
    <div className={css.quickCatGroup}>
      <h3 className={css.quickCatGroupTitle}>Agriculture</h3>
      <div className={css.quickCatScroll}>
        {FARM_CATS.map(cat => (
          <a key={cat.label} href={`/s?${cat.search}`} className={css.quickCatItem}>
            <div className={css.quickCatCircle}>
              <cat.icon />
            </div>
            <span className={css.quickCatLabel}>{cat.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ─── Category Cards ────────────────────────────────────────────
const CATEGORIES = [
  {
    title: 'Construction Attachments',
    count: 'Buckets, Augers, Grapples, Rippers & more',
    image: 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?auto=format&fit=crop&w=800&q=80',
    searchParam: 'pub_categoryLevel1=construction',
  },
  {
    title: 'Farm Attachments',
    count: 'Plows, Mowers, Sprayers & more',
    image: 'https://images.unsplash.com/photo-1559214337-2bffadf34b3a?auto=format&fit=crop&w=800&q=80',
    searchParam: 'pub_categoryLevel1=farm',
  },
];

const CategoriesSection = () => (
  <section className={css.categoriesSection}>
    <div className={css.sectionHeader}>
      <h2 className={css.sectionTitle}>Shop by Category</h2>
      <NamedLink name="SearchPage" className={css.seeAllLink}>
        See all <IconChevronRight />
      </NamedLink>
    </div>
    <div className={css.categoryGrid}>
      {CATEGORIES.map(cat => (
        <a key={cat.title} href={`/s?${cat.searchParam}`} className={css.categoryCard}>
          <img src={cat.image} alt={cat.title} className={css.categoryCardImage} />
          <div className={css.categoryCardOverlay}>
            <h3 className={css.categoryCardTitle}>{cat.title}</h3>
            <p className={css.categoryCardCount}>{cat.count}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

// ─── Featured Listings (sample product cards) ─────────────────
const SAMPLE_LISTINGS = [
  {
    title: '36" Excavator Bucket — Cat 320',
    price: '$1,200',
    condition: 'Used — Good',
    image: 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?auto=format&fit=crop&w=400&q=80',
    location: 'Alberta',
  },
  {
    title: 'Hydraulic Auger Drive — Universal',
    price: '$2,800',
    condition: 'Used — Excellent',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
    location: 'Ontario',
  },
  {
    title: '72" Root Grapple — Skid Steer',
    price: '$1,650',
    condition: 'Used — Good',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
    location: 'Saskatchewan',
  },
  {
    title: '3-Point Hitch Plow — 3 Bottom',
    price: '$900',
    condition: 'Used — Fair',
    image: 'https://images.unsplash.com/photo-1559214337-2bffadf34b3a?auto=format&fit=crop&w=400&q=80',
    location: 'Manitoba',
  },
];

const FeaturedListings = () => (
  <section className={css.featuredSection}>
    <div className={css.sectionHeader}>
      <h2 className={css.sectionTitle}>Recently Added</h2>
      <NamedLink name="SearchPage" className={css.seeAllLink}>
        Browse all <IconChevronRight />
      </NamedLink>
    </div>
    <p className={css.sectionSubtitle}>New listings from sellers across Canada</p>
    <div className={css.listingsGrid}>
      {SAMPLE_LISTINGS.map((item, i) => (
        <NamedLink key={i} name="SearchPage" className={css.listingCard}>
          <div className={css.listingImageWrap}>
            <img src={item.image} alt={item.title} className={css.listingImage} />
            <span className={css.listingCondition}>{item.condition}</span>
          </div>
          <div className={css.listingInfo}>
            <h3 className={css.listingTitle}>{item.title}</h3>
            <p className={css.listingPrice}>{item.price}</p>
            <p className={css.listingLocation}>{item.location}</p>
          </div>
        </NamedLink>
      ))}
    </div>
    <div className={css.featuredCta}>
      <NamedLink name="NewListingPage" className={css.featuredCtaButton}>
        + List Your Attachment for Free
      </NamedLink>
    </div>
  </section>
);

// ─── Trust Banner ─────────────────────────────────────────────
const TrustBanner = () => (
  <section className={css.trustBanner}>
    <div className={css.trustBannerInner}>
      <div className={css.trustBannerLeft}>
        <h2 className={css.trustBannerTitle}>Canada's Trusted Marketplace</h2>
        <p className={css.trustBannerSubtitle}>
          Buy and sell used construction & farm attachments with confidence
        </p>
      </div>
      <div className={css.trustStats}>
        <div className={css.trustStat}>
          <span className={css.trustStatNumber}>10+</span>
          <span className={css.trustStatLabel}>Provinces</span>
        </div>
        <div className={css.trustStatDivider} />
        <div className={css.trustStat}>
          <span className={css.trustStatNumber}>Free</span>
          <span className={css.trustStatLabel}>To List</span>
        </div>
        <div className={css.trustStatDivider} />
        <div className={css.trustStat}>
          <span className={css.trustStatNumber}>Secure</span>
          <span className={css.trustStatLabel}>Payments</span>
        </div>
      </div>
    </div>
  </section>
);

// ─── Trust Features Grid ──────────────────────────────────────
const TrustBar = () => (
  <section className={css.trustBar}>
    <div className={css.trustBarInner}>
      <div className={css.trustItem}>
        <IconLock />
        <p className={css.trustLabel}>Secure Payments</p>
        <p className={css.trustSublabel}>Powered by Stripe</p>
      </div>
      <div className={css.trustItem}>
        <IconMapleLeaf />
        <p className={css.trustLabel}>Canadian Marketplace</p>
        <p className={css.trustSublabel}>All provinces</p>
      </div>
      <div className={css.trustItem}>
        <IconShield />
        <p className={css.trustLabel}>Buyer Protection</p>
        <p className={css.trustSublabel}>Secure checkout</p>
      </div>
      <div className={css.trustItem}>
        <IconChat />
        <p className={css.trustLabel}>Direct Messaging</p>
        <p className={css.trustSublabel}>Talk to sellers</p>
      </div>
    </div>
  </section>
);

// ─── How It Works ──────────────────────────────────────────────
const STEPS = [
  {
    number: '1',
    title: 'Search & Find',
    description: 'Browse attachments by category or search by keyword. Filter by type and location.',
  },
  {
    number: '2',
    title: 'Connect & Agree',
    description: 'Message the seller directly to ask questions and settle on a price.',
  },
  {
    number: '3',
    title: 'Pay & Receive',
    description: 'Check out securely online. Arrange pickup or delivery to your site.',
  },
];

const HowItWorksSection = () => (
  <section className={css.howItWorksSection}>
    <div className={css.howItWorksInner}>
      <h2 className={css.sectionTitle}>How It Works</h2>
      <p className={css.sectionSubtitle}>Buy or sell in three simple steps</p>
      <div className={css.stepsGrid}>
        {STEPS.map(step => (
          <div key={step.number} className={css.stepCard}>
            <div className={css.stepNumber}>{step.number}</div>
            <h3 className={css.stepTitle}>{step.title}</h3>
            <p className={css.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Testimonials ─────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Mike T.',
    location: 'Alberta',
    text: 'Found a great deal on a 48" bucket for my Cat 308. Seller was easy to deal with and shipping was quick.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    location: 'Ontario',
    text: 'Listed my old plow attachments and had a buyer within a week. Simple process, fair commission.',
    rating: 5,
  },
  {
    name: 'Dave R.',
    location: 'Saskatchewan',
    text: 'Way better than trying to sell on Facebook Marketplace. Buyers here actually know what they are looking for.',
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className={css.testimonialsSection}>
    <h2 className={css.sectionTitle}>What Our Users Say</h2>
    <div className={css.testimonialsGrid}>
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className={css.testimonialCard}>
          <div className={css.testimonialStars}>
            {[...Array(t.rating)].map((_, j) => (
              <IconStar key={j} />
            ))}
          </div>
          <p className={css.testimonialText}>"{t.text}"</p>
          <div className={css.testimonialAuthor}>
            <div className={css.testimonialAvatar}>{t.name[0]}</div>
            <div>
              <p className={css.testimonialName}>{t.name}</p>
              <p className={css.testimonialLocation}>{t.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── CTA Section ───────────────────────────────────────────────
const CTASection = () => (
  <section className={css.ctaSection}>
    <div className={css.ctaInner}>
      <h2 className={css.ctaTitle}>Ready to Buy or Sell?</h2>
      <p className={css.ctaSubtitle}>
        List your attachments for free and reach buyers across Canada.
      </p>
      <div className={css.ctaButtons}>
        <NamedLink name="SearchPage" className={css.ctaButtonPrimary}>
          Browse Listings
        </NamedLink>
        <NamedLink name="NewListingPage" className={css.ctaButtonSecondary}>
          List an Attachment
        </NamedLink>
      </div>
    </div>
  </section>
);

// ─── Main Landing Page ─────────────────────────────────────────
const CustomLandingPage = props => {
  const layoutAreas = `
    topbar
    main
    footer
  `;

  return (
    <LayoutComposer areas={layoutAreas}>
      {layoutProps => {
        const { Topbar, Main, Footer } = layoutProps;
        return (
          <>
            <Topbar as="header">
              <TopbarContainer currentPage="LandingPage" />
            </Topbar>
            <Main as="main" id="main-content">
              <HeroSection />
              <QuickCategoryRow />
              <CategoriesSection />
              <FeaturedListings />
              <TrustBanner />
              <TrustBar />
              <HowItWorksSection />
              <CTASection />
            </Main>
            <Footer>
              <FooterContainer />
            </Footer>
          </>
        );
      }}
    </LayoutComposer>
  );
};

export default CustomLandingPage;
