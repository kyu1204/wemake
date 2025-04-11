import type { MetaFunction } from "react-router";
import type { Route } from "../+types";

export const meta: MetaFunction = () => {
  return [
    { title: "Category | wemake" },
    { name: "description", content: "Browse products in this category" },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl font-bold capitalize">{loaderData.category}</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* 실제 구현시 해당 카테고리의 제품들을 로드하여 표시 */}
      </div>
    </div>
  );
}
