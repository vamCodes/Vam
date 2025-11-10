"use client"
import React from 'react'
import Sheading from './sheading'
import { myWorkData } from '../lib/data'
import ProjectCard from "../components/project"
import { useSectionInView } from '../lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <section ref={ref} id="projects" className='scroll-mt-28'>
      <Sheading name="My Projects and Work" />

      <div className="flex flex-col items-center gap-12">
        {myWorkData.map((work, index) => (
          <ProjectCard
            key={index}
            title={work.title}
            description={work.description}
            tags={work.tags}
            imageUrl={work.imageUrl}
            link={work.link}
          />
        ))}
      </div>
    </section>
  )
}