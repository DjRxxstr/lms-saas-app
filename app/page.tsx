import CompanionBuildNew from '@/components/CompanionBuildNew'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({limit: 3});
  const recentSessionsCompanions = await getRecentSessions();

  return (
    <main>
      <h1 className='text-2xl underline mx-2'>Dashboard</h1>

      <section className='home-section'>
        {companions.map((companion) => (
          <CompanionCard
          key={companion.id}
          color={getSubjectColor(companion.subject)}
          {...companion}/>
        ))}
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
          />
        <CompanionBuildNew />
      </section>
    </main>
  )
}

export default Page