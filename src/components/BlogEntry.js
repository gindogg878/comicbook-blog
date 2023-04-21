import "../style.css";

export default function BlogEntry(props) {
  return (
    <div>
      <button id="myButton">AddComment</button>
      <div id="textBox" style={{ display: "none" }}>
        <input type="text" placeholder="Type here..." />
      </div>
    </div>
  );
}

// <button
//         onClick={
//           (e) => {
//             props.dispatch({
//               type: "addTodo",
//               payload: { text: e.target.value },
//             });
//             e.target.value = "";
//           }
//           // props.deleteTodo(props.todo.id);
//         }
//       >
//         AddComment
//       </button>
