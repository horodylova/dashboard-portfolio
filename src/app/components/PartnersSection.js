'use client'

import React from 'react';
import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="k-bg-surface k-pt-24 k-pb-30">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
          Portfolio Highlights
          </h2>
        </div>
        <div className="k-d-flex k-flex-wrap k-flex-col k-flex-md-row k-align-items-center k-p-8 k-gap-10 k-mb-12 k-justify-content-between k-w-full">
          {/* <Image src="/logo-1.svg" alt="Logo 1" width={100} height={50} />
          <Image src="/logo-2.svg" alt="Logo 2" width={100} height={50} />
          <Image src="/logo-3.svg" alt="Logo 3" width={100} height={50} />
          <Image src="/logo-4.svg" alt="Logo 4" width={100} height={50} />
          <Image src="/logo-5.svg" alt="Logo 5" width={100} height={50} />
          <Image src="/logo-6.svg" alt="Logo 6" width={100} height={50} />
          <Image src="/logo-7.svg" alt="Logo 7" width={100} height={50} /> */}
        </div>
      </div>
    </section>
  );
}