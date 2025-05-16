import { FlickeringGrid } from "components/magicui/flickering-grid";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div>
        <FlickeringGrid color="#FF1F57" gridGap={5} />
      </div>
      <Outlet />
    </div>
  );
}
