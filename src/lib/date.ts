const formatter = new Intl.DateTimeFormat("vi-VN", {day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Ho_Chi_Minh"});

export const formatDate = (value: string) => formatter.format(new Date(`${value}T00:00:00+07:00`));
