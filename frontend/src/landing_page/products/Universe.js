import React from 'react';

function Universe() {
    return ( 
        <div className="container mb-5">
            <div className='row text-center'>
                <h1 className='mb-3'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3">
                    <img src="media/zerodhaFundhouse.png" alt="image" style={{width:'65%'}}/>
                    <p className='text-muted mt-3' style={{fontSize:'.7rem'}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/sensibullLogo.svg" alt="image" style={{width:'75%'}}/> 
                    <p className='text-muted mt-4' style={{fontSize:'.7rem'}}>Options trading platform that lets you create strategies, analyze positions and examine data points like open interest, FII/DII, and more.</p>   
                </div>
                <div className="col-4 p-3">
                    <img src="media/tijori.svg" alt="image" style={{width:'50%'}}/>
                    <p className='text-muted mt-3' style={{fontSize:'.7rem'}}>Incvestment reasearch platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                {/* Below one */}
                <div className="col-4 p-3 mt-5">
                    <img src="media/streakLogo.png" alt="image" style={{width:'60%'}}/>
                    <p className='text-muted mt-3' style={{fontSize:'.7rem'}}>Systmatic trading platform that allows you to create and backfest stategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/smallcaseLogo.png" alt="image" style={{width:'70%'}}/> 
                    <p className='text-muted mt-3' style={{fontSize:'.7rem'}}>Systematic investment platform that helps you invest in diversified baskets of stocks on ETFs.</p>   
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/dittoLogo.png" alt="image" style={{width:'40%'}}/>
                    <p className='text-muted mt-3' style={{fontSize:'.7rem'}}>Personalized advise on life and health insurance. No spam and no mis-selling.</p>
                </div>

                <button className='p-2 btn btn-primary fs-6 ' style={{width:"20%", margin:"0 auto"}}>Sign Up for free</button>
            </div>
        </div>     
     );
}

export default Universe;