const fs= require('fs')

//read file
let file1=fs.readFileSync('f1.txt')
console.log('hey this is file 1'+file1)

//write file
let file2=fs.writeFileSync('f2.txt','this is file updated')
console.log('hey file written')

//update or append
let file3=fs.appendFileSync('f3.txt',' hey update but not overridden')
console.log('updated')

//delete or unlink
let file4=fs.unlinkSync('f3.txt')
console.log('deleted')