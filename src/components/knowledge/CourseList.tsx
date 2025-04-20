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
  courses = courses
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)
    .concat(courses)

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * pageSize
  const currentCourses = courses.slice(startIndex, startIndex + pageSize)

  return (
    <div className='flex w-full flex-col justify-start gap-6'>
      <h2 className='text-primary text-left text-2xl !font-bold'>{titleCourses}</h2>
      {currentCourses.map((course, idx) => (
        <CourseArticle key={idx} {...course} className='h-auto' />
      ))}
      <div className='mt-4 flex justify-center'>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={courses.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

export default CourseList
