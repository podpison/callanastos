import cn from 'classnames';

type Props = {
  name: string
}

export const Lng: React.FC<Props> = ({ name }) => {
  return <button className={cn('transition-colors hover:text-blue', name === 'РУС' && 'text-blue font-bold')}>
    {name}
  </button>
};