"use server"
import { getTopic, getAllSlugs, ProjectTag, ImpactMetric } from "@/lib/content";
import * as Tabs from '@radix-ui/react-tabs';
import { CheckCircle2, Zap, TrendingUp, Users, MoveLeft, Tag } from 'lucide-react';
import { getTagColor } from '@/src/styles/util/colors';
// import ReactMarkdown from 'react-markdown';
import Markdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm';
import "./markdown.css"
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from "next/link";
import { ReactNode } from "react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// this makes tailwind happy.
export async function renderMetricIcon(type: string) {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Header Section */}
          <CardContainer className="p-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <MoveLeft className="size-4" />
              <span>Home</span>
            </Link>
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{data.title}</h1>
          </CardContainer>

          {/* Mobile Tabs */}
          <CardContainer className="lg:hidden border border-gray-200 mb-6">
            <Tabs.Root defaultValue="details" orientation="horizontal">
              <Tabs.List className="flex overflow-x-auto border-b border-gray-200 whitespace-nowrap">
                {[
                  { value: "details", label: "Details" },
                  { value: "value", label: "Value" },
                  { value: "metrics", label: "Impact" },
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
              {/* DESCRIPTION */}
              <Tabs.Content value="details" className="p-5">
                <DescriptionBlock description={data.description} />
                <br/>
                <TagsList tags={data.tags} size="sm" />
              </Tabs.Content>
              {/* VALUE */}
              <Tabs.Content value="value" className="p-5">
                <ChallengesList challenges={data.challenges} />
              </Tabs.Content>
              {/* METRICS */}
              <Tabs.Content value="metrics" className="p-5 space-y-6">
                  <MetricsList metrics={data.metrics} />
              </Tabs.Content>
            </Tabs.Root>
          </CardContainer>

          {/* MARKDOWN */}
          <CardContainer className="p-4">
            <div className="not-prose markdown-reset  max-w-none ">
              <Markdown
                remarkPlugins={[remarkGfm]}
                // rehypeRaw gets us github-like rendering. rehypeSanitize prevents XSS
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={MarkdownComponents}
              >
                {markdown}
              </Markdown>
            </div>
          </CardContainer>

          {/* Technologies Used */}
          <CardContainer className="p-8 mt-6">
            <h3 className="text-xl mb-4">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech, i) => (
                <span key={`tech-${i}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">{tech}</span>
              ))}

            </div>
          </CardContainer>
        </div>


        {/* Desktop Sidebar */}
        <div className="hidden col-span-1 lg:block ">
          <CardContainer className="border border-gray-200 p-6 lg:p-8 space-y-8 lg:space-y-10">
            {/* Project Details */}
            <DescriptionBlock description={data.description} />
            <TagsList tags={data.tags} size="sm" />
            {/* Divider */}
            <div className="border-t border-gray-100" />
            {/* Impact Metrics */}
            <section>
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                Impact
              </h3>
              <MetricsList metrics={data.metrics} />
            </section>
            {/* Divider */}
            <div className="border-t border-gray-100" />
            {/* Challenges */}
            <section>
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                Value Added
              </h3>
              <ChallengesList challenges={data.challenges} />
            </section>
          </CardContainer>
        </div>
      </div>
    </div>

  );
}


function DescriptionBlock({ description } : { description : string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide ">
        Description
      </div>
      <div className="text-sm font-semibold text-gray-900">
        {description}
      </div>
    </div>
  );
}

function TagsList({ tags, size = "sm" } : { tags : ProjectTag[], size : string }) {
  const textSize = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag.text}
          className={`inline-flex items-center gap-1 px-3 py-1 ${getTagColor(tag.color)} rounded-full ${textSize}`}
        >
          <Tag className="size-3" />
          {tag.text}
        </span>
      ))}
    </div>
  );
}

// This may be unnecessary, but i didn't like re-defining the same 3 properties many times.
function CardContainer({ children, className="" } : { children : ReactNode, className : string }) {
    return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
    )
}

function MetricsList({ metrics} : { metrics : ImpactMetric[] } ) {
  return (
    <div className="space-y-4">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className={"flex items-start gap-3"}
        >
          <div
            className={ "mt-1" }
          >
            {renderMetricIcon(metric.type)}
          </div>

          <div className="text-sm text-gray-700 leading-relaxed">
            {metric.description}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChallengesList({ challenges } : { challenges : string[] }) {
  return (
    <ul className="space-y-3 text-sm text-gray-700">
      {challenges.map((challenge, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-blue-600 mt-[6px] shrink-0">•</span>
          <span className="leading-relaxed">{challenge}</span>
        </li>
      ))}
    </ul>
  );
}


const MarkdownComponents : Components = {
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
}