import "../scss/Modal.scss";

interface ModalProps {
  openModal: (openModal: boolean) => void;
  title: string;
  message: string;
}

const Modal = ({ openModal, title, message }: ModalProps) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="body">
          <p>{message}</p>
        </div>
        <div className="footer">
          <button onClick={() => openModal(false)}>Got it!</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
