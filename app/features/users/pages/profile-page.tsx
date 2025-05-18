import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Profile | wemake",
    },
  ];
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Headline</h2>
        <p className="text-muted-foreground">
          I'm a backend developer based on the KR, I like to build products that
          help people.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">About</h2>
        <p className="text-muted-foreground">
          I'm a backend developer based on the KR, I like to build products that
          help people.
        </p>
      </div>
    </div>
  );
}
