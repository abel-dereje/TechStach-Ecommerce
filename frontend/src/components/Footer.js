import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#009FBD] text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          {/* Column 1 */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold mb-4'>Ecommerce Platform</h2>
            <p className='text-gray-200' title="Youtube Channel">For Techstack Service</p>
          </div>
          {/* Column 2 */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul>
              <li className='mb-2'><a href="#home" className='hover:underline'>Home</a></li>
              <li className='mb-2'><a href="#wishlist" className='hover:underline'>Wishlist</a></li>
              <li className='mb-2'><a href="#cart" className='hover:underline'>Cart</a></li>
              <li className='mb-2'><a href="#checkout" className='hover:underline'>Checkout</a></li>
              <li className='mb-2'><a href="#contact" className='hover:underline'>Contact Us</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='mb-2'>123 Tech Street, San Francisco, CA 94103</p>
            <p className='mb-2'>Email: info@techstack.com</p>
            <p className='mb-2'>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className='text-center mt-8'>
          <p className='text-gray-200'>&copy; 2024 Techstack Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
