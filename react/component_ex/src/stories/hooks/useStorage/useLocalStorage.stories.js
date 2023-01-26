import useLocalStorage from "../../../hooks/useStorage/useLocalStorage";

export default {
  title: "Hook/useLocalStorage",
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage("status", "404 NOT FOUND");

  return (
    <div>
      <button onClick={() => setStatus("200 ok")}>Resend</button>
      {status}
    </div>
  );
};
