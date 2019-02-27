import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ onSave }) {
  return (
    <button onClick={onSave}>Add Tab</button>
  );
}

AddButton.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default AddButton;
