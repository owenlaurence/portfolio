
"use client"
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Clock, Calendar, Tag, CheckCircle2, AlertCircle, Zap, Code2, GitBranch, Award, TrendingUp, Users } from 'lucide-react';

type TopicProps = {
  topic: string
  subject: string
  description: string
  steps?: string[];
  businessValue: string
  tags: string[]
  

}


export default function TopicTemplate({ topic, description, steps, businessValue, tags }: TopicProps) {

  const [activeTab, setActiveTab] = useState('description');

  const colors = [ "blue", "green", "purple" ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>February 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>Team of 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4" />
                  <span>Lead Developer</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl mb-4">{topic}</h1>

              {/* Tags and Difficulty */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {tags.map((tag, i) => {
                  return <span key={"tag_" + i} className={`inline-flex items-center gap-1 px-3 py-1 bg-${colors[i]}-100 text-${colors[i]}-700 rounded-full text-sm`}>
                  <Tag className="size-3" />
                  {tag}
                </span>
                })

                }
              </div>

            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List className="flex gap-2 border-b border-gray-200 mb-6">
                  <Tabs.Trigger
                    value="description"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    Description
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="steps"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    Steps to Accomplish
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="value"
                    className="px-4 py-2 border-b-2 transition-colors data-[state=active]:border-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-600 hover:text-gray-900"
                  >
                    Business Value
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="description" className="py-4">
                  <p className="text-gray-700 leading-relaxed">{description}</p>
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
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">GitHub Actions</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Docker</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">YAML</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Node.js</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Jest</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">AWS</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Terraform</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
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
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm">Deployment frequency increased from weekly to daily</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle2 className="size-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm">Mean time to recovery reduced by 60%</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm">Developer productivity increased by 40%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Challenges */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Key Challenges Solved</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 shrink-0">•</span>
                  <span>Manual deployment bottlenecks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 shrink-0">•</span>
                  <span>Inconsistent environment configurations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 shrink-0">•</span>
                  <span>Lack of automated testing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 shrink-0">•</span>
                  <span>Limited deployment visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}