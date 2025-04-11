import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product to wemake" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl font-bold">Submit Your Product</h1>
      <form className="space-y-4 max-w-xl">
        {/* 실제 구현시 제품 제출 폼 추가 */}
        <Button>Submit Product</Button>
      </form>
    </div>
  );
}
