export default function CharDisplay({ characters }) {
  const loaded = () => {
    console.log(characters);
    return (
      <>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <h1>character.name</h1>
            </div>
          );
        })}
      </>
    );
  };
  const loading = () => {
    return <h1>No data info available</h1>;
  };

  return characters ? loaded() : loading();
}
