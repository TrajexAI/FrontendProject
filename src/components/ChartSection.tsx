import FinancialChart from "@/components/FinancialChart";

interface ChartSectionProps {
  data: Array<{ date: string; value: number }>;
}

const ChartSection = ({ data }: ChartSectionProps) => (
  <div className="rounded-xl bg-obsidian-light/30 p-6 backdrop-blur-lg">
    <h2 className="mb-4 text-xl font-semibold text-gold-light">D'NA Boutique</h2>
    <FinancialChart data={data} className="mb-6" />
  </div>
);

export default ChartSection;