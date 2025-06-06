import { useOutletContext } from "react-router";
import type { Route } from "./+types/profile-page";
import client from "~/supa-client";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Profile | wemake",
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  await client.rpc("track_event", {
    event_type: "profile_view",
    event_data: {
      username: params.username,
    },
  });

  return null;
};

export default function ProfilePage() {
  const { headline, bio } = useOutletContext<{
    headline: string;
    bio: string;
  }>();

  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Headline</h2>
        <p className="text-muted-foreground">{headline}</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Bio</h2>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}
