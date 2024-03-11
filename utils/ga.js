import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-7RZ7NKX2DM');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}