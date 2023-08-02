import { ChangeEvent, FormEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface AddNewTask {
  inputValue: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  addTask: (e: FormEvent) => void;
}

export function AddNewTask({ onChange, inputValue, addTask }: AddNewTask) {
  const hasText = inputValue.length < 1;
  return (
    <section className="relative top-[-30px] gap-2 h-14 flex w-full text-white">
      <input
        className="
            w-[75%] 
            bg-gray-500 
            border-[1px] 
            border-gray-700
            rounded-lg
            p-4
            placeholder:text-gray-300 
            focus:outline-none 
            focus:border-purple
            transition-all
           "
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={onChange}
      />
      <button
        className="
            w-[25%] 
            flex 
            items-center 
            justify-center
            bg-blueDark
            rounded-lg
            gap-2
            font-bold
            hover:bg-blue
            transition-all
            "
        onClick={addTask}
        disabled={hasText}
      >
        Criar <AiOutlinePlusCircle className="mt-[2px]" size={20} />
      </button>
    </section>
  );
}
