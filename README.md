# Movie Seats Booking System

### Uses local storage & JS in a simple movie seat booking application

This application demonstrates the use of the localStorage (LS) property in order to aid User Experience. By saving the user's seleciton into LS, their data will not be lost in the event of dropped connection / accidental refresh which can cause tremendous frustration.

### How does it work?

In this example, once the user has selected some seats, the chosen seats are placed into a nodelist via the querySelectorAll method. The nodelist is then spread into a regular array and mapped against all seats to retrieve their specific index. The new array of indexes is then saved to local storage using the JSON.stringify method. To populate the UI with the saved data, the local storage is accessed using the JSON.parse method and the seats with the matching index of the array have the 'selected' class added to them. A similar method is used to save the total count, price and current film selection.

### How would I improve on this?

If I was to improve this project, I would add a connection to a database which would allow the user to submit their selection, this database would then return the seats as occupied depending on the movie selection.
