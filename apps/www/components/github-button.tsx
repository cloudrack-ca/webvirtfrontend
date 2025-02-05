import GithubIcon from '@/icons/github';

export function GithubButton() {
  return (
    <a
      className="group inline-flex h-12 items-center justify-center rounded-lg border border-neutral-500 px-8 font-medium outline-none transition-all duration-300 hover:scale-105 hover:border-neutral-800 dark:border-white/30 dark:hover:border-white/50"
      href="https://github.com/webvirtcloud/"
    >
      <GithubIcon className="mr-2" />
      <span>Github</span>
    </a>
  );
}
