loadMatchInfo();

document.getElementById("assign-random").addEventListener("click", function() {
    httpRequest("GET", "http://127.0.0.1:8081/apiv1/referee/withReferee/1", null, function(error, responseData) {
        if (!error) {
            const tbody = document.getElementById("tlb_match");
            tbody.innerHTML = ""; // Xóa nội dung cũ
            var matches = JSON.parse(responseData);
            var tableBody = document.getElementById("tlb_match");
            matches.forEach(function(match) {
                const gameResponse = new GameResponse(
                    match.gameResponse.idGame,
                    match.gameResponse.stadium,
                    match.gameResponse.homeTeamName,
                    match.gameResponse.awayTeamName
                );
                const mainReferee = match.mainReferee ?
                    new RefereeResponse(
                        match.mainReferee.refereeCode,
                        match.mainReferee.refereeName,
                        match.mainReferee.refereePosition
                    ) : null;
                const otherReferee = match.otherReferee.map(ref =>
                    new RefereeResponse(
                        ref.refereeCode,
                        ref.refereeName,
                        ref.refereePosition
                    )
                );

                const newMatch = new Match(match.round, gameResponse, otherReferee, mainReferee);

                var row = tableBody.insertRow();
                row.innerHTML = `<td>${newMatch.round}</td>
<!--                                     <td>${newMatch.gameResponse.idGame}</td>-->
                                     <td>${newMatch.gameResponse.stadium}</td>
                                     <td>${newMatch.gameResponse.homeTeamName}</td>
                                     <td>${newMatch.gameResponse.awayTeamName}</td>
                                     <td>${newMatch.mainReferee ? newMatch.mainReferee.refereeName : ''}</td>
                                     <td>
                                         <table class="sub-table">
                                             <tr>
                                                <td>${newMatch.otherReferee.length > 0 ? newMatch.otherReferee[0].refereeName : ''}</td>
                                                <td>Trọng tài biên</td>
                                             </tr>
                                             <tr>
                                                <td>${newMatch.otherReferee.length > 1 ? newMatch.otherReferee[1].refereeName : ''}</td>
                                                <td>Trọng tài biên</td>
                                             </tr>
                                             <tr>
                                                <td>${newMatch.otherReferee.length > 2 ? newMatch.otherReferee[2].refereeName : ''}</td>
                                                <td>Trọng tài ngoài sân</td>
                                             </tr>
                                         </table>
                                     </td>`;
            });
        } else {
            console.error(error);
        }
    });
});

function loadMatchInfo() {
    httpRequest("GET", "http://127.0.0.1:8081/apiv1/game/noReferee/1", null, function(error, responseData) {
        if (!error) {
            const tbody = document.getElementById("tlb_match");
            tbody.innerHTML = ""; // Xóa nội dung cũ
            var matches = JSON.parse(responseData);
            var tableBody = document.getElementById("tlb_match");
            matches.forEach(function(match) {
                const gameResponse = new GameResponse(
                    match.gameResponse.idGame,
                    match.gameResponse.stadium,
                    match.gameResponse.homeTeamName,
                    match.gameResponse.awayTeamName
                );
                const mainReferee = match.mainReferee ?
                    new RefereeResponse(
                        match.mainReferee.refereeCode,
                        match.mainReferee.refereeName,
                        match.mainReferee.refereePosition
                    ) : new RefereeResponse(
                        '',
                        '',
                        ''
                    );
                let otherReferee = [];
                if (match.otherReferee) {
                    otherReferee = match.otherReferee.map(ref =>
                        new RefereeResponse(
                            ref.refereeCode,
                            ref.refereeName,
                            ref.refereePosition
                        )
                    );
                    // Thực hiện các thao tác khác với mảng otherReferee...
                } else {
                    for(var i = 0; i < 4; i++){
                        otherReferee.push(new RefereeResponse(
                            '',
                            '',
                            ''
                        ))
                    }
                }

                const newMatch = new Match(match.round, gameResponse, otherReferee, mainReferee);

                var row = tableBody.insertRow();
                row.innerHTML = `<td>${newMatch.round}</td>
                                     <td>${newMatch.gameResponse.stadium}</td>
                                     <td>${newMatch.gameResponse.homeTeamName}</td>
                                     <td>${newMatch.gameResponse.awayTeamName}</td>
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
                                     </td>`;
            });
        } else {
            console.error(error);
        }
    });
}
