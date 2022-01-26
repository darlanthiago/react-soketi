import { useEffect } from "react";
import { laravelEcho } from "./services/websocket";

laravelEcho.channel("channel-test").listen("TestEvent", function (e: any) {
  console.log(e);
});
function App() {
  useEffect(() => {
    laravelEcho.channel("channel-test").listen("TestEvent", function (e: any) {
      console.log(e);
    });
  }, []);

  return <h1>Hello World</h1>;
}

export default App;
