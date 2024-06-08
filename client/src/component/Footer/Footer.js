import React from 'react'


function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer id="contact" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
        <div className="footer d-flex flex-wrap">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.16286963964!2d74.68598130582753!3d18.617238269920172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc343dab849c157%3A0xef28b33db8ed6649!2sShrigonda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709024883057!5m2!1sen!2sin"
              width="450" height="350" style={{ border: '1px solid black' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="footer-info d-flex justify-content-between my-2 mx-auto flex-wrap">
            <div className="info">
              <div className="footer-location d-flex mt-2">
                <span className="material-symbols-outlined">location_on</span>
                <div className="location ms-3">
                  <h4>Sai Multispecility Hospital</h4>
                  <p>Sai Nivas, Shrigonda, Ahmednagar, India</p>
                </div>
              </div>
              <div className="footer-email d-flex mt-3">
                <span className="material-symbols-outlined">mail</span>
                <div className="email ms-3">
                  <h4>Email</h4>
                  <a href="#">saihospital@gmail.com</a>
                </div>
              </div>
              <div className="footer-website d-flex mt-3">
                <span className="material-symbols-outlined">house</span>
                <div className="website ms-3">
                  <h4>Website</h4>
                  <a href="#">www.saihospital.com</a>
                </div>
              </div>
              <div className="footer-number d-flex mt-3">
                <span className="material-symbols-outlined">call</span>
                <div className="number ms-3">
                  <h4>Help-line Numbers</h4>
                  <p>033 40 500 500 <br /> +91 9831639000 <br /> +91 983153900</p>
                  <h4>Corporate Booking Number</h4>
                  <p>+91 8585088550</p>
                </div>
              </div>
            </div>
            <div className="info ms-5">
              <div className="sms">
                <h4 className="dr">Doctors wanting to reach <br /> Sai Hospital <br /> Management</h4>
                <h4>may please call:</h4>
                <p>CMS(+91 98310 96524) <br /> GMM(+91 97487 70596)</p>
                <h4>or send E-mail to:</h4>
                <p>CEO: ceo.saihospital@gmai.com <br /> CMS: cmssaihospital@.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="design">
          <p>Design by Arohi Software</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
