'use client';

import React, { useEffect, useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { subjects } from '@/constants';
import { useRouter } from 'next/navigation';




const SubjectFilter = () => {
    const [subject, setSubject] = useState('all');
    const router = useRouter();

    // console.log(subject);

    useEffect(() => {
        if (subject && subject !== "all") {
            router.replace(`/companions?subject=${subject}`);
        } else {
            router.replace(`/companions`);
        }
    }, [subject]);

    return (
        <div>
            <Select
                value={subject}
                onValueChange={setSubject}>
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Filter" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {subjects.map((subject) => (
                        <SelectItem
                            key={subject}
                            value={subject}
                            className='capitalize'>
                            {subject}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SubjectFilter;
