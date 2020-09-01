import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Superman  ']);
    return (
        <>
            <h2>GifExpert</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ul>
                {
                    categories.map(category => (
                        // return <li key={category}>GifGrid</li>
                         <GifGrid key={category} category={category} />
                    ))
                }
            </ul>
        </>
    )
}

export default GifExpertApp
