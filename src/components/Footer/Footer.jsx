import { AiFillFastForward } from "react-icons/ai";
import { AiFillFastBackward } from "react-icons/ai";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center footer  h-16 ">
      
      <div className="menu flex justify-around items-center w-[30%] border-white raduis-[50%]">
        <button className="">
          <AiFillFastBackward className="w-[28px] h-[28px]" />
        </button>
        Menu
        <button>
          <AiFillFastForward className="w-[28px] h-[28px]" />
        </button>
      </div>
    </div>
  )
}
export default Footer;