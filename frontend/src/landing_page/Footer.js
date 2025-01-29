import React from 'react';

function Footer() {
    return (
        <footer className='border-top' style={{ backgroundColor: '#f8f9fa' }}>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/logo.svg' style={{ width: '70%' }} />
                        <p>&copy; 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <p className='fs-4'>Company</p>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Products <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Pricing <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>About <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Referral programme <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Careers <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Zerodha.tech <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Open source <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Press & media <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Zerodha Cares (CSR) <br /></a>
                    </div>
                    <div className='col'>
                        <p className='fs-4'>Support</p>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Support portal <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Z-Connect blog <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Contact us <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>List of charges <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Downloads & resources <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Videos <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Market overview <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>How to file a complaint? <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Status of your complaints <br /></a>
                    </div>
                    <div className='col'>
                        <p className='fs-4'>Account</p>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Open an Account <br /></a>
                        <a className='text-muted' href='#' style={{textDecoration:'none',fontSize:'1rem',lineHeight:'1.8'}}>Fund Transfer <br /></a>
                    </div>
                </div>
                <div className='text-muted mt-5' style={{ fontSize: '0.7rem' }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br /><br />
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br /><br />
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br /><br />
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br /><br />
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.<br />
                    </p>
                </div>
                <div style={{display:'flex', justifyContent:'space-around', fontSize:'1rem'}} className='mb-3 text-muted'>
                    <a>NSE</a>
                    <a>BSE</a>
                    <a>MCX</a>
                    <a>Terms & Conditions</a>
                    <a>Privacy Policy</a>
                    <a>Disclosure</a>
                    <a>For investor's attention</a>
                    <a>Investor charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;