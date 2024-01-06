// Get the menu icon element
const menuIcon = document.querySelector('.menu-icon');

// Get the navigation element
const navigation = document.querySelector('nav');

// Toggle navigation visibility on menu icon click
menuIcon.addEventListener('click', function() {
  navigation.classList.toggle('show');
});
