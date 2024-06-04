/* JavaScript for toggle functionality */
document.getElementById('toggle-button').addEventListener('click', function() {
    var workingHoursList = document.getElementById('working-hours');
    if (workingHoursList.classList.contains('hidden')) {
        workingHoursList.classList.remove('hidden');
    } else {
        workingHoursList.classList.add('hidden');
    }
});