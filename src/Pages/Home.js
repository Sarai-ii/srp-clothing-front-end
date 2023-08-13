import { useNavigate } from "react-router-dom"
import React from "react";
import photo from '../Photos/JapaneseMaple.jpg'


export default function Home() {
    const navigate = useNavigate();
    const fullScreenImage = {
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Clarkson',Helvetica,sans-serif",
      };

      const headingStyle = {
        color: 'rgb(33, 209, 146)',
        padding: '10px',
        position: 'absolute',
        top: '20%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        fontSize: '48px',
      };

    return (
        <div className="Home">
            <div style={fullScreenImage}>
            <h2 style={headingStyle}>Welcome to Extravaganza!</h2>


            </div>
        </div>
    )
}


/*    ========= CONSIDER USING THESE ===============
            <button className='all-items-btn' onClick = {() => navigate("/clothing")}>
                See All Clothing
            </button>
            <button className="mens-clothes-btn" onClick = {() => navigate('clothing/men')}>
                See All Men's Clothing
            </button>
            <button className="mens-clothes-btn" onClick = {() => navigate('clothing/men')}>
                See All Women's Clothing
            </button>
*/