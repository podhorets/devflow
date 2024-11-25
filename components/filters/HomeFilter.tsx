"use client"

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

import { Button } from '../ui/button';

const filters = [
    { name: "Newest", values: "newest" },{ name: "Popular", values: "popular" },
    { name: "Unanswered", values: "unanswered" },
    { name: "Recommended", values: "recommended" }
];

const HomeFilter = () => {
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  return (
    <div className='mt-10 hidden flex-wrap gap-3 sm:flex'>{filters.map((filter) => (
        <Button key={filter.name} className='body-medium rounded-lg px-6 py-3 capitalize shadow-none'>{filter.name}</Button>
    ))}</div>
  )
}

export default HomeFilter