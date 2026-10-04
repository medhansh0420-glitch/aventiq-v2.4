# AventIQ V2.2

AventIQ UI with the 1,055-record opportunity dataset integrated.

## Run

```bash
npm install
npm run dev
```

The opportunity dataset is in `src/data/opportunities.ts`.

Important: deadlines are automatically hidden when they are exact ISO dates in the past; rolling/non-date deadlines remain visible.
