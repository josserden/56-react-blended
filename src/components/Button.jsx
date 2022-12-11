import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const Button = ({ children, className, type = 'button', ...props }) => {
  return (
    <button
      className={cn(
        'block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 tracking-wider transition-colors',
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};
