import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getAllSlugs() {
  return fs.readdirSync(contentDir);  
}

export function getTopic(slug: string) {

  const basePath = path.join(contentDir, slug);


  const markdownPath = path.join(basePath, "index.md");
  const jsonPath = path.join(basePath, "data.json");


  const markdown = fs.readFileSync(markdownPath, "utf8");
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf8")) as Topic;


  return {
    markdown,
    data: json,
  };
}

export function getAllTopics() {
  const slugs = getAllSlugs()
  return slugs.map(slug => getTopic(slug).data)
}


export function getDifficultyStyle(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "low":
      return "text-emerald-600";
    case "medium":
      return "text-amber-600";
    case "high":
      return "text-rose-600";
    default:
      return "text-zinc-600";
  }
};



export type Topic = {
  title: string
  subject: string
  difficulty: string
  description: string
  steps?: string[];
  businessValue: string
  tags: string[]
  metrics: ImpactMetric[]
  technologies: string[],
  challenges: string[]

}

export type ImpactMetric = {
  description: string
  type: string
}
