import { getAllTopics } from "@/lib/content";
import Link from "next/link";
import { getTagColor } from '@/src/styles/util/colors';
import { Tag } from "lucide-react";


const getDifficultyStyle = (difficulty: string) => {
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

export default function App() {
  const topics = getAllTopics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 pt-10">
      <div className="max-w-8xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...topics].map((topic, i) => (
          <Link key={"topic_" + i} href={`/topic/${topic.subject}`}>
            <div
              className="group relative rounded-2xl bg-white p-6 shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-black transition-colors pt-6">
                {topic.title}
              </h3>
              <div className="absolute top-4 right-4 text-xs font-medium tracking-wide">
                <span className="text-zinc-400">difficulty:</span>{" "}
                <span className={`${getDifficultyStyle(topic.difficulty)} font-semibold`}>
                  {topic.difficulty}
                </span>
              </div>

              <div className="flex-shrink">

                {topic.tags.map((tag, i) => {
                  return <span key={"tag_" + i} className={`inline-flex items-center gap-1 px-2 py-0.5 m-1  ${getTagColor(tag.color)} rounded-full text-xs`}>

                    <Tag className="size-3" />
                    {tag.text}
                  </span>
                })

                }

              </div>


            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
