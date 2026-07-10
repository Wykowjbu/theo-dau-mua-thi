import {CircleCheck, ClockArrowRotateLeft} from "@gravity-ui/icons";
import {Alert, Card} from "@heroui/react";
import type {Metadata} from "next";

export const metadata: Metadata = {title: "Đính chính", description: "Lịch sử cập nhật và đính chính của Theo Dấu Mùa Thi."};

export default function CorrectionsPage() {
  return <main id="noi-dung" className="page-shell py-12 md:py-16"><header className="max-w-3xl"><p className="eyebrow mb-4">Lịch sử minh bạch</p><h1 className="display-title text-5xl md:text-6xl">Đính chính</h1><p className="mt-5 text-lg leading-8 text-muted">Mọi thay đổi làm ảnh hưởng đến ý nghĩa của dữ kiện, trạng thái hoặc nguồn sẽ được ghi lại tại đây.</p></header><Alert status="success" className="mt-10"><Alert.Indicator><CircleCheck width={20} height={20} aria-hidden="true" /></Alert.Indicator><Alert.Content><Alert.Title>Chưa có đính chính nội dung</Alert.Title><Alert.Description>Tính đến ngày 11/07/2026, chưa có hồ sơ nào phát sinh đính chính. Các cập nhật thông thường vẫn được ghi ngày kiểm tra trong từng hồ sơ.</Alert.Description></Alert.Content></Alert><Card className="mt-8" variant="secondary"><Card.Header><ClockArrowRotateLeft width={22} height={22} className="text-accent" aria-hidden="true" /><Card.Title>Khi nào một thay đổi được ghi tại đây?</Card.Title></Card.Header><Card.Content><ul className="list-disc space-y-3 pl-5 text-muted"><li>Sửa một dữ kiện đã đăng sai hoặc thiếu bối cảnh quan trọng.</li><li>Thay nguồn dẫn làm thay đổi mức độ xác thực.</li><li>Chuyển trạng thái do có kết luận hoặc quyết định mới.</li><li>Gỡ nội dung có nguy cơ ảnh hưởng quyền riêng tư.</li></ul></Card.Content></Card></main>;
}
