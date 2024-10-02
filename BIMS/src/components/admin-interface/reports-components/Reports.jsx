import { useState, useEffect } from "react";
import ReportsDialog from "./ReportsDialog";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Trash2, ListFilter, Settings2, CloudDownload } from "lucide-react";

function Reports() {
  // Reports table state change handling
  const [chartType, setChartType] = useState("Pie Chart");
  const [chartDimension, setChartDimension] = useState("Default");
  const [reportSource, setReportSource] = useState("Select a report source");
  const [tableForReport, setTableForReport] = useState("Select a table");
  const [timeFrame, setTimeFrame] = useState("Select a time frame");

  // Modify the data of charts
  const chartData = [
    { name: "Option 1", value: 400 },
    { name: "Option 2", value: 300 },
    { name: "Option 3", value: 500 },
  ];

  // Change chart colors
  const COLORS = ["#f0ebd8", "#0d1321", "#3e5c78"];

  // Change chart dimensions
  const getChartDimensions = () => {
    switch (chartDimension) {
      case "Small":
        return { width: 300, height: 300, radius: 100 };
      case "Default":
        return { width: 400, height: 400, radius: 150 };
      case "Large":
        return { width: 500, height: 500, radius: 200 };
      default:
        return { width: 400, height: 400, radius: 150 };
    }
  };

  const { width, height, radius } = getChartDimensions();

  // Resizing the Legends of graphs for responsiveness
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  };

  const windowWidth = useWindowWidth();

  // Reports dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  // Chart change state and rendering
  const renderChart = () => {
    const isSmallScreen = windowWidth < 1080;

    const legendProps = {
      layout: isSmallScreen ? "horizontal" : "vertical",
      align: isSmallScreen ? "center" : "left",
      verticalAlign: isSmallScreen ? "bottom" : "middle",
    };

    switch (chartType) {
      case "Pie Chart":
        return (
          <PieChart width={width} height={height}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={radius}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend {...legendProps} />
          </PieChart>
        );
      case "Bar Graph":
        return (
          <BarChart width={width} height={height} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3e5c78" />
            <Bar dataKey="value" fill="#f0ebd8" />
            <Bar dataKey="value" fill="#0d1321" />
          </BarChart>
        );
      case "Line Graph":
        return (
          <LineChart
            width={width}
            height={height}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#3e5c78" />
            <Line type="monotone" dataKey="value" stroke="#f0ebd8" />
            <Line type="monotone" dataKey="value" stroke="#0d1321" />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return <main className="bg-lightGray pl-24 pr-6 pt-24">
    <div className="p-4 font-inter text-left">
      {/* Report Graph Section */}
      <section
        className="bg-white p-4 shadow-sm mb-6"
        aria-labelledby="report-graph-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          <div>
            <h2
              id="report-graph-heading"
              className="text-lg md:text-xl font-bold mb-4"
            >
              Report Graph
            </h2>
            <div className="mb-4">
              <label htmlFor="chart-type" className="block mb-2 text-sm">
                Chart Type:<span className="text-red-500"> *</span>
              </label>
              <select
                id="chart-type"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
                className="p-1.5 border rounded text-sm w-full md:w-56 shadow-sm"
              >
                <option value="Pie Chart">Pie Chart</option>
                <option value="Bar Graph">Bar Graph</option>
                <option value="Line Graph">Line Graph</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="chart-dimension" className="block mb-2 text-sm">
                Graph Dimensions:<span className="text-red-500"> *</span>
              </label>
              <select
                id="chart-dimension"
                value={chartDimension}
                onChange={(e) => setChartDimension(e.target.value)}
                className="p-1.5 border rounded text-sm w-full md:w-56 shadow-sm"
              >
                <option value="Small">Small</option>
                <option value="Default">Default</option>
                <option value="Large">Large</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:justify-center">
            {/* Chart Section based on input */}
            {renderChart()}
          </div>
          <div className="flex justify-center md:justify-end">
            {/* Export button */}
            <div className="">
              <button className="flex flex-row items-center p-2 border border-slate-400 rounded-lg text-lowestBlue hover:bg-lowBlue hover:text-snow">
                <CloudDownload size={20} color="#748cab" strokeWidth={1.75} />
                <span className="ml-1 text-sm">Export</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Table Section */}
      <section
        className="bg-white shadow-sm"
        aria-labelledby="report-table-heading"
      >
        <div className="relative">
          {/* Report Table Top Section */}
          <header className="border border-lightGray">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-4">
              <h1
                id="report-table-heading"
                className="text-lg md:text-xl font-bold ml-4"
              >
                Report Table
              </h1>
              <div className="flex items-center space-x-4 mt-4 mr-4 md:mt-0">
                <div className="flex items-center space-x-1 px-2 py-2">
                  <button className="flex flex-row items-center text-gray-500">
                    <Trash2 size={20} color="#9ca3af" strokeWidth={1.75} />
                    <span className="ml-1 text-sm">Delete</span>
                  </button>
                </div>
                <div className="flex items-center space-x-1 px-2 py-2">
                  <button className="flex flex-row items-center text-gray-500">
                    <ListFilter size={20} color="#9ca3af" strokeWidth={1.75} />
                    <span className="ml-1 text-sm">Filters</span>
                  </button>
                </div>
                <div className="flex items-center space-x-1 px-2 py-2">
                  <button className="flex flex-row items-center text-gray-500">
                    <Settings2 size={20} color="#9ca3af" strokeWidth={1.75} />
                    <span className="ml-1 text-sm">Edit</span>
                  </button>
                </div>
                <div className="flex items-center space-x-1 px-2 py-2">
                  <button className="flex flex-row items-center text-gray-500">
                    <CloudDownload
                      size={20}
                      color="#9ca3af"
                      strokeWidth={1.75}
                    />
                    <span className="ml-1 text-sm">Export</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Report Table Middle Section */}
          {/* Report Inputs */}
          <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3 items-center justify-center">
            <div className="flex flex-col">
              <label htmlFor="report-source" className="block mb-1 text-sm">
                Report Source:
                <span className="text-red-500"> *</span>
              </label>
              <select
                id="report-source"
                value={reportSource}
                onChange={(e) => setReportSource(e.target.value)}
                className="p-2 w-full md:w-64 border border-lightGray text-xs"
              >
                <option value="Select a report source" selected disabled>
                  Select a report source
                </option>
                <option value="Registry">Registry</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="table-for-report" className="block mb-1 text-sm">
                Table for Report:
                <span className="text-red-500"> *</span>
              </label>
              <select
                id="table-for-report"
                value={tableForReport}
                onChange={(e) => setTableForReport(e.target.value)}
                className="p-2 w-full md:w-64 border border-lightGray text-xs"
              >
                <option value="Select a table" selected disabled>
                  Select a table
                </option>
                <option value="Incidents">Incidents</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="time-frame" className="block mb-1 text-sm">
                Time Frame:
                <span className="text-red-500"> *</span>
              </label>
              <select
                id="time-frame"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="p-2 w-full md:w-64 border border-lightGray text-xs"
              >
                <option value="Select a time frame" selected disabled>
                  Select a time frame
                </option>
                <option value="Last 30 Days">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex place-content-end p-2">
          <button
            className="mr-8 px-6 py-2 bg-lowBlue text-snow text-xs rounded-lg"
            onClick={openDialog}
          >
            Generate Report
          </button>
          <ReportsDialog isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
      </section>
    </div>
  </main>
}

export default Reports;
