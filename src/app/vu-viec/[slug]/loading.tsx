import {Skeleton} from "@heroui/react";

export default function Loading() { return <main className="page-shell py-16" aria-label="Đang tải hồ sơ"><Skeleton className="h-8 w-48 rounded-lg" /><Skeleton className="mt-6 h-40 w-full rounded-2xl" /><Skeleton className="mt-10 h-96 w-full rounded-2xl" /></main>; }
