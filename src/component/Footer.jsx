import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#97E9F9] to-[#57E8D0] text-gray-800">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Social Icons */}
        <div className="text-center md:text-left">
          <img
            src="/images/logo.png"
            alt="Custom Tees & Gifts"
            className="w-28 h-28 mx-auto md:mx-0 mb-4"
          />
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-black">
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a href="#" className="text-black">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-black">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-black">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Column 2: About Us */}
        <div className="pr-6"> {/* Added right padding */}
          <h4 className="font-extrabold text-lg mb-4 text-center md:text-left">ABOUT US</h4>
          <p className="text-md text-black leading-relaxed text-center md:text-left">
            Born from a passion for creativity and quality, we’ve made it our mission to help you
            transform your living spaces with personalized touches that reflect your unique style.
          </p>
        </div>

        {/* Column 3: Navigation Links */}
        <div className="pl-6"> {/* Added left padding */}
          <h4 className="font-extrabold text-lg mb-4 text-center md:text-left">NAVIGATION</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a href="#" className="text-black">
                Catalog
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Best Selling
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white text-sm text-center py-4">
        <p>
          © 2024, Custom Tees and Gifts Powered by Shopify.{' '}
          <a href="#" className="hover:underline">
            Privacy policy
          </a>{' '}
          ·{' '}
          <a href="#" className="hover:underline">
            Refund policy
          </a>{' '}
          ·{' '}
          <a href="#" className="hover:underline">
            Terms of service
          </a>{' '}
          ·{' '}
          <a href="#" className="hover:underline">
            Shipping policy
          </a>{' '}
          ·{' '}
          <a href="#" className="hover:underline">
            Contact information
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
