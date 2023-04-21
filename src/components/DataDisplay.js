import "../style.css";

export default function DataDisplay({ issue }) {
  const loaded = () => {
    return (
      <div className="issues">
        {issue.map((issue) => {
          return (
            <div>
              <img
                src={`${issue.thumbnail.path}.${issue.thumbnail.extension}`}
                alt="hero"
              />
              <h1>{issue.title}</h1>
            </div>
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>No data info available</h1>;
  };

  return issue ? loaded() : loading();
}
