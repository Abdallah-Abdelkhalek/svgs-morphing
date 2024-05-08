import React, { FC, useEffect } from 'react';
interface RedirectProps {
  url: string;
}
const Redirect: FC<RedirectProps> = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, []);
  return <div className="flex h-screen w-screen items-center justify-center">Loading...</div>;
};

export default Redirect;
