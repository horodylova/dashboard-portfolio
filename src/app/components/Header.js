'use client'

import React from 'react';
import Image from 'next/image';
import {
  AppBar,
  AppBarSection,
  Menu,
  MenuItem
} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { menuIcon } from '@progress/kendo-svg-icons';

export default function Header() {
  return (
    <header className="k-d-contents">
      <AppBar
        className="k-pos-relative"
        style={{ boxShadow: 'none' }}
        themeColor="inherit"
      >
        <AppBarSection className="k-container !k-flex-row k-px-4">
          <div className="k-d-flex k-flex-basis-0 k-flex-grow">
            <a className="k-d-flex" href="#">
              <Image src="/logo.svg" alt="Logo" width={128} height={36} />
            </a>
          </div>
          <div className="k-d-none k-d-lg-flex k-flex-basis-0 k-flex-grow k-justify-content-center">
            <Menu>
              <MenuItem text="Home"></MenuItem>
              <MenuItem text="About"></MenuItem>
              <MenuItem text="Solutions"></MenuItem>
              <MenuItem text="Features"></MenuItem>
              <MenuItem text="Pricing"></MenuItem>
              <MenuItem text="Testimonials"></MenuItem>
            </Menu>
          </div>
    
          <div className="k-d-lg-none k-d-flex k-flex-basis-0 k-flex-grow k-justify-content-end">
            <Button svgIcon={menuIcon} icon="menu" themeColor={"primary"} fillMode="flat"></Button>
          </div>
        </AppBarSection>
      </AppBar>
    </header>
  );
}