
import requests from "../utils/requests";
import Thumbnail from './thumbnail';

const Results = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;