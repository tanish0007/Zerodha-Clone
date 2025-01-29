import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row mt-3 border-top' style={{padding:'6rem'}}>
                <h1 className='fs-3 text-center'>Developer</h1>
            </div>

            <div className='row fs-6' style={{paddingBottom:'6rem',lineHeight:'1.8',fontSize:'1.2rem'}}>
                <div className='col-6 text-center'>
                    <img src='media/TanishJangra.jpg' alt='education1' style={{width:'60%', borderRadius:"50%"}}/>
                    <h4 className='mt-3'>Tanish Jangra</h4>
                    <h5 className='fs-6'>Full-Stack Developer, Web</h5>
                </div>
                <div className='col'>
                    <p>I am a dedicated web developer with a knack for creating intuitive, responsive, and visually appealing websites. Proficient in HTML, CSS, and JavaScript, I excel in transforming design concepts into fully functional web applications. With a keen eye for detail and a passion for coding.</p>
                    <p>I ensure seamless user experiences and optimal performance across devices. Whether working on front-end development or collaborating on backend solutions, I bring creativity, technical expertise, and a commitment to excellence to every project. 🌟💻</p>
                    <p>Connect on <a href=''>Github</a> / <a href=''>LinkedIn</a> / <a href=''>Gmail</a></p>
                </div>
            </div>
        </div>     
     );
}

export default Team;