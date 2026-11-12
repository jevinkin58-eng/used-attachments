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

// Excavator bucket — solid silhouette with teeth and hinge pin
const IconBucket = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Excavator bucket - clear scoop shape */}
    <path d="M8 8 L8 36 C8 40, 10 42, 14 42 L50 42 C54 42, 56 40, 56 36 L56 24 L44 8 Z" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M8 36 L56 36" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    {/* Teeth along the bottom */}
    <path d="M14 42 L12 52 L18 52 L20 42 M24 42 L22 52 L28 52 L30 42 M34 42 L32 52 L38 52 L40 42 M44 42 L42 52 L48 52 L50 42" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    {/* Pin holes */}
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
    <circle cx="52" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
  </svg>
);

// Dozer blade — wide curved blade pushing forward
const IconBlade = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Blade face */}
    <path d="M4 18 L4 44 L60 44 L60 18 C50 14, 42 12, 32 12 C22 12, 14 14, 4 18 Z" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Cutting edge */}
    <rect x="2" y="44" width="60" height="6" rx="1" fill="currentColor" opacity="0.55" stroke="currentColor" strokeWidth="2"/>
    {/* Push arms */}
    <path d="M18 24 L28 6 L36 6 L46 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    {/* Ribs */}
    <line x1="16" y1="20" x2="16" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <line x1="32" y1="16" x2="32" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <line x1="48" y1="20" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* Skid shoes */}
    <rect x="6" y="50" width="10" height="6" rx="2" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="48" y="50" width="10" height="6" rx="2" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Auger — clear drill/spiral shape
const IconAuger = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Drive head / motor housing */}
    <rect x="20" y="2" width="24" height="14" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5"/>
    {/* Central shaft */}
    <rect x="29" y="16" width="6" height="38" fill="currentColor" opacity="0.45" stroke="currentColor" strokeWidth="1.5"/>
    {/* Spiral flights */}
    <path d="M29 20 C16 22, 14 26, 29 28" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <path d="M35 24 C48 26, 50 30, 35 32" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <path d="M29 32 C16 34, 14 38, 29 40" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <path d="M35 36 C48 38, 50 42, 35 44" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <path d="M29 44 C16 46, 14 50, 29 52" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
    {/* Drill tip */}
    <path d="M29 54 L32 62 L35 54" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

// Grapple — clear claw/pincer shape
const IconGrapple = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Mount plate */}
    <rect x="20" y="2" width="24" height="10" rx="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5"/>
    {/* Hydraulic cylinder */}
    <rect x="28" y="12" width="8" height="12" rx="2" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2"/>
    {/* Cross bar */}
    <rect x="10" y="24" width="44" height="6" rx="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2"/>
    {/* Left jaw */}
    <path d="M14 30 L6 52 C5 56, 8 58, 12 56 L24 36" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Right jaw */}
    <path d="M50 30 L58 52 C59 56, 56 58, 52 56 L40 36" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Jaw tips (teeth) */}
    <circle cx="8" cy="54" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="56" cy="54" r="3" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Plow — 3-bottom moldboard with coulter discs and hitch
const IconPlow = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Hitch arm / drawbar */}
    <path d="M6 8 L20 8 L24 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.5"/>
    {/* Frame bar */}
    <rect x="12" y="14" width="44" height="5" rx="2" fill="currentColor" opacity="0.45" stroke="currentColor" strokeWidth="2"/>
    {/* Plow blades - bold curved shares */}
    <path d="M16 19 C20 26, 22 36, 22 48 L14 48 C14 38, 12 28, 8 22 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M30 19 C34 26, 36 36, 36 48 L28 48 C28 38, 26 28, 22 22 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M44 19 C48 26, 50 36, 50 48 L42 48 C42 38, 40 28, 36 22 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Cutting edge */}
    <rect x="10" y="48" width="44" height="5" rx="1.5" fill="currentColor" opacity="0.55" stroke="currentColor" strokeWidth="2"/>
    {/* Coulter discs */}
    <circle cx="18" cy="58" r="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="34" cy="58" r="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="58" r="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Rotary mower — deck with hitch arm and skid shoes
const IconMower = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 20 L32 10 L18 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M18 4 L14 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <rect x="6" y="20" width="52" height="18" rx="4" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="22" cy="29" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.4"/>
    <circle cx="42" cy="29" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.4"/>
    <line x1="17" y1="29" x2="27" y2="29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="37" y1="29" x2="47" y2="29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M10 38 L10 48 L16 50 L20 50 L22 46 L22 38" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M42 38 L42 48 L48 50 L52 50 L54 46 L54 38" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

// Tilt Rotator — rotating coupler with tilt mechanism
const IconTiltRotator = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Top mount plate */}
    <rect x="14" y="2" width="36" height="10" rx="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5"/>
    {/* Rotation bearing ring */}
    <circle cx="32" cy="28" r="14" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="3"/>
    <circle cx="32" cy="28" r="8" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="2"/>
    {/* Connecting arms */}
    <path d="M20 12 L20 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M44 12 L44 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    {/* Bottom adapter plate */}
    <rect x="16" y="44" width="32" height="10" rx="3" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5"/>
    {/* Tilt arrows */}
    <path d="M8 22 C6 28, 8 34, 12 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M10 36 L12 38 L14 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M56 22 C58 28, 56 34, 52 38" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M54 36 L52 38 L50 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Pin holes */}
    <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.5"/>
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
  { icon: IconTiltRotator, label: 'Tilt Rotators', search: 'pub_categoryLevel2=tilt-rotators' },
];

const FARM_CATS = [
  { icon: IconPlow, label: 'Plows', search: 'pub_categoryLevel2=plows' },
  { icon: IconMower, label: 'Mowers', search: 'pub_categoryLevel2=mowers' },
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
    count: 'Plows, Mowers & more',
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
