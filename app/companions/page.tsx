import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import {
  //  getAllBookmarks, 
  getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const CompanionsLibrary =
  async ({ searchParams }: SearchParams) => {
    const params = await searchParams;
    // To fetch the seacrhed value, this is a property of NextJS
    // Initially an empty object
    // http://localhost:3000/companions?subject=math
    // Output on server: PARAMS:  { subject: 'math' }
    // (math is the search param)
    // PARAMS:  { subject: 'math', topic: 'reactjs' }
    // 

    // GET /companions?subject=math&topic=reactjs 200 in 562ms

    // console.log(params);

    const subject = params.subject ? params.subject : '';
    const topic = params.topic ? params.topic : '';
    // If we don't have a search parameter, then params is undefined.
    // Hence, according to the function, if both subject and topic
    // are undefined, then all the records gets fetched.

    const companions = await getAllCompanions({ subject, topic });
    // const bookmarkedCompanions = await getAllBookmarks();

    // console.log(companions);

    return (
      <main>
        <section className='flex justify-between gap-4 max-sm:flex-col'>
          <h1>Companion Library</h1>
          <div className='flex gap-4'>
            <SearchInput/>
            <SubjectFilter/>
          </div>
        </section>

        <section className='companions-grid'>
          {companions.length === 0 ?
           <p>No Companions Found...</p> 
           : 
           companions.map((companion) => (
            <CompanionCard 
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}/>
          ))}
          
        </section>

        {/* <section className='flex justify-between gap-4 max-sm:flex-col'>
          <h1>Bookmarked Companions</h1>
        </section>

        <section className='companions-grid'>
          {bookmarkedCompanions.length === 0 ?
           <p>No Companions Bookmarked...</p> 
           : 
           bookmarkedCompanions.map((companion) => (
            <CompanionCard 
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}/>
          ))}
          
        </section> */}

      </main>
    )
  }

export default CompanionsLibrary;
