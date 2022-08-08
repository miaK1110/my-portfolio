import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useSpring, animated } from '@react-spring/web';

const EnFirstView = () => {
  const fadeIn1 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '1500' },
    delay: 300,
  });
  const fadeIn2 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '1700' },
    delay: 500,
  });
  const fadeIn3 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '2000' },
    delay: 700,
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  let particlesConfig = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      color: {
        value: '#f2e5e4',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#f2e5e4',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.9,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      <div className='container'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        ></Particles>
        <div className='p-first-view' id='first-view'>
          <animated.div style={fadeIn1}>
            <h1 className='p-first-view__head'>
              Hello, I'm Misa King &#128512;
              <br />
              Thank you for visiting!
            </h1>
          </animated.div>
          <div className='p-first-view__text-box'>
            <animated.div style={fadeIn2}>
              <p className='p-first-view__text '>
                I'm from Japan, currently living in Townsville, Australia. I've
                always loved creating things that make people happy, and now as
                a web developer, my goal is to enhance the lives of clients and
                their users by creating highly satisfying websites.
              </p>
            </animated.div>
            <animated.div style={fadeIn3}>
              <p className='p-first-view__text p-first-view__text--last'>
                In addition to learning both front and back end, I also have
                experience in group development with web developers using HTML,
                CSS. Vue.js and Laravel. I'm now looking for a junior developer
                position to finally kick start my career where I can continue to
                sharpen my skills among professionals. I was originally a
                hairdresser and enjoyed it very much, but I quit because I got
                skin problems due to allergies. After that, I fell in love with
                programming. I have a wide range of interests and like trying
                new things. When I have free time, I enjoy climbing hills with
                my dog and playing board games and video games with friends.
              </p>
            </animated.div>
          </div>

          <span className='p-first-view__icon p-first__updown'>&#x1f447;</span>
        </div>
      </div>
    </>
  );
};

export default EnFirstView;
