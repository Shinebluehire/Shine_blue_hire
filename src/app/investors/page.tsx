"use client";
import Link from 'next/link';
import { PageContainer } from '@/components/shared/page-container';
import { SectionContainer } from '@/components/shared/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart as LineChartIcon, FileText, ShieldCheck, Mail, TrendingUp, BarChart as BarChartIcon, Activity } from 'lucide-react'; // Added Activity
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, LineChart, Line, Legend, Tooltip } from 'recharts'; // Added LineChart, Line, Legend, Tooltip
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from '@/components/ui/chart';

const financialHighlights = [
  { metric: 'Assets Under Management (AUM)', value: '₹500+ Cr', trend: 'up' },
  { metric: 'Net Profit Margin', value: '15%', trend: 'stable' },
  { metric: 'Gross NPA', value: '< 2%', trend: 'down' },
  { metric: 'Customer Base', value: '100,000+', trend: 'up' },
];

const investorDownloads = [
  { name: 'Annual Report FY2023', link: '/investor-docs/annual-report-2023.pdf' },
  { name: 'Quarterly Financials Q3 FY2024', link: '/investor-docs/q3-fy24-financials.pdf' },
  { name: 'Investor Presentation - March 2024', link: '/investor-docs/investor-presentation-mar24.pdf' },
  { name: 'Corporate Governance Report', link: '/investor-docs/corp-governance-report.pdf' },
];

const aumData = [
  { year: '2022-2023', aum: 3.14 },
  { year: '2023-2024', aum: 5.09 },
  { year: '2024-2025', aum: 17.25 },
  { year: '2025-2026', aum: 45.00 },
  { year: '2026-2027', aum: 100.00 },
];

const loanDisbursementData = [
  { year: '2022-2023', disbursement: 238 },
  { year: '2023-2024', disbursement: 351 },
  { year: '2024-2025', disbursement: 1036 },
  { year: '2025-2026', disbursement: 2500 },
  { year: '2026-2027', disbursement: 4500 },
];

const collectionEfficiencyData = [
  { month: 'MAR-22', currentCollection: 69, collectionEfficiency: 28 },
  { month: 'MAR-23', currentCollection: 83, collectionEfficiency: 34 },
  { month: 'MAR-24', currentCollection: 83, collectionEfficiency: 35 },
  { month: 'APR-24', currentCollection: 73, collectionEfficiency: 52 },
  { month: 'MAY-24', currentCollection: 88, collectionEfficiency: 63 },
  { month: 'JUN-24', currentCollection: 85, collectionEfficiency: 63 },
  { month: 'JUL-24', currentCollection: 88, collectionEfficiency: 73 },
  { month: 'AUG-24', currentCollection: 86, collectionEfficiency: 67 },
  { month: 'SEP-24', currentCollection: 89, collectionEfficiency: 71 },
  { month: 'OCT-24', currentCollection: 83, collectionEfficiency: 73 },
  { month: 'NOV-24', currentCollection: 89, collectionEfficiency: 71 },
  { month: 'DEC-24', currentCollection: 89, collectionEfficiency: 71 },
  { month: 'JAN-25', currentCollection: 88, collectionEfficiency: 74 },
  { month: 'FEB-25', currentCollection: 85, collectionEfficiency: 74 },
  { month: 'MAR-25', currentCollection: 86, collectionEfficiency: 75 },
];


const chartConfig = {
  aum: {
    label: "AUM (₹ Cr)",
    color: "hsl(var(--primary))",
  },
  disbursement: {
    label: "Loan Disbursement",
    color: "hsl(var(--accent))",
  },
  currentCollection: {
    label: "Current Collection (%)",
    color: "hsl(var(--destructive))",
  },
  collectionEfficiency: {
    label: "Collection Efficiency (%)",
    color: "hsl(var(--primary))",
  }
} satisfies ChartConfig;

export default function InvestorsPage() {
  return (
    <PageContainer>
      <SectionContainer title="Investor Relations" subtitle="Partnering in Our Growth Journey" className="pt-0 md:pt-0">
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-10 w-10 text-primary mr-4" />
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">Investing in Shine Blue Hire</h3>
                <p className="text-muted-foreground">
                  Shine Blue Hire Purchase offers a compelling investment opportunity in India's rapidly growing financial services sector, particularly within the underserved rural and semi-urban markets.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">
              We are committed to sustainable growth, robust financial performance, and strong corporate governance. This section provides key information for our current and prospective investors.
            </p>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Current and Planning AUM" subtitle="Assets Under Management (₹ Cr)" className="bg-card">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center">
              <BarChartIcon className="h-8 w-8 text-primary mr-3" />
              <CardTitle className="font-headline text-xl text-primary">AUM Growth Trajectory</CardTitle>
            </div>
            <CardDescription>Projected Assets Under Management in Crores (₹)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aumData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis
                    label={{ value: 'AUM (₹ Cr)', angle: -90, position: 'insideLeft', offset: -5 }}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="aum" fill="var(--color-aum)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Loan Disbursement per Year" subtitle="Financial Performance Metric" className="bg-secondary/30">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center">
              <BarChartIcon className="h-8 w-8 text-accent mr-3" />
              <CardTitle className="font-headline text-xl text-primary">Loan Disbursement Growth</CardTitle>
            </div>
            <CardDescription>Loan Disbursement Amounts per Financial Year</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={loanDisbursementData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis
                    label={{ value: 'Disbursement Amount', angle: -90, position: 'insideLeft', offset: -5 }}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="disbursement" fill="var(--color-disbursement)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Collection Efficiency" subtitle="Monthly Performance (%)" className="bg-card">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-primary mr-3" />
              <CardTitle className="font-headline text-xl text-primary">Collection Efficiency Trends</CardTitle>
            </div>
            <CardDescription>Monthly Current Collection vs. Collection Efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[450px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={collectionEfficiencyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis 
                    tickFormatter={(value) => `${value}%`}
                    label={{ value: 'Efficiency (%)', angle: -90, position: 'insideLeft', offset: 10 }}
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={8}
                    domain={[0, 100]}
                  />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="currentCollection" stroke="var(--color-currentCollection)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Current Collection (%)"/>
                  <Line type="monotone" dataKey="collectionEfficiency" stroke="var(--color-collectionEfficiency)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Collection Efficiency (%)"/>
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer title="Financial Highlights" subtitle="Our Performance at a Glance" className="bg-secondary/30">
        {financialHighlights.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardHeader>
                  <LineChartIcon className="h-10 w-10 text-accent mx-auto mb-2" />
                  <CardTitle className="font-headline text-xl text-primary">{highlight.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{highlight.value}</p>
                  <p className={`text-sm ${highlight.trend === 'up' ? 'text-green-600' : highlight.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'}`}>
                    Trend: {highlight.trend}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Financial highlights will be updated soon.</p>
        )}
      </SectionContainer>

      <SectionContainer title="Downloads & Disclosures" subtitle="Reports and Presentations" className="bg-card">
        <div className="grid md:grid-cols-2 gap-6">
          {investorDownloads.map((doc, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">{doc.name}</h4>
                    <p className="text-xs text-muted-foreground">Click to download (PDF)</p>
                  </div>
                </div>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">Download</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          For more governance-related disclosures, please visit our <Link href="/governance" className="text-accent hover:underline">Governance page</Link>.
        </p>
      </SectionContainer>

      <SectionContainer title="Investor Inquiries" subtitle="Contact Our Investor Relations Team" className="bg-secondary/30">
        <Card className="max-w-lg mx-auto text-center shadow-md">
          <CardHeader>
            <Mail className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-muted-foreground">For any investor-related queries, please reach out to:</p>
            <p className="font-semibold">Investor Relations Department</p>
            <p><a href="mailto:investors@shinebluehire.com" className="text-accent hover:underline">investors@shinebluehire.com</a></p>
            <p>01572-245235, 9251200245</p>
            <p>[Placeholder: Address for Investor Correspondence]</p>
          </CardContent>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
}