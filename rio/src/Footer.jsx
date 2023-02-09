import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer(props){
    return(
        <>
        <div className={props.footer}>
            <div className='foot-wraper'>
            <div className='footer-overlay'>
                <div>
                    <Link className='footer-heading' to={'/Contact'}>Contact Us</Link>
                    <div className='footer-line'></div>
                    <p className='footer-parag'>Ask us anything! We’re here to answer any questions you have. </p>
                    <a className='footer-email' href = "mailto: abc@example.com">Email: info@mysite.com</a>
                </div>
                <div>
                    <h3 className='footer-heading'>Follow Us</h3>
                    <div className='footer-line'></div>
                    <div className='footer-icons'>
                       <a className='social-icon' href='https://www.facebook.com/'><i class="fa-brands fa-facebook-f"></i></a>
                       <a className='social-icon' href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
                       <a className='social-icon' href='https://twitter.com/?lang=en'><i class="fa-brands fa-twitter"></i></a>
                    </div>

                </div>
                <div className='input-overlay'>
                    <p className='footer-heading burger-footer-heading'>Subscribe for Updates & Offers</p>
                    <div className='footer-line burger-footer-line'></div>
                    <div className='footer-inputs'>
                        <input className='footer-input' type='email' placeholder='Enter your email here*'/>
                        <button className='footer-button' type='submit'>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <p className='text-foot'>© Be my guest in Rio. Powered and secured by Wix</p>
            </div>
        </div>
        <div className='footer-div'>
        </div>
        </>
    )
}