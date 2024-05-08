'use client';
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    window.location.href = 'exp://192.168.1.26:8081';
  }, []);
  return <div className="flex h-screen w-screen items-center justify-center">Loading...</div>;
};

export default page;
