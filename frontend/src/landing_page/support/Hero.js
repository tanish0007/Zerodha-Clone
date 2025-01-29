import React from 'react'

function Hero() {
    return (
        <section className='container-fluid' id='supportUpper'>
            <div className='p-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a className='track' href=''>Track Tickets</a>
            </div>

            <div className='row p-5'>
                <div className='col-6'>
                    <h3>Search for an answer or browse help topics to create a ticket</h3>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
                    <br />
                    <a href='#'>Track account opening</a>&nbsp;&nbsp;
                    <a href='#'>Track segment activation </a>&nbsp;&nbsp;
                    <a href='#'>Intraday margins </a>&nbsp;&nbsp;
                    <a href='#'>Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <h3>Featured</h3>
                    <ol style={{lineHeight:'2'}}>
                        <li><a href=''>Current Takeovers and Delisting - January 2025</a></li>
                        <li><a href=''>Surveillance measure on scrips - January 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;