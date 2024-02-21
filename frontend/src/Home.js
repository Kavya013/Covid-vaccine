import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VaccinationCenterTable from './VaccinationCenterTable';
import backgroundImage from './covid.jpg'; // Import your background image

function Home() {
    const [vaccinationCenters, setVaccinationCenters] = useState([]);

    const handleBook = (centerId) => {
        const selectedCenter = vaccinationCenters.find((center) => center.id === centerId);

        if (selectedCenter.availableSlots === 0) {
            window.alert('Sorry, the slots are booked. Please try again later');
            return;
        }

        axios.post('https://covid-vaccine-booking-5beb.onrender.com/bookVaccinationCenter', { id: centerId })
            .then((response) => {
                if (response.data.success) {
                    window.alert('Booking successful! You have successfully booked a slot:)');
                } else {
                    console.error('Booking failed:(', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error booking vaccination center:', error);
            });
    };

    useEffect(() => {
        axios.get('https://covid-vaccine-booking-5beb.onrender.com/getVaccinationCenters')
            .then((response) => {
                setVaccinationCenters(response.data);
            })
            .catch((error) => {
                console.error('Error fetching vaccination centers:', error);
            });
    }, []);

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="container">
                <h1 className="text-center mb-4">Welcome to the Vaccination Center Portal</h1>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2>Available Vaccination Centers</h2>
                        {vaccinationCenters.length > 0 ? (
                            <VaccinationCenterTable
                                vaccinationCenters={vaccinationCenters}
                                onBook={handleBook}
                            />
                        ) : (
                            <p>No vaccination centers available at the moment...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;







