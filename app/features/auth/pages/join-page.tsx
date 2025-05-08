import { Form, Link } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/intput-pair";
import { Button } from "~/common/components/ui/button";
import AuthButtons from "../components/auth-buttons";
export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex items-center justify-center gap-10 flex-col w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="name"
            label="Name"
            description="Enter your name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            label="Username"
            description="Enter your username"
            name="username"
            type="text"
            placeholder="i.e wemake"
          />
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
