import { useRef, useState } from "react";
import styled from "@emotion/styled";

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(value);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changeFile = files[0];
    setFile(changeFile);
    onChange && onChange(changeFile);
  };

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const defaultDrag = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    defaultDrag(e);

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e) => {
    defaultDrag(e);

    setDragging(false);
  };
  const handleDragOver = (e) => {
    defaultDrag(e);
  };
  const handleFileDrop = (e) => {
    defaultDrag(e);

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange} />
      {typeof children === "function" ? children(file, dragging) : children}
    </UploadContainer>
  );
};

export default Upload;
