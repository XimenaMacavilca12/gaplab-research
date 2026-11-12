import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {parseCandles,research,clock} from '../dist/engine.mjs';
const report=JSON.parse(fs.readFileSync(new URL('../dist/evidence/report.json',import.meta.url)));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
assert.equal(sha(fs.readFileSync(new URL('../dist/engine.mjs',import.meta.url))),report.engineSha256);
assert.equal(report.datasets.length,3);
for(const d of report.datasets){const text=fs.readFileSync(new URL('../dist/'+d.csvPath,import.meta.url),'utf8');assert.equal(sha(text),d.csvSha256);const bars=parseCandles(text);assert.equal(bars.length,d.rows);assert.equal(d.rthBars,391);
 for(const run of d.runs){const actual=research(bars,run.result.cfg);assert.deepEqual(actual,run.result,'every field reproduces');for(const t of actual.trades){assert.ok(t.entryTime>t.signalTime);assert.ok(t.risk<=actual.cfg.risk+1e-8);const subset=bars.filter(b=>b.t<=t.entryTime);const prefix=research(subset,run.result.cfg);const signal=prefix.signals.find(s=>s.t===t.signalTime);assert.deepEqual(signal,actual.signals.find(s=>s.t===t.signalTime),'future candles do not change historical entry decisions');}}
}
const runs=report.datasets.flatMap(d=>d.runs);assert.ok(runs.some(r=>r.result.net<0),'keep losing runs');assert.ok(runs.some(r=>r.result.trades.length===0),'keep zero-trade runs');assert.ok(runs.some(r=>r.result.net>0),'keep winning runs');assert.equal(report.datasets[0].date,'2026-11-11');
console.log('PASS: three historical inputs, six exact reproductions, all checksums, delayed entries, risk budgets, prefix-invariant entry decisions, and inclusion of losses/no-trades.');
