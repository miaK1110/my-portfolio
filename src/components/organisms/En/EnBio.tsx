import Title from '../../atoms/Title';
import img from '../../../images/me.jpg';
import GitHubLink from '../../atoms/GitHubLink';
import SiteLink from '../../atoms/SiteLink';

const EnBio = () => {
  return (
    <>
      <div className='p-bio' id='bio'>
        <Title titleName={'BIO'}></Title>
        <div className='p-bio__container'>
          {/* <div className='p-bio__img-box'>
            <img src={img} className='p-bio__img' alt='me' />
          </div> */}
          <div className='p-bio__introduction'>
            <h2 className='p-bio__name'>M.K</h2>
            <p className='p-bio__text'>
              I was originally a hairdresser and enjoyed it very much, but I had
              to leave this professions due to skin problems from allergies.
              After that, I fell in love with programming. I have a wide range
              of interests and like trying new things. When I have free time, I
              enjoy climbing hills with my dog.
            </p>
            <div className='p-bio__links'>
              <SiteLink
                Link='https://sukithewestie.hatenablog.com/'
                Text='My Blog(Japanese)'
              ></SiteLink>
              <GitHubLink Link='https://github.com/miaK1110'></GitHubLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnBio;
