import type { Metadata } from "next"
import HackathonClientPage from "./hackathon-client"

export const metadata: Metadata = {
  title: "Web Development Hackathon - CodeCraft Challenge | Carlos Andrade",
  description:
    "Join Carlos Andrade's Web Development Hackathon. Build innovative web applications using modern technologies like React, Next.js, and TypeScript. Win prizes and showcase your skills.",
}

export default function HackathonPage() {
  return <HackathonClientPage />
}
