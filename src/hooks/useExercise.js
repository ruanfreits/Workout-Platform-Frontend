import { useContext } from "react";
import { ExerciseContext } from "../contexts/ExerciseProvider/Exercises";

const useExercise = () => {
  const context = useContext(ExerciseContext);

  return context;
};

export default useExercise;
