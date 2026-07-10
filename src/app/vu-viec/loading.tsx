import {Skeleton} from "@heroui/react";

export default function Loading() {
  return <main className="page-shell py-16" aria-label="Đang tải danh sách vụ việc"><Skeleton className="h-14 w-64 rounded-xl" /><Skeleton className="mt-8 h-28 w-full rounded-2xl" /><div className="mt-6 grid gap-6 md:grid-cols-2"><Skeleton className="h-80 rounded-2xl" /><Skeleton className="h-80 rounded-2xl" /></div></main>;
}
