import constant from "../constant/constant";

function Api() {
    var baseUrl = constant.baseurl
    return Object.assign(
        baseUrl,
        {character, quote}
    )
}

const quote = () => {
    var endPoint = constant.baseurl + constant.endPoints.quote
    var isAttributeSet = false;
    return Object.assign(
        endPoint,
        {
            setAttibute: (name, value) => {
                return {
                    endPoint: setEndPoint(name, value, endPoint, isAttributeSet)
                }
            },
            endPoint: endPoint
        }
    )
}


const character = () => {
    var endPoint = constant.baseurl + constant.endPoints.character
    var isAttributeSet = false;
    return Object.assign(
        endPoint,
        {
            setAttibute: (name, value) => {
                return {
                    endPoint: setEndPoint(name, value, endPoint, isAttributeSet)
                }
            },
            endPoint: endPoint
        }
    )
}

const setEndPoint = (name, value, endPoint, isAttributeSet) => {
    endPoint = `${endPoint}${!isAttributeSet && '?'}${name}=${value}`
    isAttributeSet = true;
    return endPoint
}


export default Api;

