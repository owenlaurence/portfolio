import { getAllTopics } from "@/lib/content";
import Link from "next/link";
import { getTagColor } from '@/src/styles/util/colors';
import { Tag } from "lucide-react";
import Filter from "@/lib/components/Topics";
import Topics from "@/lib/components/Topics";



export default function App() {
  const topics = getAllTopics();


  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 pt-10">
       <Topics topics={topics} />
      
    </div>
  );
}
