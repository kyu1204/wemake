import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category on wemake" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl font-bold">Categories</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* 실제 구현시 카테고리 목록을 로드하여 표시 */}
      </div>
    </div>
  );
}
