const fs=require('fs')

// fs.mkdirSync('myDirectory')

let folderpath = 'C:\\Users\\Pooja\\Desktop\\Nodejs\\Nodemodules\\myDirectory'


let content=fs.readdirSync(folderpath)
console.log('hey this path ',content)//if you replace + with , then you will get it in array than string


let exist=fs.existsSync('myDirectory')
console.log(exist)

fs.rmdirSync('myDirectory')//before deleting you need to clear the directory