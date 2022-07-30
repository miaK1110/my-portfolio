import JpFirstView from '../organisms/Jp/JpFirstView';
import JpSkills from '../organisms/Jp/JpSkills';
import JpWorks from '../organisms/Jp/JpWorks';
import Header from '../organisms/Header';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';
import JpBio from '../organisms/Jp/JpBio';

const JpTopPage = () => {
  return (
    <>
      <Header></Header>
      <JpFirstView></JpFirstView>
      <JpBio></JpBio>
      <JpSkills></JpSkills>
      <JpWorks></JpWorks>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default JpTopPage;
