const dev = process.env.NODE_ENV !== "production";

export const root_path = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";
