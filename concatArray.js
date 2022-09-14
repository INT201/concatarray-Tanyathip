const { template } = require('@babel/core')


function concatArray(array1, array2) {
  if((array1 == null || undefined) && (array2 == null||undefined)){
      return undefined
      // console.log(undefined)
  }
  else if ((array1 == null||undefined) && (array2 != null||undefined)){
      // console.log(array2)
      return array2
  }
  else if ((array2 == null||undefined) && (array1 != null||undefined)){
      // console.log(array1)
      return array1
  }
  else{
      
      arr = array1.concat(array2)
      // console.log(arr)
      return arr
  }
  
}

module.exports = concatArray
