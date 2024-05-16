import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

interface barChartType {
  data: unknown[];
  datakey: string;
  datekey: string;
}
const barChart: React.FC<barChartType> = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nome" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Entradas" fill="#8884d8" />
    </BarChart>
  );
};

export default barChart
