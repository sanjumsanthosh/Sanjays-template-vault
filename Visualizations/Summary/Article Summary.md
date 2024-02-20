
```dataview
TABLE
date(date,"dd-MMM-yyyy") as "Date",
choice(completed,"✅","❌") AS "Completed?",
type
FROM "Articles" 
SORT date(date,"dd-MMM-yyyy") DESC
```