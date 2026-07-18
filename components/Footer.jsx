import { GithubSVG, LinkedinSVG, WhatsappSVG } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="flex flex-col justify-center px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/AlbertCarri"
            target="blank"
            className="text-white scale-100 hover:scale-125 duration-200"
          >
            <GithubSVG size={48} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/alberto-edelmiro-carrizo-7639a186/"
            target="blank"
            className="text-white scale-100 hover:scale-125 duration-200"
          >
            <LinkedinSVG size={48} color="white" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543489591808&text=Hola%20edelbyte,%20necesito%20información%20acerca%20de"
            target="blank"
            className="text-white scale-100 hover:scale-125 duration-200"
          >
            <WhatsappSVG size={48} color="white" />
          </a>
        </div>
        <p className="text-center mt-4 text-sm">
          © 2025 Retro Dev. All rights reserved.
        </p>
        <a
          href="mailto:info@edelbyte.com.ar"
          target="blank"
          className="mx-auto mt-4 text-sm"
        >
          Email : info@edelbyte.com.ar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
