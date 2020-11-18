const fs = require('fs')
const neatCSV = require('neat-csv')
const _async = require('async')

const filePath = './resource_data.csv'

//Start read file first
fs.readFile(filePath, async (err, data) => {
    if(err){
        console.error(err)
        return
    }

    //Init array of data from csv
    let csvData = await neatCSV(data)

    //Using async.eachseries to await all from csv data process until end
    _async.eachSeries(csvData, async(rowData, callback) => {
        console.log(`${rowData.id} - ${rowData.first_name}, ${rowData.last_name}, ${rowData.email}, ${rowData.gender}, ${rowData.ip_address}`)
        callback
    }, () => {
        //Here is the function after the loop is complete.
        console.log('All done perfectly.')
        console.log('Then, do something here!!')
    })
})