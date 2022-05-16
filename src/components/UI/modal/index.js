import React,{ useState,useEffect } from "react";
import ReactDOM from "react-dom"
import classes from './modal.module.scss'

const Modal = ({ show, onClose, children, title, subtitle, footer }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.modal__overlay}>
      <div className={classes.modal}>
        <div className={classes.modal__header}>
          <a className={classes.modal__close} href="#" onClick={handleCloseClick}>
            cerrar 
            <span  className={classes.modal__closeX}>
              X
            </span>
          </a>
        </div>
          {
          title && <div className={classes.modal__title}>
            {title}
          </div>
          }
          <div className={classes.modal__body}>
            <h3>{subtitle}</h3>
          </div>
          <div  className={classes.modal__footer}>
            {footer}
          </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};



export default Modal;