import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

type Props = {
  Link: string;
  Text: string;
};

const SiteLink = (props: Props) => {
  const { Link, Text } = props;
  return (
    <>
      <a className='c-link' href={Link}>
        <FontAwesomeIcon icon={faLink} className='c-link__icon' />
        <p className='c-link__text'>{Text}</p>
      </a>
    </>
  );
};

export default SiteLink;
