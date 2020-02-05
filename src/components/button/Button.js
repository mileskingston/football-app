import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button
      className={classNames('btn', { 'btn--disabled' : props.disabled, [props.classes]: props.addClass })}
      value={props.value}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  addClass: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
}

export default Button;
