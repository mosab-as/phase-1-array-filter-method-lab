// Code your solution here
function findMatching(array,name)
{
  return array.filter((value) => value === name || value === name.toLowerCase() )
}

function fuzzyMatch(array,twoChar)
{
  return array.filter((value) => value[0] === twoChar[0] && value[1] === twoChar[1])
}
function matchName(array,name)
{
  return array.filter((value) => value.name === name )
}
