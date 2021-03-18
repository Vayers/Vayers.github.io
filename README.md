# Vay Channel Website

This (public) repository hosts the source files for the Vay Channel site.
This readme is written by Daniel Barenholz, and is meant for Vay in case he needs to change something.

## Vay wants to change stuff? Short version.

To work on the site, you must first:

1. Clone the github repository: `git clone <link>` (if this fails: [install git](#))
2. Move into the cloned directory: `cd Vayers.github.io` (use tab for autocomplete)
3. Install the dependencies `npm install` (if this fails: [install node!](https://nodejs.org/en/download/))
4. Run `npm run dev` to start working on the site; You should be able to see a live view through the link that gets posted!

To change text, open the `text.js` file (in `src` folder) and change the particular fields in there that you want to change!

Done? Run `git add .`, followed by `git commit -m "<some message to yourself on what changes you made>"`, and finally `git push`. Then, github will automatically rebuild the site and deploy it for you on github pages!

## What files are here?

All files that are used to build the site are listed in below screenshot.

![files](https://i.imgur.com/GaeU6sI.png)

The only relevant folder for you is `src`, which contains the source files of the site. Note that `public` is the public folder, where files will be served as-is. It's used for static assets such as icons, and the main index file. Check the [documentation](https://cli.vuejs.org/guide/html-and-static-assets.html) for more information.

In the source folder (`src`) we have:

1. `assets`: This contains the images used on the site, as well as custom styling that should be applied on ALL building blocks of the site (importing default styling, for instance).

   ![assets](https://i.imgur.com/XZ1K4Nf.png)

   _Note: `img.png` is the image that is shown in the middle of the site, in the circle._

2. `components`: This contains particular "building blocks" of the site. Something as simple as a button or link can be a building block.

   ![components](https://i.imgur.com/P7nBeoJ.png)

   - `Footer.vue`: This contains the text and styling for the footer of the site. A footer is what is being shown at the bottom of the site (_made by dbarenholz, hosted by github_)
   - `Link.vue`: This contains all necessary text and code and styling for a _single_ social link. Using code, the correct icon (or image) is selected, based on some properties that you can set.
   - `Playlist.vue`: This contains the necessary code to, based on a given (YouTube) playlist ID, generate a playlist on the site! Using properties, you can set how many videos are supposed to be shown (e.g. show the last 3 videos in the playlist).
   - `Video.vue`: This is a wrapper for `youtube-vue`, which allows you to include a youtube video with one line of code: `<youtube :video-id="videoID" ref="youtube" :fitParent="true"></youtube>`. Note how `videoID` is a property you can set when using this component.

3. `views`: These are the webpages you have. Since Vay site only has one page, this only has one file.

   ![views](https://i.imgur.com/5ha9mHB.png)

   _Note: `Home.vue` contains all HTML, all styling, and all code for the entire site. This is the place where above described components are used._

4. **Ignore: `main.js` and `App.vue`. You won't ever need to change this**.

5. `text.js`: This is a file that allows for Vay to change the text of the site, without needing to code!

   > **Documentation of `text.js`**.
   >
   > First and foremost, this is a `javascript` file, but it is very straightforward. Some documentation is written in the file itself (using `// comments`). Find a complete documentation here. The only part that is "difficult" is the links and playlist section. The rest is plain text.
   >
   > ```js
   > export default {
   >   // This is the title that show up below the image.
   >   title: "Vay Channel",
   >   // This is the intro text!
   >   introText: "You found my website!",
   >   // This is the title of the links section
   >   linksTitle: "Socials",
   >   // The [...] denotes that this is a list of things!
   >   links: [
   >     // The {...} denotes that the things themselves are objects.
   >     // Note: This "object" is the first link you see. Different order? Rearrange the objects (everything {...}, including the braces!)
   >     {
   >       // name: This is the text of the link that is visible
   >       name: "Vay Channel",
   >       // social: font awesome brand icon name. This is the icon that is used!
   >       // see: https://fontawesome.com/icons?s=brands for the correct name
   >       social: "youtube",
   >       // img: a custom image to use, leave blank if you use an icon
   >       img: "",
   >       // url: What the link links to.
   >       url: "https://www.youtube.com/channel/UCXNYNMa8d7b2TCqFe-1VF_Q",
   >     },
   >     // The second link that is shown
   >     {
   >       name: "This server is where I post sneak peeks of upcoming projects!",
   >       social: "discord",
   >       img: "",
   >       url: "https://discord.gg/aaapBxggFd",
   >     },
   >     // The third link that is shown
   >     {
   >       name: "Like what vay does and want to show your support? Click here!",
   >       social: "patreon",
   >       img: "",
   >       url: "https://www.patreon.com/vayvay",
   >     },
   >     // Add more links by copy-pasting one of the links, and changing the fields!
   >   ],
   >   // The title for the recommended video section
   >   youtubeRecommendedTitle: "Recommended Video",
   >   // The ID to the recommended youtube video
   >   youtubeRecommendedID: "iHrxYHiExNQ",
   >   // The title for the youtube feed section
   >   youtubeTitle: "Latest uploads",
   >   // Similar to links, these are the playlist that the site shows!
   >   // Note: Make sure that you only use DIFFERENT playlist IDs.
   >   playlists: [
   >     // User uploads
   >     {
   >       name: "Latest uploads",
   >       id: "UUXNYNMa8d7b2TCqFe-1VF_Q",
   >       vids: 3,
   >     },
   >   ],
   > };
   > ```
   >
   > Using this file, Vay can change:
   >
   > - The order of links shown, as well as what they link to, and their icon or image.
   > - The order of playlists shown, as well as what title should be used and what playlist should be used
   > - All plain text (except footer).

This concludes an overview of the files.

## I want a cool URL in stead of the current one!

If you want a cool URL, you need to buy a domain. Once you buy one, you can follow [this guide](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)!
