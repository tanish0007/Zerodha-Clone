import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container">
            <div className='row'>
                <div className="col-6 p-5 mt-5">
                    <h1 className="">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>LearnMore <i class="fa-solid fa-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src={imageURL} alt="product" style={{width:"100%"}}/>
                </div>
            </div>
        </div>  
     );
}

export default RightSection;