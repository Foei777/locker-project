import React, { useState } from 'react';

function About() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1); // Default number of guests is 1

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumGuestsChange = (e) => {
    setNumGuests(e.target.value);
  };

  const handleReservationSubmit = () => {
    // Perform actions when the reservation form is submitted
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Number of Guests:', numGuests);
    // Add logic for handling the reservation (e.g., send data to server)
  };

  return (
    <>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">โปรดเลือกการจองของคุณ</h2>
              <p className="text-white-50">
                <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                The theme is open source, and you can use it for any purpose, personal or commercial.
              </p>
              <form>
                <label htmlFor="checkInDate">Check-in Date:</label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                />
                <br />

                <label htmlFor="checkOutDate">Check-out Date:</label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                />
                <br />

                <label htmlFor="numGuests">Number of Guests:</label>
                <input
                  type="number"
                  id="numGuests"
                  value={numGuests}
                  onChange={handleNumGuestsChange}
                />
                <br />

                <button type="button" onClick={handleReservationSubmit}>
                <a href="#projects">Next</a>
                </button>

              </form>
            </div>
          </div>
          <img
            className="img-fluid"
            src=" https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            alt="..."
          />
        </div>
      </section>
    </>
  );
}

export default About;
