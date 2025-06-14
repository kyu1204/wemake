import { Button } from "~/common/components/ui/button";
import { Form, Link, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/login-page";
import InputPair from "~/common/components/intput-pair";
import AuthButtons from "../components/auth-buttons";
import { AlertCircleIcon, LoaderCircle } from "lucide-react";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/common/components/ui/alert";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | wemake" }];
};

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid Email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    }),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return {
      loginError: null,
      formErrors: error.flatten().fieldErrors,
    };
  }

  const { email, password } = data;
  const { client, headers } = makeSSRClient(request);
  const { error: loginError } = await client.auth.signInWithPassword({
    email,
    password,
  });
  if (loginError) {
    return {
      loginError: loginError.message,
      formErrors: null,
    };
  }

  return redirect("/", {
    headers,
  });
};

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex items-center justify-center gap-10 flex-col w-full max-w-md">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <Form className="w-full space-y-4" method="post">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-sm text-red-500">
              {actionData.formErrors?.email?.join(", ")}
            </p>
          )}
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-sm text-red-500">
              {actionData.formErrors?.password?.join(", ")}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Login"}
          </Button>
          {actionData && "loginError" in actionData && (
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{actionData.loginError}</AlertDescription>
            </Alert>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
