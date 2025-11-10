"use client";
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import Sheading from './sheading'
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../app/context/activeSection';
import { useSectionInView } from '../lib/hooks';
export default function About() {
  const {ref} = useSectionInView("About", 0.7);

  return (
   <motion.section
    ref={ref}
   className='mb-28 max-w-[45rem] text-center  leading-8 sm:mb-40 scroll-mt-28'
   initial={{opacity:0,y:100}}
   animate={{opacity:1,y:0}}
   transition={{delay: 0.175 }}
   id="about"
   >
    <Sheading name='About me'/>
   <p className='mb-3'>
  I recently graduated with a <span className="font-medium">B.Tech in Computer Science and Engineering</span>, 
  specializing in <span className="font-medium">Full-Stack Web Development</span>. 
  With <span className="font-medium">3+ internships</span> in software engineering, 
  my core stack includes <span className="font-medium">React, Node.js, Express.js, and MongoDB</span>, 
  along with experience in <span className="font-medium">TypeScript</span> and <span className="font-medium">Firebase</span>. 
  I aspire to work at the intersection of <span className="italic">technology and ethics</span>, 
  creating systems that are <span className="underline">bias-free, inclusive, and equitable</span>. 
  I’m currently preparing to pursue a <span className="font-medium">Master’s in Computer Science</span> to deepen my expertise and expand my perspective.
</p>

<p>
  <span className="italic">Beyond my professional side</span>, I’m deeply passionate about 
  <span className="font-medium"> fitness, self-expression, and writing</span>. 
  Working out grounds me, fashion fuels my creativity, and reading keeps me questioning the world around me. 
  These passions shape how I build, think, and live—with curiosity, discipline, and authenticity.
</p>
   </motion.section>

  )
}
