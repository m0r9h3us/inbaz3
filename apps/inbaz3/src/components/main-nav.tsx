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
        <span className="text">Kalendar</span>
      </Link>
      <Link
        href="/meetups"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <span className="text block">Jongliertreffen</span>
      </Link>
    </nav>
  );
}