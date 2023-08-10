import React from "react";
// import { FontAwesomeIcon } from '@fontawesome/fontawesome-svg-core'


export default function Footer() {
    const footerStyle1 = {
        backgroundColor: "#ECEFF1"
    };
    const footerStyle2 = {
        backgroundColor: "#21D192"
    };
    const footerStyle3 = {
        backgroundColor: "#7c4dff",
        width: "60px",
        height: "2px",
    };
    const footerStyle4 = {
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    };

    return (
        <div className="Footer container my-5">
            <footer 
                className="text-center text-lg-start text-dark"
                style={footerStyle1}
            >

                                            {/* SECTION one */} 
                <section
                class="d-flex justify-content-between p-4 text-purple"
                style={footerStyle2}
                >
                    <div class="me-5">
                        <span>This is a green stripe  -------  Do We Want to Use It for Anything?  -------  This is a green stripe  -------  Do We Want to Use It for Anything? ------- This is a green stripe  </span>
                    </div>
                </section>

                    <div>
                        <a href="https://github.com/Sarai-ii" className="text-black me-4">
                        <i className="fab fa-linkedin">Github: Sarai Thomas</i> 
                        </a>
                        <a href="https://github.com/JenniferEinstein" className="text-black me-4">
                        <i className="fab fa-github">Github: Jennifer Einstein</i>
                        </a>
                        <a href="https://twitter.com/joinpursuit" className="text-black me-4">
                        <i className="fab fa-twitter">Twitter</i> 
                        </a>
                    </div>
                                            {/* SECTION - LINKS */}
                <section className="Links">
                    <div className="container text-center text-md-start mt-5">
                                            {/* GRID ROW */}
                        <div className="row mt-3">
                                            {/* GRID COLUMN One */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                            {/* CONTENT */}
                                <h6 class="text-uppercase fw-bold">SarEinstein</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={footerStyle3}
                                    />
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                                        {/* GRID COLUMN Two */}
                             <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold">Categories</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style= {footerStyle3}
                                    />
                                <p>
                                <a href="#!" class="text-dark">Women</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Men</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Unisex</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Accessories</a>
                                </p>
                            </div>
                                       {/* GRID COLUMN Three */}
                                       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold">Useful Links</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style= {footerStyle3}
                                    />
                                <p>
                                <a href="#!" class="text-dark">Your Account</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Become an Affiliate</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Shipping Rates</a>
                                </p>
                                <p>
                                <a href="#!" class="text-dark">Help</a>
                                </p>
                            </div>
                                       {/* GRID COLUMN four */}
                                       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style= {footerStyle3}
                                    />
                                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> </p>
                                    <p><i class="fas fa-print mr-3"></i> </p>
                            </div>
                                        {/* <!-- Copyright --> */}
                            <div
                                class="text-center p-3"
                                style={ footerStyle4 }
                                >
                                © 2023 Copyright:
                                <p>Clothing App Single Resource Project</p>
                            </div>

                        </div>
                    </div>"
                </section>
            </footer>
        </div>
    )
}