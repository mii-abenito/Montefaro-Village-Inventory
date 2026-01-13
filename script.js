// Load unit data
fetch('units.json')
  .then(res => res.json())
  .then(data => window.units = data);

// Show popup when a unit is clicked
function showUnit(id) {
  const u = units[id];
  const popup = document.getElementById("popup");
  popup.innerText = `Unit: ${id}\nArea: ${u.area}\nStatus: ${u.status}`;
  popup.style.display = "block";
}
