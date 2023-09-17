import YesNoModal from './ModalReducer'
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { useThemeContext } from '../../Contexts/ThemeContext';

const ModalDenuncias = ({ showYesNoModal }) => {
  const {theme} = useThemeContext();

  return (
    <div id={theme}>
      <div>
        <button className='btn-info' onClick={showYesNoModal}>Informações</button>
      </div>
      <YesNoModal
        id="modal-id"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showYesNoModal: () => dispatch({ type: "ShowYesNoModal" })
})

export default connect(null, mapDispatchToProps)(ModalDenuncias);
