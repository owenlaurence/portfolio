import { getTopic, getAllSlugs } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import * as Tabs from '@radix-ui/react-tabs';
import { Calendar, Tag, CheckCircle2, Zap, TrendingUp, Users, MoveLeft } from 'lucide-react';
import { JSX } from 'react';
import { getTagColor } from '@/src/styles/util/colors';
// import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm';
import "./markdown.css"
import rehypeRaw from 'rehype-raw';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// this makes tailwind happy.
export function renderMetricIcon(type: string) {
  switch (type) {
    case "trend-up": return <TrendingUp className={`size-6 text-blue-600`} />
    case "check": return <CheckCircle2 className={`size-6 text-green-600`} />
    case "zap": return <Zap className={`size-6 text-purple-600`} />
    default: return <Users className={`size-6 text-gray-600`} />
  }
}


export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const { markdown, data } = getTopic(slug);

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-3 gap-4 p-3">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <Link href={"/"} >
              <div className="flex items-center gap-2 mb-6">
                <MoveLeft className="size-4" />
                <span>Home</span>
              </div>
            </Link>

            {/* Title */}
            <h2 className="text-3xl mb-4">{data.title}</h2>


          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
            <Tabs.Root defaultValue="details">

              <Tabs.List className="flex overflow-x-auto border-b border-gray-200 whitespace-nowrap">
                {[
                  { value: "details", label: "Details" },
                  { value: "value", label: "Value" },
                  { value: "metrics", label: "Metrics" },
                ].map((tab) => (
                  <Tabs.Trigger
                    key={tab.value}
                    value={tab.value}
                    className="px-4 py-3 text-sm font-medium shrink-0
                        data-[state=active]:text-blue-600
                        data-[state=active]:border-b-2
                        data-[state=active]:border-blue-600"
                  >
                    {tab.label}
                  </Tabs.Trigger>
                ))}

              </Tabs.List>
              {/* DETAILS */}
              <Tabs.Content value="details" className="p-5">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    My Role
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Lead Developer & DevOps Engineer
                  </div>
                </div>
                <br/>
                <div className="flex flex-wrap gap-3">
                  {data.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 px-3 py-1 ${getTagColor(tag.color)} rounded-full text-sm`}
                    >
                      <Tag className="size-3" />
                      {tag.text}
                    </span>
                  ))}
                </div>
              </Tabs.Content>


              {/* VALUE */}
              <Tabs.Content value="value" className="p-5">
                <ul className="space-y-4 text-sm text-gray-800">
                  {data.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 mt-[6px] shrink-0">•</span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Tabs.Content>


              {/* METRICS */}
              <Tabs.Content value="metrics" className="p-5 space-y-6">
                {data.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                      {renderMetricIcon(metric.type)}
                    </div>
                    <div className="text-sm text-gray-800 leading-relaxed">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </Tabs.Content>

            </Tabs.Root>

          </div>


          {/* MARKDOWN */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="not-prose markdown-reset  max-w-none ">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <SyntaxHighlighter
                        {...rest}
                        ref={undefined}
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        style={prism}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {markdown}
              </Markdown>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
            <h3 className="text-xl mb-4">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech, i) => (
                <span key={`tech-${i}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">{tech}</span>
              ))}

            </div>
          </div>
        </div>


        {/* Sidebar */}
        <div className="hidden col-span-1 lg:block ">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 space-y-8 lg:space-y-10">

            {/* Project Details */}
            <section>
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                Project Details
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">My Role</div>
                  <div className="font-medium text-gray-900">
                    Lead Developer & DevOps Engineer
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {data.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 px-3 py-1 ${getTagColor(tag.color)} rounded-full text-xs`}
                    >
                      <Tag className="size-3" />
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Impact Metrics */}
            <section>
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                Impact
              </h3>

              <div className="space-y-4">
                {data.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      {renderMetricIcon(metric.type)}
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Challenges */}
            <section>
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                Challenges Solved
              </h3>

              <ul className="space-y-3 text-sm text-gray-700">
                {data.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 mt-[6px] shrink-0">•</span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>


      </div>
    </div>

  );
}
