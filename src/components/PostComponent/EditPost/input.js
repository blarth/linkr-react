import { EditInput } from "./style";
import { useRef, useEffect } from "react";

export default function EditPostInput({ handleChange, handleKey, editMode }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <EditInput
      type="text"
      onChange={(e) => handleChange(e)}
      onKeyDown={(e) => handleKey(e)}
      value={editMode.inputValue}
      ref={inputRef}
      disabled={editMode.inputDisabled}
      isDisabled={editMode.inputDisabled}
    />
  );
}
