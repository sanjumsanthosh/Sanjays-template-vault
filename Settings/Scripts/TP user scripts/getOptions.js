
async function getOptions(tp) {
    const defaultOptions = ["core","KB","Docs","hahah"];
    const parent = tp.user.getParentPath(tp, 1);
    const parentFile = tp.file.find_tfile(parent);
    const { headings } = app.metadataCache.getFileCache(parentFile);
    const headingList = headings.map(h => h.heading);
    return headingList.length > 0 ? headingList : defaultOptions;
}



module.exports = getOptions 