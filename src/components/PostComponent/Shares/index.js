import Modal from "react-modal";
import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import {
  ButtonDelete,
  ButtonNotDelete,
  Form,
  TextModal,
  ContainerRepost,
} from "./style";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import VectorRepost from "../../../assets/repost.png";
import VectorReposted from "../../../assets/reposted.png";


export default function Repost({
  id,
  loadPost,
  loadHashTag,
  numberReposts,
  reposterId,
}) {

  const [alreadyReposted, setAlreadyReposted] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  async function verifyAlreadyRepost() {
    try {
      const verify = await api.verifyRepost(id, auth);
      if (verify.data) {
        setAlreadyReposted(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function Repost(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.createRepost(id, auth);
      setIsLoading(false);
      closeModal();
      loadPost();
      loadHashTag();
      setAlreadyReposted(!alreadyReposted);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        title: "Oops :(",
        text: "There was an error reposting",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      closeModal();
    }
  }

  useEffect(verifyAlreadyRepost, []);

  return (
    <>
      <ContainerRepost
        reposterId={reposterId}
        onClick={(e) => {
          if (!reposterId) {
            if (alreadyReposted) return Repost(e);
            openModal();
          }
        }}
      >
        {alreadyReposted ? (
          <img src={VectorReposted} alt="reposted" />
        ) : (
          <img src={VectorRepost} alt="repost" />
        )}
        {numberReposts} re-posts
      </ContainerRepost>
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
            Do you want to re-post <br /> this link?
          </TextModal>
        )}
        <Form>
          <ButtonNotDelete onClick={closeModal}>No, cancel</ButtonNotDelete>
          <ButtonDelete onClick={(e) => Repost(e)}>Yes, share!</ButtonDelete>
        </Form>
      </Modal>
    </>
  );
}
