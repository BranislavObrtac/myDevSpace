import { Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/footer/Footer";
import Navigation from "../components/hero/Navigation";
import Hero from "../components/hero/Hero";

export const Route = createRootRoute({
  component: () => (
    <div className="app-wrapper">
      <Hero />

      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});
