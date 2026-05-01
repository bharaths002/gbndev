import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
  image: string;
}

export interface StoryChapter {
  id: string;
  title: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}
