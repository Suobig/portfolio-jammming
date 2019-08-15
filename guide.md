# Guide

## Add Tracks to a Playlist

~~### Item 40~~

~~In this section, you will implement a process for adding a song from the search results track list to the user’s custom playlist.~~

~~You will add a method to App.js called `addTrack` that adds a song to the playlist state. The application passes the method through a series of components to Track. The user can trigger the `.addTrack()` method by clicking the `+` sign from the search results list.~~

### Item 41

In App.js create a method called `addTrack` with the following functionality:

* Accepts a `track` argument
* Use the track’s `id` property to check if the current song is in the `playlistTracks` state.
* If the `id` is new, add the song to the end of the playlist.
* Set the new state of the playlist

> Use the following logic to determine if the track already exists in the playlist and break out of the method if it does:
>
```javascript
if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}
```

### Item 42

Bind the current value of this to `.addTrack()`.

Pass `.addTrack()` to the `SearchResults` component as an `onAdd` attribute.

### Item 43

Pass `onAdd` from the `SearchResults` component to the `TrackList` component.

Pass `isRemoval` with a value of false down to `TrackList`.

> Inside the SearchResults.js .render() method, pass this.props.onAdd as an attribute called onAdd to the TrackList component.

### Item 44

Pass `onAdd` from the `TrackList` component to the `Track` component.

> Inside the TrackList.js .render() method, pass this.props.onAdd as an attribute called onAdd to the Track component.

### Item 45

Create an .addTrack() method in the Track component. Use it to add this.props.track to the playlist.

> Pass this.props.track to this.props.onAdd.

### Item 46

Add a constructor to the Track component. Call super(props) in the constructor method.

Bind this.addTrack() to the current value of this in the constructor method.

### Item 47

In the Track.js + element, add an onClick property with the value set to this.addTrack.

## Remove Tracks from a Playlist

### Item 48

In this section, you will implement a process that removes a song from a user’s custom playlist when the user selects the - sign inside of a rendered track.

### Item 49

In App.js create a method called removeTrack with the following functionality:

* Accepts a track argument
* Uses the track’s id property to filter it out of playlistTracks
* Sets the new state of the playlist

### Item 50

In the App constructor method, bind the current value of this to .removeTrack().

Pass .removeTrack() to the Playlist component as an onRemove attribute.

### Item 51

Pass onRemove from the Playlist component to the TrackList component.

Pass isRemoval with a value of true down to TrackList.

> Inside the Playlist.js .render() method, pass this.props.onRemove as an attribute called onRemove in the TrackList component.

### Item 52

Pass onRemove and isRemoval from the TrackList component to the Track component.

> Inside the TrackList.js .render() method, pass this.props.onRemove as an attribute called onRemove in the Track component.

### Item 53

Create a .removeTrack() method in the Track component. Use it to remove this.props.track from the playlist.

> Pass this.props.track to this.props.onRemove.

### Item 54

In Track.js, bind this.removeTrack() to the current value of this in the constructor method.

### Item 55

In the Track.js - element, add an onClick property with the value set to the this.removeTrack method.

## Change the Name of a Playlist

### Item 56

In this section, you will implement code that allows a learner to change the name of their playlist, and save the updated value to the App component’s state.

### Item 57

In App.js create a method called updatePlaylistName with the following functionality:

* Accepts a name argument
* Sets the state of the playlist name to the input argument

### Item 58

In the App constructor method, bind this to .updatePlaylistName().

Pass updatePlaylistName to the Playlist component as an attribute named onNameChange.

### Item 59

In the Playlist component, create a method called handleNameChange.

The method should accept an event that is triggered by an onChange attribute in the Playlist component’s `<input>` element.

Inside the method, call .onNameChange() with the event target’s value (from the `<input>` element).

### Item 60

Add a constructor to the Playlist component. Call super(props) in the constructor method.

Bind the current value of this to .handleNameChange().

### Item 61

In the Playlist render method, pass .handleNameChange() to an onChange property.

## Create a Method that Saves the Playlist to a User's Account

### Item 62

In this section, you will create a method that will save a user’s playlist to their Spotify account and resets the state of the playlist name and tracks array.

To accomplish the goal of this assessment, you will need to access a track property named uri. Spotify uses this field to reference tracks in the Spotify library. You will create an array containing the uri of each track in the playlistTracks property.

In a later section, you will pass the playlist name and the array of uris to a Spotify-linked method that writes the tracks in playlistTracks to a user’s account.

### Item 63

In App.js create a method called savePlaylist with the following functionality:

* Generates an array of uri values called trackURIs from the playlistTracks property.
* In a later step, you will pass the trackURIs array and playlistName to a method that will save the user’s playlist to their account.

### Item 64

Bind the current value of this to .savePlaylist().

Pass savePlaylist to the Playlist component as an attribute called onSave.

### Item 65

In the Playlist.js SAVE TO SPOTIFY button element, add an onClick property with the value set to this.props.onSave.

## Hook up Search Bar to Spotify Search

### Item 66

In this section, you will create a method that updates the searchResults parameter in the App component with a user’s search results. You will write the logic that allows a user to enter a search parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify request.

In a later section, you will hook the .search() method up to the Spotify API.

### Item 67

In App.js create a method called search with the following functionality:

* Accepts a search term
* Logs the term to the console

In a later assessment, we will hook this method up to the Spotify API.

### Item 68

In the App constructor method, bind this to .search(). In a later assessment, we will use this in .search().

Pass .search() to the SearchBar component as an onSearch attribute.

### Item 69

In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.

### Item 70

In the SearchBar component, create a constructor method with a call to super(props).

Inside of the constructor, bind the current value of this to .search().

### Item 71

In SearchBar.js create a method called handleTermChange with the following functionality:

* Accepts an event argument
* Sets the state of the search bar’s term to the event target’s value.

### Item 72

In the SearchBar.js constructor method, bind the current value of this to this.handleTermChange.

### Item 73

In the search bar’s `<input>` element, add an onChange attribute and set it equal to this.handleTermChange.

## Obtain a Spotify Access Token

### Item 74

In the next few sections, you will write three methods that accomplish the following:

* Get a Spotify user’s access token
* Send a search request to the Spotify API
* Save a user’s playlist to their Spotify account.

Before you begin, you will need to create an empty JavaScript module called Spotify located in src/util/Spotify.js.

In this assessment, you will register a Spotify application and create a method called getAccessToken in the Spotify module. The method will get a user’s access token so that they can make requests to the Spotify API.

Use the [Spotify Applications Registration Flow](https://developer.spotify.com/my-applications/#!/applications) and [Spotify Authentication guide](https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow) to help you write the method.

### Item 75

Create a src/util directory and add a file called Spotify.js

### Item 76

In Spotify.js create a Spotify module as an empty object.

At the bottom of Spotify.js export Spotify.

### Item 77

Above the empty object, declare an empty variable that will hold the user’s access token.

### Item 78

Inside the Spotify module, create a method called getAccessToken.

Check if the user’s access token is already set. If it is, return the value saved to access token.

### Item 79

If the access token is not already set, check the URL to see if it has just been obtained.

You will be using the [Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) to setup a user’s account and make requests. The implicit grant flow returns a user’s access token in the URL.

Use the guide to determine how to parse the URL and set values for your access token and expiration time.

Look at the hint if you help parsing the URL.

> In the implicit grant flow, values for the access token and expiration time are in the URL parameter after authentication.
>
> Use window.location.href and the .match() method to retrieve the access token and expiration time from the URL.
>
> Example URL from Spotify API:

```code
https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123
```

> Use the .match() method on the URL string. Provide the regular expressions below as inputs:

```code
/access_token=([^&]*)/
/expires_in=([^&]*)/
```

### Item 80

If the access token and expiration time are in the URL, implement the following steps:

* Set the access token value
* Set a variable for expiration time
* Set the access token to expire at the value for expiration time
* Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired

The hint below contains the code that wipes the access token and URL parameters.

> Use the following code to help you wipe the access token and URL parameters

```javascript
window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
```

### Item 81

The third condition is that the access token variable is empty and is not in the URL.

Before you write this conditional code block, you need to register your application using the [Spotify application registration flow](https://developer.spotify.com/my-applications/#!/applications).

Give your application a relevant name and description. Also, add the following Redirect URI: `http://localhost:3000/`

### Item 82

At the top of Spotify.js create constant variables for your application’s client ID and redirect URI.

Set the client ID variable to the value provided on your application page.

Set the redirect URI to `"http://localhost:3000/"`.

### Item 83

Back in your conditional statement, redirect users to the following URL:

```code
https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI
```

Interpolate your client ID and redirect URI variables In place of CLIENT_ID and REDIRECT_URI.

> To redirect a user, you must set window.location to the URL in the task above.

## Implement Spotify Search Request

### Item 84

In this section, you will create a method in Spotify.js that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format.

You will need the user’s access token to make requests to the Spotify API. You will use the request parameters in step four of the [implicit grant flow](https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow) to make requests. In the following steps, we will use fetch() to make our requests, but any method will work.

You should use the `/v1/search?type=TRACK` endpoint when making your request. Use the [Spofity Web API Endpoint Reference](https://developer.spotify.com/web-api/endpoint-reference/) to help format your request.

### Item 85

In the Spotify object, add a method called search that accepts a parameter for the user’s search term.

.search() returns a promise that will eventually resolve to the list of tracks from the search.

### Item 86

Inside .search(), start the promise chain by returning a GET request (using fetch()) to the following Spotify endpoint:

```code
https://api.spotify.com/v1/search?type=track&q=TERM
```

Replace the value of TERM with the value saved to the search term argument.

Add an Authorization header to the request containing the access token.

> You will need to pass a second argument to the fetch method. The second argument is an object with one field called headers. Set headers to an object with one Authorization property with the user’s access token. Use the format in step four of the implicit grant flow.
>
> Pass the following object as the second fetch parameter:

```javascript
{
  headers: {Authorization: `Bearer ${accessToken}`}
}
```

### Item 87

Convert the returned response to JSON.

Then, map the converted JSON to an array of tracks. If the JSON does not contain any tracks, return an empty array.

The mapped array should contain a list of track objects with the following properties:

* ID — returned as track.id
* Name — returned as track.name
* Artist — returned as track.artists[0].name
* Album — returned as track.album.name
* URI — returned as track.uri

### Item 88

In App.js, import Spotify and update the .search() method with the Spotify.search() method.

Update the state of searchResults with the value resolved from Spotify.search()‘s promise.

## Save a User's Playlist

### Item 89

In this section, you will create a method called savePlaylist that writes the learner’s custom playlist in Jammming to their Spotify account.

The .savePlaylist() method accepts a playlist name and an array of track URIs. It makes the following three requests to the Spotify API:

* GET current user’s ID
* POST a new playlist with the input name to the current user’s Spotify account. Receive the playlist ID back from the request.
* POST the track URIs to the newly-created playlist, referencing the current user’s account (ID) and the new playlist (ID)

You will update the .savePlaylist() method in App.js to use the new Spotify.savePlaylist() method.

### Item 90

Create a method in Spotify.js that accepts two arguments. The first argument is the name of the playlist. The second is an array of track URIs.

Inside the function, check if there are values saved to the method’s two arguments. If not, return.

### Item 91

Create three default variables:

* An access token variable, set to the current user’s access token
* A headers variable, set to an object with an Authorization parameter containing the user’s access token in the implicit grant flow request format
* An empty variable for the user’s ID

### Item 92

Make a request that returns the user’s Spotify username.

Convert the response to JSON and save the response id parameter to the user’s ID variable.

> Make the request to the following Spotify endpoint:

```code
https://api.spotify.com/v1/me
```

> You must pass a second argument with an object containing the headers object. See below

```javascript
{headers: headers}
```

### Item 93

Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID.

Use the [Spotify playlist endpoints](https://developer.spotify.com/web-api/playlist-endpoints/) to find a request that creates a new playlist.

Set the playlist name to the value passed into the method.

Convert the response to JSON and save the response id parameter to a variable called playlistID.

> Make a request to the following Spotify endpoint:

```code
/v1/users/{user_id}/playlists
```

> You must pass a second argument that contains an object with parameters for headers, method, and body.

### Item 94

Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID.

Use the [Spotify playlist endpoints](https://developer.spotify.com/web-api/playlist-endpoints/) to find a request that adds tracks to a playlist.

Set the URIs parameter to an array of track URIs passed into the method.

Convert the response to JSON and save the response id parameter to a variable called playlistID.

> Make a request to the following Spotify endpoint:

```code
/v1/users/{user_id}/playlists/{playlist_id}/tracks
```

> You must pass a second argument that contains an object with parameters for headers, method, and body.

### Item 95

In App.js update the .savePlaylist() method to call Spotify.savePlaylist().

After you call Spotify.savePlaylist(), reset the state of playlistName to 'New Playlist' and playlistTracks to an empty array.

## Deploy (Optional)

### Item 96

In this section, you will use [surge](https://surge.sh/) to deploy your Jammming project.

You will start by installing surge globally.

In your console, run `npm install --global surge`.

### Item 97

Before you deploy, you need to think of a domain name with the following format:

```code
SOME_NAME.surge.sh
```

SOME_NAME can be replaced with anything you like.

Next, you need to replace or add this URI to two locations in your project.

* In *Spotify.js, set redirectUri to your new domain
* In your [Spotify application](https://developer.spotify.com/my-applications/#!/applications), add your new domain as a redirect URI

### Item 98

Back in the command line, from the Jammming project’s root directory, run:

```bash
npm run build
```

### Item 99

cd into the build directory and run the command

```bash
surge
```

Follow the steps on the screen. Change the domain value to your new URI.

Congrats! You’ve just deployed a React App that queries the Spotify API!
