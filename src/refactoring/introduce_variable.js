function getBrowserName() {
    var browserName = "N/A";
    if (navigator.appName.indexOf("Netscape") != -1) {
        browserName = "NS";
    } else if (navigator.appName.indexOf("Microsoft") != -1) {
        browserName = "MSIE";
    } else if (navigator.appName.indexOf("Opera") != -1) {
        browserName = "O";
    }
}
