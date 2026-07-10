"use client";

import {Label, ListBox, SearchField, Select, Surface} from "@heroui/react";
import {useMemo, useState} from "react";
import {filterIncidents} from "@/lib/search";
import type {Incident} from "@/types/content";
import {IncidentCard} from "./incident-card";

export function IncidentsExplorer({items}: {items: Incident[]}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const filtered = useMemo(() => filterIncidents(items, query, status), [items, query, status]);

  return (
    <div>
      <Surface className="mb-8 grid gap-4 rounded-2xl p-4 md:grid-cols-[1fr_18rem] md:p-5">
        <SearchField value={query} onChange={setQuery} aria-label="Tìm theo địa phương, môn thi hoặc sự việc">
          <Label>Tìm kiếm hồ sơ</Label>
          <SearchField.Group><SearchField.SearchIcon /><SearchField.Input placeholder="Ví dụ: Tuyên Quang, môn Toán…" /><SearchField.ClearButton /></SearchField.Group>
        </SearchField>
        <Select value={status} onChange={(value) => setStatus(String(value))} placeholder="Tất cả trạng thái">
          <Label>Trạng thái</Label>
          <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
          <Select.Popover><ListBox><ListBox.Item id="all"><Label>Tất cả trạng thái</Label><ListBox.ItemIndicator /></ListBox.Item><ListBox.Item id="INVESTIGATING"><Label>Đang điều tra, xác minh</Label><ListBox.ItemIndicator /></ListBox.Item><ListBox.Item id="OFFICIAL_CONFIRMED"><Label>Đã xác nhận chính thức</Label><ListBox.ItemIndicator /></ListBox.Item><ListBox.Item id="PENDING_DECISION"><Label>Đang chờ quyết định</Label><ListBox.ItemIndicator /></ListBox.Item></ListBox></Select.Popover>
        </Select>
      </Surface>
      <p className="mb-4 text-sm font-semibold text-muted" aria-live="polite">{filtered.length} hồ sơ phù hợp</p>
      {filtered.length ? <div className="grid gap-6 md:grid-cols-2">{filtered.map((incident) => <IncidentCard key={incident.id} incident={incident} />)}</div> : <CardEmpty />}
    </div>
  );
}

function CardEmpty() {
  return <Surface className="rounded-2xl border border-dashed border-border p-10 text-center"><h3 className="font-bold">Không tìm thấy hồ sơ</h3><p className="mt-2 text-sm text-muted">Hãy thử từ khóa ngắn hơn hoặc chọn trạng thái khác.</p></Surface>;
}
