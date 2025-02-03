import { Card } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const ContributionMargin = () => {
  const costData = [
    {
      category: 'Labor',
      fixed: 45000,
      variable: 65000,
    },
    {
      category: 'Materials',
      fixed: 20000,
      variable: 85000,
    },
    {
      category: 'Overhead',
      fixed: 35000,
      variable: 25000,
    },
    {
      category: 'Equipment',
      fixed: 55000,
      variable: 15000,
    },
    {
      category: 'Marketing',
      fixed: 25000,
      variable: 45000,
    },
  ];

  const contributionMarginData = [
    { name: 'AW24 Suede Boots', value: 42 },
    { name: 'Designer Handbag', value: 38 },
    { name: 'Limited Edition Watch', value: 35 },
    { name: 'Luxury Wallet', value: 32 },
    { name: 'Premium Scarf', value: 28 },
  ];

  const marginTrendsData = [
    { month: 'Apr', 'AW24 Suede Boots': 38, 'Designer Handbag': 35, 'Limited Edition Watch': 32, 'Luxury Wallet': 30, 'Premium Scarf': 25 },
    { month: 'May', 'AW24 Suede Boots': 40, 'Designer Handbag': 36, 'Limited Edition Watch': 34, 'Luxury Wallet': 31, 'Premium Scarf': 26 },
    { month: 'Jun', 'AW24 Suede Boots': 39, 'Designer Handbag': 37, 'Limited Edition Watch': 33, 'Luxury Wallet': 32, 'Premium Scarf': 27 },
    { month: 'Jul', 'AW24 Suede Boots': 41, 'Designer Handbag': 38, 'Limited Edition Watch': 35, 'Luxury Wallet': 33, 'Premium Scarf': 28 },
    { month: 'Aug', 'AW24 Suede Boots': 40, 'Designer Handbag': 37, 'Limited Edition Watch': 34, 'Luxury Wallet': 31, 'Premium Scarf': 27 },
    { month: 'Sep', 'AW24 Suede Boots': 42, 'Designer Handbag': 39, 'Limited Edition Watch': 36, 'Luxury Wallet': 32, 'Premium Scarf': 28 },
    { month: 'Oct', 'AW24 Suede Boots': 41, 'Designer Handbag': 38, 'Limited Edition Watch': 35, 'Luxury Wallet': 33, 'Premium Scarf': 29 },
    { month: 'Nov', 'AW24 Suede Boots': 43, 'Designer Handbag': 40, 'Limited Edition Watch': 37, 'Luxury Wallet': 34, 'Premium Scarf': 30 },
    { month: 'Dec', 'AW24 Suede Boots': 42, 'Designer Handbag': 39, 'Limited Edition Watch': 36, 'Luxury Wallet': 33, 'Premium Scarf': 29 },
    { month: 'Jan', 'AW24 Suede Boots': 44, 'Designer Handbag': 41, 'Limited Edition Watch': 38, 'Luxury Wallet': 35, 'Premium Scarf': 31 },
    { month: 'Feb', 'AW24 Suede Boots': 43, 'Designer Handbag': 40, 'Limited Edition Watch': 37, 'Luxury Wallet': 34, 'Premium Scarf': 30 },
    { month: 'Mar', 'AW24 Suede Boots': 42, 'Designer Handbag': 38, 'Limited Edition Watch': 35, 'Luxury Wallet': 32, 'Premium Scarf': 28 },
  ];

  const COLORS = ['#D4AF37', '#B8860B', '#DAA520', '#FFD700', '#F4C430'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
        </div>
        <InsightCards />
        <h1 className="text-3xl font-bold text-gold">Contribution Margin Analysis</h1>
        <p className="text-black mt-2">Track and optimize your profit margins across products and services</p>
      </div>

      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gold mb-4">Fixed vs Variable Cost Analysis</h2>
            <div className="relative h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={costData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#D4AF37" opacity={0.2} />
                  <XAxis 
                    dataKey="category" 
                    stroke="#D4AF37"
                    tick={{ fill: '#D4AF37' }}
                  />
                  <YAxis 
                    stroke="#D4AF37"
                    tick={{ fill: '#D4AF37' }}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1A1A1A',
                      border: '1px solid #D4AF37',
                      borderRadius: '4px',
                    }}
                    labelStyle={{ color: '#D4AF37' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#D4AF37' }}
                  />
                  <Bar dataKey="fixed" name="Fixed Costs" fill="#D4AF37" />
                  <Bar dataKey="variable" name="Variable Costs" fill="#8B7355" />
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 left-4 flex items-center gap-4">
                <img 
                  src="/lovable-uploads/c3fb9e39-1d26-4891-b9bf-c9c1a1b22da2.png" 
                  alt="Wafeq Logo" 
                  className="h-6 object-contain"
                />
                <img 
                  src="/lovable-uploads/9145ccdc-a9c3-483f-bf74-3a38371b42a0.png" 
                  alt="QOYOD Logo" 
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Contribution Margin by Product</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contributionMarginData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#D4AF37"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {contributionMarginData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid #D4AF37",
                        borderRadius: "4px",
                      }}
                      labelStyle={{ color: "#FFFFFF" }}
                      formatter={(value: number) => [`${value}%`, "Contribution Margin"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Margin Trends</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marginTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D4AF37" opacity={0.2} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#D4AF37"
                      tick={{ fill: '#D4AF37' }}
                    />
                    <YAxis 
                      stroke="#D4AF37"
                      tick={{ fill: '#D4AF37' }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid #D4AF37",
                        borderRadius: "4px",
                      }}
                      labelStyle={{ color: "#D4AF37" }}
                      formatter={(value: number) => [`${value}%`, "Contribution Margin"]}
                    />
                    <Legend 
                      wrapperStyle={{ color: '#D4AF37' }}
                    />
                    {contributionMarginData.map((product, index) => (
                      <Line
                        key={product.name}
                        type="monotone"
                        dataKey={product.name}
                        stroke={COLORS[index % COLORS.length]}
                        strokeWidth={2}
                        dot={{ fill: COLORS[index % COLORS.length] }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Optimization Opportunities</h2>
              <div className="space-y-4 text-gold-light">
                <p>• Review pricing strategy for low-margin products</p>
                <p>• Analyze cost structure of key product lines</p>
                <p>• Identify high-performing product categories</p>
                <p>• Optimize inventory management</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionMargin;
