import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const EXAMPLE_RESPONSE_V1: controlerResponse[] = [
  {
    data: 123,
    timestamp: "data3",
    deviceInfo: {
      id: 1,
      name: "Device 1",
    },
  },
  {
    data: 456,
    timestamp: "datat2",
    deviceInfo: {
      id: 2,
      name: "Device 2",
    },
  },
  {
    data: 789,
    timestamp: "data1",
    deviceInfo: {
      id: 3,
      name: "Device 3",
    },
  },
];

type controlerResponse = {
  data: number;
  timestamp: string;
  deviceInfo: {
    id: number;
    name: string;
  };
};

const App: React.FC = () => {
  const convertedExampleResponse = EXAMPLE_RESPONSE_V1.map((item) => {
    return {
      name: item.timestamp,
      value: item.data,
    };
  });

  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={convertedExampleResponse}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>

      <LineChart
        width={500}
        height={300}
        data={convertedExampleResponse}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default App;
