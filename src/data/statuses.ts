import type {SourceLevel, VerificationStatus} from "../types/content.ts";

export const statusMeta: Record<VerificationStatus, {label: string; description: string}> = {
  OFFICIAL_CONFIRMED: {label: "Đã xác nhận chính thức", description: "Cơ quan có thẩm quyền đã công bố trực tiếp."},
  INVESTIGATING: {label: "Đang điều tra, xác minh", description: "Cơ quan chức năng đang làm rõ, chưa có kết luận cuối cùng."},
  PENDING_DECISION: {label: "Đang chờ quyết định", description: "Đã có đề xuất nhưng chưa được phê duyệt."},
  MEDIA_DATA_ANALYSIS: {label: "Báo chí phân tích dữ liệu", description: "Số liệu do báo chí tổng hợp từ dữ liệu công khai."},
  UNVERIFIED: {label: "Chưa kiểm chứng", description: "Chưa có nguồn đủ tin cậy xác nhận."},
  DISPUTED: {label: "Nguồn chưa thống nhất", description: "Các nguồn đang dùng số liệu hoặc bối cảnh khác nhau."},
  FALSE_OR_REJECTED: {label: "Đã bị bác bỏ", description: "Có nguồn đủ thẩm quyền bác bỏ nội dung."},
  DEMO: {label: "Dữ liệu minh họa", description: "Dữ liệu dùng để thử giao diện, không phải sự kiện có thật."},
};

export const sourceLevelMeta: Record<SourceLevel, string> = {
  LEVEL_1_OFFICIAL: "Nguồn chính thức",
  LEVEL_2_PRIMARY_NEWS: "Báo chí dẫn nguồn trực tiếp",
  LEVEL_3_SECONDARY_NEWS: "Báo chí tổng hợp",
  LEVEL_4_SOCIAL: "Mạng xã hội hoặc nguồn chưa xác minh",
};
