import Sidebar from "./sidebar";
import MainContainer from "./maincontainer";

const Section = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Section;