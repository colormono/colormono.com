import { NextPage } from 'next';
import type { ReactElement } from 'react';
import MainLayout from '@/layouts/Page';
// import PostLayout from '@/layouts/Post';
// import EmptyLayout from "@/layouts/empty";

export type PageMainLayoutType = NextPage & { layout: typeof MainLayout };
// export type PagePostLayoutType = NextPage & { layout: typeof PostLayout };
// export type PageEmptyLayoutType = NextPage & { layout: typeof EmptyLayout };
// export type PageLayoutType = PageMainLayoutType | PagePostLayoutType;
export type PageLayoutType = PageMainLayoutType;
// | PageEmptyLayoutType;

export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

export default PageLayoutType;
