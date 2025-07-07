'use client'

import React from 'react';

export default function SkillsSection() {
  return (
    <section className=" k-bg-app-surface k-pt-24">
      <div className="k-container k-gap-5  k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
            Skills
          </h2>
        </div>
        <div className="k-d-grid k-grid-cols-2 k-grid-cols-sm-3 k-grid-cols-md-4 k-grid-cols-lg-7 k-gap-8 k-p-8 k-mb-12 k-w-full k-place-items-center">
          <img src="/nextjs.webp" alt="Next.js" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/reactjs.webp" alt="React.js" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/figma.webp" alt="Figma" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/Kendo UI.png" alt="Kendo UI" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/openAI.jpg" alt="OpenAI" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/postgresql.webp" alt="PostgreSQL" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          <img src="/js.webp" alt="JavaScript" style={{ maxHeight: '60px', objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}