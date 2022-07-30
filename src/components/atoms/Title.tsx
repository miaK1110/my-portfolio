type Props = {
  titleName: string;
};

const Title = (props: Props) => {
  const { titleName } = props;
  return (
    <>
      <div className='c-title'>{titleName}</div>
    </>
  );
};

export default Title;
