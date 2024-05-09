function httpRequest(method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Yêu cầu thành công
                var responseData = xhr.responseText;
                callback(null, responseData);
            } else {
                // Xảy ra lỗi
                callback(new Error('Request failed with status ' + xhr.status), null);
            }
        }
    };

    // Nếu là phương thức POST và có dữ liệu, gửi dữ liệu đi
    if (method === 'POST' && data) {
        xhr.send(data);
    } else {
        xhr.send();
    }
}