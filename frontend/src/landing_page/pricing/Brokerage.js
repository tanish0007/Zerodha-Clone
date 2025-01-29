import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mb-5 border-top pt-5'>
            <div className='row text-center'>
                <div className='col-8 p-4'>
                    <h3 className='fs-5'><a href="#" style={{textDecoration:'none'}}>Brokerage Calculator</a> </h3>
                    <ul style={{textAlign:'left', fontSize:'.9rem', lineHeight:'2'}} className='text-muted'>
                        <li>Call & trade and RMS auto-squareoff: Additional charges of Rs. 50 + GST per order</li>
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Physical copies of contract notes, if required, shall be charged  Rs. 20 per contract note. Courier charges may apply.</li>
                        <li>DP charges of Rs. 13.5 per scrip is charged on the sell side</li>
                        <li>For NRI account (PIS), 0.5% or Rs. 200 per executed order for equity (whichever is lower)</li> 
                        <li>For NRI account (non-PIS), 0.5% or Rs. 100 per executed order for equity (whichever is lower)</li> 
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <h3 className='fs-5'><a href="#" style={{textDecoration:'none'}}>List of charges</a> </h3>
                </div>
            </div>
        </div>        
     );
}

export default Brokerage;