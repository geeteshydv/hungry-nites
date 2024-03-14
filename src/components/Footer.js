import React from "react";
// Footer component for footer section
const Footer = () => {
  return (
    <div className="h-24 bg-[#000033] flex items-center justify-center text-white font-semibold   shadow-2xl  bottom-0">
      <div>
        Created By ❤️‍🔥
        <a
          href="https://www.linkedin.com/in/geeteshy/"
          target="_blank"
          title="Geetesh Yadav's Linkedin Profile"
        >
          Geetesh Yadav{" "}
        </a>
        ©2023{" "}
        <strong>
          Hungry<span>Nites</span>
        </strong>
      </div>
    </div>
  );
};

export default Footer;