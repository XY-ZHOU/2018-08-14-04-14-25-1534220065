module.exports = function main(str) {
    var arr = str.split('');
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '0') {
            arr1.push("._.");
            arr2.push("|.|");
            arr3.push("|_|");
        }
        if (arr[i] == '1') {
            arr1.push("...");
            arr2.push("..|");
            arr3.push("..|");
        }
        if (arr[i] == '2') {
            arr1.push("._.");
            arr2.push("._|");
            arr3.push("|_.");
        }
        if (arr[i] == '3') {
            arr1.push("._.");
            arr2.push("._|");
            arr3.push("._|");

        }
        if (arr[i] == '4') {
            arr1.push("...");
            arr2.push("|_|");
            arr3.push("..|");
        }
        if (arr[i] == '5') {
            arr1.push("._.");
            arr2.push("|_.");
            arr3.push("._|");
        }
        if (arr[i] == '6') {
            arr1.push("._.");
            arr2.push("|_.");
            arr3.push("|_|");
        }
        if (arr[i] == '7') {
            arr1.push("._.");
            arr2.push("..|");
            arr3.push("..|");

        }
        if (arr[i] == '8') {
            arr1.push("._.");
            arr2.push("|_|");
            arr3.push("|_|");
        }
        if (arr[i] == '9') {
            arr1.push("._.");
            arr2.push("|_|");
            arr3.push("..|");
        }


    }
    var str = arr1.join(' ') + "\n" + arr2.join(' ') + "\n" + arr3.join(' ')+ "\n";
    reutrn str;
};