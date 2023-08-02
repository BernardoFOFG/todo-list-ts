interface HeaderListProps {
  totalTasks: number;
  completedTasks: number;
}

export const HeaderList = ({ totalTasks, completedTasks }: HeaderListProps) => {
  return (
    <section className="flex justify-between font-bold">
      <div>
        <p className="text-white">
          Tarefas criadas <span>{totalTasks}</span>
        </p>
      </div>
      <div>
        <p className="text-white">
          Tarefas concluidas <span>{completedTasks}</span>
        </p>
      </div>
    </section>
  );
};
