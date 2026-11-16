# Gaplab — Futures Research

[Hosted website](https://gaplab-mnq-research.creamcedar20.chatgpt.site) · [Report an issue](https://github.com/XimenaMacavilca12/gaplab-research/issues/new/choose) · [Contributing guide](CONTRIBUTING.md)

This repository contains the finished static website, research engines, frozen reports, input snapshots and checks. Use **Issues** for teammate feedback and send an issue URL to Codex when you want a fix. Repository visibility and hosted Site access are separate settings.

Private, buildless browser application for researching the MNQ strategy described in the user's two July 15 recap videos. No backend, API credentials, live market feed, trained AI, or order routing is present.

## Features

- Video-derived strategy blueprint and explicitly labeled research assumptions.
- Strict one-minute OHLC CSV import with timezone requirements.
- Five-minute bullish-gap inversion with optional fifteen-minute bearish-gap context; separate one-minute continuation model.
- Explainable A++ hypothesis classification with pre-supplied liquidity and reward/risk checks.
- Next-open entries, conservative ambiguous-bar exits, costs, position sizing, daily budget, and New York session windows.
- Browser-local notes and configuration, JSON report export, trades CSV export.

Imported candles are memory-only. Browser-local storage is not cross-device storage. Synthetic demo data is explicitly labeled and does not represent historical performance. No automatic train/test split or optimizer is included.

## Validation

Run `node tests/engine.test.mjs`, `node --check dist/app.mjs`, and `node --check dist/engine.mjs`.

Browser QA was unavailable in the managed environment because no desktop control tool was provided. No preview server or substitute browser was started.

## Hosting

Static content is in `dist/`; `.openai/hosting.json` contains the registered Site identity. Publish through Sites while preserving the private audience.

## Future work

Human review must resolve precise level selection, session definitions, stop/partial-exit rules and build a balanced labeled sample before evaluating an AI model. TopstepX integration is a separate phase. Per the official API access article, automated order activity must originate on the personal device; this hosted research site has no trigger or order endpoint connection. The user's target environment is Mac and Express Funded; API access/linking is unconfirmed.

## Historical evidence (v1.1)

Backtest now includes six saved model runs across Nov 9–11, 2026. The Nov 11 session was requested before viewing results; comparison sessions were added afterward. Nov 10–11 use Yahoo `MNQ=F` minute observations (exact dated contract unspecified). Nov 9 uses the free MNQZ6 raw-trade sample aggregated to minute bars. Sources disagree and are not pooled.

`dist/evidence/report.json` records frozen parameters, provider URLs, SHA-256 hashes, structural checks, all signals/rejections/trades, and limitations. `node scripts/build-evidence.mjs` reproduces the report from bundled CSV inputs. Raw provider files remain in the research workspace; their original checksums are recorded in the report. `dist/evidence.mjs` checks input and engine hashes before rerunning and comparing a saved result in the page.

No optimization or trained AI is involved. The tested variant uses fixed 2R targets rather than the video's discretionary liquidity targets. This is evidence of a reproducible simulation on third-party historical data, not an exchange audit, broker fills, or an established edge. No A++ performance is claimed.

## Strategy research and comparison

The `#strategies` route contains a source-linked library of six strategy families and a reproducible, eight-session comparison (Nov 2–11, 2026). Seven explicit variants were simulated: two FVG models, opening-range breakout, VWAP reversion, Bollinger reversion, opening-range fade, and an MNQ/MES spread. DOM is explicitly untested because historical L2/queue data was unavailable.

`dist/study/` includes frozen settings, input OHLCV, provider response hashes, coverage checks, daily results, full signal/trade logs, and doubled-fee/slippage stress results. `scripts/build-comparison.mjs` rebuilds the report. `comparison-engine.mjs` reuses the prior FVG engine and adds causal single-session and two-leg models. Five earlier complete sessions determine the integer spread hedge; Oct 30 was excluded for incomplete RTH coverage. Pair results are separated from the intrabar-stop ranking because its exits are close-based. Win-rate intervals are descriptive and do not establish significance or a general winner. The supplied “typical” hit-rate ranges remain labeled unverified.

Sources include exchange/broker methodology, John Bollinger’s own guidance, author/academic abstracts on order flow, opening breakouts and stock pairs, and platform documentation of FVG geometry. These sources establish mechanisms or specific historical findings, not universal MNQ hit rates. No model was trained, no optimization was performed, and the window overlaps previously reviewed FVG sessions.

Validation: `node tests/comparison.test.mjs` checks all hashes, full baseline/stress reproduction, next-candle entries, causal calibration, daily and intraday signal-prefix invariance, two-leg costs/P&L, no-trade denominators, conservative ambiguous-bar fills and explicit DOM omission. DOM-based smoke tests exercised navigation, citations, charts, filters, replay and the expectancy calculator. No visual browser QA was available.

## Multi-timeframe/session research

The `#timeframes` page adds ORB, FVG, IFVG, an explicitly defined ICT-style sweep/structure-shift/gap subset, confirmed-pivot head-and-shoulders, and a price-only liquidity-sweep proxy. The user clarified IFG as IFVG and HSS as head-and-shoulders.

`time-engine.mjs` detects completed 1m/3m/5m chart setups, then resolves fills on the original 1m observations. Entries are independently studied in morning, midday and afternoon windows (54 cells). Head-and-shoulders pivots require two later chart bars before becoming available; no pivot is backdated into an earlier decision. Original opening-range boundaries and its first-attempt rule remain fixed across windows. Positions open at a minute's start block a new entry even if they exit later in that same minute.

The refreshed MNQ=F snapshot contains 16 complete sessions through Nov 13, 2026; Oct 30 was excluded for incomplete RTH coverage. Select only on the 11 earlier sessions (Oct 22–Nov 6), with minimum 10 trades, positive net and average realized R, and positive doubled-cost net. Later checks use Nov 9–13, separately identifying newly added Nov 12–13. Nov 9–11 overlap prior project research, so this is not described as untouched prospective validation. Every cell's results remain visible, including losses and no-trades; cells may overlap and must not be pooled as a portfolio.

`dist/time-study/` records frozen method, source metadata, response hashes, input CSV, all signals/rejections/trades, daily results, cost-stress metrics and the earlier-only selection. Rebuild with `node scripts/build-time-study.mjs`; validate with `node tests/time-study.test.mjs`. The page can verify all engine/input/config hashes and reproduce all 54 experiments. Old evidence/strategy reports are preserved.

The research candidate is the earlier-selected 3m morning FVG variant, not a universal winner. Its later sample is only four trades; its one newly added-date trade lost. Sources cover pattern mechanics and overfitting concerns; the original ICT video was available only as page metadata, not reviewed in full. No trained AI or perfect setup is claimed. DOM-based UI checks passed; no visual browser QA was available.
