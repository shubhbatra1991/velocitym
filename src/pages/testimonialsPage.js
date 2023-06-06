import React from 'react'
import { FaPhone } from 'react-icons/fa';

const testimonials = () => {
  return (
    <>
    <section className="testimonial-page">
      <div className='Hero-page'>
        <div className="testi">
          <div className="book-banner">
            <div className="overlay">
              <div className="container">
                <div className="text-content">
                  <h2>Book a car by getting in touch with us</h2>
                  <span>
                    <i className='fa fa-phone'><FaPhone /></i>
                    <h3>(123)-456-999</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default testimonials;