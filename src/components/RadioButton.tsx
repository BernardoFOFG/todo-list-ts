import { AiFillCheckCircle } from "react-icons/ai";

interface RadionButtonProps {
  completed: boolean;
  setCompleted: (value: boolean) => void;
}

export const RadioButton = ({ completed, setCompleted }: RadionButtonProps) => {
  return (
    <>
      {completed ? (
        <span
          className="w-6 h-6 rounded-[50%] border-2 border-purple bg-transparent cursor-pointer text-gray-100 flex items-center justify-center"
          onClick={() => setCompleted(false)}
        >
          <AiFillCheckCircle size={24} />
        </span>
      ) : (
        <span
          className="w-6 h-6 rounded-[50%] border-2 border-blue bg-transparent cursor-pointer flex items-center justify-center"
          onClick={() => setCompleted(true)}
        >
          <span className="h-6 w-6"></span>
        </span>
      )}
    </>
  );
};
