import { Form } from "react-router";
import type { Route } from "./+types/otp-start-page";
import InputPair from "~/common/components/intput-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP Start | wemake" }];
};

export default function OtpStartPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center gap-10 flex-col w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Login with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to login to your account.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
