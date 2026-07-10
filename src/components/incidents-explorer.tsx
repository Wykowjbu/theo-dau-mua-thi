"use client";

import {ChevronDown, Funnel, MapPin} from "@gravity-ui/icons";
import {Badge, Button, ButtonGroup, Chip, Dropdown, Label, Surface} from "@heroui/react";
import {useMemo, useState} from "react";
import {buildFilterOptions, filterIncidents} from "@/lib/search";
import type {Incident} from "@/types/content";
import {IncidentCard} from "./incident-card";

export function IncidentsExplorer({items}: {items: Incident[]}) {
  const [province, setProvince] = useState("all");
  const [incidentType, setIncidentType] = useState("all");
  const provinceOptions = useMemo(() => buildFilterOptions(items, "province"), [items]);
  const typeOptions = useMemo(() => buildFilterOptions(items, "incidentType"), [items]);
  const filtered = useMemo(() => filterIncidents(items, "", {province, incidentType}), [items, province, incidentType]);
  const provinceLabel = province === "all" ? "Tất cả tỉnh thành" : province;
  const typeLabel = incidentType === "all" ? "Tất cả loại vụ việc" : incidentType;

  return (
    <div>
      <Surface className="mb-8 flex flex-wrap items-end gap-5 rounded-2xl p-4 md:p-5">
        <div className="flex flex-col gap-2"><span className="text-sm font-semibold">Theo tỉnh thành</span><Badge.Anchor className="inline-flex"><ButtonGroup variant="secondary"><Button isDisabled={province === "all"} onPress={() => setProvince("all")}><MapPin width={17} height={17} aria-hidden="true" />{provinceLabel}</Button><Dropdown><Button isIconOnly aria-label="Mở bộ lọc tỉnh thành"><ButtonGroup.Separator /><ChevronDown width={16} height={16} aria-hidden="true" /></Button><Dropdown.Popover className="min-w-64"><Dropdown.Menu onAction={(key) => setProvince(String(key))}><Dropdown.Item id="all" textValue="Tất cả tỉnh thành"><Label>Tất cả tỉnh thành</Label><Chip size="sm" variant="soft">{items.length}</Chip></Dropdown.Item>{provinceOptions.map((option) => <Dropdown.Item id={option.value} key={option.value} textValue={option.label}><Label>{option.label}</Label><Chip size="sm" variant="soft">{option.count}</Chip></Dropdown.Item>)}</Dropdown.Menu></Dropdown.Popover></Dropdown></ButtonGroup><Badge color="accent" size="sm">{province === "all" ? items.length : provinceOptions.find((option) => option.value === province)?.count}</Badge></Badge.Anchor></div>
        <div className="flex flex-col gap-2"><span className="text-sm font-semibold">Theo loại vụ việc</span><Badge.Anchor className="inline-flex"><ButtonGroup variant="secondary"><Button isDisabled={incidentType === "all"} onPress={() => setIncidentType("all")}><Funnel width={17} height={17} aria-hidden="true" />{typeLabel}</Button><Dropdown><Button isIconOnly aria-label="Mở bộ lọc loại vụ việc"><ButtonGroup.Separator /><ChevronDown width={16} height={16} aria-hidden="true" /></Button><Dropdown.Popover className="min-w-72"><Dropdown.Menu onAction={(key) => setIncidentType(String(key))}><Dropdown.Item id="all" textValue="Tất cả loại vụ việc"><Label>Tất cả loại vụ việc</Label><Chip size="sm" variant="soft">{items.length}</Chip></Dropdown.Item>{typeOptions.map((option) => <Dropdown.Item id={option.value} key={option.value} textValue={option.label}><Label>{option.label}</Label><Chip size="sm" variant="soft">{option.count}</Chip></Dropdown.Item>)}</Dropdown.Menu></Dropdown.Popover></Dropdown></ButtonGroup><Badge color="accent" size="sm">{incidentType === "all" ? items.length : typeOptions.find((option) => option.value === incidentType)?.count}</Badge></Badge.Anchor></div>
      </Surface>
      <p className="mb-4 text-sm font-semibold text-muted" aria-live="polite">{filtered.length} vụ việc · Mới cập nhật hiển thị trước</p>
      {filtered.length ? <div className="grid gap-6 xl:grid-cols-2">{filtered.map((incident) => <IncidentCard key={incident.id} incident={incident} />)}</div> : <CardEmpty />}
    </div>
  );
}

function CardEmpty() {
  return <Surface className="rounded-2xl border border-dashed border-border p-10 text-center"><h3 className="font-bold">Không tìm thấy hồ sơ</h3><p className="mt-2 text-sm text-muted">Hãy thử từ khóa ngắn hơn hoặc chọn trạng thái khác.</p></Surface>;
}
