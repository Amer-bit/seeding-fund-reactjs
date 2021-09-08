import React from 'react';
import { MailIcon, PhoneIcon, MapIcon, GlobeAltIcon } from '@heroicons/react/solid';


const TopBar = () => {

    return (
        <>
            <div className="topBar">
                <div className="contacts">
                    <p className = "info"><MapIcon className = "infoIcon" />2 Qween Street, USA</p>
                    <p className = "info"><PhoneIcon className = "infoIcon" />888 666 000</p>
                    <p className = "info"><MailIcon className = "infoIcon" />info@example.com</p>
                </div>
                <div className = "options">
                    <p className = "quote">Get a Free Quote</p>
                    <p className = "info"><GlobeAltIcon className = "infoIcon"/>English</p>
                </div>
            </div>
        </>
    );
}

export default TopBar;