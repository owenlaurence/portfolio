import Image from "next/image";
import "./globals.css"
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <div className="grid">
          {[...Array(10)].map((_, i) => (
            <div className="card" key={i}>
              <img
                src={`https://picsum.photos/600/400?random=${i}`}
                alt=""
              />
              <div className="card-body">
                <h3>Card {i + 1}</h3>
                <p>Some description text</p>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer/>

    </div>
  );
}
