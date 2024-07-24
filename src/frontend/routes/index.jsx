import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <div>Hello /!</div>
      <p>
        I am a software engineer with a passion for building high-quality
        software. I have experience in a wide range of technologies and
        languages, including JavaScript, TypeScript, Python, and Java. I have
        worked on a variety of projects, from small web applications to large
        enterprise systems. I am always looking to learn new things and improve
        my skills. In my free time, I enjoy reading, hiking, and playing video
        games.
      </p>
    </div>
  ),
});
