const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="flex justify-start items-center mb-3 h-12">
        <div className="font-semibold text-2xl text-primary">{title}</div>
      </div>
    </>
  );
};

export default PageTitle;
