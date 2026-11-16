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

// ─── Category Icon Images (from reference) ─────────────────
const CAT_IMAGES = {
  buckets: 'data:image/jpeg;base64,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',
  blades: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1EfDDwSqso8N6fhuo8s8/rRH8MfBUTbk8N6eD0/1Z/wAa62igLnI/8Ku8EZz/AMI1p+f+uZ/xqRvht4NeERN4dsTGOQvlnA/WuqopWQ7s5eD4deEbaVZINAso3X7pVSCP1rTvvDejakkKXunQTrC4eMSDO1h0IrVpKLILs58eBfDC6k2ojRbQXjEsZgp3Enrzmqo+GngwTed/wjlh5m7du8s5z1z1rq6KLBdnK3Pw28G3dw88/h2wklc5ZjHyT+dRn4XeCDj/AIprT+P+mZ/xrrqKYgooooAKjeZEOOregqOaUliiHGPvN/SogABgCgCUzv2RR9TSefIOqKfoaZS0ATLOrHDZU+hqWqZwRg06OUxnDHKf+g//AFqALVFFFABTJX8uMsOvQfWn1Bcn5ox7k0AVXmggKrJNGhPQO4BP51W1HVrXS9MuL+VjLHAu4pAQ7tzjAGeTzXA/GnS4rjw3Z6pgCWzuVjLdyknGP++gDXi/luv3Hce4YigD6n0bV7bW9Liv7ZZERyRsmXa6kHBBFWZ51t7eW4kyI4kLufQAZNfJwa8ByLu5H0lb/GpReamFKjUbzaRgjz2wfwzQB9IeG/GWm+KJ7qGyjuEktgpcTKBkN6YJroOvb9K+UYdR1e2cyQandxPjG5JSDj0zVxPFfimH7mv6h+MxNAH1RbsdpjPVemfSpq474dXN3deEdLur6d57i4R2Z3OSeeP5V2NABUFwOYz7kVPTJkMkRUHB6g+9AHn3xW8ubwf9g3ASXNzFgdSFVtxOPTj9a8qj0SFuBMB9eK9j1fwg2r3jXTancI54C7QQo9BxVAeA7uIfutYB/wB+AGgDzWPwysnSeP8AMVIfBs7fcZT9BXob+ENbXG250+YDs8JGf1qEeGtciHz6dp0vPVJChx+VAHnr+DL8f8s/0pg8I3q8tFXpC6dqsAIfRZfbybvp/KmN9vXIbS9UT6Shh/M0AdJ4GiMHhnS7Zlw0ETK3sdxFdVXMeEmugkyTWs8SE7lebGT+XvmunoAKKKKAIJojkug57j1qEEHpV2o3hRzno3qKAK9LTzA46Op+oo8iQ9WUfQUARn36UscXmnJGI/8A0L/61TLbqDliXPv0/KpaACiiigD/2Q==',
  augers: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0/wD4Vb4I5z4bsDnuUJ/rTl+GHgpVKjw3YAHqNh/xrraKAucj/wAKv8E7Cn/CN2G0nONh6/nTT8LPA5/5lqw/74P+NdhRQBxx+FXgY/8AMtWP/fLf408fC/wUo2jw7ZYxjo3T069K66igDkV+F/glDlPDlip9VUg/zp7/AAz8GSQpE/h2xZEJZQUJwT1PX2FdXRRYLnLWvw58IWM4mtdAs4ZR0ZFIP86lv/AXhbU5C95olpMxO47lOM+uAcV0lFKyHdhRRRTEFRvMiHHVvQVHNKSSiHAHVv6CowuBwOKAJDcOeiKPqaQTyDqin6Gs3WtWg0PRrrUrjBjt03Y3BdxzgDJ9zWZ4O8VweLNMkuY1RJIZNjqjZHqCM84+tAHUrOjHByp9DUtUyARg8inxymMhWOUPQntQBZooooAKjmcpGSOp4FSVXuDl0X2JoAjAwMUuaSjNAGT4rgt7nwnqsVzGkkZtXO1xkZAyPxyK5f4Q2cFv4LE0cSLJNOxdwOWxjGT7Vm/EvQmliu9Rj8QKrxoZPsNxMMAAdEGQR9MV574T8Z6n4dCxxzyy7treQPuNkdNv9etAH0lQRkYNMhkMsEchQoXQMVPVSRnFSUATQPuj2k5K8VLVaDiYj1WrNABVe4GHQ/UVYpkyF4yB1HIoArUUA5GaKAPEvi2sAvrgzeFJ1dh8upiT5X4+9hR/M1x3gLV08MXS3c2nxXQyGZZDyvup9a9V+IvjybSLe90ldAup454Wi+1SMFi+YYyODnGe+K8h8CPLFrlpKNPF7Ksy7oZBvBGeuOg45oA+po3SSJJEyFdQwBHPIzTqQcjNBOBk9KAHwDMx9lqzUVuuE3EYLc/h2qWgAooooAgliIJdBkHqB/OogQRkHNXKjeFHOeVb1FAHPeJbS5u9GuIrOGKWZ0KhZBwQRiuY+Gvgqbw5poa+jVLnpgHPH1r0M28nZ1P1FAt5O7oPoKAGEgDJPFOjiMpDMMIOg9akS3RTliXPv/hU1ABRRRQB/9k=',
  grapples: 'data:image/jpeg;base64,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',
  plows: 'data:image/jpeg;base64,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',
  mowers: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Nfhp4LQfL4a04YOf9TTP+FX+CN27/hGtPz1/1Z/xrrqKLDuzlD8M/BjSiU+HLDeOh2H/ABpsvwx8FTPuk8OWLN6lD/jXW0UrILs5I/DLwWUCnw5YbR2CEf1pY/hn4MhRkj8PWSq3UBTz+tdZRTsF2cj/AMKv8E5J/wCEasCT6xk/1pf+FX+CSmz/AIRrT9uc/wCrP+NdbRQK5yH/AAq3wQB/yLWn/wDfs/41I3w08GPEIj4csNg6L5Z/xrq6KAuFFFFABUTzohxyzegpkspYlFOAOpH8qjCgDAGKAHm4kPRFH1NKJ5O6KfoaZRQBOk6Mccq3oakqmQCMEcU+KUoQjnKngMe3saALNFFFABUczlIzj7x4FSVXuD86D2JoAjAwABS4rlvGXjnT/BiWguree5nui3lwwEA7V6sSe2SBXlDfFi61HxCmpTgW0MGVtrc7mjjJ4LNg/M314HpQB7jq+t6boVoLrU7pbeIttUkElj1wAOTxUdn4j0W/jtnttSt3+0ruhBbaWHToe/tXhuueLda8ST2cvn2E62UxntxEAG3Y7juPb86S08bapFAmmanYWN3po37rVoFQDfkkhl+6cngjpQB9DUhAYEHpXnHgHx9BPo5s9dujDcwStHDJKC2+IY27nA5YdN3GcZr0O3ura7j8y2uIp06bo3DAflQBcgcsmG+8pwakqtAcTMPVQas0AFV7nhkb6irFMmTfGQOo5FAHlHxS0CLxEbCdJ54J7MSJkQGRWVsHsQQQR+prw7UNOl0+4aOeOTaD8svlkA/4V9eFEkHzIDn1FZ934f0u+UrPZxtn/ZoA+QZ9wmjkgJLKCQyHkH6iujtfEeoXtoqpbRy3ScSSsACR2Jz3r23U/hB4c1Al44mt5D/FGcVi2vwSWG8Z21uTyG6hIgrnnuaAPLJk1id1Ml8kURHManH8sV2Pw+m1nQtT82xEM8FzsjmWV8Aqp9eoIBOCM+lej6f8LvD9gwcxyTv/AHpWzXT22k2FlHiK2jUAelKwXNC0dZZGdTlQoAP1q3UNrF5UPTBY7iKmpgFFFFAFeWIgl0Gc9QP51GCCMirlRvCjnOCreooAr0tPNvJ2dT9RQLdz1dR9BQBGSAMk4FPiiLkO4wo5APepEgRTk5ZvU1LQAUUUUAf/2Q==',
  sprayers: 'data:image/jpeg;base64,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',
  tiltRotators: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyKiiigAqxBZT3KF41G0HGScZquOD0z7V1ERRoEMY2qV4x2qZOw0rmJ/ZV0egT/vqg6VdDqEH/AAKtGyspLWWR3l3BugHf3NOv7N7sJsk27TyD0+tLmHYyJrC4gj8x0G0dSDnFVq6kKEhCudwVcEnvXMOVMjFRhSeB6CnF3E1YbRRRVCCiiigArZ0y5kaFYRCzbTgNnj6Vm2ls11OEGcd66QeVZQBIx8/oBxipk+hSHLHIRlgq/U0pjkH3QrfRqg2yPzJJjPYUBJE5jkJI7HioGVNRuZY4HjMLDcMb88CsOurVo7qIxSj5+g44xXPX1obScr/CelVF9BMq0UUVZIUUUUAbmiRAI0hx61bU75XkPOOlVtEcFGTvVlPlkeM9TyKze5aJoo3klWONVLldzM3RB2OO5NLLFJFII5VTJBKOnAbHUYPQ0RSvFKJYwrHbsdGONwByMHsaWaaSaVZJFVAikJGG3EE9STQBWk+UpIODnBqHWYw9uH4z1qaXnYg6k5qPV3CWyp3/AM/4UdQOdooorQgKKKKALdjcm3mB7d66F0juofNjb5+OB0xXJ1taYlwIVlEgVSThSKiS6lJlzzCvEiHPqKUSgnCIx9z2qcSORh1RvegyMB8iIKm4xscawoZpmO/PArB1G7+0THB+XtV/UUuHgeTzAQo5UDrWETk1UV1E2FFFFWSFFFFAABk4ziuoiVYoEVeVVeMd65erdtqM1tH5a7WXsG7VMlcaZq2d+LuV08srt5B/xpb29+x7Pk3FvwrNXVpUJKwxAnk4HWhtWlcAPDEwHPIpco7m0Cs0IJHyuvIPvXMOoSRlBBAOMjvVqfU554jGQqA9dveqdOKsJsKKKKoR/9k=',
};

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
  { image: CAT_IMAGES.buckets, label: 'Buckets', search: 'pub_categoryLevel2=buckets' },
  { image: CAT_IMAGES.blades, label: 'Blades', search: 'pub_categoryLevel2=blades' },
  { image: CAT_IMAGES.augers, label: 'Augers', search: 'pub_categoryLevel2=augers' },
  { image: CAT_IMAGES.grapples, label: 'Grapples', search: 'pub_categoryLevel2=grapples' },
  { image: CAT_IMAGES.tiltRotators, label: 'Tilt Rotators', search: 'pub_categoryLevel2=tilt-rotators' },
];

const FARM_CATS = [
  { image: CAT_IMAGES.plows, label: 'Plows', search: 'pub_categoryLevel2=plows' },
  { image: CAT_IMAGES.mowers, label: 'Mowers', search: 'pub_categoryLevel2=mowers' },
  { image: CAT_IMAGES.sprayers, label: 'Sprayers', search: 'pub_categoryLevel2=sprayers' },
];

const QuickCategoryRow = () => (
  <section className={css.quickCatSection}>
    <div className={css.quickCatGroup}>
      <h3 className={css.quickCatGroupTitle}>Construction</h3>
      <div className={css.quickCatScroll}>
        {CONSTRUCTION_CATS.map(cat => (
          <a key={cat.label} href={`/s?${cat.search}`} className={css.quickCatItem}>
            <div className={css.quickCatCircle}>
              <img src={cat.image} alt={cat.label} className={css.quickCatPhoto} />
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
              <img src={cat.image} alt={cat.label} className={css.quickCatPhoto} />
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
    count: 'Buckets, Blades, Augers, Grapples, Tilt Rotators & more',
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
