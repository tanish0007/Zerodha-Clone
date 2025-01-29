import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop:'6rem'}}>
            <div className='row' style={{marginBottom:'6rem', display:'flex', alignItems:'center',justifyContent:'space-around'}} >
                <div className='col-6'>
                    <img src='media/education.svg' alt='education1' style={{width:'80%'}}/>
                </div>
                <div className='col-6'>
                    <h1 className='fs-1'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className='' style={{textDecoration:'none'}}>Versity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-3'>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:'none'}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>   
     );
}

export default Education;