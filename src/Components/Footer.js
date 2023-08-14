import React from "react";
import "../Css/Footer.css"

export default function Footer() {
    const footerStyle1 = {
        backgroundColor: "#ECEFF1",
        width: '100%',
    };
    const footerStyle2 = {
        backgroundColor: "#21D192",
    };
    const footerStyle3 = {
        backgroundColor: "#7c4dff",
        width: "60px",
        height: "2px",
    };
    const footerStyle4 = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        marginTop: "auto",  //this is the thing that pushes the footer to the bottom 
    };


    return (
        <div className="Footer" >
            <footer className="text-center text-lg-start text-dark" style={{footerStyle1, width: '100%' }}>

{/* SECTION one */} 
                <section className="d-flex justify-content-between p-3 text-purple mt-4" style={footerStyle2} >
                    <div className="me-5">  {/* This class applies a margin to the right side of the element that equals the spacing defined by bootstrap. However, it doesn't appear to do anything here */}
                        <a href="https://github.com/Sarai-ii" className="text-black m-4">
                        <i className="">Github: Sarai Thomas</i> 
                        </a>
                        <a href="https://github.com/JenniferEinstein" className="text-black me-4">
                        <i className="">Github: Jennifer Einstein</i>
                        </a>
                    </div>
                </section>

{/* SECTION two - LINKS */}
                <section className="Links">
                    <div className=" text-center text-md-start mt-2">
{/* GRID ROW */}
                        <div className="row mt-3">
{/* GRID COLUMN One */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">  {/* Adjusted mb-4 to mb-2 */}
{/* CONTENT */}
                                <h6 className="text-uppercase fw-bold mb-2">Sen Extravaganza</h6>
                                <hr className="mt-0 d-inline-block mx-auto" style={footerStyle3}/>
                                <p> The shopping experience you deserve </p>
                            </div>
{/* GRID COLUMN Two */}
                             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2"> {/* Adjusted mb-4 to mb-2 */}
                                        {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-2">Categories</h6>
                                <hr className="mt-0 d-inline-block mx-auto" style= {footerStyle3}/>
                                <p><a href="../Pages/Women.js" className="text-dark">Women</a></p>
                                <p><a href="../Pages/Men.js" className="text-dark">Men</a></p>
                                <p><a href="../Components/Clothes.js" className="text-dark">Accessories</a></p>
                            </div>
{/* GRID COLUMN Three */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2"> {/* Adjusted mb-4 to mb-2 */}
{/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-2">Useful Links</h6>
                                <hr className=" mt-0 d-inline-block mx-auto" style= {footerStyle3}/>
                                <p><a href="#!" className="text-dark">Your Account</a></p>
                                <p><a href="#!" className="text-dark">Shipping Rates</a></p>
                                <p><a href="#!" className="text-dark">Help</a></p>
                            </div>
{/* GRID COLUMN four */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2"> {/* Adjusted mb-4 to mb-2 */}
{/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                                <hr className="mt-0 d-inline-block mx-auto" style= {footerStyle3} />
                                    <p><i className="mr-3"></i> info@sen-extravaganza.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
 {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={ footerStyle4 }>
                 © 2023 Copyright:
                Clothing App Single Resource Project
            </div>
        </div>
    )
}



/*

    // const columnStyle = {
    //     marginLeft: "0", // Remove left margin
    //     marginRight: "0", // Remove right margin
    //     padding: "0 15px", // Adjust padding for a more compact layout
    //     width: "100%", // Make the column take up the full width
    // };

    */