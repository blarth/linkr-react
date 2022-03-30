import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import imageDelete from "../../../assets/Vector.svg";
import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import {
  ButtonDelete,
  ButtonNotDelete,
  ButtonDeletePost,
  Form,
  TextModal,
  Container,
} from "./style";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function DeletePost({ id, loadPost, loadHashTag }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#333333",
      borderRadius: "40px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function deletingPost(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.deletePost(id, auth);
      setIsLoading(false);
      closeModal();
      loadPost();
      loadHashTag();
    } catch {
      setIsLoading(false);
      Swal.fire({
        title: "Oops :(",
        text: "There was an error deleting your link",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      closeModal();
    }
  }

  return (
    <Container>
      <ButtonDeletePost onClick={openModal}>
        <img src={imageDelete} alt="delete" />
      </ButtonDeletePost>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {isLoading ? (
          <TextModal>
            <InfinitySpin color="grey" />{" "}
          </TextModal>
        ) : (
          <TextModal>
            Are you sure you want <br /> to delete this post?
          </TextModal>
        )}
        <Form>
          <ButtonNotDelete onClick={closeModal}>No, go back</ButtonNotDelete>
          <ButtonDelete onClick={(e) => deletingPost(e)}>
            Yes, delete it
          </ButtonDelete>
        </Form>
      </Modal>
    </Container>
  );
}
