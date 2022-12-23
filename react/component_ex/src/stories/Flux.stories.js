import Flux from "../components/Flux";
const { Row, Col } = Flux;

export default {
  title: "Component/Flux",
  component: Flux,
  argTypes: {},
};

export const Box = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#44b",
        width: "100%",
        height: 24,
        color: "white",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <Box />
        </Col>
        <Col span={4}>
          <Box />
        </Col>
        <Col span={2}>
          <Box />
        </Col>
        <Col span={2}>
          <Box />
        </Col>
        <Col span={2}>
          <Box />
        </Col>
        <Col span={4}>
          <Box />
        </Col>
        <Col span={2}>
          <Box />
        </Col>
        <Col span={2}>
          <Box />
        </Col>
        <Col offset={4} span={4}>
          <Box />
        </Col>
        <Col span={4}>
          <Box />
        </Col>
      </Row>
    </>
  );
};
