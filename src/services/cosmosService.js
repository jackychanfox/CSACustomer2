import RNFetchBlob from 'react-native-fetch-blob';

class CosmosAuth {
    constructor(microsoftAPIKey, microsoftAPIProxy ) {
        this.microsoftAPIKey = microsoftAPIKey;
        this.microsoftAPIProxy = microsoftAPIProxy;
    };

    getCSAData(cb) {

        let headers = {
            'Ocp-Apim-Subscription-Key': this.microsoftAPIKey,
            'Content-Type': 'application/json'
        };

        RNFetchBlob.fetch('GET', `${this.microsoftAPIProxy}/home`, headers)
        .then((res)=>{
            cb(null, JSON.parse(res.data))
        }).catch((err)=>{
            cb(err, null)
        })

    };

    uploadImage(data,cb){
        let headers = {
            'Ocp-Apim-Subscription-Key': this.microsoftAPIKey,
            'Content-Type': 'application/json'
        };

        RNFetchBlob.fetch('POST', `${this.microsoftAPIProxy}/visitor/uploadimage`, headers, data)
        .then((res)=>{
            cb(null, JSON.parse(res.data))
        }).catch((err)=>{
            cb(err, null)
        })

    }

}

export default CosmosAuth;