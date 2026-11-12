# Gaplab — Futures Research

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
