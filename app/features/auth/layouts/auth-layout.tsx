import { FlickeringGrid } from "~/common/components/magicui/flickering-grid";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <FlickeringGrid color="#FF1F57" gridGap={5} className="hidden lg:block" />
      <Outlet />
    </div>
  );
}
