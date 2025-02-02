function wearCoat (degrees) {
    if (degrees < 0) {
        console.log('stay inside');
    } else if (degrees < 30) {
        console.log('wear a coat and a hat');
    } else if (degrees < 50) {
        console.log('wear a coat');
    } else {
        console.log('wear what ever you want');
    }
}

wearCoat(-50)
wearCoat(20)
wearCoat(40)
wearCoat(50)