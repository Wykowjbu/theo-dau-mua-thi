import type {Incident} from "../types/content.ts";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLocaleLowerCase("vi");

export function filterIncidents(items: Incident[], query: string, status = "all") {
  const needle = normalize(query.trim());
  return items.filter((item) => {
    const matchesStatus = status === "all" || item.overallStatus === status;
    const haystack = normalize([item.title, item.province, item.subject, item.incidentType, ...item.searchKeywords].join(" "));
    return matchesStatus && (!needle || haystack.includes(needle));
  });
}
