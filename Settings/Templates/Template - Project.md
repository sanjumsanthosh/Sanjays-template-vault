---
<%*
const desc = await tp.system.prompt("Give a short description !");
%>
type: project
date: <%tp.date.now("DD-MMM-YYYY")%>
completed: false
FY: "<%tp.date.now("YY")%>"
status: "Unresolved"
description: "<%desc%>"
cssclasses:
  - tableProgressView
tags:
  - project
  - parent
---


```dataviewjs
const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_object

const {createButton} = app.plugins.plugins["buttons"];

const title = "<%tp.file.title%>";


const  script = async (args)=>{
	console.log("Executing funtion")
	const templateName = "Template - Project Notes.md";
	let destinationFolder = `Projects/${title}/Notes`
	if (!tp) {
		new Notice("Templater plugin not found. Make sure it is installed and enabled."); return; 
	} 
	const exist = await tp.file.exists(destinationFolder);
	console.log(`Checking if folder ${destinationFolder} exists ${exist}`)
	if (!exist) {
		console.log(`Creating folder ${destinationFolder}`)
		await this.app.vault.createFolder(destinationFolder)
	}
	const templateFile = tp.file.find_tfile(templateName) 
	if (!templateFile) { 
		new Notice(`Template '${templateName}' not found`);return; 
	} 
	const newTitle = await tp.system.prompt("Enter title");
	tp.file.create_new(templateFile, `${title} - ${newTitle}`, true, app.vault.getAbstractFileByPath(destinationFolder))
};
createButton({app, el: this.container, args: {name: "Add Note"}, clickOverride: {click: script, params: [dv.current().file.path]}})

```
```button
name Reminder to add Tags ! Click here once done !
remove true
customColor #FF512F
customTextColor #fffff
```
# Core Articles
```dataview
Table
choice(completed, "̛̛̛✅","❌") as "Completed?",
Bar-mini AS "Progress",
date
from "Projects/<%tp.file.title%>" 
where parent=this.file.name and contains(objectType, "Core Articles")
sort date(date,"dd-MMM-yyyy") DESC
```

# KB
```dataview
Table
choice(completed, "̛̛̛✅","❌") as "Completed?",
Bar-mini AS "Progress",
date
from "Projects/<%tp.file.title%>" 
where parent=this.file.name and contains(objectType, "KB")
sort date(date,"dd-MMM-yyyy") DESC
```


# Documentations
```dataview
Table
choice(completed, "̛̛̛✅","❌") as "Completed?",
Bar-mini AS "Progress",
date
from "Projects/<%tp.file.title%>" 
where parent=this.file.name and contains(objectType, "Documentations")
sort date(date,"dd-MMM-yyyy") DESC
```


> [!tip] Todo's
> ```tasks
> filter by function task.file.folder.includes("Projects/<%tp.file.title%>/") 
> hide due date
> not done
> sort by priority
> exclude sub-items
> group by function task.file.path
> ```


----
# Footer

<%*
await tp.user.moveToFolder(tp, "Projects");
%>

%%
Progress:: `$= dv.view('progress', {file: "<%tp.file.title%>"})`
Target:: `$= dv.view('target', {file: "<%tp.file.title%>"})`
Bar:: `$= dv.view('total-progress-bar', {file: "<%tp.file.title%>"})`
Bar-mini:: `$= dv.view('total-progress-bar-mini', {file: "<%tp.file.title%>"})`
PendingTaskCount:: `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.getPendingTasksCount("<%tp.file.title%>",dv)`
%%
