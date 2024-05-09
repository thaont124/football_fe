document.addEventListener("DOMContentLoaded", function () {
    loadMatchInfo();
});

document.getElementById("assign-random").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const tbody = document.getElementById("tlb_match");
            tbody.innerHTML = ""; // Xóa nội dung cũ
            var matches = JSON.parse(this.responseText);
            var tableBody = document.getElementById("tlb_match");
            matches.forEach(function(match) {
                var row = tableBody.insertRow();
                row.innerHTML = `<td>${match.round}</td>
                                     <td>${match.gameResponse.idGame}</td>
                                     <td>${match.gameResponse.stadium}</td>
                                     <td>${match.gameResponse.homeTeamName}</td>
                                     <td>${match.gameResponse.awayTeamName}</td>
                                     <td>${match.mainReferee.refereeName}</td>
                                     <td>
                                         <table class="sub-table">
                                             <tr>
                                                <td>${match.otherReferee[0].refereeName}</td>
                                                <td>Trọng tài biên</td>
                            
                                             </tr>
                                             <tr>
                                                <td>${match.otherReferee[1].refereeName}</td>
                                                <td>Trọng tài biên</td>
                            
                                             </tr>
                                             <tr>
                                                <td>${match.otherReferee[2].refereeName}</td>
                                                <td>Trọng tài ngoài sân</td>
                            
                                             </tr>
                                         </table>
                                     </td>
                                     <td><button class="edit-button" onclick="editReferee('1')">Chỉnh sửa</button></td>`;
            });
        }
    };
    xhttp.open("GET", "http://127.0.0.1:8081/apiv1/referee/withReferee/1", true);
    xhttp.send();
});
function loadMatchInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const tbody = document.getElementById("tlb_match");
            tbody.innerHTML = ""; // Xóa nội dung cũ
            var matches = JSON.parse(this.responseText);
            var tableBody = document.getElementById("tlb_match");
            matches.forEach(function(match) {
                var row = tableBody.insertRow();
                row.innerHTML = `<td>${match.round}</td>
                                     <td>${match.gameResponse.stadium}</td>
                                     <td>${match.gameResponse.homeTeamName}</td>
                                     <td>${match.gameResponse.awayTeamName}</td>
                                     <td></td>
                                     <td>
                                         <table class="sub-table">
                                             <tr>
                                                <td></td>
                                                <td>Trọng tài biên</td>
                            
                                             </tr>
                                             <tr>
                                                <td></td>
                                                <td>Trọng tài biên</td>
                            
                                             </tr>
                                             <tr>
                                                <td></td>
                                                <td>Trọng tài ngoài sân</td>
                            
                                             </tr>
                                         </table>
                                     </td>
                                     <td><button class="edit-button" onclick="editReferee('1')">Chỉnh sửa</button></td>`;
            });
        }
    };
    xhttp.open("GET", "http://127.0.0.1:8081/apiv1/game/noReferee/1", true);
    xhttp.send();
}


