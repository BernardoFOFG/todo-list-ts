import { ModalDeleteProps } from "../types";

export function ModalDelete({ onDelete, onClose }: ModalDeleteProps) {
  function handleOutsideClick(id: string) {
    if (id === "modal") onClose();
  }
  return (
    <div
      id="modal"
      className="w-full h-screen absolute top-0 left-0 bg-grayOpacity flex justify-center items-center text-white"
      onClick={() => handleOutsideClick("modal")}
    >
      <div className="p-4 rounded-lg flex flex-col bg-gray-600 border-2 border-blueDark gap-4">
        <header className="flex items-center justify-center">
          <p className="text-lg font-bold text-gray-100 mx-0 my-2">
            Deletar Task
          </p>
        </header>

        <p>Tem certeza que deseja excluir essa tarefa? </p>

        <footer className="flex items-center justify-center gap-4 font-bold">
          <button
            className="pt-[2px] px-4 cursor-pointer text-base leading-[1.4] rounded-md transition-all bg-transparent text-purpleDark border-[1px] border-purpleDark hover:opacity-[0.8]"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="pt-[2px] px-4 cursor-pointer text-base leading-[1.4] rounded-md transition-all bg-transparent text-blueDark border-[1px] border-blueDark hover:opacity-[0.8]"
            onClick={() => {
              handleOutsideClick("modal");
              onDelete();
            }}
          >
            Excluir
          </button>
        </footer>
      </div>
    </div>
  );
}
