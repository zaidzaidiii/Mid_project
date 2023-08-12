import React from 'react';

function FooterSec() {
  const sty= {

    background:"black"
    
    
  }
  
  return (
    <footer className="  text-center py-4"style={{ ...sty}}>
      <div className="container">
        <p className="m-0">
          &copy; {new Date().getFullYear()} All in One Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSec;
