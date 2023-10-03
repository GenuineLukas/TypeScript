const superPrint = <T>(arr: T[]) => arr[Math.random()*arr.length - 1]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true, true]); 
const c = superPrint ([1, true, "1", null]);