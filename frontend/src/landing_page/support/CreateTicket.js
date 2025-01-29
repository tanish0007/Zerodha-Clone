import React from 'react';

function CreateTicket() {
    return (
        <div className='container' style={{padding:'0'}}>
            <div className='row'>
                <h1 className='fs-4 text-muted mt-5'>To create a ticket, select a relevant topic</h1>

                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-circle-plus"></i>&nbsp; Account Opening</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Getting started<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Online<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Offline<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Charges<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Company, Partnership and HUF<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Non Resident Indian (NRI)<br />  </a>
                    </h4>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-user"></i>&nbsp; Your Zerodha Account</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Login credentials<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Your Profile<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Account modification and segment addition<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >CMR & DP ID<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Nomination<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Transfer and conversion of shares<br />  </a>
                    </h4>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-chart-simple"></i>&nbsp; Trading and Markets</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Trading FAQs<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Kite<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Margins<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Product and order types<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Corporate actions<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Kite features<br />  </a>
                    </h4>
                </div>

                {/* Below column */}
                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-wallet"></i>&nbsp; Funds</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Fund withdrawal<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Adding funds<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Adding bank accounts<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >eMandates<br />  </a>
                    </h4>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-terminal"></i>&nbsp; Console</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >IPO<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Portfolio<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Funds statement<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Profile<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Reports<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Referral program<br />  </a>
                    </h4>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontSize:'1.3rem'}}><i class="fa-solid fa-xs fa-coins"></i>&nbsp; Coin</h4>
                    <h4>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Understanding mutual funds and Coin<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Coin app<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Coin web<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >Transactions and reports<br />  </a>
                        <a style={{fontSize:'0.9rem', textDecoration:'none', lineHeight:'2',marginLeft:'1.5rem'}} href='' >National Pension Scheme (NPS)<br />  </a>
                    </h4>
                </div>
            </div>
            <div className='row' style={{marginBottom:'7rem'}}></div>
        </div>
    );
}

export default CreateTicket;