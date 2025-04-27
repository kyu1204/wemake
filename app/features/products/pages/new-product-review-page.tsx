export function action({ request, params }: Route.ActionArgs) {
  // 실제 구현에서는 Supabase에 리뷰를 저장합니다
  return { success: true };
}

export function Component() {
  return <div></div>;
}

export function meta(): Route.MetaFunction {
  return [
    { title: "새 리뷰 작성" },
    { name: "description", content: "새로운 제품 리뷰 작성" },
  ];
}
