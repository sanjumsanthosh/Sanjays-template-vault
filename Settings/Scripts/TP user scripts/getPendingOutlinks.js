function getPendingOutlinks(fileName, dv) {
    const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_object
    const allOutlinks = dv.page(fileName).file.outlinks;
    let pending = []
    allOutlinks.forEach(outlink => {
        if(!outlink.embed && !tp.file.find_tfile(outlink.display) && outlink.type==="file")
        pending.push(outlink)
    });
    return pending;
}

module.exports = getPendingOutlinks