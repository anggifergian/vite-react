import { Link } from "react-router-dom";
import { formatDate } from "../../libs/date";
import { blogList } from "../blogs/blog.slug";
import { socialMediaList } from "./social-media.data";

const Home = () => {
  const selectedBlog = blogList[1];

  return (
    <>
      <div className="py-10 md:py-[60px]">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl pb-2 font-medium">
            Hello, I'm Anggi Fergian P
          </h1>
          <p className="text-lg text-balance pb-1">
            I'm a senior front-end engineer at Accenture Indonesia
          </p>
          <p className="text-lg text-balance">
            Currently living in Semarang, Indonesia
          </p>
          <div className="flex gap-2 pt-4">
            {socialMediaList.map((item) => (
              <div className="group" key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 flex gap-2 items-center hover:cursor-pointer"
                >
                  <img
                    src={`/icons/${item.icon}`}
                    alt={item.name}
                    className="h-6 w-6"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-3xl text-pretty pb-8">
          <div className="pb-8 md:pb-[60px]">
            <h2 className="text-xl font-medium pb-2">About</h2>
            <p className="leading-relaxed text-gray-700">
              I’m a frontend developer with around 5 years of experience, mainly
              working with Angular, TypeScript, and RxJS in professional
              projects. I also use React, particularly with Next.js and Tailwind
              CSS, for side projects. On the backend, I build RESTful APIs using
              NestJS. Recently, I’ve been exploring DevOps practices such as
              setting up CI/CD pipelines, working with Docker, and configuring
              Nginx.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium pb-2">Featured blog</h2>
            <Link
              to={`/blog/${selectedBlog.slug}`}
              className="text-lg pb-1 text-gray-900 hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              {selectedBlog.title}
            </Link>
            <div className="text-sm text-gray-700 pb-1">
              {formatDate(selectedBlog.date)}
            </div>
            <p className="leading-relaxed text-gray-700 pb-2">
              Docker is a platform for developing, shipping, and running
              applications inside lightweight containers. Containers package
              your code along with all its dependencies–making it run reliably
              on any environment.
            </p>
            <Link
              to={`/blog/${selectedBlog.slug}`}
              viewTransition
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
