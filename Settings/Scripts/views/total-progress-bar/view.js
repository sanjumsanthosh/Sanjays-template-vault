const goalPage = dv.page(input.file);
const projects = goalPage.file.inlinks.where((p) => {
    const mp = dv.page(p.path);
    return mp.parent === input.file ;
});

let totalOutlinkedResearchProjects = 0;
let finishedOutlinkedResearchProjects = 0;
const outlinkedProjects = goalPage.file.outlinks.where((p) => {
    const mp = dv.page(p.path);
    return mp.tags?.includes("research") && mp.tags?.includes("parent")
});

const tagsToExclude = [ "#interesting-read","#ThnkOutLoud" ]

const filteredTasks = goalPage.file.tasks.where((t) => {
    return !tagsToExclude.some((tag) => t.tags.includes(tag));
});


// total task in goal page
const totalTasksGoalPage = filteredTasks.length;

const totalTasksInProjects = projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    return acc + mp.file.tasks.length;
}, 0);



const finishedTasksGoalPage = goalPage.file.tasks.where(
    (t) => t.fullyCompleted === true
).length;
const finishedTasksInProjects = projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    return acc + mp.file.tasks.where((t) => t.fullyCompleted === true).length;
}, 0);
// const finishedOutlinkedResearchProjects = outlinkedProjects.values.reduce((acc, p) => {
//     const mp = dv.page(p.path);
//     return acc + mp.file.tasks.where((t) => t.fullyCompleted === true).length;
// }
// , 0);

const Target = totalTasksGoalPage + totalTasksInProjects + totalOutlinkedResearchProjects;
const Progress = finishedTasksGoalPage + finishedTasksInProjects + finishedOutlinkedResearchProjects;

const containerEl = createDiv();

const align = input?.alignLeft ? "left" : "center";

Object.assign(containerEl.style, {
    display: "flex",
    "flex-direction": "column",
    "align-items": align,
    "justify-content": "center",
});

const max = Target || 0;
const value = Progress || 0;
const percent = Math.round((value / max) * 100) || 0;

const progressBar = containerEl.createEl("progress");
Object.assign(progressBar, { 
    max, value,});

const color = getColor(percent);

const progressText = containerEl.createEl("div");
Object.assign(progressText, {
    textContent: `${percent}% completed`,
    style: `color: ${color}`,
});


function getColor(percent) {
    if (percent < 50) {
        const greenValue = Math.round(percent * 5.1);
        return `rgb(255, ${greenValue}, 0)`; // red to yellow
    } else {
        const redValue = Math.round((100 - percent) * 5.1);
        return `rgb(${redValue}, 255, 0)`; // yellow to green
    }
}

dv.paragraph(containerEl.innerHTML);
