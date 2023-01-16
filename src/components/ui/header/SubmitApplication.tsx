import { Action } from "../action/Action";
import cn from 'classnames';

type Props = {
  className?: string
}

export const SubmitApplication: React.FC<Props> = ({ className }) => {
  return <Action className={cn("", className)} icon="chat" to="/contactUs">Оставить заявку</Action>
};