// function (arrayOfObjects, searchValue, propertiesToWatch)

/*

propertiesToWatch =>
if (empty()) {
    => tester sur toutes les propriétés string ou number
} else {
    => concat les propriétés de l'objet dans propertiesToWatch si elles existent
    => Puis tester sur cette chaine de caractères
}

 */

export default {
    methods: {
        searchInArray: (array = [], searchValue = "", properties = []) => {
            if (array.length > 0) {
                if (searchValue == "") {
                    return array; // Return complete array if search is empty
                } else {
                    let propsToHandle = []
                    if (properties.length > 0) {
                        propsToHandle = properties
                    } else {
                        let item0 = array[0]
                        for (let prop in item0) {
                            if (Object.prototype.hasOwnProperty.call(item0, prop)) {
                                if (["string", "number"].indexOf(typeof item0[prop]) !== -1) {
                                    propsToHandle.push(prop)
                                }
                            }
                        }
                    }
                    return array.filter(function(elem) {
                        let concatDatas = "";
                        for (let prop of propsToHandle) {
                            if (Object.prototype.hasOwnProperty.call(elem, prop)) {
                                if (typeof elem[prop] == "string") {
                                    concatDatas += elem[prop].toLowerCase()
                                } else {
                                    concatDatas += elem[prop]
                                }
                            }
                        }
                        return (concatDatas.indexOf(searchValue.toLowerCase()) !== -1)
                    })
                }
            } else {
                return [] // return empty array if input array is empty
            }
        }
    }
}