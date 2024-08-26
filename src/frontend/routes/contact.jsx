import { createFileRoute } from "@tanstack/react-router";
import Contact from "../app/pages/contact/Contact";

export const Route = createFileRoute("/contact")({
  component: () => <Contact />,
});
