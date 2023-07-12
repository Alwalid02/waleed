import React from 'react'
import Link from "next/link";
import NavbarOne from '@/layout/headers/page';
import BodyContent from '@/components/home/page';
function index() {
  return (
    <>
    <NavbarOne />
    <BodyContent />
    </>
    
  )
}

export default index