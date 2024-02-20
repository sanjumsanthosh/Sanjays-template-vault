function constructTag(name) {
    // return as a tag name 
    // convert to lower chase and substiture space with "-"
    // eg Oci Fountation -> oci-foundation

    return name.toLowerCase().replace(/ /g, "-");
}

module.exports = constructTag;