import { Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export const Route = createRootRoute({
  component: () => (
    <div className="app-wrapper">
      <Navigation />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});
