import menuIcon from "../assests/menuIcon.png";
import logo from "../assests/logo.png";
import user from "../assests/user.jpg";
import search from "../assests/search.png"
const Header = () => {
  return (
    <div className="w-screen h-16 shadow flex items-center justify-between px-2">
      <div className="flex gap-5">
        <img src={menuIcon} className="h-8" />
        <img src={logo} className="h-8" />
      </div>
      <div className="w-96 flex">
        <input className="border-2 border-black w-full rounded-l-lg" />
        <button className="border-y-2 border-e-2 border-black rounded-r-lg ">
          <img className="h-12 " src={search} />
        </button>
      </div>
      <div className="flex gap-5">
        <img src={user} className="h-10" />
      </div>
    </div>
  );
};
export default Header;
