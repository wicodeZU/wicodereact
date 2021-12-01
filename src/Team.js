import React from 'react'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Team.css'

const Team = () => {
    return (
        <div className='team'>
            <h1>Meet The Team</h1>
            <section className="team__card">
                <div className="card">
                    <div className="card__image">
                        <img src="https://wicode.vercel.app/images/per.jpg" alt=""></img>
                    </div>
                    <div className="card__details">
                        <h2>John Doe</h2>
                        <p>
                            "Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Quisquam, nemo. Ipsa praesentium magni laboriosam fuga?"
                        </p>
                        <ul>
                            <IconButton>
                                <GitHubIcon className="gt"/>
                            </IconButton>
                            <IconButton>
                                <TwitterIcon className="gt"/>
                            </IconButton>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img src="https://wicode.vercel.app/images/per.jpg" alt=""></img>
                    </div>
                    <div className="card__details">
                        <h2>John Doe</h2>
                        <p>
                            "Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Quisquam, nemo. Ipsa praesentium magni laboriosam fuga?"
                        </p>
                        <ul>
                            <IconButton>
                                <GitHubIcon className="gt"/>
                            </IconButton>
                            <IconButton>
                                <TwitterIcon className="gt"/>
                            </IconButton>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img src="https://wicode.vercel.app/images/per.jpg" alt=""></img>
                    </div>
                    <div className="card__details">
                        <h2>John Doe</h2>
                        <p>
                            "Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Quisquam, nemo. Ipsa praesentium magni laboriosam fuga?"
                        </p>
                        <ul>
                            <IconButton>
                                <GitHubIcon className="gt"/>
                            </IconButton>
                            <IconButton>
                                <TwitterIcon className="gt"/>
                            </IconButton>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team