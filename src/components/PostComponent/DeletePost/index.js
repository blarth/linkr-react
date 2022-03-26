import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import imageDelete from '../../../assets/Vector.svg'
import api from '../../../services/api';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import {
    ButtonDelete,
    ButtonNotDelete,
    ButtonDeletePost,
    Form,
    TextModal
} from "./style";



export default function DeletePost({id, metadata}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { auth } = useAuth();
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#333333',
          borderRadius: '40px',
        },
    };

    function openModal() {
        setIsOpen(true);
        console.log(metadata)
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function deletingPost(){
        try{
            const dell = await api.deletePost(id , auth);
            //setIsLoading(false);
            return(dell)
        }
        catch{
            //setIsLoading(false);
            alert("deu bom")
            Swal.fire({
                title: "Oops :(",
                text: "There was an error publishing your link",
                background: "#d66767",
                confirmButtonColor: "#9f9adb",
                color: "#fff",
            });
        }
    }

    return (
        <>
            <ButtonDeletePost onClick={openModal}><img src={imageDelete} alt="delete" /></ButtonDeletePost>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <TextModal>Are you sure you want <br/> to delete this post?</TextModal>
                <Form>
                    <ButtonNotDelete onClick={closeModal}>No, go back</ButtonNotDelete>
                    <ButtonDelete onClick={deletingPost}>Yes, delete it</ButtonDelete>
                </Form>
            </Modal>
        </>
    );
}