interface LoaderData {
  reviews: Array<{
    id: string;
    content: string;
    rating: number;
  }>;
}

export function loader({ params }: Route.LoaderArgs) {
  // 실제 구현에서는 Supabase에서 리뷰 데이터를 가져옵니다
  return {
    reviews: [
      { id: "1", content: "좋은 제품입니다", rating: 5 },
      { id: "2", content: "만족스럽습니다", rating: 4 },
    ],
  };
}

export function Component({ loaderData }: Route.ComponentProps<LoaderData>) {
  const { reviews } = loaderData;

  return <div className="space-y-4"></div>;
}

export function meta(): Route.MetaFunction {
  return [
    { title: "제품 리뷰" },
    { name: "description", content: "제품에 대한 사용자 리뷰" },
  ];
}
