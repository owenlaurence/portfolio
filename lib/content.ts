
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




export type Topic = {
  title: string
  subject: string
  difficulty: string
  description: string
  steps?: string[];
  businessValue: string
  tags: Tag[]
  metrics: ImpactMetric[]
  technologies: string[],
  challenges: string[]

}

type ImpactMetric = {
  description: string
  type: string
}

type Tag = {
  text: string
  color: string
}