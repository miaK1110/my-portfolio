import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Oooops!</h1>
      <div>
        <Link to={`/`}>back to welcome page</Link>
      </div>
    </>
  );
};

export default NotFound;
