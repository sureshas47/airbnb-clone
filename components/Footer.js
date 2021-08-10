import React from 'react'

function Footer() {
    return (
      
        <div className='bg-gray-100 text-gray-600 grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 '>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investers</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Not Real Site</p>
                <p>Awesome clone</p>
                <p>Developers Nepal</p>
                <p>Meetups</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Who am I</h5>
                <p>Suresh Adhikari</p>
                <p>Loves code</p>
                <p>Innovate things</p>
                <p>Travel</p>
                <p>Getting skilled</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Hire me</p>
                <p>Frontend build</p>
                <p>Backend</p>
                <p>Wireframes</p>
                <p>Api build</p>
            </div>
        </div>
      
    );
}

export default Footer;
