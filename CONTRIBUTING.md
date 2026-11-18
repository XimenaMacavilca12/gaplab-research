# Contributing

Use the repository's **Issues → New issue** forms for website bugs, research discrepancies, and feature requests. The website footer also links to the issue forms.

## Reporting an issue

Include the page URL, steps to reproduce, expected behavior, and actual behavior. For research questions, include the model ID, timeframe, entry window, trade timestamp in New York time, and report or data hash when available.

Do not include account credentials or API keys.

## Local setup

Use Node.js 22 or later and Python 3:

```sh
npm run check
npm test
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. Serve the site over HTTP so it can load its JSON and CSV files.

## Making changes

1. Create a branch and reproduce the reported issue.
2. Make a focused fix.
3. Run `npm run check` and `npm test`.
4. If research rules or inputs change, rebuild the matching report and document the reason. Do not change headline metrics independently of their calculations.
5. Open a pull request describing the fix and checks performed. Reference the issue, such as `Fixes #12`.
6. Publish the reviewed source through the existing Sites workflow. GitHub pushes do not automatically update the hosted website.

Research results should remain reproducible, with sources, assumptions, losses, and sample sizes visible.
