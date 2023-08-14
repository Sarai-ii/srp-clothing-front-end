import { useNavigate } from "react-router-dom"
import React from "react";
import '../Css/Home.css';
import loafers from '../Photos/cool-loafer-details.png';
import dress from '../Photos/sundress-white.jpg';
import fedora from '../Photos/fedora.png';
import pinkTop from '../Photos/pink-top-spaghetti-straps.jpg';



export default function Home() {
    const navigate = useNavigate();


      const headingStyle = {
        padding: '10px',
        top: '1%',
        left: '4%',
        fontSize: '48px',
        marginBottom: '20px',
        display: 'block',
        alignItems: "center",
        justifyContent: "center",
      };

      const buttonStyle = {
        backgroundColor: '#f0dada',
        padding: '15px 30px', // this increased padding is for larger buttons
        margin: '10px 0', // this adds margin between buttons
        marginLeft: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        top: '40%',
        fontSize: '18px',
        border: 'none'
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

      const bonusStyle = {
        left: '100px',
        top: '30px',
        marginBottom: '40px',
        position: 'relative',
        zIndex: '5',
        fontColor: 'black;',
        fontSize: '16px',
      }


      const handleImageClick = (itemId) => {
        navigate(`/clothes/${itemId}`);
      };      

    return (
        <div className="Home">
            <main id="layer-0" className="vYF33" style={mainStyle}>
             <h2 style={headingStyle}>Welcome to Extravaganza!</h2>
                <button className='all-items-btn' style={buttonStyle} onClick = {() => navigate("/new-this-season")}>

                    See All Clothing
                </button>
                <p></p>
                <button className="mens-clothes-btn" style={buttonStyle} onClick = {() => navigate('mens')}>
                    See All Men's Clothing
                </button>
                <p></p>
                <button className="womens-clothes-btn" style={buttonStyle} onClick = {() => navigate('womens')}>
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
                                <div class="udmGE cSeCo wHJLP L1fU8"><p>Spend on the best. </p>
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
                            <div className="trending-pictures trending-images">
                                <div className="trending-image-container">
                                    <img 
                                        src={loafers} 
                                        alt="closeup of feet of man wearing stylish brown loafers" 
                                        className="thumbnail-image"
                                        onClick={()=> handleImageClick(23)} 
                                        />
                                    <img 
                                        src={dress} 
                                        alt="barefoot woman in white dress walking along the beach" 
                                        className="thumbnail-image"
                                        onClick={()=> handleImageClick(25)} 
                                        />
                                    <img 
                                        src={fedora} 
                                        alt="snazzy neutral fedora on white background" className="thumbnail-image" 
                                        onClick={()=> handleImageClick(21)} 
                                    />
                                    <img 
                                        src={pinkTop} 
                                        alt="woman in pink top with deep pink embroidery sitting on couch" 
                                        className="thumbnail-image" 
                                        onClick={()=> handleImageClick()} 
                                    />
                                </div>
                            </div>
                        </div>
                        </section>
                        <section className="vYF33 nrGtK" style={bonusStyle}>
                <span className="TFM6u"><p><strong>Get a $40 Bonus Note!</strong> A new-cardmember exclusive. Restrictions apply. </p></span></section>
                    </div>

                </div>
            </section>
            </main> 
        </div>
    )
}


/*  ==========  NOT CURRENTLY USING ===========
            

// import photo from '../Photos/JapaneseMaple.jpg'

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


<a className="BK8bF OfW5X" href="#main-content-start">Skip navigation</a>
<div style={fullScreenImage}>

*/