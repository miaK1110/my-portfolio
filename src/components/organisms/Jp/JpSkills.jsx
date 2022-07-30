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
                          レスポンシブな静的ウェブサイトをHTML、CSS、Sassを使って作成することができます。簡単なアニメーションも作成可能です。CSSフレームワークとしては、Bootstrapの使用経験があります。
                          FLOCSSを学んでからはCSS設計にFLOCSSを使ってきました。改善しやすく破綻しないコードにするにはどうすればいいのかを常に考えコーディングをするよう心がけています。エディターはVisual
                          Studio Codeをメインに使用しています。
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
                          静的なウェブサイトをJavascriptを使って作成することができます。いいね機能といった機能をAjaxを使って作成することもできます。
                          フレームワークは、RestfulなウェブサイトをReact.js
                          とVue.jsを使って作成することができます。
                          基礎的なTypescriptの知識に加えatomic
                          designの理解やChakraUIといったUIフレームワークを使用することも可能です。またバンドラーであるWebpackやタスクランナーのGulp、コンパイラーのBabelなどのツールも使用できます。
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
                          PHPを使ってフルスクラッチでCRUDを使うWebサービスを作ったことがあります。
                          フレームワークはLaravelが使え、React.jsまたはVue.jsと連携してRestfulなウェブサイトを作れます。SanctumやLaravel/ui、Laravel
                          Socialiteを使ってソーシャルログインやマルチ認証を作ったこともあります。基礎的なSQLの知識があり、Blade.phpの使用も可能です。
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
                          AWSを使ってサイトを公開することができます。
                          今まで作ったWebサービスの一つ、Haiki-shareではIAM,
                          VPC, S3, EC2(Bastionサーバー, メールサーバー含む),
                          RDS, ALB, Route53などを使ってサイトを公開しました。
                          複数人開発ではGitでソース管理をしていたのである程度Gitを使えます。
                          VM
                          VirtualBoxを使う時も多かったので基本的なLinuxのコマンドとWindowsのコマンドが使えます。またadobe
                          XDやCI/CDツールであるBitbucketの使用経験もあります。
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
