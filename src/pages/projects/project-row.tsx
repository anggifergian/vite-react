import { Button } from "../../components/ui/button";
import { Project } from "./project.type";

const ProjectRow: React.FC<{ data: Project }> = ({ data }) => {
  return (
    <>
      <div className="w-full flex items-center py-3 px-6 border-b border-gray-200 text-sm">
        <div className="w-[60%] sm:w-[50%]">
          <div className="px-2 py-1">{data.title}</div>
        </div>

        <div className="w-[20%] sm:w-[10%] xl:w-[10%]">
          <div className="px-2 py-1">{data.priority}</div>
        </div>

        <div className="hidden w-[30%] sm:block xl:w-[20%]">
          <div className="px-2 py-1">{data.lead}</div>
        </div>

        <div className="hidden xl:block xl:w-[15%]">
          <div className="px-2 py-1">{data.targetDate}</div>
        </div>

        <div className="w-[20%] sm:w-[10%] xl:w-[10%]">
          <div className="px-2 py-1">
            <Button>{data.status}%</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectRow;
