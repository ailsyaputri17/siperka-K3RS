let jenisPemantauan = "";


function pilihPemantauan(jenis) {

    jenisPemantauan = jenis;

    document.getElementById(
        "jenisPemantauan"
    ).value = jenis;


    document.getElementById(
        "formTitle"
    ).textContent =
        "Formulir Pemantauan Risiko " + jenis;


    document.querySelector(
        ".welcome"
    ).classList.add("hidden");


    document.querySelector(
        ".menu-grid"
    ).classList.add("hidden");


    document.getElementById(
        "formSection"
    ).classList.remove("hidden");


    document.getElementById(
        "successMessage"
    ).classList.add("hidden");


    const tanggal =
        document.getElementById("tanggal");


    if (!tanggal.value) {

        const hariIni =
            new Date()
            .toISOString()
            .split("T")[0];

        tanggal.value = hariIni;
    }

}


function kembaliMenu() {

    document.querySelector(
        ".welcome"
    ).classList.remove("hidden");


    document.querySelector(
        ".menu-grid"
    ).classList.remove("hidden");


    document.getElementById(
        "formSection"
    ).classList.add("hidden");


    document.getElementById(
        "successMessage"
    ).classList.add("hidden");


    document.getElementById(
        "monitoringForm"
    ).reset();

}


document.getElementById(
    "monitoringForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const data = {

            jenisPemantauan:
                jenisPemantauan,

            tanggal:
                document.getElementById(
                    "tanggal"
                ).value,

            petugas:
                document.getElementById(
                    "petugas"
                ).value,

            unit:
                document.getElementById(
                    "unit"
                ).value,

            area:
                document.getElementById(
                    "area"
                ).value,

            risiko:
                document.getElementById(
                    "risiko"
                ).value,

            dampak:
                document.getElementById(
                    "dampak"
                ).value,

            pengendalian:
                document.getElementById(
                    "pengendalian"
                ).value,

            hasil:
                document.getElementById(
                    "hasil"
                ).value,

            rekomendasi:
                document.getElementById(
                    "rekomendasi"
                ).value,

            status:
                "Belum Diverifikasi",

            waktuInput:
                new Date().toISOString()

        };


        console.log(
            "Data pemantauan:",
            data
        );


        document.getElementById(
            "formSection"
        ).classList.add("hidden");


        document.getElementById(
            "successMessage"
        ).classList.remove("hidden");

    }
);
