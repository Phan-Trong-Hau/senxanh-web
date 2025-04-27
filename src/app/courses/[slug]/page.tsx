import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import CourseDetail from '@/components/course'
import fetchAPI from '@/utils/fetchApi'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Sen xanh - Khóa học`,
  }
}

const CourseDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params

  const course = await fetchAPI({
    path: '/courses',
    urlParamsObject: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  })

  if (!course.data?.length) {
    redirect('/404')
  }

  return <CourseDetail course={course.data?.[0]} />
}

export default CourseDetailPage
