import { useNavigate } from "react-router-dom"
import React from "react";

import '../Css/Home.css'


export default function Home() {
    const navigate = useNavigate();
    // const fullScreenImage = {
    //     backgroundImage: `url(${photo})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',  // this makes the buttons vertical
    //     justifyContent: 'center',
    //     alignItems: 'flex-start',  //moves buttons to the left
    //     fontFamily: "'Bastia',Helvetica,sans-serif",
    //   };

      const headingStyle = {
        color: 'rgb(33, 209, 146)',
        padding: '10px',
        top: '1%',
        left: '4%',
        fontSize: '48px',
        marginBottom: '20px'
      };

      const buttonStyle = {
        backgroundColor: 'rgb(33, 209, 146)',
        padding: '15px 30px', // this increased padding is for larger buttons
        margin: '10px 0', // this adds margin between buttons
        marginLeft: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        top: '40%',
        fontSize: '18px',
      }

      const mainStyle = {
        position: 'relative',
      }
    
      const vYF33Style = {
        position:'relative',
        top:'auto',
        left:'auto'
      }

      const styleTwo = {
        border: '0pt, none',
         display: 'inline-block',
          width: '100%',
          height: "auto",
      }

      const styleThree = {
        left: '0%',
        top: '70%',
        width: '100%',
      }

      const styleA = {
        left: '0',
        top: '0',
        position: 'relative',
        zIndex: '5',
        fontColor: 'black;',
        fontSize: '12px',
      }

      const styleB = {
        backgroundColor: '#000000',
        justifyContent: 'center',
      }

    return (
        <div className="Home">

<section className="vYF33 nrGtK" style={styleA}>
                <span className="TFM6u"><p><strong>Get a $40 Bonus Note!</strong> A new-cardmember exclusive. Restrictions apply. </p></span></section>

            <main id="layer-0" className="vYF33" style={mainStyle}>
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
            <section id="layer-0" className="vYF33" style={vYF33Style}>
                <div className="BwqBX yEUew undefined">
                <div className="UX5In">
                    <div className="Xeff2 ykD2I">
                        <div className="qLcei Qn6Mn">
                            <div className="un408 CjGwk z0tVk">
                                <div>
                                    <div className="ykD2I">
                                        <div className="qLcei Qn6Mn">
                                            </div></div></div>
                                </div>
                                <div className="un408 CjGwk z0tVk">
                                    <div>
                                        <div>
                                            <div id="div-gpt-ad-6249443-1" className="Ixb4Z IvvYO">
                                            <div style={styleTwo}>
                                         </div></div></div></div></div></div></div></div></div>


            <div class="un408 CjGwk z0tVk">
                <div>
                    <section class="XaJP8">
                        <div class="RY6IU">
                            <div class="PiUHT fBKre gP_Yo JDS6c rie47" style={styleThree}>
                                <div class="udmGE cSeCo wHJLP L1fU8"><p>Save on the best. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="un408 CjGwk z0tVk">
                <div>
                    <section className="trending XaJP8">
                        <div>
                            <div className="PiUHT fBKre JDS6c rie47">
                                <h4 className="NJIVb qhMT8 Ouhbi _NbrB bLL0c">
                                    <p><strong>TRENDING NOW</strong></p>
                                </h4>
                            </div>

                        </div>
                    </section>
                </div>

            </div>
            </section>
</main> 
            </div>
    )
}


/*  ==========  NOT CURRENTLY USING ===========
            

// import photo from '../Photos/JapaneseMaple.jpg'

<a className="BK8bF OfW5X" href="#main-content-start">Skip navigation</a>
<div style={fullScreenImage}>

*/