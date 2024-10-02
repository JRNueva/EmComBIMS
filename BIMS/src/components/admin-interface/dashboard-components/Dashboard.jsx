import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  UserRoundPlus,
  Files,
  ChartColumnIncreasing,
  UsersRound,
  Search,
} from "lucide-react";
import SearchBarDefault from "../basic-components/SearchBarDefault";

function Dashboard() {
  // Replace with actual Resident data for bar graph
  const residentData = [
    {
      quarter: "1Q of the year",
      "0-17": 400,
      "18-35": 300,
      "36-59": 600,
      "60+": 200,
    },
    {
      quarter: "2Q of the year",
      "0-17": 300,
      "18-35": 200,
      "36-59": 500,
      "60+": 150,
    },
    {
      quarter: "3Q of the year",
      "0-17": 600,
      "18-35": 400,
      "36-59": 700,
      "60+": 250,
    },
    {
      quarter: "4Q of the year",
      "0-17": 500,
      "18-35": 350,
      "36-59": 550,
      "60+": 180,
    },
  ];

  // Replace with actual Incidence data for pie chart
  const incidentsData = [
    { name: "Theft", value: 12 },
    { name: "Noise Complaints", value: 54 },
    { name: "Public Disturbance", value: 26 },
    { name: "Others", value: 8 },
  ];

  // Color inputs for pie chart
  const piechartColors = ["#f0ebd8", "#748cab", "#0d1321", "#d0d5dd"];

  // Replace with actual Audit Trail data for Recent Activities section
  const recentActivities = [
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "3:00 PM",
    },
    {
      description:
        "You Updated the contact information of resident profile 10001.",
      time: "2:00 PM",
    },
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "1:00 PM",
    },
    {
      description:
        "You Updated the contact information of resident profile 10001.",
      time: "12:00 PM",
    },
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "3:00 PM",
    },
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "3:00 PM",
    },
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "3:00 PM",
    },
    {
      description:
        "You Generated a report on barangay population demographics.",
      time: "3:00 PM",
    },
  ];

  // Replace with actual Events data for Events section
  const eventActivities = [
    {
      day: "Mon",
      date: "1",
      title: "Community Cleanup Day",
      description: "Volunteers are Welcome!",
      timeStart: "3:00 PM",
      timeEnd: "6:00 PM",
    },
    {
      day: "Tue",
      date: "2",
      title: "Barangay Assembly Meeting",
      description: "Your Participation is Vital!",
      timeStart: "3:00 PM",
      timeEnd: "6:00 PM",
    },
    {
      day: "Wed",
      date: "3",
      title: "Barangay Fiesta Celebration",
      description: "Don't missed out the excitement!",
      timeStart: "3:00 PM",
      timeEnd: "6:00 PM",
    },
    {
      day: "Thu",
      date: "4",
      title: "Jollibee",
      description: "Mobi Food Corps",
      timeStart: "3:00 PM",
      timeEnd: "6:00 PM",
    },
    {
      day: "Fri",
      date: "5",
      title: "Community Cleanup Day",
      description: "Volunteers are Welcome!",
      timeStart: "3:00 PM",
      timeEnd: "6:00 PM",
    },
  ];

  return (
    <main className="pl-28 pr-10 pb-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 pt-28">
        {/* Resident Section */}
        <div className="bg-lowestBlue text-black p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lowestBlue">
          <h2 className="text-base sm:text-sm font-semibold font-inter mb-2">
            Total Residents as of March 2024
          </h2>
          <div className="flex items-center">
            <div className="bg-lowBlue rounded-full p-2">
              <UserRoundPlus size={32} strokeWidth={1.5} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold ml-4">3,507</p>
          </div>
        </div>
        {/* Pending Section */}
        <div className="bg-darkestBlue text-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lowestBlue">
          <h2 className="text-base sm:text-sm font-semibold font-inter mb-2">
            Pending Requests for April
          </h2>
          <div className="flex items-center">
            <div className="bg-[#1D2D44] rounded-full p-2">
              <Files size={32} strokeWidth={1.5} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold ml-4">103</p>
          </div>
        </div>
        {/* Incidence Section */}
        <div className="bg-lowBlue text-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lowestBlue">
          <h2 className="text-base sm:text-sm font-semibold font-inter mb-2">
            In Progress Incidence for April
          </h2>
          <div className="flex items-center">
            <div className="bg-[#1D2D44] rounded-full p-2">
              <ChartColumnIncreasing size={32} strokeWidth={1.5} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold ml-4">12</p>
          </div>
        </div>
        {/* Clerk's Section */}
        <div className="bg-lightGrayYellow p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="text-base sm:text-sm font-semibold font-inter mb-2">
            Barangay Clerks
          </h2>
          <div className="flex items-center">
            <div className="bg-[#D4CEB8] rounded-full p-2">
              <UsersRound size={32} strokeWidth={1.5} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold ml-4">9</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6">
        {/* Residents Age Distribution Chart */}
        <div className="bg-white sm:p-6 rounded-md shadow-md hover:shadow-xl">
          <div className="text-base sm:text-lg font-semibold mb-4">
            Residents Age Distribution
          </div>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={residentData}
                margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="quarter"
                  tick={{ fontSize: 12, fill: "#0d1321" }}
                />
                <YAxis tick={{ fontSize: 12, fill: "#0d1321" }} />
                <Tooltip contentStyle={{ fontSize: "14px" }} />
                <Legend
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{
                    top: -10,
                    fontSize: "12px",
                  }}
                  formatter={(value) => (
                    <span style={{ color: "black" }}>{value}</span>
                  )}
                />
                <Bar name="0-17 (Adolescence)" dataKey="0-17" fill="#748cab" />
                <Bar
                  name="18-35 (Young Adults)"
                  dataKey="18-35"
                  fill="#f0ebd8"
                />
                <Bar name="36-59 (Adults)" dataKey="36-59" fill="#0d1321" />
                <Bar
                  name="60+ (Senior Citizens)"
                  dataKey="60+"
                  fill="#d0d5dd"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Incidents Category Distribution Chart */}
        <div className="bg-white  sm:p-6 rounded-md shadow-md hover:shadow-xl">
          <div className="text-base sm:text-lg font-semibold mb-4">
            Incidents Category Distribution
          </div>
          {/* Replace this div with the actual chart */}
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={incidentsData}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#0d1321"
                  dataKey="value"
                  label={(entry) => `${entry.value}%`}
                >
                  {incidentsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={piechartColors[index % piechartColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: "14px" }} />
                <Legend
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{ top: -10, fontSize: "12px" }}
                  formatter={(value) => (
                    <span style={{ color: "black" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 mt-4 text-start">
        {/* Recent Activities */}
        <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg hover:shadow-xl">
          <div className="text-base sm:text-lg font-semibold mb-4">
            Recent Activities
          </div>
          <div className="max-h-60 overflow-y-auto  hide-scroll">
            <ul className="space-y-2">
              {recentActivities.map((activity, index) => (
                <li key={index} className="text-xs sm:text-sm p-2 border-b">
                  {activity.description}
                  <span className="float-right">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Events */}
        <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg hover:shadow-xl">
          <div className="text-base sm:text-lg font-semibold mb-4">Events</div>
          <div className="max-h-60 overflow-auto hover:overflow-scroll hide-scroll">
            <ul className="space-y-2">
              {eventActivities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center py-1 mb-4 space-x-4"
                >
                  {/* Event Date and Month */}
                  <div className="flex flex-col items-center bg-gradient-to-b from-slate-300 w-16 text-center">
                    <div className="text-lg font-semibold">{activity.date}</div>
                    <div className="text-sm">{activity.day}</div>
                  </div>
                  {/* Event Description and Time */}
                  <div className="flex-1">
                    <div className="font-semibold ml-6 text-sm sm:text-base">
                      {activity.title}
                    </div>
                    <div className="text-gray-600 ml-6 text-xs sm:text-sm">
                      {activity.description}
                    </div>
                  </div>
                  {/* Event Time Start and Time End */}
                  <div className="text-xs sm:text-base text-gray-600">
                    {activity.timeStart} - {activity.timeEnd}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
