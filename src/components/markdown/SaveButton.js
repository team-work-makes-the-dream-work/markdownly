import React from 'react';
import PropTypes from 'prop-types';

function SaveButton({ onSave }) {
  return (
    <button onClick={onSave}>Save</button>
  );
}

SaveButton.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default SaveButton;
