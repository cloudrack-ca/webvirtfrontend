import GithubIcon from '@/icons/github';
import TgIcon from '@/icons/tg';
import XIcon from '@/icons/x';

export const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    name: 'github',
    href: 'https://github.com/webvirtcloud',
  },
  {
    icon: XIcon,
    name: 'x',
    href: 'https://x.com/webvirtcloud',
  },
  {
    icon: TgIcon,
    name: 'telegram',
    href: 'https://t.me/webvirtcloud',
  },
] as const;
