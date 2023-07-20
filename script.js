function hitungBMI(){
    const beratBadan = parseFloat(document.getElementById("beratBadan").value);
    const tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value) / 100;
    const hasilBMI = beratBadan / (tinggiBadan * tinggiBadan);

    let kategoriBMI = "";
    if (hasilBMI < 18.5){
        kategoriBMI = "Kekurangan Berat Badan";
    }else if (hasilBMI >= 18.5 && hasilBMI < 24.9){
        kategoriBMI = "Normal/Ideal";
    }else if (hasilBMI >= 25 && hasilBMI < 29.9){
        kategoriBMI = "Kelebihan Berat Badan";
    }else{
        kategoriBMI = "Kegemukan/Obesitas";
    }
    const hasilText = `${hasilBMI.toFixed(2)}`;
    const hasilKategori = `${kategoriBMI}`;
    document.getElementById("hasilBMI").textContent = hasilText;
    document.getElementById("kategoriBMI").textContent = hasilKategori;

}
function resetForm(){
    document.getElementById("bmiForm").reset();
    document.getElementById("hasilBMI").textContent = "";
    document.getElementById("kategoriBMI").textContent = "";

}

