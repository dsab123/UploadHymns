$(document).ready() {
	var appId = '527169160766341';
	var roleArn = 'arn:aws:iam::959456519816:role/playHymns_uploader_role';
	var bucketName = 'uploadhymns';
	AWS.config.region = 'us-east-1';
	var fbUserId;
	var bucket = new AWS.S3({
		params: {
			Bucket: uploadhymns
		}
	});

	//var fileChooser = document.getElementById('file-chooser');

	var audioFile = $()
	var submitButton = document.getElementById('upload-button');

	var results = document.getElementById('results');

	button.addEventListener('click', function () {
		var file = fileChooser.files[0];
		if (file) {
			results.innerHTML = '';
			//Object key will be facebook-USERID#/FILE_NAME
			var objKey = 'facebook-' + fbUserId + '/' + file.name;
			var params = {
					Key: objKey,
					ContentType: file.type,
					Body: file,
					ACL: 'public-read'
			};
			bucket.putObject(params, function (err, data) {
				if (err) {
					results.innerHTML = 'ERROR: ' + err;
				} else {
					listObjs();
				}
			});
		} else {
			results.innerHTML = 'Nothing to upload.';
		}
	}, false);

	function listObjs() {
		var prefix = 'facebook-' + fbUserId;
		bucket.listObjects({
			Prefix: prefix
		}, function (err, data) {
			if (err) {
				results.innerHTML = 'ERROR: ' + err;
			} else {
				var objKeys = "";
				data.Contents.forEach(function (obj) {
					objKeys += obj.Key + "<br>";
				});
				results.innerHTML = objKeys;
			}
		});
	}

	/*!
	 * Login to your application using Facebook.
	 * Uses the Facebook SDK for JavaScript available here:
	 * https://developers.facebook.com/docs/javascript/gettingstarted/
	 */
	window.fbAsyncInit = function () {
		FB.init({
			appId: appId
		});
		FB.login(function (response) {
			bucket.config.credentials = new AWS.WebIdentityCredentials({
				ProviderId: 'graph.facebook.com',
				RoleArn: roleArn,
				WebIdentityToken: response.authResponse.accessToken
			});
			fbUserId = response.authResponse.userID;
			button.style.display = 'block';
		});
	};
//	Load the Facebook SDK asynchronously
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}