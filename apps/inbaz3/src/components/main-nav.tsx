import Link from "next/link";
import { cn } from '@inbaz3/utils';
import { Calendar, Users, Link as LinkIcon } from 'lucide-react';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/calendar"
        className="text-sm font-medium transition-colors hover:text-primary flex items-center"
      >
        <span className="icon md:hidden"><Calendar /></span>
        <span className="text hidden md:block">Kalendar</span>
      </Link>
      <Link
        href="/meetups"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <span className="icon md:hidden"><Users /></span>
        <span className="text hidden md:block">Jongliertreffen</span>
      </Link>
      <Link
        href="/links"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <span className="icon md:hidden"><LinkIcon /></span>
        <span className="text hidden md:block">Links</span>
      </Link>
    </nav>
  );
}