## Working today
```dataview
Table
date, type,  status
FROM "Activities" 
WHERE !completed and contains(worked_on, dateformat(date(today), "dd-MMM-yyyy"))
sort date(date,"dd-MMM-yyyy") DESC
```

### Incident items to do !
```tasks
path includes Activities 
path does not include Visualizations
hide due date
not done
sort by priority
```

## Incident list

#### InProgress Incidents 
```dataview
Table
date, type,  status
FROM "Activities" 
WHERE status="In Progress"
sort date(date,"dd-MMM-yyyy") DESC
```

#### Waiting / Conflict Incidents 
```dataview
Table
date, type,  status
FROM "Activities" 
WHERE contains( ["Waiting","Conflict"], status) 
sort date(date,"dd-MMM-yyyy") DESC
```

-----
## Pending Incidents 
```dataview
Table
date, type,  status
FROM "Activities" 
WHERE contains( ["Unresolved"], status) 
sort date(date,"dd-MMM-yyyy") DESC
```

.
.
.
.
.
.
# Completed --------------------------


## Action Item
```dataview
Table
date, type, status, choice(completed,"✅","❌") AS "Completed?"
FROM "Activities"
WHERE  type="Action Item" and contains( ["Completed"], status) 
sort date(date,"dd-MMM-yyyy") DESC
```

## Brain Storming 
```dataview
Table
date, type, status, choice(completed,"✅","❌") AS "Completed?"
FROM "Activities"
WHERE type="Brain Storming" and contains( ["Completed"], status) 
sort date(date,"dd-MMM-yyyy") DESC
```
