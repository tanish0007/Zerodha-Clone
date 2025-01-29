import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function Products() {
    return ( 
        <>
            <Hero />
            <LeftSection 
                imageURL="media/kite.png" 
                productName="Kite" 
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo="https://kite-demo.zerodha.com/" 
                learnMore="https://zerodha.com/products/kite" 
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" 
            />
            <RightSection 
                imageURL="media/console.png" 
                productName="Console" 
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  
                learnMore="https://zerodha.com/products/console"
            />
            <LeftSection 
                imageURL="media/coin.png" 
                productName="Coin" 
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="https://kite-demo.zerodha.com/" 
                learnMore="https://zerodha.com/products/kite" 
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" 
            />
            <RightSection 
                imageURL="media/kiteconnect.png" 
                productName="Kite Connect API" 
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  
                learnMore="https://kite.trade/"
            />
            <LeftSection 
                imageURL="media/varsity.png" 
                productName="Varsity Mobile" 
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
                tryDemo="https://kite-demo.zerodha.com/" 
                learnMore="https://zerodha.com/products/kite" 
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" 
            />
            <p className='text-center mt-5' style={{marginBottom:'6rem',fontSize:'1.3rem'}}>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>
            <Universe />
        </>    
     );
}

export default Products;