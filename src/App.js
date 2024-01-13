import {Header, SiteCard, Success, TagFrame} from "./Components"

function App() {
  return (
      <>
          <div style={{right: "15px", top:"10px", position: "fixed", zIndex: 998}}>
              <Success content={"加载到 Oldsquaw 中"} showCloseButton={true} />
              <Success content={"脚本初始化中"} showCloseButton={true} />
          </div>
          
          <div style={{left: "15px", top:"5px", position: "relative"}}>
              <div style={{left: "25px", top:"20px", position: "relative"}}>
                  <TagFrame name={"链接 / Links"} emoji="🔗" />
              </div>
              <div style={{display: "flex", gap: '35px', flexWrap: 'wrap'}}>
                  <div style={{left: "15px", top:"35px", position: "relative"}}>
                      <SiteCard name={"Oldsquaw"} author={"Oldsquaw"} url={"#"} profile={"CoCo 手机镜像"} />
                  </div>
                  <div style={{left: "15px", top:"35px", position: "relative"}}>
                      <SiteCard name={"Oldsquaw1"} author={"Oldsquaw"} url={"#"} profile={"CoCo 手机镜像"} />
                  </div>
              </div>
          </div>

          <div style={{left: "15px", top:"65px", position: "relative"}}>
              <div style={{left: "25px", top:"20px", position: "relative"}}>
                  <TagFrame name={"文章 / Posts"} emoji="🪧" />
              </div>
              <div style={{display: "flex", gap: '35px', flexWrap: 'wrap'}}>
                  <div style={{left: "15px", top:"35px", position: "relative"}}>
                      <SiteCard name={"Oldsquaw"} author={"Oldsquaw"} url={"#"} profile={"CoCo 手机镜像"} />
                  </div>
                  <div style={{left: "15px", top:"35px", position: "relative"}}>
                      <SiteCard name={"Oldsquaw1"} author={"Oldsquaw"} url={"#"} profile={"CoCo 手机镜像"} />
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
