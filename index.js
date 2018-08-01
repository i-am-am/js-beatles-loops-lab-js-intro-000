// add solution here
function theBeatlesPlay(musicians, instruments){
  var newa = []
  for (var m = 0; m < musicians.length; m++) {
    newa.push(`${musicians[m]} plays ${instruments[m]}`)
  }
  return newa
}

function johnLennonFacts(facts){
  var i = 0
  var newa = []
  while (i < facts.length) {
    newa.push(`${facts[0]}!!!`)
    i++
  }
  return newa
}
