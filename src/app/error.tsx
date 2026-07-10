"use client";

import {CircleExclamation} from "@gravity-ui/icons";
import {Button} from "@heroui/react";

export default function ErrorPage({reset}: {error: Error & {digest?: string}; reset: () => void}) {
  return <main id="noi-dung" className="page-shell py-24 text-center"><CircleExclamation width={38} height={38} className="mx-auto text-warning" aria-hidden="true" /><h1 className="display-title mt-4 text-5xl">Không thể tải nội dung</h1><p className="mx-auto mt-5 max-w-xl text-muted">Đã xảy ra lỗi ngoài dự kiến. Bạn có thể thử tải lại nội dung.</p><Button className="mt-8" onPress={reset}>Thử lại</Button></main>;
}
