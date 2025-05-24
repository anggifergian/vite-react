import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { formatDate, parseDate } from "../../libs/date";
import { cn } from "../../libs/style";

const blogs = [
  {
    slug: "install-nginx-vps",
    title: "How to install Nginx on a Ubuntu VPS",
    date: "23-05-2025",
    tags: ["nginx"],
  },
  {
    slug: "docker-web-application",
    title: "Dockerize Vite React Application: Beginner-friendly Guide",
    date: "23-05-2025",
    tags: ["docker", "react"],
  },
  {
    slug: "ci-cd-github-actions-part-1",
    title: "Part 1: Create CI/CD Pipeline with Github Actions for Vite React app",
    date: "24-05-2025",
    tags: ["ci/cd", "github"],
  },
  {
    slug: "ci-cd-github-actions-part-2",
    title: "Part 2: Create CI/CD Pipeline with Github Actions for Vite React app",
    date: "24-05-2025",
    tags: ["ci/cd", "github"],
  },
];

const sortedBlogs = blogs.sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime(); // latest first
});

const BlogList = () => {
  const navigate = useNavigate();

  const handleClick = (slug: string) => () => {
    navigate(`/blog/${slug}`, { viewTransition: true });
  };

  return (
    <>
      <PageTitle title="Blogs" />
      <div>
        <div className="space-y-4">
          {sortedBlogs.map((item, index) => (
            <div
              key={item.slug}
              className={cn(
                "hover:cursor-pointer hover:text-blue-500",
                index !== sortedBlogs.length - 1 && "border-b pb-4 border-gray-200"
              )}
              onClick={handleClick(item.slug)}
            >
              <div className="flex flex-col items-start md:flex-row md:items-end justify-between">
                <div>{item.title}</div>
                <div className="text-gray-500 text-sm font-light">{formatDate(item.date)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
