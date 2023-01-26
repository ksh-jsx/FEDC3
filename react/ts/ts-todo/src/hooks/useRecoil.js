import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../store/recoil";

const useRecoil = () => {
  const [recoilTask, setRecoilTask] = useRecoilState(todoState);

  const updateTask = useCallback(
    (id, status) =>
      setRecoilTask(
        recoilTask.map((item) => (item.id === id ? { ...item, complete: status } : item))
      ),
    [recoilTask, setRecoilTask]
  );
  const removeTask = useCallback(
    (id) => setRecoilTask(recoilTask.filter((item) => item.id !== id)),
    [recoilTask, setRecoilTask]
  );

  return [recoilTask, updateTask, removeTask];
};

export default useRecoil;
