import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-white py-4 border-t'>
      <div className='container'>
        <p className='text-base text-center font-bold'>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
