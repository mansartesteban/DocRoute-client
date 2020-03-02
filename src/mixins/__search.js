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
        /**
         *  Return array's elements depending on searched value within (string or number) properties passed
         *
         * @param array => (array<object>) The array to handle
         * @param searchValue => (string) The value to search in 'array'
         * @param properties => (array<string>) The properties of each elements iof 'array' within to search
         *          ["label", "text", "birthdate"] => will search 'searchValue' in the label,
         *              text or birthdate properties in each elements of 'array' if exists
         *          ["label", "friends.jobs.label"] => in case you want to catch a nested property object,
         *              you can deal with it by passing the full path access to this property as if you were
         *              accessing it in pure JavaScript
         * @returns *Elements of 'array' or []
         */
        searchInArray: (array = [], searchValue = "", properties = []) => {
            function getNestedProperty(object = null, prop = "", types = ["string", "number"]) {
                if (object || undefined && prop || null) {
                    if (Array.isArray(object)) {
                        object = object[0]
                    }
                    if (prop.includes(".")) {
                        let splittedProps = prop.split(".")
                        let firstProp = splittedProps.shift()
                        prop = splittedProps.join(".")
                        if (Object.prototype.hasOwnProperty.call(object, firstProp)) {
                            return getNestedProperty(object[firstProp], prop)
                        }
                    } else {
                        if (Object.prototype.hasOwnProperty.call(object, prop)) {
                            if (types.indexOf(typeof object[prop]) !== -1) {
                                return object[prop]
                            }
                        }
                    }
                }
            }

            if (array.length > 0) {
                if (searchValue == "") {
                    return array; // Return complete array if search is empty
                } else {
                    let propsToHandle = []
                    if (properties.length > 0) {
                        propsToHandle = properties
                    } else {
                        let item0 = array[0]
                        for (let prop in item0) { // The props to search in (if not defined, check all props of type string and number)
                            if (Object.prototype.hasOwnProperty.call(item0, prop)) {
                                if (["string", "number"].indexOf(typeof item0[prop]) !== -1) {
                                    propsToHandle.push(prop)
                                }
                            }
                        }
                    }
                    return array.filter(function(elem) { // Filter the main array by searchValue on 'propsToHandle'
                        let concatDatas = "";
                        for (let prop of propsToHandle) {
                            if (prop.includes(".")) {
                                concatDatas += getNestedProperty(elem, prop).toLowerCase()
                            } else {
                                if (Object.prototype.hasOwnProperty.call(elem, prop)) {
                                    if (typeof elem[prop] == "string") {
                                        concatDatas += elem[prop].toLowerCase()
                                    } else {
                                        concatDatas += elem[prop]
                                    }
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