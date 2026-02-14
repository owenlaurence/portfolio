export default function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
            
            {/* Meta row */}
            <div className="flex gap-6">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
            </div>

            {/* Title */}
            <div className="h-10 w-3/4 bg-gray-300 rounded" />

            {/* Tags */}
            <div className="flex gap-3">
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
              <div className="h-8 w-24 bg-gray-200 rounded-full" />
              <div className="h-8 w-16 bg-gray-200 rounded-full" />
              <div className="h-8 w-28 bg-gray-200 rounded-full" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <div className="h-10 w-36 bg-gray-300 rounded-lg" />
              <div className="h-10 w-28 bg-gray-200 rounded-lg" />
            </div>

            <div className="border-t pt-6 grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-8 w-16 bg-gray-300 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-8 w-12 bg-gray-300 rounded" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-8 w-20 bg-gray-300 rounded" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex gap-6">
              <div className="h-5 w-24 bg-gray-300 rounded" />
              <div className="h-5 w-36 bg-gray-200 rounded" />
              <div className="h-5 w-28 bg-gray-200 rounded" />
            </div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          
          {/* Project Details Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="h-5 w-32 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Impact Metrics Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="h-5 w-32 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Key Challenges Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="h-5 w-40 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
