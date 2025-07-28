import type { Metadata } from "next";
import React from "react";
import { EcommerceMetrics } from "@/components/dashboard/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/dashboard/components/ecommerce/MonthlySalesChart";
import MonthlyTarget from "@/components/dashboard/components/ecommerce/MonthlyTarget";
import StatisticsChart from "@/components/dashboard/components/ecommerce/StatisticsChart";
import DemographicCard from "@/components/dashboard/components/ecommerce/DemographicCard";
import RecentOrders from "@/components/dashboard/components/ecommerce/RecentOrders";


export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
