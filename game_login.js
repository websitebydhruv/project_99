// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_Name = document.getElementById("player1_name_input").value;
  player2_Name = document.getElementById("player2_name_input").value;

  // Store these values locally
  localStorage.setItem("player1_Name", player1_Name);
  localStorage.setItem("player2_Name", player2_Name);

  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
}