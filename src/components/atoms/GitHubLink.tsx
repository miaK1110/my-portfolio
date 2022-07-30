import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  Link: string;
};

const GitHubLink = (props: Props) => {
  const { Link } = props;
  return (
    <>
      <a className='c-link' href={Link}>
        <FontAwesomeIcon icon={faGithub} className='c-link__icon' />
        <p className='c-link__text'>Git Hub</p>
      </a>
    </>
  );
};

export default GitHubLink;
