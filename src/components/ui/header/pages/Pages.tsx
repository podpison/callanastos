import { Page } from "./Page";
import cn from 'classnames';

const pages = [
  {
    link: '/',
    name: 'Главная'
  },
  {
    link: '/aboutUs',
    name: 'О нас'
  },
  {
    link: '/services',
    name: 'Услуги'
  },
  {
    link: '/universities',
    name: 'Университеты'
  },
  {
    link: '/students',
    name: 'Студенты'
  },
  {
    link: '/news',
    name: 'Новости'
  },
  {
    link: '/contacts',
    name: 'Контакты'
  },
];

export type HeaderPageLinkType = typeof pages[0];

type Props = {
  className?: string
}

export const Pages: React.FC<Props> = ({ className }) => {
  const Pages = pages.map((i, index) => <Page {...i} key={index} />);

  return <nav className={cn("flex gap-x-4 text-sm", className)}>
    {Pages}
  </nav>
};