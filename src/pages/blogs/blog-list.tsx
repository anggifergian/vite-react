import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { formatDate, parseDate } from "../../libs/date";
import { cn } from "../../libs/style";
import { blogList } from "./blog.slug";

// Old first
const sortedBlogs = blogList.sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateA.getTime() - dateB.getTime();
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
                "group",
                index !== sortedBlogs.length - 1 &&
                  "border-b pb-4 border-gray-200"
              )}
              onClick={handleClick(item.slug)}
            >
              <div className="flex flex-col items-start md:flex-row md:items-start justify-between">
                <div className="space-y-1">
                  <div className="group-hover:cursor-pointer group-hover:underline group-hover:underline-offset-2">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500">{item.tags.join(', ')}</div>
                </div>
                <div className="text-gray-500 text-sm font-light">
                  {formatDate(item.date)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
