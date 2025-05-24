
const Read = ({todos}) => {
    const list = todos.map((todos) => {
        return (
            <li id={todos.id} key={todos.id}>{todos.title} | {todos.isComplete ? "Completed" : "Not Completed!!!"}</li>
        );
    });
  return (
    <>
        <ol className="todo-list">{list}</ol>
    </>
  );
};

export default Read;