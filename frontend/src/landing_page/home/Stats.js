import React from 'react';

function Stats() {
    return ( 
        <div className='container' style={{marginTop:'5rem', marginBottom:'6rem'}}>
            <div className='row' style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <div className='col-6' style={{marginLeft:'0'}}>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like..</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src="media/ecosystem.png" alt="image" style={{width:"120%"}}/>
                    <div className='text-center'>
                        <a className='mx-5' style={{textDecoration:'none'}} href='#'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='#' style={{textDecoration:'none'}} >Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <img src="media/pressLogos.png" alt="Press Logos" className="mt-4" style={{ width: "70%", height: "auto" }} />
            </div>
        </div>     
     );
}

export default Stats;