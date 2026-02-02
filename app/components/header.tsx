
export default function Header() {
  return (
    <header className="header">
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span style={{ fontSize: "large" }}>Owen McPartlan</span>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "10rem" }}>
          <span ><u>About</u></span>
          <span ><u>GitHub</u></span>
        </div>
      </div>
    </header>

  )
}