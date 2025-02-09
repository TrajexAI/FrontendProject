
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface ProductDataType {
  name: string;
  sales: number;
  margin: number;
}

interface ProductAnalysisProps {
  productData: ProductDataType[];
}

const ProductAnalysisCard = ({ productData }: ProductAnalysisProps) => {
  return (
    <Card className="bg-black border border-[#F97316]/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#F97316]">Product Analysis</CardTitle>
        <Dialog>
          <DialogTrigger>
            <ArrowRight className="h-4 w-4 text-[#F97316] cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="bg-black border border-[#F97316]/20 w-[90vw] max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-[#F97316]">Product Performance</DialogTitle>
            </DialogHeader>
            <div className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={productData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#FFFFFF' }}
                    axisLine={{ stroke: '#F97316' }}
                  />
                  <YAxis 
                    tick={{ fill: '#FFFFFF' }}
                    axisLine={{ stroke: '#F97316' }}
                    tickFormatter={(value) => `£${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#000',
                      border: '1px solid #F97316',
                      borderRadius: '4px',
                    }}
                    formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="sales" name="Sales" fill="#F97316" />
                  <Bar dataKey="margin" name="Profit Margin" fill="#1EAEDB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/60">Click arrow to view detailed analysis</p>
      </CardContent>
    </Card>
  );
};

export default ProductAnalysisCard;
