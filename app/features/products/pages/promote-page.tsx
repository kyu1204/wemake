import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product on wemake" },
  ];
};

export default function PromotePage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl font-bold">Promote Your Product</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* 실제 구현시 프로모션 플랜 추가 */}
        <Button>Choose Plan</Button>
      </div>
    </div>
  );
}
