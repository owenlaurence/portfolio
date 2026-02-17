
"use client"
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Clock, Calendar, Tag, CheckCircle2, AlertCircle, Zap, Code2, GitBranch, Award, TrendingUp, Users } from 'lucide-react';
import { JSX } from 'react';
import { getTagColor } from '@/src/styles/util/colors';
// import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm';
import "./markdown.css"
import rehypeRaw from 'rehype-raw';
import {lucario} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { a11yDark, agate, dark, kimbieLight, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type TopicProps = {
  topic: string
  subject: string
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
  icon: JSX.Element
}

type Tag = {
  text: string
  color: string
}


export default function TopicTemplate({ topic, description, steps, businessValue, tags, metrics, technologies, challenges }: TopicProps) {

  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen bg-gray-50 min-h-[100vh]">
      <div className="max-w-7xl mx-auto p-4 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className=" lg:col-span-2">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>February 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Users className="size-4" /> */}
                  <Calendar className="size-4" />
                  <span>1 week</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl mb-4">{topic}</h1>

              {/* Tags and Difficulty */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {tags.map((tag, i) => {
                  return <span key={"tag_" + i} className={`inline-flex items-center gap-1 px-3 py-1 ${getTagColor(tag.color)} rounded-full text-sm`}>
                    <Tag className="size-3" />
                    {tag.text}
                  </span>
                })

                }
              </div>

            </div>

            {/* Mobile Swipeable Cards */}
            <div className="md:hidden lg:hidden col-span-2 bg-gray-50 px-2 ">
              <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 -mx-4 px-4">

                {/* Project Details Card */}
                <div className="min-w-[85%] snap-center bg-white rounded-2xl border border-gray-200 shadow-xl transform transition-transform duration-500 ease-in-out p-6 scale-95 first:scale-105 last:scale-105">
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600">
                      Project Details
                    </h3>
                    <div className="h-1 w-12 bg-blue-600 rounded-full mt-3"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        My Role
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Lead Developer & DevOps Engineer
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Team Size
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        5 engineers
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics Card */}
                <div className="min-w-[85%] snap-center bg-white rounded-2xl border border-gray-200 shadow-xl transform transition-transform duration-500 ease-in-out p-6 scale-95 first:scale-105 last:scale-105">
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600">
                      Impact Metrics
                    </h3>
                    <div className="h-1 w-12 bg-blue-600 rounded-full mt-3"></div>
                  </div>

                  <div className="space-y-6">
                    {metrics.map((metric, i) => (
                      <div key={`metric-mobile-${i}`} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                          {metric.icon}
                        </div>
                        <div className="text-sm text-gray-800 leading-relaxed">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Challenges Card */}
                <div className="min-w-[85%] snap-center bg-white rounded-2xl border border-gray-200 shadow-xl transform transition-transform duration-500 ease-in-out p-6 scale-95 first:scale-105 last:scale-105">
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600">
                      Key Challenges Solved
                    </h3>
                    <div className="h-1 w-12 bg-blue-600 rounded-full mt-3"></div>
                  </div>

                  <ul className="space-y-4 text-sm text-gray-800">
                    {challenges.map((challenge, i) => (
                      <li key={`challenge-mobile-${i}`} className="flex gap-3">
                        <span className="text-blue-600 mt-[6px] text-base shrink-0">•</span>
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto whitespace-nowrap">
                  <Tabs.Trigger
                    value="description"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    <span className="sm:hidden">About</span>
                    <span className="hidden sm:inline">Description</span>
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="steps"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    <span className="sm:hidden">Steps</span>
                    <span className="hidden sm:inline">Steps to Accomplish</span>
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="value"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    <span className="sm:hidden">Value</span>
                    <span className="hidden sm:inline">Business Value</span>
                  </Tabs.Trigger>
                </Tabs.List>


                {/* MARKDOWN */}
                <Tabs.Content value="description" className="py-4">
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
                              ref={() => { }}
                              PreTag="div"
                              children={String(children).replace(/\n$/, '')}
                              language={match[1]}
                              style={ prism }
                            />
                          ) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    >
                      {description}
                    </Markdown>
                  </div>
                </Tabs.Content>

                <Tabs.Content value="steps" className="py-4">
                  <ol className="list-decimal list-inside space-y-3">
                    {steps?.map((step, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                </Tabs.Content>

                <Tabs.Content value="value" className="py-4">
                  <p className="text-gray-700 leading-relaxed">{businessValue}</p>
                </Tabs.Content>
              </Tabs.Root>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
              <h3 className="text-xl mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <span key={`tech-${i}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">{tech}</span>
                ))}

              </div>
            </div>
 


            

            
          </div>


          {/* Sidebar */}
          <div className="hidden md:block lg:col-span-1">
            {/* Project Context */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-8">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">My Role</div>
                  <div className="text-sm">Lead Developer & DevOps Engineer</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Team Size</div>
                  <div className="text-sm">5 engineers</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Impact Metrics</h3>
              <div className="space-y-4">
                {metrics.map((metric, i) => {
                  return <div key={`metric-${i}`} className="flex items-start gap-3">
                    <div className={`p-2 bg-100 rounded-lg`}>
                      {metric.icon}
                    </div>
                    <div>
                      <div className="text">{metric.description}</div>
                    </div>
                  </div>
                })

                }
              </div>
            </div>

            {/* Key Challenges */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Key Challenges Solved</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {challenges.map((challenge, i) => (
                  <li key={`challenge-${i}`} className="flex gap-2">
                    <span className="text-blue-600 shrink-0">•</span>
                    <span>{challenge}</span>
                  </li>

                ))

                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}