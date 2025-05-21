import PageTitle from "../../components/PageTitle";
import { projects } from "./mock-data";
import ProjectRow from "./project-row";

const Project = () => {
  return (
    <>
      <PageTitle title="Projects" />

      <div className="w-full">
        <div className="flex items-center border-b border-gray-200 sticky top-0 z-10 px-6 py-1.5 text-sm font-medium">
          <div className="w-[60%] sm:w-[50%]">Title</div>

          <div className="pl-2 w-[20%] sm:w-[10%]">Priority</div>

          <div className="pl-2 hidden w-[30%] sm:block xl:w-[20%]">Lead</div>

          <div className="pl-2 hidden xl:block xl:w-[15%]">Target date</div>

          <div className="pl-2 w-[20%] sm:w-[10%] xl:w-[10%]">Status</div>
        </div>
      </div>

      <div className="w-full">
        {projects.map((item) => (
          <ProjectRow key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Project;
