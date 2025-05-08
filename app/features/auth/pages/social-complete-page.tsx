import type { Route } from "../+types/social-complete-page";

export default function SocialCompletePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        소셜 로그인 완료
      </h1>
      <p className="text-sm text-muted-foreground">
        소셜 로그인이 완료되었습니다
      </p>
    </div>
  );
}
