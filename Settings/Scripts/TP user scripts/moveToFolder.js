async function moveToFolder(tp, folderName){
    console.log(`Moving to folder ${folderName}`)
    const filename = tp.file.title;
    let taskFolderPath = folderName + "/" + filename + "/"
    if (!tp.file.exists(taskFolderPath)){
        new Notice(`Creating folder ${taskFolderPath}`)
        await this.app.vault.createFolder(taskFolderPath)
    }

    await tp.file.move(taskFolderPath + filename )
    new Notice(`Moved to ${taskFolderPath}`)
}

module.exports = moveToFolder