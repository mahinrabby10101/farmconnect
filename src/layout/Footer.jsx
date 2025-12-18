import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-[#116EB0] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          <div>
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold ">
      <FaLeaf className="text-yellow-300 text-3xl" />
    
      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>FarmConnect</h2>
      </Link>

            <p className="mt-2 text-sm text-blue-200">
            Connecting farmers, traders, and consumers in one digital agro-network.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 text-xl">
              <a href="#" className="hover:text-white"><FaFacebook /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaYoutube /></a>
              <a href="#" className="hover:text-white"><FaXTwitter /></a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-10 border-t border-white/20 pt-4">
          © 2025 FarmConnect. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
