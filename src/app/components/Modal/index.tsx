import { ReactNode } from 'react';
import './styles.scss'

interface IModal {
    isOpen: boolean;
    title: string;
    children: ReactNode
}
const Modal = ({ isOpen, title, children }: IModal) => {

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2 className='modal-title'>{title}</h2>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;