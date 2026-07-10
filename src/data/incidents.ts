import type {Incident} from "../types/content.ts";

const official = ["tq-press-2026-07-09"];

export const legalDisclaimer = "Website tổng hợp thông tin từ các nguồn được dẫn lại. Việc khởi tố vụ án hoặc khởi tố bị can không phải là bản án kết tội. Trách nhiệm pháp lý chỉ được xác định bằng bản án có hiệu lực hoặc kết luận của cơ quan có thẩm quyền.";

export const incidents: Incident[] = [
  {
    id: "tuyen-quang-thpt-chuyen-2026",
    slug: "diem-thi-toan-bat-thuong-thpt-chuyen-tuyen-quang-2026",
    title: "Vụ điểm thi Toán bất thường tại Điểm thi Trường THPT Chuyên Tuyên Quang",
    shortTitle: "Điểm thi Toán bất thường tại Chuyên Tuyên Quang",
    location: "Tuyên Quang",
    province: "Tuyên Quang",
    schoolOrTestSite: "Điểm thi Trường THPT Chuyên Tuyên Quang",
    examName: "Kỳ thi tốt nghiệp THPT năm 2026",
    examYear: 2026,
    subject: "Toán",
    incidentType: "Vi phạm quy chế coi thi",
    overallStatus: "INVESTIGATING",
    legalStatus: "Đã khởi tố vụ án và 4 bị can; cơ quan điều tra tiếp tục làm rõ",
    featured: true,
    isDemo: false,
    firstReportedAt: "2026-07-03",
    lastUpdatedAt: "2026-07-10",
    lastVerifiedAt: "2026-07-10",
    summary: "Cơ quan chức năng đang điều tra các vi phạm xảy ra trong quá trình coi thi môn Toán tại Điểm thi Trường THPT Chuyên Tuyên Quang. Kết quả điều tra ban đầu được công bố cho biết Trưởng điểm thi đã chỉ đạo, định hướng một số giám thị tạo điều kiện cho thí sinh làm bài chưa đúng quy chế; Thư ký điểm thi đã vào phòng thi hướng dẫn, nhắc bài cho một số thí sinh. Vụ án và 4 bị can đã được khởi tố. Phương án xử lý kết quả thi, bao gồm đề xuất thi lại môn Toán, chưa có quyết định cuối cùng tại thời điểm cập nhật.",
    neutralDescription: "Vụ việc được chú ý sau khi dữ liệu điểm thi môn Toán tại một dải số báo danh của Điểm thi Trường THPT Chuyên Tuyên Quang có số lượng điểm cao bất thường. Cơ quan chức năng đã tiến hành kiểm tra, xác minh và công bố kết quả điều tra ban đầu. Website tách biệt nội dung đã được xác nhận chính thức, số liệu báo chí phân tích và nội dung còn chờ quyết định.",
    keyFacts: [
      {id: "fact-1", statement: "Ngày 03/07/2026, UBND tỉnh Tuyên Quang yêu cầu rà soát, xác minh thông tin liên quan đến kết quả thi môn Toán.", status: "OFFICIAL_CONFIRMED", sourceIds: ["tq-ubnd-2026-07-04"]},
      {id: "fact-2", statement: "Nguyễn Hà Duy, giáo viên Trường THPT Chuyên Tuyên Quang và là Thư ký điểm thi, bị điều tra về hành vi vào phòng thi hướng dẫn, nhắc bài cho thí sinh môn Toán.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-3", statement: "Kết quả xác minh được công bố cho biết bà Trần Thị Thu Hằng, Trưởng điểm thi, đã chỉ đạo, định hướng một số cán bộ, giám thị làm sai quy định.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-4", statement: "Theo thông tin tại họp báo, Nguyễn Hà Duy đã vào phòng thi và hướng dẫn, nhắc bài cho một số thí sinh làm bài môn Toán.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-5", statement: "Công an tỉnh đã khởi tố vụ án hình sự và khởi tố 4 bị can để điều tra tội Lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-6", statement: "Danh tính 2 trong số 4 bị can chưa được công bố.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-7", statement: "Cơ quan chức năng tiếp tục rà soát, xác minh và làm rõ toàn bộ vụ việc.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
      {id: "fact-8", statement: "Tỉnh đang phối hợp nghiên cứu phương án bảo đảm quyền và lợi ích của những học sinh không liên quan vụ việc.", status: "OFFICIAL_CONFIRMED", sourceIds: official},
    ],
    reportedMetrics: [
      {id: "metric-perfect-scores", label: "Bài thi Toán đạt điểm 10 tại Tuyên Quang", value: "154", unit: "bài", description: "Số liệu do báo chí tổng hợp từ dữ liệu điểm thi công khai.", status: "MEDIA_DATA_ANALYSIS", sourceIds: ["dantri-data-2026-07-04"], caution: "Không đồng nghĩa với 154 bài thi có vi phạm.", displayPriority: 1},
      {id: "metric-defendants", label: "Bị can đã khởi tố", value: "4", unit: "người", description: "Số người bị khởi tố theo thông tin tại họp báo ngày 09/07.", status: "OFFICIAL_CONFIRMED", sourceIds: official, displayPriority: 2},
    ],
    timeline: [
      {id: "timeline-1", date: "2026-07-03", title: "Yêu cầu rà soát, xác minh", description: "UBND tỉnh chỉ đạo kiểm tra thông tin về kết quả thi môn Toán.", status: "OFFICIAL_CONFIRMED", sourceIds: ["tq-ubnd-2026-07-04"], eventType: "official-action", isMajor: true},
      {id: "timeline-2", date: "2026-07-09", title: "Công bố kết quả xác minh ban đầu", description: "Họp báo thông tin việc khởi tố vụ án, 4 bị can và đề xuất thi lại môn Toán.", status: "OFFICIAL_CONFIRMED", sourceIds: official, eventType: "press-conference", isMajor: true},
      {id: "timeline-3", date: "2026-07-10", title: "Tiếp tục chờ phương án xử lý", description: "Đề xuất thi lại đang chờ cơ quan có thẩm quyền xem xét.", status: "PENDING_DECISION", sourceIds: official, eventType: "pending", isMajor: false},
    ],
    claims: [
      {id: "claim-prosecution", title: "Khởi tố vụ án và 4 bị can", statement: "Công an tỉnh đã khởi tố vụ án và 4 bị can.", status: "OFFICIAL_CONFIRMED", explanation: "Được công bố tại họp báo của tỉnh ngày 09/07/2026.", sourceIds: official, firstReportedAt: "2026-07-09", lastCheckedAt: "2026-07-10", importance: "high", caution: "Khởi tố bị can không phải là bản án kết tội.", isSensitive: true, isStudentRelated: false},
      {id: "claim-resit", title: "Tổ chức thi lại môn Toán", statement: "Các bên đã đề xuất tổ chức thi lại môn Toán.", status: "PENDING_DECISION", explanation: "Đây là đề xuất gửi Bộ Giáo dục và Đào tạo, chưa phải quyết định cuối cùng.", sourceIds: official, firstReportedAt: "2026-07-09", lastCheckedAt: "2026-07-10", importance: "high", caution: "Không trình bày đề xuất như quyết định đã có hiệu lực.", isSensitive: true, isStudentRelated: true},
    ],
    proposals: [{id: "proposal-resit", title: "Đề xuất tổ chức thi lại môn Toán", description: "Sở Giáo dục và Đào tạo Tuyên Quang đã đề xuất với Bộ Giáo dục và Đào tạo phương án thi lại môn Toán nhằm bảo đảm công bằng, khách quan và quyền lợi của thí sinh.", status: "PENDING_DECISION", sourceIds: official, caution: "Chưa có quyết định cuối cùng tại thời điểm cập nhật.", updatedAt: "2026-07-10"}],
    people: [
      {id: "person-duy", name: "Nguyễn Hà Duy", role: "Giáo viên Toán, Thư ký điểm thi", legalLabel: "Bị can", description: "Được nêu tên trong thông tin chính thức tại họp báo.", sourceIds: official, showImage: false},
      {id: "person-hang", name: "Trần Thị Thu Hằng", role: "Trưởng điểm thi", legalLabel: "Bị can", description: "Được nêu tên trong thông tin chính thức tại họp báo.", sourceIds: official, showImage: false},
    ],
    sourceIds: ["tq-ubnd-2026-07-04", "tq-press-2026-07-09", "dantri-data-2026-07-04"],
    corrections: [],
    relatedIncidentIds: [],
    searchKeywords: ["Tuyên Quang", "THPT Chuyên", "điểm thi Toán", "thi tốt nghiệp 2026", "coi thi"],
    quickReadFactIds: ["fact-3", "fact-4"],
    privacyNotes: "Không hiển thị tên, ảnh, số báo danh hoặc dữ liệu định danh của thí sinh.",
    legalDisclaimer,
  },
];
