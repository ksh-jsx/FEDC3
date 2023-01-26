import { useState } from "react";
import Modal from "../components/Modal";

export default {
  title: "Component/Modal",
  component: Modal,
  argTypes: {},
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show default</button>
      <Modal visible={visible}>
        Hi!
        <button onClick={() => setVisible(false)}>close</button>
      </Modal>
    </div>
  );
};
