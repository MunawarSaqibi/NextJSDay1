export default async function Todo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Todos page:</h1>
      {data.map((todoObj) => {
        return <TodoComponent key={todoObj.id} prop={todoObj} />;
      })}
    </div>
  );
}

const TodoComponent = ({ prop }) => {
  const { userId, id, title, completed } = prop;
  return (
    <div className="bg-[yellowgreen] border border-black flex flex-wrap gap-4 p-4">
      <div>{userId}</div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
};
