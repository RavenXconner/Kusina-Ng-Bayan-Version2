import React from 'react';
import './css/Maintenance.css'; // Optional: External CSS file for styles
import Footer from "./FooterPage";

const MaintenancePage = () => {
  return (
    <div className="maintenance-html">
      <div className="maintenance-body">
        <article className="maintenance-article">
          <svg
            className="maintenance-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 202.24 202.24"
          >
            <defs>
              <style>{'.cls-1 { fill: #fff; }'}</style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Capa_1" data-name="Capa 1">
                <path
                  className="cls-1"
                  d="M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z"
                />
                <path
                  className="cls-1"
                  d="M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z"
                />
              </g>
            </g>
          </svg>
          <h1 className="maintenance-h1">We’ll be back soon!</h1>
          <div>
            <p>
              Sorry for the inconvenience. We’re performing some maintenance at the moment.
              If you need to, you can always follow us on <a className="maintenance-a" href="https://www.facebook.com/profile.php?id=61567247573741&mibextid=ZbWKwL">Facebook</a> for updates,
              otherwise we’ll be back up shortly!
            </p>
            <p>— The Kusina ng Bayan Team</p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default MaintenancePage;
