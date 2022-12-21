import Text from "../components/Text";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  return <Text {...args}>Text</Text>;
};
