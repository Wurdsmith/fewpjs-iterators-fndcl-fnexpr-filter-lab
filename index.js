function findMatching(drivers, string){
    return drivers.filter(d => d.toLowerCase() === string.toLowerCase());

}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  
function matchName(source, someName) {
    return source.filter( record => record.name === someName)
  }