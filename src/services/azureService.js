
import CosmosAuth from './cosmosService'

const azureDatabaseEndPoint = 'https://csacustomers.azurewebsites.net'
const azureDatabaseApiKey = '1b195ea5a124444298d155e831d7affe'
module.exports = {
    getCSAData(cb){
        let cosmosAuth = new CosmosAuth(azureDatabaseApiKey, azureDatabaseEndPoint)
        cosmosAuth.getCSAData(cb)
    }
}

