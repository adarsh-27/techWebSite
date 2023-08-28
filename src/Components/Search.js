import React from 'react'
import { useGlobalContext } from './Context'

function Search() {
    const { query, searchPost } = useGlobalContext()
    return (
        <>
            <h1>Search Post</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input
                        type='text'
                        placeholder='Search Here'
                        value={query}
                        onChange={e => searchPost(e.target.value)}
                    >
                    </input>
                </div>
            </form>
        </>
    )
}

export default Search