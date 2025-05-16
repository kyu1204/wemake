import { Link, type MetaFunction } from "react-router";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";
import { FlickeringGrid } from "components/magicui/flickering-grid";
import { VelocityScroll } from "components/magicui/scroll-based-velocity";
export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-5 space-y-40">
      <div className="relative flex justify-center items-center h-[500px]">
        <FlickeringGrid
          color="#FF1F57"
          gridGap={5}
          className="absolute top-0 left-0 w-full h-full"
        ></FlickeringGrid>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-8xl font-bold">welcome to wemake</h2>
          <span className="text-5xl font-bold">the home of indie makers</span>
        </div>
      </div>
      <div>
        <VelocityScroll> 🌍 code hard 💻 travel far </VelocityScroll>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 11 }, (_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`Description for product ${index + 1}`}
            commentCount={Math.floor(Math.random() * 100)}
            viewCount={Math.floor(Math.random() * 1000)}
            upvoteCount={Math.floor(Math.random() * 500)}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }, (_, index) => (
          <PostCard
            key={index}
            id={`post-${index}`}
            title={`Post ${index + 1}`}
            author="Harry"
            authorAvatarUrl="https://github.com/apple.png"
            category="Productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }, (_, index) => (
          <IdeaCard
            key={index}
            id={`idea-${index}`}
            title={`Idea ${index + 1}`}
            viewCount={Math.floor(Math.random() * 1000)}
            createdAt="12 hours ago"
            likeCount={Math.floor(Math.random() * 100)}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }, (_, index) => (
          <JobCard
            key={index}
            id="jobId"
            company="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-time"
            positionLocation="Remote"
            salary="$100,000 - $120,000"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }, (_, index) => (
          <TeamCard
            key={index}
            id={`team-${index}`}
            leaderUsername="lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
