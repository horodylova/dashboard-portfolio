'use client'

import React, { useState, useEffect, useRef } from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { arrowLeftIcon, arrowRightIcon } from '@progress/kendo-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const tileContainerRef = useRef(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        createTiles(data.projects);
      })
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const createTiles = (projectsData) => {
    const newTiles = [];

    projectsData.forEach((project) => {
      const isVertical = project.image.includes('-v');
      const isGithubImage = project.image === '/github-v.png';

      newTiles.push({
        header: "",  
        body: (
          <div className="project-tile">
            <div className={`project-image-container ${isVertical ? 'vertical' : 'horizontal'}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={isGithubImage}
                style={{ objectFit: 'contain', padding: '10px' }}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="k-h5 k-color-primary" style={{ textDecoration: 'none' }}>{project.title}</h3>
              </Link>
              <p>{project.description}</p>
            </div>
          </div>
        ),
      });
    });

    setTiles(newTiles);
  };

  const getCurrentPageItems = () => {
    if (projects.length === 0 || tiles.length === 0) {
      return { currentTiles: [], currentPositions: [] };
    }
    
    const itemsPerPage = isMobile ? 1 : 3;
    const startIndex = currentIndex % projects.length;
    
    let currentTiles = [];
    
    if (isMobile) {
      currentTiles = [tiles[startIndex]];
    } else {
      currentTiles = [];
      for (let i = 0; i < itemsPerPage; i++) {
        const index = (startIndex + i) % projects.length;
        currentTiles.push(tiles[index]);
      }
    }
    
    const currentPositions = currentTiles.map((_, index) => {
      if (isMobile) {
        return {
          col: 1,
          row: 1,
          colSpan: 3,
          rowSpan: 2,
        };
      }
      
      const positionInGroup = index % 3;
      
      if (positionInGroup === 0) {
        return {
          col: 1,
          row: 1,
          colSpan: 1,
          rowSpan: 2,
        };
      } else if (positionInGroup === 1) {
        return {
          col: 2,
          row: 1,
          colSpan: 2,
          rowSpan: 1,
        };
      } else {
        return {
          col: 2,
          row: 2,
          colSpan: 2,
          rowSpan: 1,
        };
      }
    });
    
    return { currentTiles, currentPositions };
  };

  const goToPrevious = () => {
    const itemsPerPage = isMobile ? 1 : 3;
    const totalItems = projects.length;
    setCurrentIndex((currentIndex - itemsPerPage + totalItems) % totalItems);
  };

  const goToNext = () => {
    const itemsPerPage = isMobile ? 1 : 3;
    const totalItems = projects.length;
    setCurrentIndex((currentIndex + itemsPerPage) % totalItems);
  };

  const { currentTiles, currentPositions } = getCurrentPageItems();

  return (
    <section id="portfolio" className=" k-bg-surface k-py-8 k-py-md-10 k-py-lg-25"> 
    <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">Portfolio Highlights</h2>
          <p className="k-font-size-lg k-text-start k-text-md-center k-color-subtle !k-m-0">
            Explore my recent projects showcasing data visualization and dashboard design
          </p>
        </div>

        <div className="projects-grid-container">
          <div 
            style={{ minHeight: 'auto' }}
            ref={tileContainerRef}
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchMove={isMobile ? onTouchMove : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {projects.length > 0 && tiles.length > 0 && (
              <TileLayout
                columns={3}
                rowHeight={250}
                gap={{ rows: 10, columns: 10 }}
                items={currentTiles}
                positions={currentPositions}
                className="projects-tile-layout"
              />
            )}
          </div>

          {projects.length > (isMobile ? 1 : 3) && (
            <div className="k-d-flex k-justify-content-center k-align-items-center k-gap-4 k-mt-5">
              <Button
                themeColor="tertiary"
                fillMode="solid"
                onClick={goToPrevious}
                aria-label="Previous projects"
              >
                <SvgIcon icon={arrowLeftIcon} />
              </Button>
              <span className="k-color-primary k-font-weight-bold" style={{ fontSize: '1rem', padding: '0 0.5rem', backgroundColor: 'var(--kendo-color-primary-subtle)', borderRadius: 'var(--kendo-border-radius-md)' }}>
                {isMobile ? `${currentIndex + 1} of ${projects.length}` : `${currentIndex + 1} - ${Math.min(currentIndex + 3, projects.length)} of ${projects.length}`}
              </span>
              <Button
                themeColor="tertiary"
                fillMode="solid"
                onClick={goToNext}
                aria-label="Next projects"
              >
                <SvgIcon icon={arrowRightIcon} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}