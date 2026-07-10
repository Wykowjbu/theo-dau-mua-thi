import assert from "node:assert/strict";
import test from "node:test";

import {incidents} from "../src/data/incidents.ts";
import {sources} from "../src/data/sources.ts";
import {filterIncidents} from "../src/lib/search.ts";

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
