#UploadHymns

This is a simple little project to speed up (and ideally automate) the uploading of hymns to the PlayHymns DB.

There are three things that I have to do each week to make sure the hymns are up, once I have recorded them:
-	upload them to Amazon S3, ensuring to follow the expected naming convention and directory structure I've defined in the PlayHymns database
-	find the lyrics to the hymn online somewhere
- 	update the DB with one more week in the 'Week' table and new hymn entries (if they are not already in the 'Hymn' table)

I thought about making a simple android app, since I'll be uploading the hymns from my phone, but a web endpoint would be more useful, and with Bootstrap, I can make it look pretty on mobile as well as standard screen sizes.

For uploading the files to S3, I'll be using Amazon's AWS SDK (aws-sdk) for JavaScript. I'll be reading the aws-sdk API for the next couple days.

In order to upload the lyrics, I'm hoping to find a hymn website with a predictable naming convention and HTML so that I can parse out the lyrics from the rest of the page. Unfortunately, I haven't had much success in finding such a website, so I'm not sure exactly how to proceed on this front...but I'll figure it out.

And for updating the DB, I'm sure I can do that from within JavaScript, right?

Not sure where to host. It'll just be me uploading the hymns for the forseeable future, so I'll use S3 for now.

##todo:
- figure out how to change the color of the filestyle bootstrap input
- add Spring for backend processing awesomeness, which will include DB calls and stuff