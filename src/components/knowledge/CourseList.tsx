'use client'

import { Pagination } from 'antd'
import { useState } from 'react'

import { Asset } from '@/utils/type'

import CourseArticle from '../common/Article/Course'

type Course = {
  id: number
  title: string
  description: string
  slug: string
  thumbnail: Asset
}

type Props = {
  courses: Course[]
  titleCourses: string | undefined
}

const CourseList = ({ courses, titleCourses }: Props) => {
  return (
    <div className='flex w-full flex-col justify-start gap-6'>
      <h2 className='text-primary text-left text-2xl !font-bold'>{titleCourses}</h2>
      {courses.map((course, idx) => (
        <CourseArticle key={idx} {...course} className='h-auto' />
      ))}
    </div>
  )
}

export default CourseList
