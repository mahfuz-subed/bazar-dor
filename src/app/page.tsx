
import Banner from "./components/banner";
import Upward from "./components/Upward";
import Downward from "./components/Downward"
import AllProducts from "./products/AllProducts";
export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
          <Banner/>
          <Upward/>
          <Downward/>
          <AllProducts/>
    </div>
  );
}
