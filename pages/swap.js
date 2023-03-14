import DashboardLayout from ".";
import { BridgesApp } from '@brgx/widget';

export default function Swap() {
    return (
        <DashboardLayout>
            <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col flex-1">
                    <div className="flex-1 min-w-0">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Swap</h3>
                                <div className="mt-20 text-center justify-center">
                                    <BridgesApp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

// 0x9Ff4440A9CC18bc0023ea62D414844Beb75901Da