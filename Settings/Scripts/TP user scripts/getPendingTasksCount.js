function getPendingTasksCount(fileName, dv) {
    const curr = dv.page(fileName);
    // console.log(`${fileName} Step 1`)
    const path = curr.file.path; //     "Research/Test/Test.md"
    const childrenBasePath = path.split("/").slice(0, -1).join("/") + "/"; // "Research/Test/"
    const children = app.vault.getFiles().filter(file => file.path.startsWith(childrenBasePath) && file.path.endsWith('.md'));
    // console.log(`${fileName} Step 2`)
    let pendingTaskCount = 0;
    for (const child of children) {
        // console.log(`${fileName} Step 3 ${child.path}`)
        const childPage = dv.page(child.path);
        const totalTasks = childPage.file.tasks.length;
        const finishedTasks = childPage.file.tasks.filter(t => t.fullyCompleted).length;
        pendingTaskCount += totalTasks - finishedTasks;
    }
    // console.log(`${fileName} Step 4`)
    
    return pendingTaskCount;
}

module.exports = getPendingTasksCount