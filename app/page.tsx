import CompanionBuildNew from '@/components/CompanionBuildNew'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline mx-2'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color="#ffda6e"/>

        <CompanionCard
          id="2"
          name="Takaful the Brainy Explorer"
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color="#e5d0ff"/>

        <CompanionCard
          id="3"
          name="Universal the Brainy Explorer"
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color="#BDE7FF"/>
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
          />
        <CompanionBuildNew />
      </section>
    </main>
  )
}

export default Page