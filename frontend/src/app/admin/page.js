import AdminLayout from "@/components/admin/AdminLayout";
import Dashboard from "@/components/admin/Dashboard";
import React from "react";

export default function page() {
  return (
    <>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </>
  );
}
