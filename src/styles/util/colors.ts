export const tagColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
}

// should never see the default but its there.
export const getTagColor = (color: string) => {
  return tagColors[color] ?? "bg-gray-100 text-gray-700";
}
  