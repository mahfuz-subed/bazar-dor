
import Banner from "./components/banner";
import Upward from "./components/Upward";
import Downward from "./components/Downward"
export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
          <Banner/>
          <Upward/>
          <Downward/>
    </div>
  );
}
