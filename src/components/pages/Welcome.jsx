import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Welcome = () => {
  const fadeIn = useSpring({
    From: { opacity: 0, transform: 'translateX(-50px)' },
    To: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: '2000', friction: 100 },
    delay: 300,
  });

  return (
    <>
      <div className='l-welcome'>
        <div className='l-welcome__wrapper'>
          <div className='l-welcome__text-box'>
            <h1 className='l-welcome__head'>
              <animated.div style={fadeIn}>
                Welcome to my&nbsp;p
                <span className='l-welcome__head--accent'>ortfolio</span>.
              </animated.div>
            </h1>
            <h3 className='l-welcome__enter'>Enter in</h3>
            <div className='l-welcome__lang'>
              <h3>
                <Link to={`/en-top`} className='l-welcome__link'>
                  En
                </Link>
                <span className='l-welcome__slush'>/</span>
                <Link to={`/jp-top`} className='l-welcome__link'>
                  Jp
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
