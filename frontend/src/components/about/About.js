// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>Rent a Car with Confidence and Convenience</h1>
      <p>We are a car rental company that offers a wide range of vehicles, flexible pricing plans, and excellent customer service. We have been serving our customers since 2020, and we are proud to be the most trusted and reliable car rental provider in the area. We are not just a car rental company, we are your travel partner.</p>
      <div className="about-awards">
        <h2>Awards and Recognitions</h2>
        <p>We have received numerous awards and recognitions for our outstanding performance and customer satisfaction. Some of them include:</p>
        <ul>
          <li>The Best Car Rental Company of the Year 2023</li>
          <li>The Customer Choice Award 2024</li>
          <li>The Top Rated Car Rental Service on Google and Yelp</li>
        </ul>
      </div>
      <div className="about-testimonials">
        <h2>Testimonials</h2>
        <p>We also have hundreds of positive reviews and testimonials from our happy customers, who appreciate our professionalism, convenience, and affordability. Here are some of them:</p>
        <div className="about-testimonial">
          <p>'I rented a car from them for a week, and I was very impressed with their service. The car was clean, comfortable, and in good condition. The staff was friendly, helpful, and efficient. The booking process was easy and fast. I would definitely recommend them to anyone who needs a car rental.' - John Smith</p>
        </div>
        <div className="about-testimonial">
          <p>'They are the best car rental company I have ever used. They have a great selection of cars, from economy to luxury. The prices are reasonable and transparent. The customer service is superb. They even delivered the car to my hotel and picked it up when I was done. They made my trip hassle-free and enjoyable.' - Jane Doe</p>
        </div>
        <div className="about-testimonial">
          <p>'I have been a loyal customer of theirs for over a year, and I can say that they are the best in the business. They always have the car I need, whether it is for a business trip or a family vacation. They are flexible, reliable, and courteous. They always go the extra mile to make sure I am satisfied. They are more than a car rental company, they are a friend.' - Mike Jones</p>
        </div>
      </div>
      <div className="about-social">
        <h2>Social Media</h2>
        <p>You can also check out our social media pages, where we share our latest news, offers, and tips. Follow us on Facebook, Twitter, and Instagram to stay updated and connected.</p>
        <div className="about-social-icons">
          <a href="https://www.facebook.com/yourcarrentalcompany" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com/yourcarrentalcompany" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/yourcarrentalcompany" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="about-cta">
        <h2>Ready to Rent a Car with Us?</h2>
        <p>Book online now and get a 10% discount on your first rental. Or, if you have any questions or special requests, feel free to contact us anytime. We are always here to help you. You can also sign up for our newsletter and get exclusive deals, tips, and updates delivered to your inbox. Don't miss this opportunity to join our community of happy and satisfied customers. Rent a car with us today and experience the difference.</p>
        <div className="about-cta-buttons">
          <a href="/booking" className="about-cta-button">Book Now</a>
          <a href="/contact" className="about-cta-button">Contact Us</a>
          <a href="/subscribe" className="about-cta-button">Subscribe</a>
        </div>
      </div>
    </div>
  );
};

export default About;
