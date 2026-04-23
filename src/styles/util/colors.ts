export const tagColors: Record<string, string> = {
  devops: "bg-blue-100 text-blue-700",
  github: "bg-blue-100 text-blue-700",
  oauth: "bg-red-100 text-red-700",
  oidc: "bg-red-100 text-red-700",
  web: "bg-purple-100 text-purple-700",
  android: "bg-purple-100 text-purple-700",
  ios: "bg-purple-100 text-purple-700",
  ci: "bg-green-100 text-green-700",
  ssr: "bg-yellow-100 text-yellow-700",
  react: "bg-yellow-100 text-yellow-700",
}

export const getTagColor = (tag: string) => {
  
  const cleanTag = tag.split("/")[0].toLowerCase();

  return tagColors[cleanTag] ?? "bg-gray-100 text-gray-700 border-1 border-back";
}
  
