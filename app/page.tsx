import Image from "next/image";

export default function Home() {
  return (
    <div className="banner">
      <div className="container">
          <div className="logo">
            <img src="./logo.png" alt="logo" />  
          </div>
          <div className="header">
              <h1 className="header-title">Website Under Construction</h1>
              <p className="header-decrp">We currently working on something aswesome. Stay tuned!</p>
          </div>
      </div>
  </div>
  );
}
