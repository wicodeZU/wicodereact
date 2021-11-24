import React from 'react'
import { IconButton } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import ShareIcon from '@mui/icons-material/Share'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import './About.css'
import RowingIcon from '@mui/icons-material/Rowing';

const About = () =>{
    return (
        <div className='about'>
            <div className='about__upper'>
                <div className='aboutText__section'>
                    <h1>About Us</h1>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Maiores, magni quae quasi dolorum aliquam non repellendus laudantium at odit eveniet perferendis 
                    est autem cupiditate, vero eos? Magnam facere iure temporibus.
                    </p>
                    <button className='btn'>
                        Learn more
                    </button>
                </div>
                <div className='aboutImage__section'>
                    <img src='https://wicode.vercel.app/images/5.jpg' alt='' />
                </div>
            </div>
            <div className='about__lower'>
            <div className='aboutImage__section'>
                <img src='https://wicode.vercel.app/images/5.jpg' alt='' />
            </div>
            <div className='aboutText__section'>
                <h1>Share your Stories with the community</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Maiores, magni quae quasi dolorum aliquam non repellendus laudantium at odit eveniet perferendis 
                    est autem cupiditate, vero eos? Magnam facere iure temporibus.
                </p>
                <div className='buttons'>
                    <div className='upper__buttons'>
                        <IconButton>
                            <FileUploadIcon />
                            {/* Upload image */}
                        </IconButton>
                        <IconButton>
                            <ShareIcon />
                            {/* Share Story */}
                        </IconButton>
                    </div>
                    <div className='lower__button'>
                        <IconButton>
                            <KeyboardIcon />
                            {/* Write blog */}
                        </IconButton>
                        <IconButton>
                            <RowingIcon />
                            {/* Choose activity */}
                        </IconButton>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About