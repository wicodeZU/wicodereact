import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
    return (
        <div className='footer'>
            <div className="social__links">
                <FacebookIcon className='sl'/>
                <Twitter className='sl' />
                <GitHub className='sl' />
                <LinkedIn className='sl' />
            </div>
            <div className="footer__texts">
                <p>Tearms</p>
                <p>faqs</p>
                <p>sponsors</p>
                <p>patners</p>
            </div>
        </div>
    )
}

export default Footer
