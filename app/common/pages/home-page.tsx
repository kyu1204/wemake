import { Link, type MetaFunction } from "react-router";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";
import { FlickeringGrid } from "~/common/components/magicui/flickering-grid";
import { VelocityScroll } from "~/common/components/magicui/scroll-based-velocity";
import { Ripple } from "~/common/components/magicui/ripple";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { Marquee } from "../components/magicui/marquee";
import { RetroGrid } from "~/common/components/magicui/retro-grid";
import type { Route } from "./+types/home-page";
import { getProductsByDateRange } from "~/features/products/queries";
import { DateTime } from "luxon";
import { getPosts } from "~/features/community/queries";
import { getGptIdeas } from "~/features/ideas/queries";
import { getJobs } from "~/features/jobs/queries";
import { getTeams } from "~/features/teams/queries";
export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export const loader = async () => {
  const [dailyProducts, posts, ideas, jobs, teams] = await Promise.all([
    getProductsByDateRange({
      startDate: DateTime.now().startOf("day"),
      endDate: DateTime.now().endOf("day"),
      limit: 8,
    }),
    getPosts({
      limit: 8,
      sorting: "newest",
    }),
    getGptIdeas({
      limit: 8,
    }),
    getJobs({
      limit: 8,
    }),
    getTeams({
      limit: 8,
    }),
  ]);
  return { dailyProducts, posts, ideas, jobs, teams };
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-40">
      <div className="relative flex justify-center items-center h-[500px] w-full">
        <FlickeringGrid
          color="#FF1F57"
          gridGap={5}
          className="absolute top-0 left-0 w-full h-full"
        ></FlickeringGrid>
        <div className="relative z-10 flex flex-col items-center">
          <BlurFade delay={0.5} inView>
            <h2 className="text-8xl font-bold">welcome to wemake</h2>
          </BlurFade>
          <BlurFade delay={1} inView>
            <span className="text-5xl font-bold">the home of indie makers</span>
          </BlurFade>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll> 🌍 code hard 💻 travel far </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
      <BlurFade delay={0.5} inView>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="text-5xl font-bold leading-tight tracking-tighter">
              Today's Products
            </h2>
            <p className="text-xl font-light text-foreground">
              The best products made our community today.
            </p>
            <Button variant="link" asChild className="text-lg p-0">
              <Link to="/products/leaderboards">
                Explore all products &rarr;
              </Link>
            </Button>
          </div>
          {loaderData.dailyProducts.map((product) => (
            <ProductCard
              key={product.product_id.toString()}
              id={product.product_id.toString()}
              name={product.name}
              description={product.description}
              commentCount={product.reviews}
              viewCount={product.views}
              upvoteCount={product.upvotes}
            />
          ))}
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <div className="space-y-10 relative md:h-[50vh] flex flex-col justify-center items-center overflow-hidden">
          <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
            <div className="relative flex flex-col justify-center items-center md:p-64 z-50 text-center md:text-left md:bg-radial-[circle_at_center] md:from-background md:from-40% md:to-transparent md:to-100%">
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
            <div className="md:absolute w-full flex justify-between md:h-full h-[75vh] top-0 left-0">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {loaderData.ideas.map((idea) => (
                  <IdeaCard
                    key={idea.gpt_idea_id}
                    id={idea.gpt_idea_id}
                    title={idea.idea}
                    viewCount={idea.views}
                    createdAt={idea.created_at}
                    likeCount={idea.likes}
                    claimed={idea.is_claimed}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:20s]"
              >
                {loaderData.ideas.map((idea) => (
                  <IdeaCard
                    key={idea.gpt_idea_id}
                    id={idea.gpt_idea_id}
                    title={idea.idea}
                    viewCount={idea.views}
                    createdAt={idea.created_at}
                    likeCount={idea.likes}
                    claimed={idea.is_claimed}
                  />
                ))}
              </Marquee>
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {loaderData.ideas.map((idea) => (
                  <IdeaCard
                    key={idea.gpt_idea_id}
                    id={idea.gpt_idea_id}
                    title={idea.idea}
                    viewCount={idea.views}
                    createdAt={idea.created_at}
                    likeCount={idea.likes}
                    claimed={idea.is_claimed}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:20s]"
              >
                {loaderData.ideas.map((idea) => (
                  <IdeaCard
                    key={idea.gpt_idea_id}
                    id={idea.gpt_idea_id}
                    title={idea.idea}
                    viewCount={idea.views}
                    createdAt={idea.created_at}
                    likeCount={idea.likes}
                    claimed={idea.is_claimed}
                  />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            </div>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <div className="grid grid-cols-3 gap-4">
          <div className="self-center text-center md:text-left">
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
          <div className="relative col-span-2 flex flex-col md:[perspective:500px] md:pb-40 overflow-hidden md:*:[transform:translateZ(-0px)_rotateY(-20deg)_rotateZ(10deg)]">
            <Marquee pauseOnHover className="[--duration:20s]">
              {loaderData.posts.map((post) => (
                <PostCard
                  key={post.post_id}
                  id={post.post_id}
                  title={post.title}
                  author={post.author}
                  authorAvatarUrl={post.author_avatar}
                  category={post.topic}
                  postedAt={post.created_at}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {loaderData.posts.map((post) => (
                <PostCard
                  key={post.post_id}
                  id={post.post_id}
                  title={post.title}
                  author={post.author}
                  authorAvatarUrl={post.author_avatar}
                  category={post.topic}
                  postedAt={post.created_at}
                />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
              {loaderData.posts.map((post) => (
                <PostCard
                  key={post.post_id}
                  id={post.post_id}
                  title={post.title}
                  author={post.author}
                  authorAvatarUrl={post.author_avatar}
                  category={post.topic}
                  postedAt={post.created_at}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </BlurFade>
      <div className="rounded-lg border overflow-hidden -mt-20 shadow-xl group">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex relative z-10 bg-background w-full justify-center items-center flex-col -mt-24">
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
          <RetroGrid />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-10 p-5 -mt-32 md:-mt-14 dark:bg-background bg-white">
          {loaderData.teams.map((team) => (
            <BlurFade delay={0.5} inView>
              <TeamCard
                key={team.team_id}
                id={team.team_id}
                leaderUsername={team.team_leader.username}
                leaderAvatarUrl={team.team_leader.avatar}
                positions={team.roles.split(",")}
                projectDescription={team.product_description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="md:-mt-44 overflow-hidden">
        <BlurFade delay={0.25} inView>
          <div className="flex h-[75vh] relative flex-col justify-center items-center text-center md:text-left">
            <h2 className="text-5xl font-bold leading-tight tracking-tighter">
              Latest Jobs
            </h2>
            <p className="text-xl font-light text-foreground">
              Find your dream job.
            </p>
            <Button variant="link" asChild className="text-lg p-0">
              <Link to="/jobs">Explore all jobs &rarr;</Link>
            </Button>
            <Ripple />
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 -mt-32 md:-mt-60 z-10 gap-4">
          {loaderData.jobs.map((job) => (
            <BlurFade delay={0.25} inView key={job.job_id}>
              <JobCard
                key={job.job_id}
                id={job.job_id}
                company={job.company_name}
                companyLogoUrl={job.company_logo}
                companyHq={job.company_location}
                title={job.position}
                postedAt={job.created_at}
                type={job.job_type}
                positionLocation={job.location}
                salary={job.salary_range}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
