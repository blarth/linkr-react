import { EditButton } from "./style";
import EditIcon from "../../../assets/svg/EditIcon.svg";

export default function EditPostButton({ editMode, setEditMode, postText }) {
  function editModeHandler() {
    if (editMode.isEditing) {
      setEditMode({ ...editMode, isEditing: false, inputValue: postText });
    } else {
      setEditMode({ ...editMode, isEditing: true });
    }
  }

  return (
    <EditButton onClick={() => editModeHandler()}>
      <img src={EditIcon} alt="edit post button" />
    </EditButton>
  );
}
