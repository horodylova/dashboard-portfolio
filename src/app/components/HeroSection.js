"use client";

import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { checkIcon, playSmIcon } from "@progress/kendo-svg-icons";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hero" className="k-bg-surface k-py-8 k-py-md-10 k-py-lg-25">
    
      <div className="k-d-flex k-d-md-none k-justify-content-center k-mb-8">
        <div
          className="k-pos-relative"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "400px",
            backgroundImage: 'url("/photo-4.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      
      <div className="k-container !k-flex-row k-gap-5 k-px-4">
        <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-12 k-gap-md-10">
          <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-5 k-gap-sm-6 k-gap-md-12">
            <div className="k-d-flex k-flex-col k-gap-4">
              <h1 className="k-h2 !k-m-0">
                Custom dashboards, smart analytics, zero blind spots
              </h1>
              <p className="k-font-size-lg !k-m-0" style={{
                color: "var(--kendo-color-primary)",
                fontWeight: "500",
                letterSpacing: "0.02em",
                lineHeight: "1.6",
                maxWidth: "90%",
                padding: "0.5rem 0",
                borderLeft: "3px solid var(--kendo-color-tertiary)",
                paddingLeft: "1rem",
                marginLeft: "-1rem",
                transition: "all 0.3s ease",
              }}>
                I'm Svitlana, and I create dashboards that help you quickly see what your customers are really doing
              </p>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-align-items-start k-gap-5">
              <a
                href="https://www.upwork.com/freelancers/svitlanah11?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="large"
                  themeColor="primary"
                  className="!k-line-height-md"
                >
                  Review My Data
                </Button>
              </a>
              <Button
                size="large"
                icon="play-sm"
                themeColor="primary"
                svgIcon={playSmIcon}
                fillMode="outline"
                className="!k-line-height-md"
                onClick={() => setShowVideo(true)}
              >
                Watch 40s Demo
              </Button>
            </div>
            {showVideo && (
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  maxWidth: 560,
                  margin: "32px auto 0",
                }}
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/gR7CfFf72cc"
                  title="40-Second Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="k-d-flex k-flex-col k-gap-5">
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">
                  Data Security & NDA Friendly
                </div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Fast Delivery</div>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">
                  Ongoing Support After Delivery
                </div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">
                  Personalised Dashboard Audit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center">
          <div
            className="k-pos-relative"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "600px",
              backgroundImage: 'url("/photo-4.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
