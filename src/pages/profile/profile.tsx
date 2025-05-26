import { cn } from "../../libs/style";
import { experienceList } from "./experience.data";
import { socialMediaList } from "./social-media.data";

const Profile = () => {
  return (
    <>
      <div className="flex justify-start items-center mb-3 h-12">
        <div className="font-semibold text-2xl">Profile</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start mb-8">
        <div className="md:col-span-2 p-3 px-4 rounded-md border border-gray-200">
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex flex-col items-center mb-3">
              <div className="w-[160px] h-[160px] rounded-full bg-gray-200 border border-neutral-100 mb-4 mt-2 overflow-hidden">
                <img
                  src="/images/new-professional-pic-square.jpg"
                  alt="Profile Picture"
                />
              </div>
              <div className="font-medium text-center text-lg">
                Anggi Fergian Pratama
              </div>
              <p className="text-center text-sm">Senior Front-end Engineer</p>
            </div>

            <div className="px-2">
              <p className="text-sm font-medium text-gray-600 pb-2">
                Social links
              </p>
              <div className="mb-4 flex gap-5 md:gap-4 flex-wrap items-center">
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
                      <span className="text-[15px] group-hover:underline group-hover:underline-offset-2">
                        {item.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 py-5 px-6 rounded-md border border-gray-200">
          <div className="flex justify-between items-center pb-3">
            <div className="font-medium">Experiences</div>
          </div>

          <div className="flex flex-col items-start">
            {experienceList.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "w-full flex justify-between items-start py-3",
                  index !== experienceList.length - 1 &&
                    "border-b border-gray-200 md:border-none"
                )}
              >
                <div className="w-1/2 ">
                  <a
                    href={item.company_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium leading-[1.6] hover:underline hover:underline-offset-2"
                  >
                    {item.company}
                  </a>
                  <div className="text-sm text-gray-500">{item.job_title}</div>
                </div>

                <div className="w-1/2 text-xs font-light text-gray-500 text-right">
                  {item.employment_date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
