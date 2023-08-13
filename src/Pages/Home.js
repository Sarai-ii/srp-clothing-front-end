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
        flexDirection: 'column',  // this makes the buttons vertical
        justifyContent: 'center',
        alignItems: 'flex-start',  //moves buttons to the left
        fontFamily: "'Clarkson',Helvetica,sans-serif",
      };

      const headingStyle = {
        color: 'rgb(33, 209, 146)',
        padding: '10px',
        position: 'absolute',
        top: '20%',
        left: '4%',
        fontSize: '48px',
        marginBottom: '20px'
      };

      const buttonStyle = {
        backgroundColor: 'rgb(33, 209, 146)',
        fontFamily: "'Clarkson',Helvetica,sans-serif",
        padding: '15px 30px', // this increased padding is for larger buttons
        margin: '10px 0', // this adds margin between buttons
        marginLeft: '50px',
        justifyContent: 'center',
        alignItems: 'center',
      }

    return (
        <div className="Home">
            <div style={fullScreenImage}>
            <h2 style={headingStyle}>Welcome to Extravaganza!</h2>
            <button className='all-items-btn' style={buttonStyle} onClick = {() => navigate("/clothing")}>
                See All Clothing
            </button>
            <p></p>
            <button className="mens-clothes-btn" style={buttonStyle} onClick = {() => navigate('clothing/men')}>
                See All Men's Clothing
            </button>
            <p></p>
            <button className="womens-clothes-btn" style={buttonStyle} onClick = {() => navigate('clothing/men')}>
                See All Women's Clothing
            </button>

            </div>
        </div>
    )
}
