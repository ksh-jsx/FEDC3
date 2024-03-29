import Divider from "../components/Divider";
import Text from "../components/Text";

export default {
  title: "Component/Divider",
  component: Divider,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export const Horizontal = () => {
  return (
    <>
      <Text>위</Text>
      <Divider type="horizontal" />
      <Text>아래</Text>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <Text>왼쪽</Text>
      <Divider type="vertical" />
      <Text>오른쪽</Text>
    </>
  );
};
