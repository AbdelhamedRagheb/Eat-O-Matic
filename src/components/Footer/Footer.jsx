import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // إضافة LinkedIn هنا
import style from './Footer.module.css';

export default function Footer() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Placeholder for any logic you want to add
    }, []);

    return (
        <footer className="bg-[#fff3e6] p-10 text-gray-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-2 text-orange-600">🍲 Eat_O_Matic</h3>
                    <p className="text-sm mb-2">
                        Taste the best meals made with fresh ingredients at Eat_O_Matic.
                    </p>
                    <a href="#" className="text-orange-600 text-sm underline">Learn more</a>
                    <div className="mt-4 text-sm">
                        <strong>Opening Hours:</strong><br />
                        Monday - Friday: 8:00 am to 9:00 pm <br />
                        Saturday: 8:00 am to 9:00 pm <br />
                        Sunday: <span className="text-red-600">CLOSED</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Navigation</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Main dishes</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Dishes</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Fish &amp; Veggies</li>
                        <li>Tofu Chili</li>
                        <li>Egg &amp; Cucumber</li>
                        <li>Lumpia w/Suace</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 ">Follow Us</h4>
                    <div className="flex space-x-3 justify-start items-center text-xl text-orange-600 mx-12 my-5">
                        <a href="#" className="hover:text-blue-500 transition-colors transform -translate-x-2 px-2"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors transform -translate-x-2 px-2"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors transform -translate-x-2 px-2"><FaTwitter /></a>
                        <a href="#" className="hover:text-blue-700 transition-colors transform -translate-x-2 px-2"><FaLinkedin /></a> {/* إضافة LinkedIn هنا */}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm border-t pt-4 text-gray-600">
                &copy; 2022 Restaurants. All Rights Reserved. Designed by <strong>Isaac</strong> | 
                <a href="#" className="ml-2 underline">Terms of Service</a> | 
                <a href="#" className="ml-2 underline">Privacy Policy</a>
            </div>
        </footer>
    );
}





