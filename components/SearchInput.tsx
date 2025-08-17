'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setSearchQuery] = useState(query);


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchQuery.trim()) {
                router.replace(`/companions?topic=${searchQuery.trim()}`);
            } else {
                router.replace(`/companions`);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchQuery]);

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);
    //   };

    return (
        <div className="relative border border-black rounded-lg 
        items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                type="search"
                placeholder="Search Companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;