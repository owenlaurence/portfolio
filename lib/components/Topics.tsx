"use client"

import { getTagColor } from "@/src/styles/util/colors"
import {  Topic } from "../content"
import { Search, Tag, X } from "lucide-react"
import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import Loading from "@/src/app/loading"

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


export default function Topics({ topics } : { topics : Topic[] }) {
  const [tags, setTags ] = useState<string[]>()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredTopics, setFilteredTopics] = useState<Topic[]>();

  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const uniqueTags = [...new Set(topics.flatMap(t => t.tags))]
    setTags(uniqueTags);


  }, [])

  useEffect(() => {
    // no tags selected, show everything.
    if(selectedTags.length === 0) setFilteredTopics(topics);

    else {
      const newTopics = [...new Set(selectedTags.flatMap(selectedTag => {
        return topics.filter((t) => t.tags.includes(selectedTag))
      }))]

      setFilteredTopics(newTopics)

    }

    if(search.trim() !== "") {
      let query = search.toLowerCase()
      let result = filteredTopics?.filter((t) => {
        return t.title.includes(query) 
        || t.description.includes(query) 
        || t.technologies.some((tech) => tech.toLowerCase().includes(query))
        || t.tags.some((tag) => tag.toLowerCase().includes(query)) })
      setFilteredTopics(result)

    }

  }, [selectedTags, search])



  const uniqueTags = () => {
    return tags?.map((tag) => {
      return <span 
        key={"tag_" + tag} 
        onClick={() => selectedTags.includes(tag) ? setSelectedTags([...selectedTags.filter(t => t !== tag)]) : setSelectedTags([...selectedTags, tag])} 
        className={`inline-flex items-center cursor-pointer gap-1 px-2 py-0.5 m-1   ${selectedTags.includes(tag) ? getTagColor(tag) : getTagColor("")} rounded-full text-xs`}>
        <Tag className="size-3" />
        {tag}
      </span>
    })
  }

  return <Suspense>
    <>
 <div className="pb-3 min-w-8xl grid gap-2">
          {/* Search + Tags row */}
          <div className="flex flex-col lg:flex-row sm:items-start gap-2">
            {/* Search input */}
            <div className="relative flex-shrink-0 sm:w-56">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-zinc-400 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search topics…"
                className="text-[16px] w-full pl-7 pr-7 py-0.5 text-xs rounded-full border border-zinc-200 bg-white text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:border-zinc-300 transition h-[26px]"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition"
                >
                  <X className="size-3" />
                </button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center">
              {uniqueTags()}
            </div>
          </div>

          {/* Result count hint */}
          {(search || selectedTags.length > 0) && (
            <p className="text-xs text-zinc-400 pl-0.5">
              {filteredTopics?.length ?? 0} result{filteredTopics?.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

      <div className="max-w-8xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTopics?.map((topic, i) => (
          <Link key={"topic_" + i} href={`/topic/${topic.subject}`}>
            <div
              className="group relative rounded-2xl bg-white p-6 shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-black transition-colors pt-6">
                {topic.title}
              </h3>
              <div className="text-sm text-gray-500 mb-1 py-2">{topic.description}</div>
              <div className="absolute top-4 right-4 text-xs font-medium tracking-wide">
                <span className="text-zinc-400">difficulty:</span>{" "}
                <span className={`${getDifficultyStyle(topic.difficulty)} font-semibold`}>
                  {topic.difficulty}
                </span>
              </div>

              <div className="flex-shrink">

                {topic.tags.map((tag, i) => {
                  return <span key={"tag_" + i} className={`inline-flex items-center gap-1 px-2 py-0.5 m-1 ml-0  ${ getTagColor(tag)} rounded-full text-xs`}>

                    <Tag className="size-3" />
                    {tag}
                  </span>
                })

                }

              </div>


            </div>
          </Link>
        ))}
      </div>
    </>
  </Suspense>

}