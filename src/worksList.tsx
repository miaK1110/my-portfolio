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

const worksList: WorksList[] = [
  {
    img: portfolio,
    title: 'portfolio',
    lang: 'React.js + TypeScript',
    description:
      'This is my portfolio. This site is a single page application and was built using React. I used Atomic design for the UI design and FLOCSS for the Sass design.',
    siteLink: 'https://misakingdev.com',
    githubLink: 'https://github.com/miaK1110/my-portfolio',
  },
  {
    img: haikiShare,
    title: 'haiki-share',
    lang: 'Vue.js + Laravel',
    description:
      'I created this site to reduce food loss using Vue.js and Laravel. Users were divided into sellers and buyers, and multi-authentication was used as the authentication method.(JP ONLY)',
    siteLink: 'https://haikishare.com/',
    githubLink: 'https://github.com/miaK1110/project.git',
  },
  {
    img: todoList,
    title: 'react-vue-jQuery-backbone-todo',
    lang: 'React, Vue, jQuery, backbone',
    description:
      'I created a todo list using various frameworks to learn the differences between React, Vue, jQuery, and Backbobe.I created a todo list using various frameworks to learn the differences between React, Vue, jQuery, and Backbone. In the process, I created both a class component and a function component in React, which gave me a better understanding. You can find each Github code in README.md.',
    siteLink: 'http://reacttodoo.s3-website-ap-northeast-1.amazonaws.com/',
    githubLink: 'https://github.com/miaK1110/react-todo.git',
  },
  {
    img: strandHotel,
    title: 'The strand hotel',
    lang: 'JavaScript + jQuery',
    description:
      'I created this site with the image of a fictional hotel using JavaScript(jQuery), HTML and CSS(SASS). Edge, IE, firefox, safari, GoogleChrome it works fine from any browser I used FLOCSS for CSS design.(EN ONLY)',
    siteLink: 'http://strandhotel.s3-website-ap-northeast-1.amazonaws.com/',
    githubLink: 'https://github.com/miaK1110/The_strand_hotel.git',
  },
  {
    img: rockpaperscissors,
    title: 'rockpaperscissors',
    lang: 'PHP',
    description:
      'This is a rock-paper-scissors game I made using PHP. If you win the rock-paper-scissors game, your friends will help you to defeat the Demon King, and if you lose, your hp will decrease. I made this game to study object-oriented and classes.(EN ONLY)',
    siteLink: 'https://rockpaperscissorssss.herokuapp.com/',
    githubLink: 'https://github.com/miaK1110/rockpaperscissors',
  },
  {
    img: wannnyann,
    title: 'wannnyannadopt.jp',
    lang: 'Javascript + PHP',
    description:
      'This is a website created using PHP and JavaScript that matches people who want to become a dog or cat foster parents with people seek a forester parents. Password reminder, chat function, and like function using Ajax and more, all created in full scratch.(Not Responsible design site and JP ONLY)',
    siteLink: 'https://wannnyannadopyjp.herokuapp.com/index.php',
    githubLink: 'https://github.com/miaK1110/wannnyannadopt.jp',
  },
];

export default worksList;
