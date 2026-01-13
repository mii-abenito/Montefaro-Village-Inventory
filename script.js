
<script>
// Load the JSON file once
fetch('units.json')
  .then(r => r.json())
  .then(data => window.units = data);

// Function to show details
function showUnit(id) {
  const u = units[id]; // look up the lot by its ID
  if (!u) {
    alert("Unit data not found.");
    return;
  }

  // Map status to emoji + color
  const statusMap = {
    "Available": { emoji: "🟢", color: "#2ecc71" },
    "Sold":      { emoji: "🔴", color: "#e74c3c" },
    "Reserved":  { emoji: "🟡", color: "#f1c40f" }
  };

  const statusInfo = statusMap[u.status] || { emoji: "", color: "#000" };

  // Show popup (simple alert version)
  alert(
    `Unit: ${id}\nArea: ${u.area}\nPrice: ${u.price || "N/A"}\nStatus: ${statusInfo.emoji} ${u.status}`
  );
}
</script>
