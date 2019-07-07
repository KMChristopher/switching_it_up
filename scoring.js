function calculatePassingScore(player) {
  var yards = parseFloat((player.stats.passing.yards / 25).toFixed(2))
  var touchdowns = player.stats.passing.touchdowns * 6
  var interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

function calculateRushingScore(player) {
  var yards = parseFloat((player.stats.rushing.yards / 10).toFixed(2))
  var touchdowns = player.stats.rushing.touchdowns * 6
  var fumbles = player.stats.rushing.fumbles * -3

  return yards + touchdowns + fumbles
}

function calculateReceivingScore(player) {
  var receptions = player.stats.receiving.receptions
  var yards = parseFloat((player.stats.receiving.yards / 10).toFixed(2))
  var touchdowns = player.stats.receiving.touchdowns * 6
  var fumbles = player.stats.receiving.fumbles * -3

  return receptions + yards + touchdowns + fumbles
}

function calculateReturnScore(player) {
  var kickYards = parseFloat((player.stats.return.kickreturn.yards / 15).toFixed(2))
  var kickTouchdowns = player.stats.return.kickreturn.touchdowns * 6
  var kickFumbles = player.stats.return.kickreturn.fumbles * -3

  var puntYards = parseFloat((player.stats.return.puntreturn.yards / 15).toFixed(2))
  var puntTouchdowns = player.stats.return.puntreturn.touchdowns * 6
  var puntFumbles = player.stats.return.puntreturn.fumbles * -3

  return kickYards + kickTouchdowns + kickFumbles + puntYards + puntTouchdowns + puntFumbles
}

// KMC: Modified code here ...
module.exports.calculateScore = function (player) {
  switch (player.position) { // KMC: Reaches into player variable, and grabs the position attribute
    case 'QB':
      return  calculatePassingScore(player) +
              calculateRushingScore(player);
    case 'RB': // KMC: You can't combine cases with || ... (Prolly cuz cases themselves are a type of "OR" statement (?)) ... Instead, just list them one after the other, then the "return" statement 
    case 'WR':
      return  calculateRushingScore(player) +
              calculateReceivingScore(player) +
              calculateReturnScore(player);
    case 'TE':
      return  calculateReceivingScore(player);
    default: // KMC: All switch statements need some kind of default to go to when none of the other options matter 
      return  0
  }
}


