function getParentPath(tp, parent_no=1){
    const folders = tp.file.folder(true).split('/')
    const parentFolder = folders[folders.length - parent_no - 1]
    return parentFolder
}

module.exports = getParentPath