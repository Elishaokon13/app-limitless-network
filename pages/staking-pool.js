import DashboardLayout from ".";

export default function StakingPool() {
  return (
    <DashboardLayout>
      <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-1">
          <div className="flex-1 min-w-0">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Staking Pool</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  This is a simple example of a dashboard page with some charts and data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}