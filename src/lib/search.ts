import type {Incident} from "../types/content.ts";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLocaleLowerCase("vi");

type FilterKey = "province" | "incidentType";
type Filters = {province?: string; incidentType?: string};

export function buildFilterOptions(items: Incident[], key: FilterKey) {
  const counts = new Map<string, number>();
  items.forEach((item) => counts.set(item[key], (counts.get(item[key]) ?? 0) + 1));
  return [...counts].map(([value, count]) => ({value, label: value, count})).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "vi"));
}

export function filterIncidents(items: Incident[], query: string, filters: Filters = {}) {
  const needle = normalize(query.trim());
  return items.filter((item) => {
    const matchesProvince = !filters.province || filters.province === "all" || item.province === filters.province;
    const matchesType = !filters.incidentType || filters.incidentType === "all" || item.incidentType === filters.incidentType;
    const haystack = normalize([item.title, item.province, item.subject, item.incidentType, ...item.searchKeywords].join(" "));
    return matchesProvince && matchesType && (!needle || haystack.includes(needle));
  }).sort((a, b) => b.lastUpdatedAt.localeCompare(a.lastUpdatedAt));
}
