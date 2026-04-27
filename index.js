
require('datejs')

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


function combineUsers(...args) {
const combinedobject = {
  users : []
  
}

for (const arr of args) {
    combinedobject.users.push(...arr);
}
combinedobject.merge_date = new Date().toString('M/d/yyyy')

return combinedobject
}  



  

