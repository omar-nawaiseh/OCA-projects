import React, { Component } from 'react';
import '../Css/footer.css'

class Footer extends Component {
    render() {
        return (
           


		<footer className="footer-distributed">
 
		<div className="footer-left">
 
		<h3>Marley<span></span></h3>
 
		<p className="footer-links">
		<span>Why Marely?</span>
		Web Dev Trick is a blog for web designers, <br/>graphic designers, web developers &amp; SEO Learner.
		</p>
 
		
 
		<p className="footer-company-name">Marley powerBy &copy; 2021</p>
		</div>
 
		<div className="footer-center">
<p>Contact US</p>
		<div>
		<i className="fa fa-map-marker"></i>
		<p><span>Amman , Jordan</span> </p>
		</div>
 
		<div>
		<i className="fa fa-phone"></i>
		<p>0770151864</p>
		</div>
 
		<div>
		<i className="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">Marley @gmail.com</a></p>
		</div>
 
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>About the company</span>
	Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
		</p>
 
		<div className="footer-icons">
 
		<a href="#"><i className="fa fa-facebook"></i></a>
		<a href="#"><i className="fa fa-twitter"></i></a>
		<a href="#"><i className="fa fa-linkedin"></i></a>
		<a href="#"><i className="fa fa-github"></i></a>
 
		</div>
 
		</div>
 
		</footer>

      


            
        );
    }
}

export default Footer;
