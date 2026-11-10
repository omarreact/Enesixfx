import { useEffect, useRef, useState } from 'react';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Liquidity from './sections/Liquidity.jsx';
import Accounts from './sections/Accounts.jsx';
import AccountSteps from './sections/AccountSteps.jsx';
import GenSocial from './sections/GenSocial.jsx';
import AiCoach from './sections/AiCoach.jsx';
import TradeJournal from './sections/TradeJournal.jsx';
import FlexBook from './sections/FlexBook.jsx';
import ClosingCallToAction from './sections/ClosingCallToAction.jsx';
import Footer from './sections/Footer.jsx';
import previews from './page-previews.json';
import { useLandingInteractions } from './useLandingInteractions.js';

function PreviewDialog({ content, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (content) dialog.current.showModal();
  }, [content]);

  return (
    <dialog
      className="preview-dialog"
      aria-labelledby="preview-title"
      ref={dialog}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
    >
      {content && (
        <div className="preview-dialog__body">
          <h2 id="preview-title" className="heading-gradient">{content.title}</h2>
          {content.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
          <button className="btn btn-ghost" type="button" autoFocus onClick={() => dialog.current.close()}>Close</button>
        </div>
      )}
    </dialog>
  );
}

export default function App() {
  const scope = useRef(null);
  const [preview, setPreview] = useState(null);
  useLandingInteractions(scope, setPreview);

  return (
    <div ref={scope} className="landing" id="top">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main className="v2-main" id="main-content" tabIndex={-1}>
        <Hero />
        <Liquidity />
        <Accounts />
        <AccountSteps />
        <GenSocial />
        <AiCoach />
        <TradeJournal />
        <FlexBook />
        <ClosingCallToAction />
      </main>
      <Footer />
      <button className="support-launcher" type="button" aria-label="Help center" aria-haspopup="dialog" onClick={() => setPreview(previews.faq)}>
        <img src="./images/icons/chat_round.svg" alt="" />
      </button>
      <PreviewDialog content={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
