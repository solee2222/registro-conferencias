document.getElementById('formulario-registro').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const carrera = document.getElementById('carrera').value;
    const conferencias = document.querySelectorAll('input[name="conferencias"]:checked');
  
    const mensaje = document.getElementById('mensaje');
  
    if (!nombre || !correo || !carrera) {
      mensaje.textContent = "Todos los campos deben estar llenos.";
      mensaje.style.color = "red";
      return;
    }

    if (!correo.endsWith("@uamv.edu.ni")) {
      mensaje.textContent = "Correo no válido. Asegúrate que sea @uamv.edu.ni";
      mensaje.style.color = "red";
      return;
    }
  
    if (conferencias.length === 0) {
      mensaje.textContent = "Debe seleccionar al menos una conferencia.";
      mensaje.style.color = "red";
      return;
    }

    document.getElementById('formulario-registro').reset();
    mensaje.style.color = "green";
    mensaje.textContent = "Registro completado exitosamente.";
    alert("¡Gracias por inscribirte!");



  });
  