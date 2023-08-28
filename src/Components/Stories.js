import React, { useEffect } from 'react';
import { useGlobalContext } from './Context';

const Stories = () => {
    const { hits, nbPages, isLoading, removePost } = useGlobalContext()

    if (isLoading) {
        return (
            <h1 className='dots'></h1>
        )
    }
    return (
        <div className='stories-div'>
            <h1>Stories</h1>
            {hits.map((curnElem) => {
                const { title, author, objectID, url, num_comments } = curnElem
                return <>
                    <div className='card' key={objectID}>
                        <h2>{title}</h2>
                        <p>
                            BY <span>{author}</span> | <span>{num_comments}</span> Comments
                        </p>
                        <div className='card-button'>
                            <a href={url} target='_blank'>Read More</a>
                            <a href='#' onClick={() => { removePost(objectID) }}>Remove</a>
                        </div>
                    </div>

                </>

            })}
        </div>
    )
}

export default Stories
