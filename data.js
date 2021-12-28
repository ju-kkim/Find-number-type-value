const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

const numType = [];
function checkData(data) {
    for(const [key, value] of Object.entries(data)) {
        const valueType = typeof value
        if(valueType !== 'number' && valueType !== 'object') {
            continue
        }
        
        if (valueType === 'number') {
            numType.push(key)
        }else if (valueType === 'object') {
            checkData(value)
        }
    }
}

checkData(data)
console.log(numType)
