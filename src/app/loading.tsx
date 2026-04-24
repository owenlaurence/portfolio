

export default function Loading() {
  return <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 pt-10">
  <>
    <div className="pb-3 min-w-8xl grid ">
      <div className="">
        {[...Array(8)].map((i) => (
          <span
            key={"tag_skeleton_" + Math.random().toString()}
            className="inline-flex items-center gap-1 px-2 py-0.5 m-1 lg:ml-3 bg-gray-100 bg-gray-100 text-gray-700 border-1 border-gray-700 rounded-full rounded-full animate-pulse"
          >
            {/* Icon placeholder */}
            <span className="size-3 rounded-sm bg-gray-300" />
            {/* Text placeholder — width varies to mimic 4–10 char range */}
            <span className="h-2.5 rounded bg-gray-300" style={{ width: `${Math.floor(Math.random() * 20) + 28}px` }} />
          </span>
        ))

        }
      </div>

    </div>
    <div className="max-w-8xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="relative  rounded-2xl bg-white p-6 border border-zinc-200 shadow-sm animate-pulse"
        >
          {/* Title */}
          <div className="h-8 w-2/5 bg-zinc-200 rounded-md mb-4 mt-6" />

          {/* Description — two lines */}
          <div className="h-5 w-[90%] bg-zinc-200 rounded mb-2" />
          <div className="h-5 w-[65%] bg-zinc-200 rounded mb-4" />

          {/* Tags */}
          <div className="flex-shrink">
            {[28, 44, 36].map((w, j) => (
              <span
                key={"tag_skel_" + j}
                className="inline-flex items-center gap-1 px-2 py-0.5 m-1 lg:ml-3 bg-gray-100 border border-gray-200 rounded-full"
              >
                <span className="size-3 rounded-sm bg-gray-300" />
                <span className="h-2.5 bg-gray-300 rounded" style={{ width: w }} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

  </>
</div>
}