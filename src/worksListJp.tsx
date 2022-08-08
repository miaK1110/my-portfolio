import portfolio from '../src/images/portfolio.png';
import rockpaperscissors from '../src/images/rockpaperscissors.png';
import haikiShare from '../src/images/haiki-share.png';
import todoList from '../src/images/todo-list.png';
import strandHotel from '../src/images/strand-hotel.png';
import wannnyann from '../src/images/wannnyann.png';

type WorksList = {
  img: string;
  title: string;
  lang: string;
  description: string;
  siteLink: string;
  githubLink: string;
};

const worksListJp: WorksList[] = [
  {
    img: portfolio,
    title: 'portfolio',
    lang: 'React.js + TypeScript',
    description:
      'こちらのポートフォリオです。このWebサイトはシングルページアプリケーションで構成されており、各コンポーネントの管理にはアトミックデザインを使用しCSS設計にはFLOCSSを使用しました。',
    siteLink: 'https://misakingdev.com',
    githubLink: 'https://github.com/miaK1110/my-portfolio',
  },
  {
    img: haikiShare,
    title: 'haiki-share',
    lang: 'Vue.js + Laravel',
    description:
      'コンビニでの食品ロスを削減する仕組みとしてこういうサービスがあったらいいな、との思いからVue.jsとLaravelを使用してこちらのWebサービスを作成しました。ユーザーはコンビニ側と買い手側に分かれており新規登録、ログインなど認証にはマルチ認証を採用しました。',
    siteLink: 'https://haikishare.com/',
    githubLink: 'https://github.com/miaK1110/project.git',
  },
  {
    img: todoList,
    title: 'react-vue-jQuery-backbone-todo',
    lang: 'React, Vue, jQuery, backbone',
    description:
      'それぞれのフレームワークの違いを知るために同じデザインのTodoリストをReact, Vue, jQuery, Backbobeで作成しました。それぞれのリンクはサイトリンク先の上部から、それぞれのコードはGithubリンク先のREADME.md.から確認していただけます。',
    siteLink: 'http://reacttodoo.s3-website-ap-northeast-1.amazonaws.com/',
    githubLink: 'https://github.com/miaK1110/react-todo.git',
  },
  {
    img: strandHotel,
    title: 'The strand hotel',
    lang: 'JavaScript + jQuery',
    description:
      '海沿いのホテルをイメージした架空のサイトです。HTML, CSSS(Sass), JavaScript(jQuery)を使用して作成しました。 Edge, IE, firefox, safari, GoogleChromeなど各ブラウザでも動くように対応しました。(サイトは英語です)',
    siteLink: 'http://strandhotel.s3-website-ap-northeast-1.amazonaws.com/',
    githubLink: 'https://github.com/miaK1110/The_strand_hotel.git',
  },
  {
    img: rockpaperscissors,
    title: 'rockpaperscissors',
    lang: 'PHP',
    description:
      'こちらはPHPで作成したじゃんけんゲームです。じゃんけんに勝つと仲間が増え、負けるとライフが1つ減り3回じゃんけんに負けるとゲームオーバーになります。PHPのクラスやオブジェクト指向を勉強するために作成しました。(サイトは英語です)',
    siteLink: 'https://rockpaperscissorssss.herokuapp.com/',
    githubLink: 'https://github.com/miaK1110/rockpaperscissors',
  },
  {
    img: wannnyann,
    title: 'wannnyannadopt.jp',
    lang: 'Javascript + PHP',
    description:
      'PHPとJavaScriptを使い犬と猫の里親募集サイトを作成しました。パスワードリマインダー機能やチャット機能を初めて作成しAjaxを使ってのお気にいり機能など全てフルスクラッチで作成しました。(レスポンシブ未対応)',
    siteLink: 'https://wannnyannadopyjp.herokuapp.com/index.php',
    githubLink: 'https://github.com/miaK1110/wannnyannadopt.jp',
  },
];

export default worksListJp;
