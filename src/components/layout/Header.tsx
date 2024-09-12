// src/components/layout/Header.
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { Typography } from '../ui/Typography';
import { SiteConfig } from '@/lib/site-config';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import GitSession from '../GitSession';
import Profile from '../Profile';
import Image from 'next/image';

export function Header() {
 
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/">
            <Typography variant="h3" className='flex gap-2'>
              <Image src='/images/logo-text.png' width={84} height={104} alt="User profile" />
              {SiteConfig.title}
            </Typography>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-4">
            <Popover >
              <PopoverTrigger asChild>
                <Button variant="ghost"><Profile/></Button>
              </PopoverTrigger>
              <PopoverContent className="flex justify-between items-center w-fit flex-col gap-3">
                 <GitSession/>
              </PopoverContent>
            </Popover>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}




