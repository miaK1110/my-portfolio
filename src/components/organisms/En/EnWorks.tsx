import { useState } from 'react';

import Title from '../../atoms/Title';
import Modal from '../../molecules/Modal';
import worksList from '../../../worksList';

const EnWorks = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectList | null>(
    null
  );

  type ProjectList = {
    img: string;
    title: string;
    lang: string;
    description: string;
    siteLink: string;
    githubLink: string;
  };

  const onClickShowModal = (project: ProjectList) => {
    console.log(project);
    setSelectedProject(project);
    setShowModal(true);
  };

  const onClickCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <>
      <div className='p-works' id='works'>
        <div className='p-works__wrapper'>
          <Title titleName={'WORKS'}></Title>
          <div className='p-works__item-wrapper u-mt__m'>
            <p className='p-works__text'>Click the photo to see more detail!</p>
            <div className='p-works__item-box'>
              {worksList.map((props, i) => (
                <div key={i}>
                  <div className='p-works__item-description'>
                    <div className='p-works__name'>
                      <span className='p-works__accent'>― </span>
                      {props.title}
                      <span className='p-works__accent'> ―</span>
                    </div>
                    <p>{props.lang}</p>
                  </div>
                  <img
                    src={props.img}
                    alt={props.title}
                    width='350px'
                    height='350px'
                    className='p-works__item'
                    onClick={() => onClickShowModal(props)}
                  />
                  <Modal
                    showFlag={showModal}
                    setShowModal={setShowModal}
                    setCloseModal={onClickCloseModal}
                    title={selectedProject && selectedProject.title}
                    img={selectedProject && selectedProject.img}
                    content={selectedProject && selectedProject.description}
                    siteLink={selectedProject && selectedProject.siteLink}
                    githubLink={selectedProject && selectedProject.githubLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnWorks;
