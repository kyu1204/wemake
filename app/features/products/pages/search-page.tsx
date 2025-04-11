import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products on wemake" },
  ];
};

export default function SearchPage() {
  return (
    <div className="container py-10 space-y-6">
      <div className="flex gap-4">
        {/* <Input placeholder="Search products..." className="max-w-xl" /> */}
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* 실제 구현시 검색 결과를 로드하여 표시 */}
      </div>
    </div>
  );
}
