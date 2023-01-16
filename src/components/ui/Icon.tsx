import cn from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  className: string
  to?: string
  href?: string
  onClick?: () => void
}

export const Icon: React.FC<Props> = ({ className, to, href, onClick }) => {
  let classNames = cn('', className);

  if (href) {
    return <a className={classNames} onClick={onClick} href={href} target='_blank' rel="noreferrer" />
  }

  if (to) {
    return <Link className={classNames} to={to} onClick={onClick} />
  }
  
  return <div className={classNames} onClick={onClick} />
};