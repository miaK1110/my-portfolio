import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import VisibilitySensor from 'react-visibility-sensor';

import Title from '../../atoms/Title';

const EnSkills = () => {
  const [skillsAreVisible, setSkillsAreVisible] = useState(false);

  const onChange = (isVisible) => {
    if (isVisible) {
      setSkillsAreVisible(true);
    }
  };

  const fadeIn = useSpring({
    opacity: skillsAreVisible ? 1 : 0,
    transform: skillsAreVisible ? 'translateY(0px)' : 'translateY(-40px)',
    config: { duration: 1500 },
  });

  return (
    <>
      <div className='p-skills' id='skills'>
        <div className='p-skills__wrapper'>
          <Title titleName={'SKILLS'}></Title>
          <div className='c-card u-mt__l'>
            <div className='c-card__wrapper'>
              <ul className='c-card__item-box'>
                <VisibilitySensor partialVisibility onChange={onChange}>
                  <animated.div
                    style={fadeIn}
                    className='c-card__item p-skills__item'
                  >
                    <li>
                      <div className='c-card__title-box'>
                        <i className='devicon-html5-plain c-card__icon c-card__icon--html'></i>
                        <i className='devicon-css3-plain c-card__icon c-card__icon--css'></i>
                        <i className='devicon-sass-original colored c-card__icon'></i>
                        <p className='c-card__title u-ml__s'>
                          HTML &amp; CSS &amp; Sass
                        </p>
                      </div>
                      <div className='c-card__text-box'>
                        <p>
                          I can create static responsible websites using HTML
                          and CSS. Also I can use Sass and some CSS flameworks
                          such as boostraps. Since I studied flocss, I mainly
                          use flocss to design css. I aim to write code that is
                          as hard to break as possible and as easy to improve as
                          possible. I use visual studio code as my editor.
                        </p>
                      </div>
                    </li>
                  </animated.div>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility onChange={onChange}>
                  <animated.div
                    style={fadeIn}
                    className='c-card__item p-skills__item'
                  >
                    <li>
                      <div className='c-card__title-box'>
                        <i className='devicon-javascript-plain c-card__icon c-card__icon--js'></i>
                        <i className='devicon-react-original colored c-card__icon'></i>
                        <i className='devicon-vuejs-plain colored colored c-card__icon'></i>
                        <p className='c-card__title u-ml__s'>
                          JS &amp; React &amp; Vue
                        </p>
                      </div>
                      <div className='c-card__text-box'>
                        <p>
                          I can create static websites with Javascript. Also I
                          can make some functions using Ajax such as 'like
                          function'. As for flamework, I have knowledge of
                          creating RESTful websites using React.js and Vue.js. I
                          have a basic knowledge of Typescript as well. I have
                          an understanding of atomic design and can use UI
                          library such as ChakraUI. I can use a bundler and task
                          runner such as Webpack and Gulp.
                        </p>
                      </div>
                    </li>
                  </animated.div>
                </VisibilitySensor>
                <VisibilitySensor partialVisibility onChange={onChange}>
                  <animated.div
                    style={fadeIn}
                    className='c-card__item p-skills__item'
                  >
                    <li>
                      <div className='c-card__title-box'>
                        <i className='devicon-php-plain c-card__icon c-card__icon--php'></i>
                        <i className='devicon-laravel-plain colored c-card__icon'></i>
                        <p className='c-card__title u-ml__s'>
                          PHP &amp; Laravel
                        </p>
                      </div>
                      <div className='c-card__text-box'>
                        <p>
                          I have created a CRUD website using PHP from scratch.
                          As for flamework, I have worked with Vue and React to
                          create a Restful website using Laravel. I also have
                          knowledge about blade.php.
                        </p>
                      </div>
                    </li>
                  </animated.div>
                </VisibilitySensor>
                <VisibilitySensor partialVisibility onChange={onChange}>
                  <animated.div
                    style={fadeIn}
                    className='c-card__item p-skills__item'
                  >
                    <li>
                      <div className='c-card__title-box'>
                        <i className='devicon-amazonwebservices-original colored c-card__icon'></i>
                        <i className='devicon-git-plain colored c-card__icon'></i>
                        <i className='devicon-linux-plain colored c-card__icon'></i>
                        <p className='c-card__title u-ml__s'>
                          AWS &amp; GIT &amp; LINUX
                        </p>
                      </div>
                      <div className='c-card__text-box'>
                        <p>
                          I have knowledge of AWS to release a website. For my
                          website Haiki-share I used IAM, VPC, S3, EC2(including
                          bastion server, mail server with CentOS7), RDS, ALB,
                          Route53 etc.. I know enough about Git to be able to
                          work with other people as well. I sometimes use VM
                          VirtualBox so I can use basic Linux commands and
                          Windows commands. I can use adobe XD and CI/CD tools
                          such as Bitbucket as well.
                        </p>
                      </div>
                    </li>
                  </animated.div>
                </VisibilitySensor>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnSkills;
