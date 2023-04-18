export default function DataDisplay({ issue }) {
  const loaded = () => {
    return (
      <>
        <h1>{issue.data.title}</h1>
        <img src="issue.cover" alt="issue.title" />
        <h1>issue.year</h1>
        <h1>issue.writer</h1>
      </>
    );
  };
  const loading = () => {
    return <h1>No data info available</h1>;
  };

  return issue ? loaded() : loading();
}
