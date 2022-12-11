import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-slate-100'>
      <Header />

      <main className='flex-grow'>
        <section className='py-10'>
          <div className='container'>{children}</div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
