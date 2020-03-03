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
         *              If the nested property is on an object inside an array, take the
         * @returns *Elements of 'array' or []
         */

        // Todo : loop on array if nested object is in array
        searchInArray: (array = [], searchValue = "", properties = []) => {
            function getNestedProperty(object = null, prop = "", types = ["string", "number"]) {
                if (object || undefined && prop || null) {

                    if (prop.includes(".")) {
                        let splittedProps = prop.split(".")
                        let firstProp = splittedProps.shift()
                        prop = splittedProps.join(".")
                        if (Array.isArray(object)) {
                            let concatArr = ""
                            for (let element of object) {
                                if (Object.prototype.hasOwnProperty.call(element, firstProp)) {
                                    concatArr += getNestedProperty(element[firstProp], prop)
                                }
                            }
                            return concatArr;
                        } else {
                            if (Object.prototype.hasOwnProperty.call(object, firstProp)) {
                                return getNestedProperty(object[firstProp], prop)
                            }
                        }
                    } else {
                        if (Array.isArray(object)) {
                            let concatArr = ""
                            for (let element of object) {
                                if (Object.prototype.hasOwnProperty.call(element, prop)) {
                                    if (types.indexOf(typeof element[prop]) !== -1) {
                                        concatArr += element[prop]
                                    }
                                }
                            }
                            return concatArr
                        } else {
                            if (Object.prototype.hasOwnProperty.call(object, prop)) {
                                if (types.indexOf(typeof object[prop]) !== -1) {
                                    return object[prop]
                                }
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
                                    concatDatas += (typeof elem[prop] == "string") ? elem[prop].toLowerCase() : concatDatas += elem[prop]
                                }
                            }
                        }

                        /*
                        Split search input value by spaces and pipes.
                            Prior the pipes, if at least one element correspond to it, return the value
                            For each splitted pipes chunk of string, split element by space.
                            If all element correspond to splitted spaces chunk string, return the value
                         */
                        return searchValue.split("|").some(function (elemPipe) {
                            if (elemPipe.length > 0) {
                                return elemPipe.split(" ").every(function (elemSpace) {
                                    return concatDatas.indexOf(elemSpace.toLowerCase()) !== -1
                                })
                            }
                            return false;
                        })
                    })
                }
            } else {
                return [] // return empty array if input array is empty
            }
        }
    }
}