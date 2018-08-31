# **Restaurant Reviews App Stage 1**

### This is to accomplish Project 5 for Udacity Nanodegree course (Front-End Web Dev)
**Files:**

| File type | Description | File name |
| ------ | ------ |------ |
| HTML | Udacity supplied | index.html, restaurant.html|
| CSS Files Folder | Udacity supplied | /css |
| JS Files Folder | Udacity supplied | /js |
| Images Folder | Udacity supplied | /img |
| Data Folder | Udacity supplied | /data/restaurants.json |
| JS | Service Worker File | sw.js |
| JS | Manifest File | manifest.json |
| Image | Icon Files | favicon.png, icon.jpeg |

----
## **Requirements:**
Make the provided site fully responsive by implementing:
----
### 1) Responsive Design:
 - All content is responsive and displays on a range of display sizes.
 - Content should make use of available screen real estate and should display correctly at all screen sizes.
 - An image's associated title and text renders next to the image in all viewport sizes.
 - Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
 - On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.
 
### 2) Accessibility:
 - All content-related images include appropriate alternate text that clearly describes the content of the image.
 - Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
 - Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
 
### 3) Offline Availability:
 - When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.
 
----
----
## **How to run the application:**
----
* Download all nessessary files from [here];
* Start up a simple HTTP server to serve up the site files on your local computer: 
    * In a terminal, spin up the server with python `-m SimpleHTTPServer 8666` (for more information check the [Udacity guide]);
* With your server running, visit the site: `http://localhost:8666`;

----
#### **NOTE!**

**The code was tested to the best of project author's ability using:**
- Browsers: Google Chrome, Google Chrome Canary and Opera;
- Mobile devices: Android powered, 4.8 & 5.0 inch screens.
 - **That does not unfortunately guarantee that your device will display things as expected**
----

----
## **External libraries:**
----
- #### [Leaflet]

- #### [Mapbox]

----
----
## **Useful Sources:**
----
- [Service Worker Cookbook]
- [Stackoverflow]
- [W3Schools]
- [MDN]
- [Dillinger]
- [Google]
----
**All resources and ideas that needed attribution were either mentioned above or added directly into the code.**

----
_Developed by a proud Grow with Google scholarship recipient (USA, 2018)_

----
[Udacity guide]: <https://github.com/udacity/mws-restaurant-stage-1/blob/master/README.md>
[Service Worker Cookbook]: <https://serviceworke.rs/>
[here]: <https://github.com/sophistique-chat/project-5-Restaurant-Reviews-App-Stage1>
[Stackoverflow]: <https://stackoverflow.com/>
[W3Schools]: <www.w3schools.com>
[MDN]: <https://developer.mozilla.org/>
[Dillinger]: <https://dillinger.io/>
[Google]: <www.google.com>
[Leaflet]: <https://leafletjs.com/>
[Mapbox]: <https://www.mapbox.com/install/>
