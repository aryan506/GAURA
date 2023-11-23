// script.js

// Function to perform the search operation
function performSearch(searchInput) {
  // Simulated search operation
  // Replace this code with your actual search implementation
  
  // Here, we are returning a dummy result with the searched land record ID
  return "Land record ID: " + searchInput;
}

// Function to update the search result on the page
function updateSearchResult(result) {
  var searchResult = document.getElementById('searchResult');
  searchResult.textContent = result;
}

// Event listener for form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  var searchInput = document.getElementById('searchInput').value;
  
  // Call the performSearch function to get the search result
  var searchResult = performSearch(searchInput);
  
  // Update the search result on the page
  updateSearchResult(searchResult);
});
