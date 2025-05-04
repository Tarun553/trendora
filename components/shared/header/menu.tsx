import React from 'react';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop */}
      <nav className="hidden md:flex w-full max-w-xs gap-4 items-center">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="size-6" aria-label="cart" />
            <span className="hidden lg:block">Cart</span>
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/profile">
            <UserIcon className="size-6" aria-label="profile" />
            <span className="hidden lg:block">Sign In</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <div className="flex flex-col gap-4 items-center mb-4">
              <ModeToggle />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart className="size-6" aria-label="cart" />
                  <span className="hidden lg:block">Cart</span>
                </Link>
              </Button>
              <Button asChild>
                <Link href="/profile">
                  <UserIcon className="size-6" aria-label="profile" />
                  <span className="hidden lg:block">Sign In</span>
                </Link>
              </Button>
            </div>
            <SheetDescription>
              {/* Optional: Add description or extra menu items here */}
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;