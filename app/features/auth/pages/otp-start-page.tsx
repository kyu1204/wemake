import type { Route } from "../+types/otp-start-page";

export default function OtpStartPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">OTP 인증</h1>
      <p className="text-sm text-muted-foreground">
        이메일로 전송된 인증 코드를 입력하세요
      </p>
    </div>
  );
}
