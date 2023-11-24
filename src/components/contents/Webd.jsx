// import React, { useState } from 'react'

import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    // const [page, setPage] = useState
    return (
        <section id='webd'>
            <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
            <div className='video__inner'>
                {webdText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img className='vid__thumb' src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Webd