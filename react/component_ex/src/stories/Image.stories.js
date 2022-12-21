import Image from "../components/Image";

export default {
  title: "Component/Image",
  component: Image,
  argTypes: {
    lazy: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    block: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    src: {
      defaultValue: "https://picsum.photos/200",
      type: { name: "string", require: true },
      control: { type: "text" },
    },
    placeholder: {
      defaultValue: "https://via.placeholder.com/200",
      type: { name: "string" },
      control: { type: "text" },
    },
    threshold: {
      type: { name: "number" },
      defaultValue: 0.5,
      control: { type: "number" },
    },
    width: {
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    alt: {
      control: "string",
    },
    mode: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args) => {
  return <Image {...args} />;
};

export const Lazy = (args) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} lazy block src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  );
};
