'use client';

import { FaInstagram, FaBehance, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h2 className="text-lg font-semibold">Eclipso</h2>
          <p className="mt-2 text-gray-400">Subscribe & enjoy weekly free resources!</p>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-white text-black w-full"
            />
            <button className="p-2 bg-[#C6FB50] text-black rounded-r-md">→</button>
          </div>
          <div className="flex gap-3 mt-4">
            <FaInstagram className="text-[#C6FB50] text-2xl cursor-pointer" />
            <FaBehance className="text-[#C6FB50] text-2xl cursor-pointer" />
            <FaLinkedin className="text-[#C6FB50] text-2xl cursor-pointer" />
            <FaDribbble className="text-[#C6FB50] text-2xl cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li>About Us</li>
            <li>Our Work</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Work</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li>SkinRats</li>
            <li>Candy Shop</li>
            <li>Wallet App</li>
            <li>Smart-Zebra</li>
            <li>Exit-Game</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li>UI/UX Design</li>
            <li>Webflow Development</li>
            <li>Branding</li>
            <li>Maintenance</li>
            <li>Migrations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact us</h3>
          <p className="mt-2 text-gray-400">office@eclipso.studio</p>
          <h3 className="mt-4 font-semibold">Based in</h3>
          <p className="mt-2 text-gray-400">Banja Luka, Bosnia & Herzegovina</p>
        </div>
      </div>
      <div className="mt-8 text-gray-400 text-sm text-center border-t border-gray-700 pt-4">
        <p>Copyright © 2025 Eclipso Studio™</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}