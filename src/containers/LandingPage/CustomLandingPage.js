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

const IconBucket = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h18l-2 13H5L3 7z" />
    <path d="M3 7l1-3h16l1 3" />
  </svg>
);

const IconBlade = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconAuger = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M2 12c3 0 5-2 5-5" />
    <path d="M22 12c-3 0-5 2-5 5" />
  </svg>
);

const IconGrapple = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v6" />
    <path d="M4 14l4-6h8l4 6" />
    <path d="M4 14c0 4 3.5 8 8 8s8-4 8-8" />
  </svg>
);

const IconPlow = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <path d="M4 20L8 4h2l6 16" />
    <path d="M20 20l-4-8" />
  </svg>
);

const IconMower = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="16" height="8" rx="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="14" cy="19" r="2" />
    <path d="M18 12h4" />
  </svg>
);

const IconSprayer = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="M8 6h8v4a4 4 0 0 1-8 0V6z" />
    <path d="M12 14v4" />
    <path d="M8 22h8" />
    <path d="M7 2l2 2" />
    <path d="M17 2l-2 2" />
  </svg>
);

const IconLoader = () => (
  <svg className={css.quickCatIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="14" width="14" height="6" rx="1" />
    <circle cx="5" cy="22" r="2" />
    <circle cx="11" cy="22" r="2" />
    <path d="M15 14V8l6 6h-6z" />
    <path d="M15 8h6v6" />
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

// ─── Quick Category Icons (horizontal scroll row) ─────────────
const QUICK_CATS = [
  { icon: IconBucket, label: 'Buckets', search: 'pub_categoryLevel2=buckets' },
  { icon: IconBlade, label: 'Blades', search: 'pub_categoryLevel2=blades' },
  { icon: IconAuger, label: 'Augers', search: 'pub_categoryLevel2=augers' },
  { icon: IconGrapple, label: 'Grapples', search: 'pub_categoryLevel2=grapples' },
  { icon: IconPlow, label: 'Plows', search: 'pub_categoryLevel2=plows' },
  { icon: IconMower, label: 'Mowers', search: 'pub_categoryLevel2=mowers' },
  { icon: IconSprayer, label: 'Sprayers', search: 'pub_categoryLevel2=sprayers' },
  { icon: IconLoader, label: 'Loaders', search: 'pub_categoryLevel2=loaders' },
];

const QuickCategoryRow = () => (
  <section className={css.quickCatSection}>
    <div className={css.quickCatScroll}>
      {QUICK_CATS.map(cat => (
        <a key={cat.label} href={`/s?${cat.search}`} className={css.quickCatItem}>
          <div className={css.quickCatCircle}>
            <cat.icon />
          </div>
          <span className={css.quickCatLabel}>{cat.label}</span>
        </a>
      ))}
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
    count: 'Plows, Mowers, Seeders, Sprayers & more',
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
              <TestimonialsSection />
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
