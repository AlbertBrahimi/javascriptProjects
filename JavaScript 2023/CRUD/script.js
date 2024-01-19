document.querySelector('#crud-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const email = document.querySelector('#email').value;
    
    const table = document.querySelector('#item-table tbody');
    const newRow = table.insertRow(table.rows.length);
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = email;
    cell4.innerHTML = `<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
    
    // Clear the form
    this.reset();
  });
  
  document.querySelector('#item-table').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.parentNode.parentNode;
      row.parentNode.removeChild(row);
    } else if (event.target.classList.contains('edit-btn')) {
      const row = event.target.parentNode.parentNode;
      const cells = row.cells;
      const name = cells[0].textContent;
      const age = cells[1].textContent;
      const email = cells[2].textContent;
  
      // Populate the form with the data for editing
      document.querySelector('#name').value = name;
      document.querySelector('#age').value = age;
      document.querySelector('#email').value = email;
  
      // Remove the row from the table
      row.parentNode.removeChild(row);
    }
  });
  