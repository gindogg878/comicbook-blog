export default function commentReducer(state, action) {
  const { type, payload } = action;
  const commentsCopy = [...state];
  let indexofComments;
  if (payload.id) {
    //using the findIndex array method to find the target todo obj with a given id.
    indexofComments = commentsCopy.findIndex(
      (comment) => comment.id === payload.id
    );
  }

  switch (type) {
    case "setComments":
      return payload;

    case "addComment":
      const newComment = {
        text: payload.text,
        id: Date.now(),
      };
      localStorage.setItem("todos", JSON.stringify([newComment, ...state]));
      return [newComment, ...state];

    default:
      return state;
  }
}
