export default function BlogEntry(props) {
  return (
    <div>
      {props.data.map((entry) => {
        return (
          <>
            <h1>{entry.title}</h1>
            <img src={entry.img} alt="battleSceneImg" />
            <p>{entry.text}</p>
            <p>{entry.date}</p>
          </>
        );
      })}
    </div>
  );
}
