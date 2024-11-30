document.getElementById("button-agregar").addEventListener("click", () => {
    const titulo = document.getElementById("Titulo").value.trim();
    const año = document.getElementById("Anio").value.trim();
    const descripcion = document.getElementById("Descripcion").value.trim();
    const url = document.getElementById("URL").value.trim();

    if (titulo === "") { Swal.fire({ icon: "warning", title: "Campo obligatorio", text: " El nombre del álbum es obligatorio.", }); return; } if (anio === "" || isNaN(anio) || anio <= 0) { Swal.fire({ icon: "warning", title: "Año inválido", text: "¡El año de lanzamiento es obligatorio y debe ser un número mayor a cero!", }); return; } if (url === "" || !url.startsWith("http")) { Swal.fire({ icon: "warning", title: "URL inválida", text: "Ingresa una URL válida o un enlace de YouTube.", }); return; }
if (titulo === "") {
    Swal.fire({
      icon: "warning",
      title: "Campo obligatorio",
      text: "El nombre del álbum es obligatorio.",
    });
    return;
  }

  if (año === "" || isNaN(año) || año <= 0) {
    Swal.fire({
      icon: "warning",
      title: "Año inválido",
      text: "¡El año de lanzamiento es obligatorio y debe ser un número mayor a cero!",
    });
    return;
  }

  if (url === "" || !url.startsWith("http")) {
    Swal.fire({
      icon: "warning",
      title: "URL inválida",
      text: "Ingresa una URL válida o un enlace de YouTube.",
    });
    return;
  }

  if (descripcion.length > 400) {
    Swal.fire({
      icon: "warning",
      title: "Descripción demasiado larga",
      text: "¡La descripción no puede tener más de 400 caracteres!",
    });
    return;
  }
  agregarAlbum(titulo, año, descripcion, url);
});

      