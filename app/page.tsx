import business from '../data/business.json';

const mapsUrl = business.website;
const address = '740 7th Ave, New York, NY 10019';
const reviewNote = '3.9 rating from 757 Google reviews';

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Burger Man home">
            <span className="brand-mark">BM</span>
            <span>{business.name}</span>
          </a>
          <a className="nav-cta" href={mapsUrl} target="_blank" rel="noreferrer">
            Open map
          </a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fast food in Manhattan</p>
            <h1 id="hero-title">Burger Man on 7th Ave.</h1>
            <p className="lead">
              A quick Manhattan stop near Midtown for fast food, directions, and current listing details.
            </p>
            <div className="hero-actions" aria-label="Visit actions">
              <a className="button primary" href={mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a className="button secondary" href="#details">
                Check details
              </a>
            </div>
          </div>

          <aside className="station-card" aria-label="Burger Man location summary">
            <div className="map-tile">
              <span>7th Ave</span>
              <strong>740</strong>
              <span>New York, NY</span>
            </div>
            <div className="card-details">
              <p className="detail-label">Listed location</p>
              <p>{address}</p>
              <p className="detail-label">Google snapshot</p>
              <p>{reviewNote}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="info-band" id="details">
        <div className="info-panel">
          <p className="section-kicker">Before you go</p>
          <h2>Use the live map listing for hours, route, and current business details.</h2>
        </div>
        <a className="button dark" href={mapsUrl} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
      </section>

      <section className="visit-layout" aria-label="Visitor information">
        <div className="visit-copy">
          <p className="section-kicker">What this page can confirm</p>
          <h2>A straightforward fast food listing for Manhattan visitors.</h2>
          <p>
            Burger Man is listed as a fast food restaurant in Manhattan. No direct phone, email, menu,
            or official website was provided with this lead, so this page keeps the next step focused
            on the public map listing.
          </p>
        </div>

        <div className="fact-stack" aria-label="Business facts">
          <div className="fact-row">
            <span>Business</span>
            <strong>{business.name}</strong>
          </div>
          <div className="fact-row">
            <span>Category</span>
            <strong>{business.businessType}</strong>
          </div>
          <div className="fact-row">
            <span>Area</span>
            <strong>Manhattan</strong>
          </div>
          <div className="fact-row">
            <span>Address</span>
            <strong>{address}</strong>
          </div>
        </div>
      </section>

      <footer>
        <span>{business.name}</span>
        <span>{address}</span>
      </footer>

      <a className="mobile-cta" href={mapsUrl} target="_blank" rel="noreferrer">
        Get directions
      </a>
    </main>
  );
}
