import React from 'react'

function Footer() {
    return (
        <div className="myFooter">
            <div className="bx1">
                <h2>Our Products</h2>
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                    <li>Product 4</li>
                    <li>Product 5</li>
                </ul>
                <ul>
                    <li>Product 6</li>
                    <li>Product 7</li>
                    <li>Product 8</li>
                    <li>Product 9</li>
                    <li>Product 10</li>
                </ul>
            </div>
            <div className="bx1">
                <h2>About Us</h2>
                <p className="aboutus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum suscipit esse totam tempore voluptas fugit nostrum possimus dolorem eum.</p>
                <h3>Address</h3>
                <p className="addr">Lorem, ipsum dolor<br/>
                Lorem, dolor<br/>
                Lorem</p>
            </div>
            <div className="bcon1 ">
                <h2>Contact Us</h2>
                <p className="contact">Tel (mobile) : 077 123 4567</p>
                <p className="contact">Tel (land-line) : 077 123 4567</p>
                <p className="contact">Fax : 077 123 4567</p>
                <p className="contact">Email : info@genthouse.com</p>
                <h2>Social Media</h2>
                <div className="social">
                    <i className="fa fa-facebook-official fb"></i>
                    <i className="fa fa-instagram ins"></i>
                    <i className="fa fa-linkedin-square lik"></i>                    
                    <i className="fa fa-twitter-square twt"></i>
                </div>
            </div>
            <div className="copyright">
            <h5>Copyright <i className="fa fa-copyright"></i>  2021 GentsHouse</h5>
            </div>
        </div>
    )
}

export default Footer
