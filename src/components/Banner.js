import React, { useState } from 'react';

export const Banner = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="banner" id="home">
      <div className="Container">
        <div className="row">
          <div className='col-xs-12 col-md-16 col-xl-7'>
                <h1 className="tagline">Welcome to my Portfolio</h1>
                <p>Hey guys, I'm Bhavani sankar.</p>
                <p>I am a student with great passion for all things information technology support jobs, and I intend to work towards a career in the same industry.I'm able to work in a team with Leadership skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
