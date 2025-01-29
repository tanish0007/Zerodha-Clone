import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 border-bottom text-center mt-5'>
                <h1>Pricing</h1>
                <h5 className='text-muted' style={{marginBottom:'6rem'}}>Free equity investments and flat 20 traday and F&O trades</h5>
            </div>

            <div className='row p-5 text-center'>
                <div className='col-4 p-4'>
                    <img src='media/pricingEquity.svg' />
                    <h1 className='fs-3' style={{width:'justify-content'}}>Free Equity Delievery</h1>
                    <p className='text-muted'>ALl equity delivery investments (NSE, BSE)<br /> are absolutely free - Rs 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/intradayTrades.svg' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'> Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades acroos equity, currency and commodity traders.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/pricingEquity.svg' />
                    <h1  className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free - Rs. 0 commisions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;