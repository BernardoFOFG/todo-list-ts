export type TaskProps = {
  id: string;
  isCompleted: boolean;
  title: string;
};
type CompletedTask = (task: TaskProps) => void;
type onDelete = (task: TaskProps) => void;

export interface TasksComponentProps {
  task: TaskProps;
  handleCompletedTask: CompletedTask;
  onDelete: onDelete;
}

export interface TasksListProps {
  tasks: TaskProps[];
  handleCompletedTask: CompletedTask;
  onDelete: onDelete;
}

export interface ModalDeleteProps {
  onDelete: () => void;
  onClose: () => void;
}
