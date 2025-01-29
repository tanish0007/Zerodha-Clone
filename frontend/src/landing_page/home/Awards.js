import React from "react";

function Awards() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center gx-5">
                {/* Left Column */}
                <div className="col-12 col-md-6 p-4 text-center">
                    <img src="media/largestBroker.svg" alt="Largest Broker Image" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }} />
                </div>

                <div className="col-12 col-md-6 p-4">
                    <h1 className="mb-4">Largest stock broker in India</h1>
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        {/* Left List */}
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;

// import React from 'react';

// function Awards() {
//     return (
//         <div className='container mt-5'>
//             <div className='row'>
//                 <div className='col-6 p-5'>
//                     <img src="media/largestBroker.svg" alt="An image" className=''/>
//                 </div>
//                 <div className='col-6 p-5'>
//                     <h1>Largest stock broker in India</h1>
//                     <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
//                     <div className='row'>
//                         <div className='col-6'>
//                             <ul>
//                                 <li>Futures and Options</li>
//                                 <li>Commodity derivatives</li>
//                                 <li>Currency derivatives</li>
//                             </ul>
//                         </div>
//                         <div className='col-6'>
//                             <ul>
//                                 <li>Stocks & IPOs</li>
//                                 <li>Direct mutual funds</li>
//                                 <li>Bonds and Govt. Securities</li>
//                             </ul>
//                         </div>
//                         <img src="media/pressLogos.png" alt="An image" style={{width:"0%"}}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Awards;
