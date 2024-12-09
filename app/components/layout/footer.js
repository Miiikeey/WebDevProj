import React from 'react';

export default function Footer() {
  return (
    <footer className="text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484041!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b1d4f1a1a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-2">Great food and excellent service! - John Doe</p>
              <p className="mb-2">A wonderful dining experience. - Jane Smith</p>
              <p className="mb-2">Highly recommend this place! - Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}