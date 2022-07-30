import EnFirstView from '../organisms/En/EnFirstView';
import EnSkills from '../organisms/En/EnSkills';
import EnWorks from '../organisms/En/EnWorks';
import Header from '../organisms/Header';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';
import EnBio from '../organisms/En/EnBio';

const EnTopPage = () => {
  return (
    <>
      <Header></Header>
      <EnFirstView></EnFirstView>
      <EnBio></EnBio>
      <EnSkills></EnSkills>
      <EnWorks></EnWorks>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default EnTopPage;
