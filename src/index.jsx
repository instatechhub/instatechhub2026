import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mlogo from './assest/homeimage/mlogo.png';

// Set the mobile favicon / apple-touch-icon at runtime using the bundled asset URL.
const setFaviconForMobile = () => {
  try {
    const iconHref = mlogo;

    const relIcon = document.querySelector("link[rel~='icon']");
    if (relIcon) relIcon.href = iconHref;
    else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = iconHref;
      document.head.appendChild(link);
    }

    let apple = document.querySelector("link[rel='apple-touch-icon']");
    if (apple) apple.href = iconHref;
    else {
      const link = document.createElement('link');
      link.rel = 'apple-touch-icon';
      link.href = iconHref;
      document.head.appendChild(link);
    }
  } catch (e) {
    // fail silently in environments without document
    // eslint-disable-next-line no-console
    console.warn('setFaviconForMobile error', e);
  }
};

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setFaviconForMobile);
  } else {
    setFaviconForMobile();
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
