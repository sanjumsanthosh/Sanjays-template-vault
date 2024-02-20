let Target = 0;
let Progress = 0;

try {
    
    // get details of the page
    const goalPage = dv.page(input.file);

    // get all inlinks where parent is the goal page
    const projects = goalPage.file.inlinks.where((p) => {
        const mp = dv.page(p.path);
        return mp.parent === input.file ;
    });

    let totalOutlinkedResearchProjects = 0;
    let finishedOutlinkedResearchProjects = 0;
    // const outlinkedProjects = goalPage.file.outlinks.where((p) => {
    //     const mp = dv.page(p.path);
    //     return mp.tags?.includes("research") && mp.tags?.includes("parent")
    // });


    const tagsToExclude = [ "#interesting-read","#ThnkOutLoud" ]

    const filteredTasks = goalPage.file.tasks.where((t) => {
        return !tagsToExclude.some((tag) => t.tags.includes(tag));
    });


    // total task in goal page
    const totalTasksGoalPage = filteredTasks.length;

    // total tasks in projects
    const totalTasksInProjects = projects.values.reduce((acc, p) => {
        const mp = dv.page(p.path);
        return acc + mp.file.tasks.length;
    }, 0);
    // const totalOutlinkedResearchProjects = outlinkedProjects.values.reduce((acc, p) => {
    //     const mp = dv.page(p.path);
    //     return acc + mp.file.tasks.length;
    // }, 0);

    // finished tasks in goal page
    const finishedTasksGoalPage = goalPage.file.tasks.where(
        (t) => t.fullyCompleted === true
    ).length;

    // finished tasks in projects
    const finishedTasksInProjects = projects.values.reduce((acc, p) => {
        const mp = dv.page(p.path);
        return acc + mp.file.tasks.where((t) => t.fullyCompleted === true).length;
    }, 0);
    // const finishedOutlinkedResearchProjects = outlinkedProjects.values.reduce((acc, p) => {
    //     const mp = dv.page(p.path);
    //     return acc + mp.file.tasks.where((t) => t.fullyCompleted === true).length;
    // }
    // , 0);

    Target = totalTasksGoalPage + totalTasksInProjects + totalOutlinkedResearchProjects;
    Progress = finishedTasksGoalPage + finishedTasksInProjects + finishedOutlinkedResearchProjects;

    
} catch (error) {
    console.log("Error in total-progress-bar-mini/view.js", error);
}

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



if (percent === 0 && Target === 0) {
    const progressText = containerEl.createEl("div");
    progressText.innerHTML = "🚫 404 🚫";
    Object.assign(progressText);
} else {
    const progressContainer = containerEl.createEl("div");
    progressContainer.style.display = "flex";
    progressContainer.style.alignItems = "center";

    const progressBar = progressContainer.createEl("progress");
    Object.assign(progressBar, { max, value, title: `${percent}% completed`,});

    const gap = progressContainer.createEl("div");
    gap.style.width = "10px"; // Adjust the width of the gap as needed

    const progressText = progressContainer.createEl("div");
    const color = getColor(percent);
    Object.assign(progressText, {
        textContent: `${percent}% done`,
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
}

dv.paragraph(containerEl.innerHTML);
