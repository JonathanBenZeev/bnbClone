export const utilService = {
  getTitleNames,
  makeId
}

function getTitleNames(): string[] {
  return ['CONTACT NAME', 'EMAIL', 'PHONE NUMBER', 'MATCH', 'FACEBOOK PROFILE']
}

 function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}