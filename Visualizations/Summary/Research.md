# KB
```dataview
TABLE
date(date,"dd-MMM-yyyy") as "Date",
choice(completed,"✅","❌") AS "Completed?",
type
FROM "Research" and #parent
SORT date(date,"dd-MMM-yyyy") DESC
```