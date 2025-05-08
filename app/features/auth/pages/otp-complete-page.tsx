import { Form } from "react-router";
import InputPair from "~/common/components/intput-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-complete-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP Complete | wemake" }];
};

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center gap-10 flex-col w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            Enter the OTP code sent to your email address.
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
          <InputPair
            id="otp"
            label="OTP"
            description="Enter the OTP code"
            name="otp"
            type="number"
            placeholder="i.e 1234"
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
