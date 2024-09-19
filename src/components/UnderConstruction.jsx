import React, { useEffect, useState } from 'react';


const SmoothTextChange = () => {

  const [hideSpans, setHideSpans] = useState(false);
  const [isFinalText, setIsFinalText] = useState(false);


  useEffect(() => {
    // Set a timeout to hide spans after 3 seconds
    const timer = setTimeout(() => {
      setHideSpans(true); // Start the fade out effect

      // After 1 second (allowing spans to fade out), change the text
      setTimeout(() => {
        setIsFinalText(true); // Change the text to "JGE"
      }, 500);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);



  return (
    <h1 className={hideSpans ? 'faded' : ''}>
      {isFinalText ? (
        'JGE.am'
      ) : (
        <>
          J<span>ERMA</span>G<span>AS</span>E<span>L</span>
        </>
      )}
    </h1>
  );
};

export default SmoothTextChange;
