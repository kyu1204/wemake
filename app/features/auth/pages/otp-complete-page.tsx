import type { Route } from "../+types/otp-complete-page";

export default function OtpCompletePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">OTP 인증 완료</h1>
      <p className="text-sm text-muted-foreground">인증이 완료되었습니다</p>
    </div>
  );
}
