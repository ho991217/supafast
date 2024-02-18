'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type SideBarItem = {
  id: number;
  name: string;
  href: string;
  icon: JSX.Element;
};

const SIDE_BAR_ITEMS = [
  {
    id: 0,
    name: '홈',
    href: '/',
    icon: (
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 1,
    name: '실시간 인기 스트리밍',
    href: '/hot-live',
    icon: (
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 0.0877134C-3.9 -0.582287 10.24 2.73771 10.24 4.88771C10.24 6.94771 8.89 8.61771 6.83 8.61771C4.76 8.61771 3.2 6.94771 3.2 4.88771L3.23 4.52771C1.21 6.92771 0 10.0377 0 13.4177C0 17.8377 3.58 21.4177 8 21.4177C12.42 21.4177 16 17.8377 16 13.4177C16 8.02771 13.41 3.21771 9.5 0.0877134ZM7.71 18.4177C5.93 18.4177 4.49 17.0177 4.49 15.2777C4.49 13.6577 5.54 12.5177 7.3 12.1577C9.07 11.7977 10.9 10.9477 11.92 9.57771C12.31 10.8677 12.51 12.2277 12.51 13.6177C12.51 16.2677 10.36 18.4177 7.71 18.4177Z"
          fill="#A6A3A3"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: '게임 스트리밍',
    href: '/game',
    icon: (
      <svg
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.933 9.53576L20.6543 4.09763C20.0066 1.68055 17.8163 0 15.3138 0H6.6861C4.18364 0 1.99339 1.68051 1.34573 4.09763L0.0669751 9.53576C-0.260361 11.0957 0.640179 12.652 2.15637 13.1452L2.23114 13.1692C3.63442 13.626 5.16539 13.0372 5.90192 11.7584L7.01455 10.1132C7.29394 9.62819 7.81111 9.32904 8.37022 9.32904H13.6299C14.189 9.32904 14.7061 9.62819 14.9855 10.1132L16.0981 11.7584C16.8347 13.0372 18.366 13.626 19.7693 13.1692L19.8437 13.1452C21.3598 12.652 22.2604 11.0957 21.933 9.53576ZM8.209 5.89145H6.41767V7.68307H4.85812V5.89145H3.0668V4.33258H4.85812V2.54165H6.41767V4.33258H8.209V5.89145ZM16.1016 2.16842C16.6441 2.16842 17.0833 2.6076 17.0833 3.15017C17.0833 3.69201 16.6441 4.13119 16.1016 4.13119C15.5598 4.13119 15.1206 3.69201 15.1206 3.15017C15.1206 2.60756 15.5598 2.16842 16.1016 2.16842ZM14.1388 6.09426C13.597 6.09426 13.1575 5.65469 13.1575 5.11217C13.1575 4.57067 13.597 4.13115 14.1388 4.13115C14.681 4.13115 15.1202 4.57067 15.1202 5.11217C15.1202 5.65473 14.681 6.09426 14.1388 6.09426ZM16.1016 8.05665C15.5598 8.05665 15.1206 7.61746 15.1206 7.07563C15.1206 6.53306 15.5598 6.09388 16.1016 6.09388C16.6441 6.09388 17.0833 6.53306 17.0833 7.07563C17.0833 7.61746 16.6441 8.05665 16.1016 8.05665ZM18.0643 6.09426C17.5225 6.09426 17.0833 5.65469 17.0833 5.11217C17.0833 4.57067 17.5225 4.13115 18.0643 4.13115C18.6065 4.13115 19.046 4.57067 19.046 5.11217C19.046 5.65473 18.6065 6.09426 18.0643 6.09426Z"
          fill="#A6A3A3"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: '다시보기/VOD',
    href: '/vod',
    icon: (
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z"
          fill="#A6A3A3"
        />
      </svg>
    ),
  },
];

function SideBarItem(item: SideBarItem) {
  const [hovered] = useState(false);
  return (
    <Link
      key={item.id}
      href={item.href}
      className="relative flex h-[54px] items-center px-6 text-white"
    >
      {/* {item.icon} */}
      <span className="z-10 ml-2 text-base font-medium">{item.name}</span>
      {hovered && (
        <motion.div
          layoutId="sidebarItem"
          className="absolute bottom-0 left-[12px] right-[12px] top-0 flex h-full items-center rounded-[12px] bg-neutral-700"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </Link>
  );
}

export default function SideBar() {
  return (
    <nav className="flex w-[250px] flex-col">
      <AnimatePresence>{SIDE_BAR_ITEMS.map(SideBarItem)}</AnimatePresence>
    </nav>
  );
}
