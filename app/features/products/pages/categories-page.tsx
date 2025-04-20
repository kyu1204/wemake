import { Hero } from "~/common/components/hero";
import { CategoryCard } from "../components/category-card";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category on wemake" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={`categoryId-${index}`}
            name={`Category Name ${index}`}
            description={`Category Description ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
