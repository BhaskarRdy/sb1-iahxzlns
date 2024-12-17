import React from 'react';
import { BarChart, Package, Users } from 'lucide-react';
import { Price } from '../components/ui/Price';

export const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: usdToInr(12345),
      icon: BarChart,
      change: '+12%',
      isCurrency: true,
    },
    {
      title: 'Active Users',
      value: 1234,
      icon: Users,
      change: '+8%',
      isCurrency: false,
    },
    {
      title: 'Products',
      value: 56,
      icon: Package,
      change: '+2',
      isCurrency: false,
    },
    {
      title: 'Revenue',
      value: usdToInr(9876),
      icon: BarChart,
      change: '+15%',
      isCurrency: true,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.isCurrency ? (
                    <Price amount={stat.value} />
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="mt-4 text-green-600 text-sm">
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Orders
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div
                key={order}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">Order #{order}0234</p>
                  <p className="text-sm text-gray-500">2 items • <Price amount={usdToInr(199.99)} /></p>
                </div>
                <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Low Stock Alert
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">Product Name #{item}</p>
                  <p className="text-sm text-gray-500">Only 2 items left</p>
                </div>
                <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};