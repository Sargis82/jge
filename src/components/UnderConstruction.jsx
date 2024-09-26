import React, { useEffect, useState } from 'react';

const SmoothTextChange = () => {

  const [hideSpans, setHideSpans] = useState(false);
  const [isFinalText, setIsFinalText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideSpans(true);
      setTimeout(() => {
        setIsFinalText(true); 
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <h1 className={hideSpans ? 'faded' : ''}>
      {isFinalText ? (
        'JGE.am'
      ) : (
        <>
          J<span>ERMA</span>G<span>AS</span>E<span>L</span>
        </>
      )}
    </h1>
    </>
  );
};

export default SmoothTextChange;
