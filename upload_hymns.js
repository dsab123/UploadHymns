//I'm messing with Cognito for authentication, since I can't avoid it forever.
//I have no idea what I'm doing, however, so I'm just pasting code here for 
//now

//I chose to authenticate with Facebook, so...
FB.login(function (response) {
  if (response.authResponse) { // logged in
  	AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:cd67b23a-4726-4687-9dcd-fda915f14c15',
      Logins: {
        'graph.facebook.com': response.authResponse.accessToken
      }
    });

    s3 = new AWS.S3; // we can now create our service object

    console.log('You are now logged in.');
  } else {
    console.log('There was a problem logging you in.');
  }
});

// Initialize the Amazon Cognito credentials provider
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "us-east-1:cd67b23a-4726-4687-9dcd-fda915f14c15", // Identity Pool ID
    Regions.US_EAST_1 // Region
);

// Initialize the Cognito Sync client
CognitoSyncManager syncClient = new CognitoSyncManager(
   getApplicationContext(),
   Regions.US_EAST_1, // Region
   credentialsProvider);

// Create a record in a dataset and synchronize with the server
Dataset dataset = syncClient.openOrCreateDataset("myDataset");
dataset.put("myKey", "myValue");
dataset.synchronize(new DefaultSyncCallback() {
    @Override
    public void onSuccess(Dataset dataset, List newRecords) {
        //Your handler code here
    }
});

// Once auth is out of the way, (see here: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createMultipartUpload-property)
var params = {
  Bucket: 'STRING_VALUE', /* required */
  Key: 'STRING_VALUE', /* required */
  ACL: 'private | public-read | public-read-write | authenticated-read | bucket-owner-read | bucket-owner-full-control',
  CacheControl: 'STRING_VALUE',
  ContentDisposition: 'STRING_VALUE',
  ContentEncoding: 'STRING_VALUE',
  ContentLanguage: 'STRING_VALUE',
  ContentType: 'STRING_VALUE',
  Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  GrantFullControl: 'STRING_VALUE',
  GrantRead: 'STRING_VALUE',
  GrantReadACP: 'STRING_VALUE',
  GrantWriteACP: 'STRING_VALUE',
  Metadata: {
    someKey: 'STRING_VALUE',
    /* anotherKey: ... */
  },
  RequestPayer: 'requester',
  SSECustomerAlgorithm: 'STRING_VALUE',
  SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
  SSECustomerKeyMD5: 'STRING_VALUE',
  SSEKMSKeyId: 'STRING_VALUE',
  ServerSideEncryption: 'AES256 | aws:kms',
  StorageClass: 'STANDARD | REDUCED_REDUNDANCY | LT',
  WebsiteRedirectLocation: 'STRING_VALUE'
};
s3.createMultipartUpload(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});