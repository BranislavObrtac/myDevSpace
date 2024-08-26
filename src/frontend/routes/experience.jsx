import { createFileRoute } from "@tanstack/react-router";
import Experience from "../app/pages/experience/Experience";

export const Route = createFileRoute("/experience")({
  component: () => <Experience />,
});
