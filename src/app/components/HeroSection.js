"use client";

import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { checkIcon, playSmIcon, closeIcon } from "@progress/kendo-svg-icons";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hero" className="k-bg-surface k-py-4 k-py-md-10 k-py-lg-25">
    
      <div className="k-d-flex k-d-md-none k-justify-content-center k-mb-4">
        <div
          className="k-pos-relative"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "250px",
            backgroundImage: 'url("/photo-4.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      
      <div className="k-container k-px-4">
    
        <div className="k-d-flex k-flex-row k-gap-5 k-mb-6 k-mb-md-12">
         
          <div className="k-flex-basis-0 k-flex-grow">
            <div className="k-d-flex k-flex-col k-gap-2 k-gap-md-4">
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
                I'm Svitlana, and as a full-stack developer, I create dashboards that help you quickly see what your customers are really doing
              </p>
            </div>
          </div>
          
        
          <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center">
            <div
              className="k-pos-relative"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "400px", 
                backgroundImage: 'url("/photo-4.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>

    
        <div className="k-d-flex k-flex-col k-gap-6 k-gap-md-12">
          <div className="k-d-flex k-flex-col k-flex-sm-row k-align-items-start k-gap-3 k-gap-md-5">
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
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                maxWidth: "560px",
                width: "100%",
                margin: "0 auto",
                backgroundColor: "#000",
              }}
            >
        
              <button
                onClick={() => setShowVideo(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  zIndex: 20,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ×
              </button>
             
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 20,
                }}
              >
                <Button
                  size="small"
                  themeColor="primary"
                  fillMode="solid"
                  onClick={() => setShowVideo(false)}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: "12px",
                    fontWeight: "500",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  Close Video
                </Button>
              </div>
              
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gR7CfFf72cc"
                title="40-Second Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: "none",
                  display: "block"
                }}
              ></iframe>
            </div>
          )}
          
         
          <div className="k-d-none k-d-md-flex k-flex-col k-gap-5">
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
      </div>
    </section>
  );
}