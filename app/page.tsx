import Image from "next/image";
import "./globals.css"
import Header from "./components/header";
import Footer from "./components/footer";

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
      title: "Here's why your team should implement OAuth",
      image: "https://cdn.sanity.io/images/3jwyzebk/production/98e90a206076c70d7fc86b5f89426170146dc9ac-1584x988.png",
      description: "Retain control over your user identities while providing cutting-edge authentication factors"
    },

    {
      subject: "capacitorIntro",
      title: "Mobile-friendly React, with all the bells and whistles",
      image: "https://capacitorjs.com/og.png",
      description: "That's right, one single codebase with access to all your favorite native APIs. Who wouldn't love that?"
    },

    {
      subject: "capacitorPlugin",
      title: "When you need even more from Capacitor",
      image: "https://capacitorjs.com/docs/img/v6/docs/capacitor-card.png",
      description: "Capacitor will have a plugin for whatever you do, but there are always options if you need something fine-tuned"

    },

    {
      subject: "oidc",
      title: "What OIDC means to you",
      image: "https://goteleport.com/blog/_next/static/media/oidc-header.0cf20588.png",
      description: "Users don't like creating new accounts. And that's fine now!"
    },

    {
      subject: "serverSideNext",
      title: "Secured sites, every time",
      image: "https://miro.medium.com/1*1itDSqxMNCT_XMksG99r-A.png",
      description: "Take advantage of server-side performance, with the security React always needed."
    }

  ]

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="grid">
          {featsOfStrength.map((feat, i) => (
            <div className="card" key={i}>
              <img
                style={{ width: "600", height: "400" }}
                src={feat.image}
                alt=""
              />
              <div className="card-body">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />

    </div>
  );
}
