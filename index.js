function updateDateTime() {
    // Get the element where the date/time will be displayed
    const dateTimeElement = document.getElementById("datetime");
    // Get the current date and time as a localized string
    const currentDateTime = new Date().toLocaleString();
    // Update the date/time display
    dateTimeElement.textContent = currentDateTime;
 }
 // Wait for the DOM to be fully loaded before setting up event listeners
 document.addEventListener("DOMContentLoaded", function() {
    setInterval(updateDateTime, 1000);     // Update date/time every second
 
    // Initial calls to display data immediately
    updateDateTime();
 });
 