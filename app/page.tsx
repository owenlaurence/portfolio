
type FeatOfStrength = {
  subject : string,
  title : string,
  image : string,
  description : string
}

export default function App() {
  const featsOfStrength : FeatOfStrength[] = [
  {
    subject: "oauth",
    title: "Why OAuth changed how I think about authentication",
    image: "https://cdn.sanity.io/images/3jwyzebk/production/98e90a206076c70d7fc86b5f89426170146dc9ac-1584x988.png",
    description: "OAuth lets you stay secure while still giving people the login experience they expect."
  },

  {
    subject: "capacitor-intro",
    title: "Rethinking mobile apps with a single React codebase",
    image: "https://capacitorjs.com/og.png",
    description: "One codebase. Real native APIs. No more re-implementing."
  },

  {
    subject: "capacitor-plugin",
    title: "When the plugin isn't enough: extending Capacitor for yourself",
    image: "https://capacitorjs.com/docs/img/v6/docs/capacitor-card.png",
    description: "There's usually a plugin for that. And when there isn't? Turns out building your own isn't as scary as it sounds."
  },

  {
    subject: "oidc",
    title: "Making login feel invisible with OIDC",
    image: "https://goteleport.com/blog/_next/static/media/oidc-header.0cf20588.png",
    description: "Users don't want another password. OIDC lets them log in with what they already trust."
  },

  {
    subject: "server-sideNext",
    title: "Where security finally clicked for me in Next.js",
    image: "https://miro.medium.com/1*1itDSqxMNCT_XMksG99r-A.png",
    description: "Server-side rendering isn't just about speed. It provides the security React always needed."
  }
]



  return (
    <div className="app">
      <main className="main">
        <div className="grid">
          {featsOfStrength.map((feat, i) => (
            <div className="card" key={i}>
              <img
                src={feat.image}
                alt={feat.title}
                className="card-image"
              />

              <div className="card-body">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}
