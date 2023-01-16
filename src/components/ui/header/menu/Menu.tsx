import { Lngs } from "../lngs/Lngs";
import { Pages } from "../pages/Pages";
import { SubmitApplication } from "../SubmitApplication";

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  
  if (!isOpen) {
    return <></>
  };
  
  return <div className="absolute -left-2.5 flex flex-col items-center top-[70px] bg-light-blue w-screen h-[1000vh] py-5 z-40 lg:hidden">
    <Lngs className="mt-7" />
    <Pages className="flex-col items-center gap-y-5 mt-10" />
    <SubmitApplication className="mt-14" />
  </div>
};