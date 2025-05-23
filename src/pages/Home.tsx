function Home() {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row justify-between md:items-center mb-3 min-h-12">
        <div className="font-semibold text-2xl">Dashboard</div>

        <div className="flex gap-2 items-center">
          <div className="border border-gray-100 rounded-md py-2 px-3 text-gray-700">
            22 Apr 2025 - 19 May 2025
          </div>
          <div className="rounded-md p-2 px-3 text-gray-800 bg-gray-800 text-white hover:bg-gray-700 hover:cursor-pointer">
            Download
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 border border-gray-100 rounded-md p-3">
          <div className="font-medium text-gray-800 mb-2 text-sm">Team members</div>
          <div className="text-3xl font-semibold pb-1">176</div>
          <div className="font-light text-xs text-gray-500">
            <span className="text-green-600">+15.7%</span> from last month
          </div>
        </div>
        <div className="md:w-1/3 border border-gray-100 rounded-md p-3">
          <div className="font-medium text-gray-800 mb-2 text-sm">Subscriptions</div>
          <div className="text-3xl font-semibold pb-1">+458</div>
          <div className="font-light text-xs text-gray-500">
            <span className="text-green-600">+25%</span> from last month
          </div>
        </div>
        <div className="md:w-1/3 border border-gray-100 rounded-md p-3">
          <div className="font-medium text-gray-800 mb-2 text-sm">Total revenue</div>
          <div className="text-3xl font-semibold pb-1">$12,079</div>
          <div className="font-light text-xs text-gray-500">
            <span className="text-green-600">+63.8%</span> from last month
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
