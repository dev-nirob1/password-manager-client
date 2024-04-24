import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-cyan-500 to-cyan-400 text-gray-200 text-center py-4">
      <p className="text-sm font-medium">&copy; {currentYear} Developed by  <FaHeart className="text-red-500 inline" /> Nirob</p>
    </footer>
  );
};

export default Footer;