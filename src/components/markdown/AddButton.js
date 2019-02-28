import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ handleAdd }) {
  return (
    <button onClick={handleAdd}>Add Tab</button>
  );
}

AddButton.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddButton;
