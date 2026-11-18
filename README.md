# Gaplab — Futures Research

[Website](https://gaplab-mnq-research.creamcedar20.chatgpt.site) · [Report an issue](https://github.com/XimenaMacavilca12/gaplab-research/issues/new/choose) · [Contributing](CONTRIBUTING.md)

A research workspace for comparing MNQ futures strategies with historical data, clear trading rules, and reproducible backtests.

## Research

- FVG and IFVG setups
- Opening-range breakouts and fades
- ICT-style sweep, structure-shift, and gap-retest setups
- Head-and-shoulders neckline breakouts
- Liquidity sweeps
- VWAP and Bollinger-band reversion
- MNQ/MES spread trading

The timeframe study compares one-, three-, and five-minute charts across morning, midday, and afternoon entry windows. Earlier sessions are used to select candidates; later sessions are reported separately.

Each report includes the rules, data sources, trade logs, rejected signals, costs, and data/code checksums. Order-flow/DOM scalping remains untested because historical order-book data was unavailable.

## Run locally

Use Node.js 22 or later and Python 3. No dependency installation is required.

```sh
npm run check
npm test
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080.

## Project structure

| Path | Contents |
| --- | --- |
| `dist/` | Website and research engines |
| `dist/evidence/` | Original historical FVG runs |
| `dist/study/` | Strategy comparison, inputs, and reports |
| `dist/time-study/` | Timeframe/session study and frozen method |
| `scripts/` | Report-generation scripts |
| `tests/` | Reproducibility and trading-logic checks |

## Rebuild reports

```sh
node scripts/build-evidence.mjs
node scripts/build-comparison.mjs
node scripts/build-time-study.mjs
npm test
```

Keep the inputs, rules, and report hashes consistent when changing a research engine. Source details and assumptions are recorded in each report.

## Reading the results

Results are historical simulations, not broker executions. Hit rates depend on the exact rules, sample size, costs, and market conditions. A high hit rate alone does not establish profitability.

The studies use limited samples, and some later sessions overlap earlier research. They do not establish a universal winner or a guaranteed setup. Imported candles stay in memory; notes and settings are stored in the browser. No live broker connection is enabled.

## Feedback

Use GitHub Issues to report bugs, question research results, or suggest features. Include the page, strategy, timeframe, session, and steps needed to reproduce the issue.
