'use client'

import { LoadingScreen } from '@/layout/loader/LoadingScreen';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Divide } from 'react-feather'

export default function Home() {
  const router =useRouter();

  useEffect(() => {
    router.push('home');
  }, []);

  return (
    <div><LoadingScreen /></div>
  )
}
