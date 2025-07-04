'use client'

import React, { useState, useEffect } from 'react';
import { TileLayout } from '@progress/kendo-react-layout';
import { Pager } from '@progress/kendo-react-data-tools';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [dataState, setDataState] = useState({
    skip: 0,
    take: 3,  
  });
  const [tilePositions, setTilePositions] = useState([]);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        createTilesAndPositions(data.projects);
      })
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  const createTilesAndPositions = (projectsData) => {
    const newTiles = [];
    const positions = [];

    projectsData.forEach((project, index) => {
      const isVertical = project.image.includes('-v');
      const isGithubImage = project.image === '/github-v.png';

      newTiles.push({
        header: "",  
        body: (
          <div className="project-tile">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
                <h3 className="k-h5 k-color-primary" style={{ textDecoration: 'none' }}>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        ),
      });

       const positionInGroup = index % 3;

      let position;
      if (positionInGroup === 0) {
        position = {
          col: 1,
          row: 1,  
          colSpan: 1,
          rowSpan: 2,
        };
      } else if (positionInGroup === 1) {
        position = {
          col: 2,
          row: 1, 
          colSpan: 2,
          rowSpan: 1,
        };
      } else {
        position = {
          col: 2,
          row: 2,  
          colSpan: 2,
          rowSpan: 1,
        };
      }

      positions.push(position);
    });

    setTiles(newTiles);
    setTilePositions(positions);
  };

   const getCurrentPageItems = () => {
    const currentTiles = tiles.slice(dataState.skip, dataState.skip + dataState.take);
    
     const currentPositions = currentTiles.map((_, index) => {
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

  const handlePageChange = (e) => {
    setDataState({
      ...dataState,
      skip: e.skip,
      take: e.take,
    });
  };

  const { currentTiles, currentPositions } = getCurrentPageItems();

  return (
    <section id="portfolio" className="k-bg-app-surface k-py-8 k-py-md-10 k-py-lg-25"> 
    <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">Portfolio Highlights</h2>
          <p className="k-text-center k-color-subtle !k-m-0">
            Explore my recent projects showcasing data visualization and dashboard design
          </p>
        </div>

        <div className="projects-grid-container">
          <div style={{ minHeight: 'auto' }}>
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

          {projects.length > dataState.take && (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
              <Pager
                skip={dataState.skip}
                take={dataState.take}
                total={projects.length}
                onPageChange={handlePageChange}
                className="pager-container"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}