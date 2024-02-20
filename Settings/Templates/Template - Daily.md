---
type: daily-note
date: <%tp.date.now("DD-MMM-YYYY")%>
week: <%moment(tp.file.title).format("gggg-[W]ww")%>
tags:
  - Daily
cssclasses:
  - tableProgressView
obsidianUIMode: preview
---
```button
name Generate todays summary
type command
action QuickAdd: journel_daily_summary
customColor #33b249
customTextColor #fffffff
```

[[<%tp.date.now("DD-MMM-YYYY",-1,tp.file.title, "DD-MMM-YYYY")%>]] <-  [[<%moment(tp.file.title).format("gggg-[W]ww")%>]]  -> [[<%tp.date.now("DD-MMM-YYYY",1,tp.file.title, "DD-MMM-YYYY")%>]]

## Journel


`= [[<%tp.date.now("DD-MMM-YYYY",-1,tp.file.title, "DD-MMM-YYYY")%>]].What_is_my_most_important_goal_for_tomorrow`


### What I did today?
```dataview
TABLE 
type AS "Type",
Bar-mini AS "Progress",
choice(completed,"✅","❌") AS "Completed?"
FROM !"Templates" and !"Journel"
WHERE date="<%tp.file.title%>" or contains(worked_on, "<%tp.file.title%>")
```


## Things to do today


```tasks
due on <%moment(tp.file.title).format('DD-MMM-YYYY')%>
hide due date
```


## What i completed today?
```tasks
done on <%moment(tp.file.title).format('DD-MMM-YYYY')%>
hide due date
sort by priority
```

## Pending this week before today
```tasks
due after <%moment(tp.file.title).startOf('isoWeek').subtract(1, 'day').format('DD-MMM-YYYY')%>
due before <%moment(tp.file.title).format('DD-MMM-YYYY')%>
not done
hide due date
group by priority
```


## Todo's


