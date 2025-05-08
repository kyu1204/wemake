import type { Route } from "../+types/social-start-page";

export default function SocialStartPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">소셜 로그인</h1>
      <p className="text-sm text-muted-foreground">
        소셜 계정으로 로그인하세요
      </p>
    </div>
  );
}
