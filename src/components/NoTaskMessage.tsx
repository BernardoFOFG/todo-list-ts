import { PiClipboardText } from "react-icons/pi";

export const NoTaskMessage = () => {
  return (
    <section className="flex-1 flex items-center justify-center flex-col px-6 py-24 gap-4 border-t-[1px] border-gray-400 text-white">
      <PiClipboardText size={56} />
      <p className="flex flex-col leading-[1.4]">
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  );
};
