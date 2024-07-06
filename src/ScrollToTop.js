import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
