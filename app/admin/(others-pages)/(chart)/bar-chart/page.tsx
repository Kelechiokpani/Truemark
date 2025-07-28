import { Metadata } from "next";
import React from "react";
import ComponentCard from "@/components/dashboard/components/common/ComponentCard";
import PageBreadcrumb from "@/components/dashboard/components/common/PageBreadCrumb";
import BarChartOne from "@/components/dashboard/components/charts/bar/BarChartOne";

export const metadata: Metadata = {
  title: "Next.js Bar Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Bar Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
