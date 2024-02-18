import React from 'react';
import { Logo, Search } from '.';
import Hamberger from 'public/icons/hamberger.svg';

export default function Header() {
  return (
    <header className="grid h-[72px] w-full grid-cols-3 content-center px-[34px]">
      <div className="flex items-center gap-3">
        <button>
          <Hamberger />
        </button>
        <Logo size="sm" />
      </div>
      <div>
        <Search size="sm" />
      </div>
    </header>
  );
}
