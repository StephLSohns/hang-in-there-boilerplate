# Hang In There

A boilerplate repo.

## Set Up  
### Derek/Steph-- OUR FIRST DAY On The Job: the following was done by Derek so he could get firsthand experience setting up the repo for himself and his collaborators. However, we did do this step by step (together) really working on and solidifying github commands both on github and in the terminal throughout the project.


1. One teammate: fork this repository
2. Go to settings and turn on GitHub Pages for this repository
3. All teammates: clone down this repository
4. `cd` into the repository
5. Run `open index.html` to view it in the browser

## Progression

### Iteration 0 - Main Page
 We worked on this with each other and with our respective mentors/rocks etc. Derek's solution was the neatest and so we went with his code and with the project providing the random index /math.random function, we were able to get through this part and see the refreshing page of many different inspirational posters from the images, titles and quotes arrays.
  [link](https://turingschool.slack.com/files/USD2ESBDM/F010XSDQ4SF/screen_shot_2020-04-01_at_9.28.59_pm.png)

![screenshot of main page showing poster](/readme-imgs/homepage.png)

- When the page loads, we should see a poster with a randomly selected image, title, and quote

### Iteration 1 - Switching Views
## Iteration1 was my personal favorite and I think one of the easier iterations to work on together -we both really understood the properties and attributes and when to add or remove or exactly how everything is linking up from the function all the way back thru event listeners, variable and into html. These functions were smaller succinct and easier to write. [link](https://turingschool.slack.com/files/USD2ESBDM/F010XSFJ11R/screen_shot_2020-04-01_at_9.32.09_pm.png)
## [link](https://turingschool.slack.com/files/USD2ESBDM/F011AMVEH46/screen_shot_2020-04-01_at_9.33.35_pm.png)

Form page:
![screenshot of form](/readme-imgs/form.png)

Saved posters page (once working with extra saved posters):
![screenshot of saved posters page](/readme-imgs/saved.png)

- When a user clicks the "Make Your Own Poster" button, we should see the form, and the main poster should be hidden
- When a user clicks the "View Saved Posters" button, we should see the saved posters area, and the main poster should be hidden
- When a user clicks the "Nevermind, take me back!" or "Back to Main" buttons, we should only see the main poster section
- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

_Hint: go check out the HTML and CSS files to see how the form and saved posters sections are being hidden in the first place_

## Iteration 2 - Creating a New Poster  OUR LINK
[link](https://turingschool.slack.com/files/USD2ESBDM/F0118MHM9V2/screen_shot_2020-04-01_at_9.34.43_pm.png) [link](https://turingschool.slack.com/files/USD2ESBDM/F010WJ9K15G/screen_shot_2020-04-01_at_9.35.37_pm.png)

## This iteration allowed us to get more familiar with input fields and work on understanding how the input field in html links up to the final page, this took a while. Even when we had gotten the field to accept our inputs, we couldn't get it to save at first, and then we couldn't get it to return to the main page etc. but finally things came together with lots of time and effort and help of course.

Form being filled out:
![screenshot of form](/readme-imgs/form.png)

Once poster is saved:
![screenshot of result](/readme-imgs/form-result.png)

- On the new poster form view, users should be able to fill out the three input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
  - Use the values from the inputs to create a new instance of our Poster class
  - Change back to the main poster view (hiding the form view again)
  - Display the newly created poster image, title, and quote in the main view

## Iteration 3 - Saving & Viewing Posters  OUR LINK:
[link](https://turingschool.slack.com/files/USD2ESBDM/F010XSM17T5/screen_shot_2020-04-01_at_9.37.24_pm.png)
## This one was a doozy for us, we went through many forms of code, constantly changing functions, getting one thing to work but breaking another function in the process. We worked together with Scott and sometimes individually with our mentors or rocks. So we managed to get through all of iteration 3. And then we did refactoring and cleanup and this Readme update.

Saved posters view:
![screenshot of saved posters section](/readme-imgs/saved.png)

- When a user clicks the "Save This Poster" button, the current main poster will be added to the `savedPosters` array.
- If a user clicks the "Save This Poster" more than once on a single poster, it will still only be saved once (no duplicates)
- When a user clicks the "Show Saved Posters" button, we should see the saved posters section
- All the posters in the `savedPosters` array should be displayed in the saved posters grid section

## Iteration 4 - Deleting Saved Posters

- From the saved posters view, if a user double clicks a saved poster, it will be deleted

_Hint: How will you update the data model to achieve this?_

## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
- In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved poster, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear


Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)
