import { useState } from 'react';

const markets = [
  { category: 'Forex', ticker: 'EURUSD', name: 'Euro vs US Dollar', leverage: '1:500', spread: '0.6', icon: './images/icons/coins/eurusd.svg' },
  { category: 'Metals', ticker: 'XAUUSD', name: 'Gold vs US Dollar', leverage: '1:400', spread: '0.9', icon: './images/icons/coins/xauusd.svg' },
  { category: 'Crypto', ticker: 'BTCUSD', name: 'Bitcoin vs US Dollar', leverage: '1:200', spread: '1.8', icon: './images/icons/coins/btcusd.png' },
  { category: 'Indexes', ticker: 'US30', name: 'Dow Jones Industrial', leverage: '1:200', spread: '1.6', icon: './images/icons/coins/us30.svg' },
  { category: 'Stocks', ticker: 'AAPL', name: 'Apple Inc.', leverage: '1:20', spread: '0.15', icon: './images/icons/coins/aapl.svg' },
  { category: 'Energies', ticker: 'USOIL', name: 'US Crude Oil', leverage: '1:400', spread: '1.2', icon: './images/icons/coins/usoil.svg' },
];
const categories = ['All markets', ...new Set(markets.map(({ category }) => category))];

export default function Liquidity() {
  const [category, setCategory] = useState('All markets');
  const visibleMarkets = category === 'All markets' ? markets : markets.filter((market) => market.category === category);

  return (
    <section id="liquidity-section">
      <div className="liquidity-intro section-intro">
        <span className="badge liquidity-badge">
          <img src="./images/icons/liquidity.svg" alt="" loading="lazy" />Prime Liquidity
        </span>
        <h2 className="liquidity-heading heading-gradient">Deep Liquidity. Direct Access</h2>
        <p className="liquidity-sub">Capitalize on every opportunity with the world's most popular assets.</p>
      </div>
      <div className="liquidity-table gradient-border">
        <span className="gradient-border__fill"></span>
        <span className="liquidity-table__glow"></span>
        <span className="border-shadow"><span className="border-shadow__glow"></span></span>
        <span className="border-shadow__line"></span>
        <span className="border-shadow border-shadow--bottom"><span className="border-shadow__glow"></span></span>
        <span className="border-shadow__line border-shadow__line--bottom"></span>
        <div className="market-filter-bar">
          <div className="market-filters" role="group" aria-label="Market categories">
            {categories.map((option) => (
              <button
                key={option}
                type="button"
                className="market-filter"
                aria-pressed={option === category}
                aria-controls="market-instruments"
                onClick={() => setCategory(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="market-filter-count" role="status">
            {visibleMarkets.length} {visibleMarkets.length === 1 ? 'instrument' : 'instruments'}
          </p>
        </div>
        <div className="liquidity-head">
          <span className="liquidity-head__label">Instruments</span>
          <span className="liquidity-head__label">Leverage</span>
          <span className="liquidity-head__label">Avg. spread (pips)</span>
          <span className="liquidity-head__label">Status</span>
          <span className="liquidity-head__label"></span>
        </div>
        <div id="market-instruments">
          {visibleMarkets.map((market) => (
            <div className="liquidity-row" data-category={market.category} key={market.ticker}>
              <div className="liquidity-instrument">
                <span className="liquidity-instrument__icon">
                  <img src={market.icon} alt="" loading="lazy" />
                </span>
                <span className="liquidity-instrument__text">
                  <span className="liquidity-instrument__ticker">{market.ticker}</span>
                  <span className="liquidity-instrument__desc">{market.name}</span>
                </span>
              </div>
              <span className="liquidity-value">{market.leverage}</span>
              <span className="liquidity-value">{market.spread}</span>
              <span className="liquidity-status"><span className="liquidity-status__dot"></span>Online</span>
              <button
                type="button"
                className="liquidity-category"
                aria-label={`Filter by ${market.category}`}
                aria-pressed={market.category === category}
                aria-controls="market-instruments"
                onClick={() => setCategory(market.category)}
              >
                {market.category}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <p className="liquidity-note">Spreads may vary or widen due to market volatility, news, economic events, market hours, and instrument type.</p>
    </section>
  );
}
