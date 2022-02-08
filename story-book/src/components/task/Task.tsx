import styled from "@emotion/styled";

export interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
    updateAt: Date;
  };
  onArchiveTask: any;
  onPinTask: any;
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) => {
  return (
    <TaskCotainer>
      <InputWrap onClick={() => {}}>
        <label className="checkbox">
          <input
            type="checkbox"
            defaultChecked={state === "TASK_ARCHIVED"}
            disabled={true}
            name="checked"
          />
          <span
            className="checkbox-custom"
            onClick={() => onArchiveTask(id)}
            id={`archiveTask-${id}`}
            aria-label={`archiveTask-${id}`}
          />
        </label>
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </InputWrap>
      <ActionItem onClick={(e) => e.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </a>
        )}
      </ActionItem>
    </TaskCotainer>
  );
};

const TaskCotainer = styled.section`
  width: 100%;
  background: #00b89f;
  display: flex;
  flex-direction: column;
`;

const InputWrap = styled.div`
  margin: 10px 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background: white;
  textoverflow: ellipsis;

  & input {
    width: 100%;
    margin-left: 10px;
    border: none;
  }
`;

const ActionItem = styled.div``;

export default Task;
