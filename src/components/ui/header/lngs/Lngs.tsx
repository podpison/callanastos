import { Lng } from "./Lng";
import cn from 'classnames';

type Props = {
  className?: string
}

const lngs = ['РУС', 'US'];

export const Lngs: React.FC<Props> = ({ className }) => {
  let Lngs = lngs.map((l, index) => <Lng name={l} key={index} />);
  
  return <div className={cn("flex items-center gap-2", className)}>
    {Lngs}
  </div>
};