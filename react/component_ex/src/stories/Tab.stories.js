import Tab from "../components/Tab";

export default {
  title: "Component/Tab",
  component: Tab,
  argTypes: {},
};

export const Default = (args) => {
  return (
    <Tab>
      <Tab.Item title="item1" index="item1">
        Content 1
      </Tab.Item>
      <Tab.Item title="item2" index="item2">
        Content 2
      </Tab.Item>
      <Tab.Item title="item3" index="item3">
        Content 3
      </Tab.Item>
    </Tab>
  );
};
