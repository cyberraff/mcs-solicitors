export type TeamMember = {
  name: string;
  credentials: string;
  title?: string;
  bio?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Hockam Salhan",
    credentials: "LLB (Hons)",
    title: "Head of the Criminal Law Department · Higher Rights Advocate · Director",
    bio: undefined,
  },
  {
    name: "Mukesh Salhan",
    credentials: "LLB (Hons), LPC, LLM",
    title: undefined,
    bio: undefined,
  },
  {
    name: "Yunus Razaq",
    credentials: "LLB (Hons), LPC",
    title: undefined,
    bio: undefined,
  },
];
