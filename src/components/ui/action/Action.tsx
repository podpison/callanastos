import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';

type Props = {
  icon: 'telegram' | 'chat' | 'phone'
  children: React.ReactNode
  to: string
  className?: string
  theme?: 'white' | 'blue'
}

export const Action: React.FC<Props> = ({ children, icon, to, className, theme }) => {
  let isBlueTheme = theme === 'blue';

  return <Link className={cn('flex items-center gap-x-4 p-1.5 rounded-3xl w-fit', className, isBlueTheme ? 'bg-blue' : 'bg-white')} to={to}>
    <div className='bg-blue rounded-full p-4'>
      <Icon className={`${icon}-icon`} />
    </div>
    <p className={cn('font-bold text-base', isBlueTheme ? 'text-white' : 'text-blue')}>{children}</p>
  </Link>
};