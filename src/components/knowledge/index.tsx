'use client'

import HeroBanner from '../common/HeroBanner'
import TabsSkill from './TabsSkill'

type Props = {
  knowledge: any
  newspaper: any
}

const KnowledgePage: React.FC<Props> = ({ knowledge, newspaper }) => {
  const { heroBanner, tabs } = knowledge?.data || {}

  return (
    <>
      {heroBanner && <HeroBanner {...heroBanner} />}

      <TabsSkill tabs={tabs} newspaper={newspaper} />
    </>
  )
}

export default KnowledgePage
