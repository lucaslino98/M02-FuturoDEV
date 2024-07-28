import './modal.css'

import modalIMG from './image.webp'
const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={modalIMG} alt="logo Zé delivery" />
        <h2>Você tem mais de 18 anos?</h2>
        <div className="modal-btn">
          <button className='modal-btnY' onClick={onConfirm}>Sim</button>
          <button className='modal-btnN' onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default Modal