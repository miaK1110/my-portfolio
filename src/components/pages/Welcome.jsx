import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>welcome page</h1>
      <div>
        <Link to={`/en-top`}>En top page</Link>
        <Link to={`/jp-top`}>Jp top page</Link>
      </div>
    </>
  );
};

export default Welcome;
