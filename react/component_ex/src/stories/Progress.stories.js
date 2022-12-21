import Progress from "../components/Progress";

export default {
  title: "Component/Progress",
  component: Progress,
  argTypes: {
    value: { defaultValue: 50, control: "number" },
  },
};

export const Default = (args) => {
  return <Progress {...args} />;
};
