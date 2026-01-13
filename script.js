async function showUnit(unitId) {
  const response = await fetch('data.json');
  const data = await response.json();

  if (data[unitId]) {
    const unit = data[unitId];
    alert(`${unit.name}\n${unit.size}\n🟢 ${unit.status}`);
  } else {
    alert("Unit data not found.");
  }
}
