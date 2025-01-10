import React, { useRef } from 'react';
import "./App.css"
import Header from 'src/pages/Header';


// Import your page components (assuming you have these components)
// import FirstPage from './components/FirstPage';
// import SecondPage from './components/SecondPage';
// import ThirdPage from './components/ThirdPage';
// import FourthPage from './components/FourthPage';

const Body: React.FC = () => {
  // Create refs for each page section
  const firstPageRef = useRef<HTMLDivElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);
  const thirdPageRef = useRef<HTMLDivElement | null>(null);
  const fourthPageRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to a given section
  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden bg-[#484747]">
      <Header
        scrollToFirstPage={() => scrollToSection(firstPageRef)}
        scrollToSecondPage={() => scrollToSection(secondPageRef)}
        scrollToThirdPage={() => scrollToSection(thirdPageRef)}
        scrollToFourthPage={() => scrollToSection(fourthPageRef)}
      />

      <div className="content-container">
        {/* <div ref={firstPageRef}><FirstPage /></div>
        <div ref={secondPageRef}><SecondPage /></div>
        <div ref={thirdPageRef}><ThirdPage /></div>
        <div ref={fourthPageRef}><FourthPage /></div> */}
      </div>
    </div>
  );
}

export default Body;
