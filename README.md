#UploadHymns

This is a simple little project to speed up (and ideally automate) the uploading of hymns to the PlayHymns DB (playHymns is another project I've completed, which can be viewed [here](https://github.com/dsab123/PlayHymn3). There you'll also find more info on the background of the project.

There are three things that I have to do each week to make sure the hymns are up in time for members of my church to be able to practice them:

-	record myself playing the hymns
-	find the lyrics to the hymn online somewhere
-	upload the lyrics and audio to Amazon S3, ensuring to follow the expected naming convention and directory structure I've defined in the PlayHymns database
- 	update the DB with one more week in the 'Week' table and new hymn entries (if they are not already in the 'Hymn' table)

I thought about making a simple android app, since I'll be uploading the hymns from my phone, but a web endpoint would be more portable, and with Bootstrap, I can make it look pretty on mobile as well as standard screen sizes. For the forseeable future, I'll be uploading them from my macbook, so I'll make mobile viewing pleasure a secondary goal.

As the project is now, I've almost completed the jQuery-powered front end; I just need to figure out how to aggregate the data from all three hymns into one form, which doesn't seem to be too difficult.
 
The backend will be written in Spring, because I've been away from Spring (and Java!) for too long. The Spring backend will be responsible for the following:

- parsing out the data encoded in 'x-www-form-encoded' style to JSON,
- performing the necessary SQL queries to add the hymn info to the DB (which will contain URLs to the audio and lyrics files),
- upload the hymn audio and lyrics to S3

I should also have Spring send some sort of response to the front end; this will be a good opportunity to learn more about headers, HTTP status codes, and the like.

That's all the easy part! The hard part will be automagically finding the lyrics to each song to prevent me having to type them out. For now, I'll type them out, but I'm hoping to find a hymn website with a predictable HTML so that I can parse out the lyrics from the rest of the page. 

I'll probably end up hosting on heroku, but I'll use S3 for now cause its quicker.

##todo:

- add Spring for backend processing awesomeness, which will include DB calls and stuff
- learn about response headers and stuff
- ~~figure out how to use facebook for authentication if someone else was to take over uploading hymns in the future~~ I got an example working in 'index.html'