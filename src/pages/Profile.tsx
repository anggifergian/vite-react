const Profile = () => {
  return (
    <>
      <div className="flex justify-start items-center mb-3 h-12">
        <div className="font-semibold text-2xl">Account</div>
      </div>

      <div className="flex flex-wrap items-start gap-3">
        <div className="w-full md:w-1/3 flex-initial p-3 px-4 rounded-md border border-gray-100">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 border border-neutral-100 mb-3 mt-2"></div>
              <div className="font-medium text-center">John Doe</div>
              <p className="text-center text-sm">Project Manager</p>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              <div className="w-20 flex flex-col items-center text-center">
                <div className="text-lg">5</div>
                <p className="font-light text-sm text-gray-500">Projects</p>
              </div>
              <div className="w-20 flex flex-col items-center text-center">
                <div className="text-lg">24</div>
                <p className="font-light text-sm text-gray-500">Posts</p>
              </div>
              <div className="w-20 flex flex-col items-center text-center">
                <div className="text-lg">1.2K</div>
                <p className="font-light text-sm text-gray-500">Members</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-auto p-3 px-4 rounded-md border border-gray-100">
          <div className="flex justify-between items-center pb-3">
            <div className="font-medium">Latest activity</div>
            <div className="font-light text-sm text-gray-500">View all</div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="w-full flex justify-between items-start">
              <div>
                <div className="font-medium leading-[1.6]">DevOps Engineer</div>
                <div className="text-sm font-light text-gray-600">
                  Accenture Southeast Asia
                </div>
              </div>

              <div className="text-xs font-light text-gray-600">Oct 2024 – Now</div>
            </div>

            <div className="w-full flex justify-between items-start">
              <div>
                <div className="font-medium leading-[1.6]">Front-end Engineer</div>
                <div className="text-sm font-light text-gray-600">Paper.id</div>
              </div>

              <div className="text-xs font-light text-gray-600">Jun 2023 – Sep 2024</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
