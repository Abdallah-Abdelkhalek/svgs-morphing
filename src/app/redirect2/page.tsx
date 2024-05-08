'use client';
import Redirect from '@/components/Redirect';

const page = () => {
  return <Redirect url="exp://192.168.1.26:8081?param1=123&param2=value2" />;
};

export default page;
