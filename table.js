const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("nama")) {
      const nama = urlParams.get("nama");
      const nim = urlParams.get("nim");
      const programStudi = urlParams.get("prodi");
      const email = urlParams.get("email");
      const notelp = urlParams.get("no_telp");
      const jenisKelamin = urlParams.get("jenis-kelamin");
      const tanggalLahir = urlParams.get("tanggal-lahir");
      const alamat = urlParams.get("alamat");
    
      const dataTable = document.getElementById("data-table");
    
      const newRow = dataTable.insertRow(1);
    
      const namaCell = newRow.insertCell(0);
      const nimCell = newRow.insertCell(1);
      const prodiCell = newRow.insertCell(2);
      const emailCell = newRow.insertCell(3);
      const notelpCell = newRow.insertCell(4)
      const jenisKelaminCell = newRow.insertCell(5);
      const tanggalLahirCell = newRow.insertCell(6);
      const alamatCell = newRow.insertCell(7);
    
      namaCell.innerHTML = nama;
      nimCell.innerHTML = nim;
      prodiCell.innerHTML = programStudi;
      emailCell.innerHTML = email;
      notelpCell.innerHTML = notelp;
      jenisKelaminCell.innerHTML = jenisKelamin;
      tanggalLahirCell.innerHTML = tanggalLahir;
      alamatCell.innerHTML = alamat;
    } 