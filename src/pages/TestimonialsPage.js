import React from 'react';
import HeroPage from '@/components/HeroPage';
import Testimonials from '@/components/Testimonials';
import BookBanner from '@/components/BookBanner';

const TestimonialsPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPage name="Testimonials" />
            <Testimonials />
            <BookBanner />
            
      </section>
    </>
  );
}

export default TestimonialsPage;