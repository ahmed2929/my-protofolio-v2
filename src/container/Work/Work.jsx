/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    
    if(index>=0&&index<=works.length-1){
      console.debug(index)
      setCurrentIndex(index);
    }
    
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
    {
      works.length&&(
        <>
        <h2 className="head-text"> <span>selected projects</span></h2>

        <div className="app__work-filter">
         
        </div>
  
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          
            <div className="app__work-item app__flex" >
              <div
                className="app__work-img app__flex"
              >
                {
                  works[currentIndex].imgUrl?<img src={urlFor(works[currentIndex].imgUrl)} alt={works[currentIndex].name} />:
                  <img src="https://www.elsevier.com/__data/assets/image/0009/899451/RA-review-articles-banner-1200-x-600.jpg" alt={work.name} />
                }
                
  
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
              
                  <a href={`//${works[currentIndex].arcticleLink}`} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
  
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{works[currentIndex].title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{works.description}</p>
  
                
              </div>
            </div>
            
          
        </motion.div>
        <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick( currentIndex - 1)}>
                <HiChevronLeft />
              </div>
  
              <div className="app__flex" onClick={() => handleClick( currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
            </>
      )
    }
    
    
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
