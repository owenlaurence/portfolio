export const tagColors: Record<string, string> = {
  devops: "bg-blue-100 text-blue-700 border-1 border-blue",
  github: "bg-blue-100 text-blue-700 border-1 border-blue",
  oauth: "bg-red-100 text-red-700 border-1 border-red",
  oidc: "bg-red-100 text-red-700 border-1 border-red",
  web: "bg-purple-100 text-purple-700 border-1 border-purple",
  android: "bg-purple-100 text-purple-700 border-1 border-purple",
  ios: "bg-purple-100 text-purple-700 border-1 border-purple",
  ci: "bg-green-100 text-green-700 border-1 border-green",
  ssr: "bg-yellow-100 text-yellow-700 border-1 border-yellow",
  react: "bg-yellow-100 text-yellow-700 border-1 border-yellow",
}

export const getTagColor = (tag: string) => {
  
  const cleanTag = tag.split("/")[0].toLowerCase();

  return tagColors[cleanTag] ?? "bg-gray-100 text-gray-700 border-1 border-gray-700";
}
  
