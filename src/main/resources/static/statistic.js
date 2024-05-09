statistic()
// var index = 0
// function statistic() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             const tbody = document.getElementById("tbl_statistic");
//             tbody.innerHTML = "";
//             var matches = JSON.parse(this.responseText);
//             var tableBody = document.getElementById("tbl_statistic");
//             matches.forEach(function(match, index) {
//                 var row = tableBody.insertRow();
//                 row.innerHTML = `<td>${index + 1}</td>
//                                      <td>Time: ${match.time}</td>
//                                      <td>Teams: ${match.homeTeam} vs. ${match.awayTeam}</td>
//                                      <td>Round ${match.round}</td>
//                                      <td>${match.stadium}</td>
//                                      <td>${match.numberSpectator}</td>`;
//             });
//         }
//     };
//     xhttp.open("GET", "http://127.0.0.1:8081/apiv1/game/statistic/1", true);
//     xhttp.send();
// }



function statistic() {

    httpRequest("GET", "http://127.0.0.1:8081/apiv1/game/statistic/1", null, function (error, responseData){
        if(!error){
            const tbody = document.getElementById("tbl_statistic");
            tbody.innerHTML = '';
            var index = 0
            var matches = JSON.parse(responseData);
            matches.forEach(function (match){
                const statisticResponse = new Statistic(match.time, match.homeTeam, match.awayTeam,
                    match.round, match.stadium, match.numberSpectator);
                var row = tbody.insertRow();
                index = index + 1
                row.innerHTML = `<td>${index}</td>
                                     <td>Time: ${statisticResponse.time}</td>
                                     <td>Teams: ${statisticResponse.homeTeam} vs. ${statisticResponse.awayTeam}</td>
                                      <td>Round ${statisticResponse.round}</td>
                                     <td>${statisticResponse.stadium}</td>
                                     <td>${statisticResponse.numberSpectator}</td>`;

            })
        }
        else {
            console.error(error);
        }
    })
}
