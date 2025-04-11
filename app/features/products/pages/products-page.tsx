import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Products | wemake" },
    { name: "description", content: "Explore all products on wemake" },
  ];
};

export default function ProductsPage() {
  return (
    <div className="container py-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover amazing products built by our community
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link to="/products/submit">Submit Product</Link>
          </Button>
          <Button asChild>
            <Link to="/products/promote">Promote Product</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* 실제 구현시 데이터를 로드하여 표시 */}
      </div>
    </div>
  );
}
