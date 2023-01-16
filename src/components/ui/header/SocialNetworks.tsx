import { Icon } from './../Icon';

const socialNetworks = [
  {
    className: 'instagram-icon',
    href: 'https://www.instagram.com/'
  },
  {
    className: 'facebook-icon',
    href: 'https://www.facebook.com/'
  },
  {
    className: 'telegram-icon',
    href: 'https://web.telegram.org/'
  },
];

export const SocialNetworks: React.FC = () => {
  const SocialNetworks = socialNetworks.map((i, index) => <Icon {...i} key={index} />);

  return <div className="flex items-center gap-x-5 max-lg:col-[1] max-lg:row-[1] lg:ml-4">
    {SocialNetworks}
  </div>
};