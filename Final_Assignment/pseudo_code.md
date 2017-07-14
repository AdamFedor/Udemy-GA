# Pseudo Code for Final Assignment
## Path A: View stats on oneCompare
### User selects speaker1 option from drop list
   1. H3/Image to speaker1 is updated to drop list selection
   1. Value of speaker1 is stored
   1. speaker1 drop list resets to blank
### User selects amp1 option from the drop list
   1. H3/Image to amp1 is updated to drop list selection
   1. Value of amp1 is stored
   1. amp1 drop list resets to blank
### User clicks button to compare or review.
   1. speaker1 and amp1 are processed
      1. CALCULATIONS HERE
   1. H1 and paragraph remain, remaining below buttons, images, sections, form elements above the footer are replaced.
      1. H3 and paragraph displaying results and the amp1 / speaker1 images displayed to the right.
   1. Once reviewed the user can select a button to try again.
      1. H1 and paragraph remain, all below images are swapped.
## Path B: View stats and compare on oneCompare and twoCompare
### User selects speaker2 option from drop list (Go back to RepeatAA)
   1. H3/Image to speaker2 is updated to drop list selection
   1. Value of speaker2 is stored
   1. speaker2 drop list resets to blank
### User clicks button to add another row
   1. speaker2 and amp2 sections are visible
### User selects amp2 option from drop list
   1. H3/Image to amp2 is updated to drop list selection
   1. Value of amp2 is stored
   1. amp2 drop list resets to blank
### Additional comparisons up to 5x
   1. Repeat creation steps until 5x are created. Go to RepeatAA.
### User clicks button to compare or review.
   1. speaker1 and amp1 are processed (RepeatBB)
      1. CALCULATIONS HERE
   1. H1 and paragraph remain, remaining below buttons, images, sections, form elements above the footer are replaced.
      1. H3 and paragraph displaying results and the amp1 / speaker1 images displayed to the right.
   1. Once reviewed the user can select a button to try again.
      1. H1 and paragraph remain, all below images are swapped.
   1. For each comparison, go to RepeatBB and add 1 for each
   1. H1 and paragraph remain, remaining below buttons, images, sections, form elements above the footer are replaced.
      1. H3 and paragraph displaying results and the amp1 / speaker1 images displayed to the right.
      1. Repeat for all other results (max up to 5)
   1. Once reviewed the user can select a button to try again.
      1. H1 and paragraph remain, all below images are swapped.
## Path C: Custom speaker is selected
### User wishes to create a custom input
   1. Button is selected for custom speaker
   1. Everything under H1 and Paragraph are removed.
   1. H2 is created stating title
   1. H3 states various inputs, form inputs are the inputs, default on speaker.
   1. If the user wants to update an amp, they toggle the pillbox to amp. H3 and forms update.
   1. Results on the right updates as inputs are added.
   1. If inputs are not accurate to type and limitations (char count) then alert pops up and user is returned to the custom field with inputs not cleared.
### Once inputs are added
   1. If cancel is selected, user is returned to previous layout. Page resets.
   1. If create is selected, the data is stored in an object. User is returned to previous layout. Page resets.
### Editing
   1. User can go to Path A or Path B using new stored data.
   1. Otherwise a user can create additional custom layouts.
