import "../style.css";

export default function CharDisplay(props) {
  const loaded = () => {
    return (
      <div className="bios">
        {props.charSearch.map((character) => {
          return (
            <div key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <h1>{character.name}</h1>
              <p>{character.description}</p>
            </div>
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1> No data info available </h1>;
  };
  return props.charSearch ? loaded() : loading();
}
