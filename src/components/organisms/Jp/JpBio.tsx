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
            <img src={img} className='p-bio__img' alt='flower' width='300px' />
          </div> */}
          <div className='p-bio__introduction'>
            <h2 className='p-bio__name'>K.M</h2>
            <p className='p-bio__text'>
              日本では美容師として働いていてとてもやりがいを感じる毎日でしたがひどい手荒れになり退職しました。
              今後どんな仕事をして生きていきたいかを考え日々を過ごしていたある日プログラミングに出会いまるで世界が変わったかのように魅了されました。自分の考えていたことが形になった時、エラーが出て解決できた時などプログラミングすること自体にもやりがいを感じています。
              時間がある時は美容の時間にしたり愛犬と長いウォーキングや山登りをしています。
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
