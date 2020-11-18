const fs = require('fs')
const neatCSV = require('neat-csv')
const _async = require('async')

const filePath = './resource_data.csv'

fs.readFile(filePath, async (err, data) => {
    if(err){
        console.error(err)
        return
    }

    let csvData = await neatCSV(data)
    _async.eachSeries(csvData, async(rowData, callback) => {
        console.log(`${rowData.id} - ${rowData.first_name}, ${rowData.last_name}, ${rowData.email}, ${rowData.gender}, ${rowData.ip_address}`)
        callback
    }, () => {
        console.log('All done perfectly.')
        console.log('Then, do something here!!')
    })
})