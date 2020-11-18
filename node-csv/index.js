const fs = require('fs')
const path = require('path')
const neatCSV = require('neat-csv')

const fileReadPath = './csv_files/file_to_read.csv'
const fileWritePath = './csv_files/file_to_write.csv'

//Function for read CSV file
const readCSV = () => {
    fs.readFile(fileReadPath, async (err, data) => {
        if(err){
            console.error(err)
            return
        }

        let csvData = await neatCSV(data)
        csvData.forEach((row, ind) => {
            console.log(`${ind+1}) Hi ${row.firstname} ${row.lastname}. Your phone number is ${row.phone} & live in ${row.region}.`)
        })
    })
}

//Function for write CSV file
const writeCSV = () => {
    let arrData = [
        'firstname,lastname,company,phone,region\r\n',
        'Farah,Joe,ARC Ltd,012929321,Alaska\r\n'
    ]
    let strData = 'Mimi,Steve,Side Ltd,018293923,Indonesia\r\n'

    arrData.forEach(data => {
        fs.appendFileSync(fileWritePath, data)
    })

    fs.appendFileSync(fileWritePath, strData)
}

//Call the function(s)
// readCSV()
// writeCSV()