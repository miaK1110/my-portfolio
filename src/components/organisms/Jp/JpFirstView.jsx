import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useSpring, animated } from '@react-spring/web';

const EnFirstView = () => {
  const fadeIn1 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '1500' },
  });
  const fadeIn2 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '1700' },
  });
  const fadeIn3 = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: '2000' },
  });

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
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
          enable: true,
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
                日本出身日本育ちですが、結婚を機にオーストラリアのタウンズビルという場所に移住しました。
                昔から物を作るということが好きで作ったもので喜ばれることが好きだったので今までもずっとそういった仕事をしてきました。
                今度はプログラミングを通して人の役に立つウェブサイトを作ってたくさんの人の人生を豊かにし幸せにしたいです。
              </p>
            </animated.div>
            <animated.div style={fadeIn3}>
              <p className='p-first-view__text p-first-view__text--last'>
                フロントエンドとバックエンドどちらも学びましたが、学びの途中から実際にWeb開発の仕事をしてる方たちとHTML、CSS、Vue.jsとLaravelを使っての複数人開発も経験させていただきました。
                今後はプロフェッショナルな方たちと仕事をしてどんどん成長していきたいです。
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
