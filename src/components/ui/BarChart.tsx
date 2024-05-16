import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

interface barChartType {
  data: unknown[];
}
const barChart: React.FC<barChartType> = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#fff"/>
      <XAxis dataKey="nome" stroke="#fff"/>
      <YAxis stroke="#fff"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="Entradas" fill="#fff" stroke="#fff" barSize={50} />
    </BarChart>
  );
};

export default barChart
