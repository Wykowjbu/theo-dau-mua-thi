import assert from "node:assert/strict";
import test from "node:test";

import {incidents} from "../src/data/incidents.ts";
import {sources} from "../src/data/sources.ts";
import {buildFilterOptions, filterIncidents} from "../src/lib/search.ts";

test("tìm kiếm tiếng Việt không phụ thuộc dấu và chữ hoa", () => {
  assert.equal(filterIncidents(incidents, "tuyen quang").length, 1);
  assert.equal(filterIncidents(incidents, "TOÁN").length, 1);
});

test("mọi dữ kiện quan trọng đều trỏ tới nguồn tồn tại", () => {
  const sourceIds = new Set(sources.map((source) => source.id));
  for (const incident of incidents) {
    for (const fact of incident.keyFacts) {
      assert.ok(fact.sourceIds.length > 0);
      assert.ok(fact.sourceIds.every((id) => sourceIds.has(id)));
    }
  }
});

test("hồ sơ thật không bị gắn nhãn dữ liệu minh họa", () => {
  const incident = incidents.find((item) => item.id === "tuyen-quang-thpt-chuyen-2026");
  assert.ok(incident);
  assert.equal(incident.isDemo, false);
  assert.equal(incident.overallStatus, "INVESTIGATING");
});

test("bộ lọc xếp theo số vụ việc giảm dần rồi A-Z", () => {
  const sample = [
    {...incidents[0], id: "1", province: "Đà Nẵng"},
    {...incidents[0], id: "2", province: "Hà Nội"},
    {...incidents[0], id: "3", province: "Hà Nội"},
    {...incidents[0], id: "4", province: "An Giang"},
  ];
  assert.deepEqual(buildFilterOptions(sample, "province"), [
    {value: "Hà Nội", label: "Hà Nội", count: 2},
    {value: "An Giang", label: "An Giang", count: 1},
    {value: "Đà Nẵng", label: "Đà Nẵng", count: 1},
  ]);
});

test("lọc đồng thời theo tỉnh và loại vụ việc", () => {
  assert.equal(filterIncidents(incidents, "", {province: "Tuyên Quang", incidentType: "Vi phạm quy chế coi thi"}).length, 1);
  assert.equal(filterIncidents(incidents, "", {province: "Hà Nội", incidentType: "all"}).length, 0);
});
