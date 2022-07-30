import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  showFlag: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseModal: () => void;
  title: string | null;
  img: string | null;
  content: string | null;
  siteLink: string | null;
  githubLink: string | null;
};

const Modal = (props: Props) => {
  return (
    <>
      {props.showFlag ? (
        <div className='c-modal'>
          <div className='c-modal__content'>
            <div className='c-modal__img-box'>
              <img
                className='c-modal__img'
                src={props.img as string}
                alt='portfolio'
              />
            </div>
            <button
              className='c-modal__close-btn'
              onClick={props.setCloseModal}
            >
              <FontAwesomeIcon
                icon={faWindowClose}
                className='c-modal__close-icon'
              />
            </button>
            <h1 className='c-modal__title'>{props.title}</h1>
            <div className='c-modal__icon-wrapper'>
              <a className='c-modal__link' href={props.siteLink as string}>
                <FontAwesomeIcon icon={faLink} className='c-modal__icon' />
                <p className='c-modal__link--text'>Web site Link</p>
              </a>
              <a className='c-modal__link' href={props.githubLink as string}>
                <FontAwesomeIcon icon={faGithub} className='c-modal__icon' />
                <p className='c-modal__link--text'>Git Hub Link</p>
              </a>
            </div>
            <div className='c-modal__container'>
              <div className='c-modal__text-box'>
                <p>{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></> // don't show any modal when showFlag is false
      )}
    </>
  );
};

export default Modal;
