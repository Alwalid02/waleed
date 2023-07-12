import React from 'react'
import Link from "next/link";

function page() {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/6.png" alt="" className="img-fluid" />
      </Link>
    </div>
  )
};

const Logo6 = () => {
    return (
      <div className="brand-logo">
        <Link href="/">
          <img src="/assets/images/logo/4.png" alt="" className="img-fluid" />
        </Link>
      </div>
    );
  };

export default {page,Logo6}