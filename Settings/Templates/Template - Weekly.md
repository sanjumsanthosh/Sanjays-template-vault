---
type: weekly-note
date: <%tp.date.now("DD-MMM-YYYY")%>
cssclasses:
  - tableProgressView
---

```button
name Open Graph
type command
action Graph view: Open local graph
class btn-sm
```

### <%moment(tp.file.title).startOf('isoWeek').format("MMM DD")%> - <%moment(tp.file.title).endOf('isoWeek').format("MMM DD")%>
[[<%moment(tp.file.title).subtract(1,"week").format("gggg-[W]ww")%>]] <- `= link(dateformat(date(now),"yyyy-'W'WW#dd-MMM-yyyy dd-MMM-yyyy (cccc)"),"Today")`  -> [[<%moment(tp.file.title).add(1,"week").format("gggg-[W]ww")%>]]


----

# Weekly summary

```dataview
TABLE 
What_things_did_I_do_particularly_well_today as "Did well",
How_could_I_have_made_today_better as "Could have made better",
What_is_my_most_important_goal_for_tomorrow as "Goal for tomorrow"
FROM "Journel/Daily"
WHERE week = "<%moment(tp.file.title).format('gggg-[W]ww')%>"
sort date(date,"dd-MMM-yyyy") 
```


-----

## Agenda

##### Last Week

> [!lastweek] Last Week
> ```tasks
> due before <%moment(tp.file.title).startOf('isoWeek').add(0, 'day').format('DD-MMM-YYYY')%>
> due after <%moment(tp.file.title).startOf('isoWeek').subtract(1, 'week').format('DD-MMM-YYYY')%>
> not done
> sort by priority```

##### Last month
> [!warning] Last month
> ```tasks
> due before <%moment(tp.file.title).startOf('isoWeek').subtract(1, 'week').format('DD-MMM-YYYY')%>
> due after <%moment(tp.file.title).startOf('isoWeek').subtract(1, 'month').format('DD-MMM-YYYY')%>
> not done
> sort by priority```

##### Long time no see (more than a month)
> [!danger] Long time no see
> ```tasks
> due before <%moment(tp.file.title).startOf('isoWeek').subtract(1, 'month').format('DD-MMM-YYYY')%>
> not done
> sort by priority```

----

##### [[<%moment(tp.file.title).startOf('isoWeek').add(0, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(0, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(0, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?|Session]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(0, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(1, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(1, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(1, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(1, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(2, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(2, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(2, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(2, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(3, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(3, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(3, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(3, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(4, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(4, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(4, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(4, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(5, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(5, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(5, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(5, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```
----
##### [[<%moment(tp.file.title).startOf('isoWeek').add(6, 'day').format('DD-MMM-YYYY')%>|<%moment(tp.file.title).startOf('isoWeek').add(6, 'day').format('DD-MMM-YYYY (dddd)')%>]]
![[<%moment(tp.file.title).startOf('isoWeek').add(6, 'day').format('DD-MMM-YYYY')%>#Journel#What I did today?]]
```tasks
due on <%moment(tp.file.title).startOf('isoWeek').add(6, 'day').format('DD-MMM-YYYY')%>
hide due date
sort by priority
```






----
>[!info]  Future tasks
>```tasks
> due after <%moment(tp.file.title).startOf('isoWeek').add(6, 'day').format('DD-MMM-YYYY')%>
> not done
> sort by priority```

-----