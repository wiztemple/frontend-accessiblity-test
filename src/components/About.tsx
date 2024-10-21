import React from "react";
import "./About.css";

const About: React.FC = () => {
  const handleClick = () => {
    alert("Thanks! Your feedback is important to us.");
  };

  return (
    <main className="about-container">
      <h1>About This Website</h1>
      <p>
        This website is an accessibility exercise designed to demonstrate the
        importance of accessibility in web development. It showcases various
        features that can be implemented to enhance user experience for
        individuals with disabilities.
      </p>
      <h2>Helpful Resources</h2>

      <ul aria-label="List of helpful accessibility resources">
        <li>
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WebAIM Contrast Checker - external link"
          >
            WebAIM Contrast Checker
          </a>
          : Check color contrasts to ensure they meet the AA grade (should be at
          least 4.5).
        </li>
        <li>
          <a
            href="https://htmlcolorcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HTML Color Codes - external link"
          >
            HTML Color Codes
          </a>
          : A tool to help you pick hex colors.
        </li>
        <li>
          <a
            href="https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Landmark Navigation Extension - Chrome Web Store link"
          >
            Landmark Navigation Extension
          </a>
          : Chrome extension to navigate through landmarks.
        </li>
      </ul>
      <div className="button-container">
        <button
          className="custom-button"
          onClick={handleClick}
          aria-label="Feedback button"
          aria-live="assertive"
        >
          Was this page helpful? Click here to let us know!
        </button>
      </div>
    </main>
  );
};

export default About;
