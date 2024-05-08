'use client';
import Redirect from '@/components/Redirect';

const page = () => {
  return <Redirect url="exp://127.0.0.1:8081?param1=123&param2=value2" />;
};

export default page;
