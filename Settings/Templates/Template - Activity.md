---
<%*
const types = ["Brain Storming","Action Item","Article"]
const type = await tp.system.suggester(types, types)
const ref = await tp.system.prompt("Enter reference");
%>
type: <%type%>
date: <%tp.date.now("DD-MMM-YYYY")%>
completed: false
FY: "<%tp.date.now("YY")%>"
tags: activity
status: Unresolved
worked_on:
- <%tp.date.now("DD-MMM-YYYY")%>
---


```dataviewjs
const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_object
const {createButton} = app.plugins.plugins["buttons"];

const title = "<%tp.file.title%>";

const  script = async (args)=>{
	console.log("Executing funtion")
    const file = tp.file.find_tfile(title) 
    await app.fileManager.processFrontMatter(file, (fm) => { 
        const dates = fm["worked_on"]
        const today = tp.date.now("DD-MMM-YYYY");
        if (!dates.includes(today)) {
            console.log(`Adding date ${today}`)
            dates.push(today)
        }
     })
};

createButton({app, el: this.container, args: {name: "Work on this today"}, clickOverride: {click: script, params: []}})
```
```button
name Reminder to add Tags ! Click here once done !
remove true
customColor #FF512F
customTextColor #fffff
```
```tasks
hide due date
sort by priority
exclude sub-items
tags include #micro-mng-todo 
filter by function task.file.path === query.file.path
short mode
```
----

Ref : <%ref%>









----
# Footer
> [!success]-  Micromanage me : !
> - [ ] check out the article #micro-mng-todo

%%
Progress:: `$= dv.view('progress', {file: "<%tp.file.title%>"})`
Target:: `$= dv.view('target', {file: "<%tp.file.title%>"})`
Bar:: `$= dv.view('total-progress-bar', {file: "<%tp.file.title%>"})`
Bar-mini:: `$= dv.view('total-progress-bar-mini', {file: "<%tp.file.title%>"})`
%%