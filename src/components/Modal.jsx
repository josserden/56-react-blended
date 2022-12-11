import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const Modal = ({ visible, toggler, children }) => {
  return (
    <>
      {visible ? (
        <div className='fixed w-full h-full top-0 right-0 z-50'>
          <div className='bg-gray-200 text-black h-full w-full px-4 '>
            <div className='flex items-start justify-between p-5'>
              <h3 className='text-black text-xl lg:text-2xl font-semibold '>
                Add contact
              </h3>

              <Button onClick={toggler}>Close</Button>
            </div>

            <div className='p-6 space-y-6'>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
