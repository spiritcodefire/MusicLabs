var request = require('request');

export default function AddDataCB(data) {
 return new Promise(function(resolve, reject) {
  request({
     method:'POST',
     url:'https://artandgalleries-com-098c8a.appdrag.site/api/Crm/addData', 
     form: data
  }, function(err,httpResponse,body) {

    if ( err != null ) {
     resolve(err);
    }
    else {
     resolve(body);
    }
  });
 });
}

