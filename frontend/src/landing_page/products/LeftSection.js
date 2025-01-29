import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 p-5">
                <img src={imageURL} alt="product" style={{width:"100%"}}/>
            </div>
            <div className="col-6 p-5 mt-3">
                <h1 className="">{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo} >Try demo <i class="fa-solid fa-arrow-right" /></a>
                    <a href={learnMore} style={{marginLeft:"10%"}}>LearnMore <i class="fa-solid fa-arrow-right" /></a>
                </div>
                <div className="mt-3">
                    <a href={googlePlay} ><img src="media/googlePlayBadge.svg" alt="product" /></a>
                    <a href={appStore} ><img src="media/appstoreBadge.svg" alt="product" style={{marginLeft:"5%"}} /></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
