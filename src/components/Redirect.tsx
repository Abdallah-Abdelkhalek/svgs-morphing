import React, { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    // Get the current URL
    const urlParams = new URLSearchParams(window.location.search);
    // Extract the value of the 'redirect' parameter
    const redirectParam = urlParams.get('url');
    if (redirectParam !== null) {
      window.location.href = redirectParam;
    }
  }, []);

  return <div className="flex h-screen w-screen items-center justify-center">Loading...</div>;
};

export default Redirect;
