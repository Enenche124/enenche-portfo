import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-stone-300 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} John Enenche Adah. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Enenche124"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-adah-042338339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/john69153?t=WL4KeNrudpmK5ljmFJW8lw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          {/* <a
            href="https://www.facebook.com/profile.php?id=61579155453621"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a> */}
          <a
            href="https://wa.me/2348148761419"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
