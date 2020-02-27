import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../components/card-style.css';

const CardModal = (props) => {
    const {
        modalTitle,
        buttonLabel,
        className,
        content
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <video width="500px" controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
                </video>
                <p style={{ fontFamily: "Georgia", marginLeft: '20px', marginTop: '15px' }}>{content}</p>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default CardModal;