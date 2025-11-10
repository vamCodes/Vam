"use client"

import React, { useRef } from "react"
import { motion, useTransform } from "framer-motion"
import { StaticImageData } from "next/image"
import Image from "next/image"
import { useScroll } from "framer-motion"

type ProjectCardProps = {
  title: string
  description: string
  tags: readonly string[]
 imageUrl: string | StaticImageData;
  link?: string // optional link
}

export default function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  // Card content
  const CardContent = (
    <div className="bg-gray-100 dark:bg-white/10 rounded-3xl overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition w-full">
      {/* Image */}
      <div className="w-full aspect-video relative overflow-hidden rounded-t-3xl">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={16}
          height={9}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-black/[0.7] text-white text-[0.7rem] uppercase px-3 py-1 rounded-full dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group my-8 flex justify-center w-full max-w-[1100px] mx-auto"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full block">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  )
}