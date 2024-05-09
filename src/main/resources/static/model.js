var GameResponse = function(idGame, stadium, homeTeamName, awayTeamName) {
    this.idGame = idGame;
    this.stadium = stadium;
    this.homeTeamName = homeTeamName;
    this.awayTeamName = awayTeamName;
};

var RefereeResponse = function(refereeCode, refereeName, refereePosition) {
    this.refereeCode = refereeCode;
    this.refereeName = refereeName;
    this.refereePosition = refereePosition;
};

var Match = function(round, gameResponse, otherReferee, mainReferee) {
    this.round = round;
    this.gameResponse = gameResponse;
    this.otherReferee = otherReferee;
    this.mainReferee = mainReferee;
};

var Statistic = function (time, homeTeam, awayTeam, round, stadium, numberSpectator){
    this.time = time;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.round = round;
    this.stadium = stadium;
    this.numberSpectator = numberSpectator;
}