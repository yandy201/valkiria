document.addEventListener('DOMContentLoaded', () => {
  // === Elementos iniciales ===
  const capa = document.getElementById('superposicion');
  const ventana = document.getElementById('ventana');
  const btnToggle = document.getElementById('toggleNoche');

  const pc = document.querySelector('.pc');
  const tablero = document.querySelector('.tablero');
  const telefono = document.querySelector('.telefono');

  const carpetas = document.querySelectorAll('.carpeta');
  const overlay = document.getElementById('zoomOverlay');

  const carrusel = document.getElementById('carrusel');
  const carruselImg = document.getElementById('carrusel-img');
  const cerrarCarruselBtn = document.getElementById('cerrarCarrusel');
  const telefonoPantalla = document.getElementById('telefonoPantalla');

  const diploma = document.querySelector('.diploma');
  

if (diploma && overlay) {
  diploma.addEventListener('click', () => {
    const estaAcercado = diploma.classList.contains('acercado');

    diploma.classList.toggle('acercado');
    overlay.style.display = estaAcercado ? 'none' : 'block';
  });

  overlay.addEventListener('click', () => {
    diploma.classList.remove('acercado');
    overlay.style.display = 'none';
  });
}

// === Splash screen ===
const splash = document.getElementById('splashScreen');

window.addEventListener('load', () => {
  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 1500);
  }, 1000);
});

  // === Miniaturas del tablero ===
  const fotosMiniaturas = [
    document.getElementById('foto1'),
    document.getElementById('foto2'),
    document.getElementById('foto3'),
    document.getElementById('foto4'),
    document.getElementById('foto5')
  ];

  // === Variables del carrusel ===
  let indiceRecurso = 0;
  let recursosActuales = [];

  // === Hora actual y modo noche ===
  const hora = new Date().getHours();
  let modoManual = localStorage.getItem('modoNoche') === 'true';

  // === Aplicar modo noche/día ===
  function aplicarModo(nightMode) {
    capa.classList.remove('modo-manana', 'modo-tarde', 'modo-noche');

    if (nightMode) {
      capa.classList.add('modo-noche');
      ventana.src = 'Imagenes/ventana-noche.png';
      btnToggle.textContent = '☀️ Modo Día';
      ventana.classList.replace('dia', 'noche');
    } else {
      if (hora >= 6 && hora < 12) {
        capa.classList.add('modo-manana');
        ventana.src = 'Imagenes/ventana-dia.png';
      } else if (hora >= 12 && hora < 18) {
        capa.classList.add('modo-tarde');
        ventana.src = 'Imagenes/ventana-tarde.png';
      } else {
        capa.classList.add('modo-noche');
        ventana.src = 'Imagenes/ventana-noche.png';
      }
      btnToggle.textContent = '🌙 Modo Noche';
      ventana.classList.replace('noche', 'dia');
    }
  }

  aplicarModo(modoManual);

  // === Botón de modo noche ===
  btnToggle?.addEventListener('click', () => {
    modoManual = !modoManual;
    localStorage.setItem('modoNoche', modoManual);
    aplicarModo(modoManual);
  });

  // === Zoom del PC con carpetas ===
  if (pc && carpetas.length > 0 && overlay) {
    pc.addEventListener('click', () => {
      const estaAcercado = pc.classList.contains('acercado');

      carpetas.forEach(c => {
        c.style.display = estaAcercado ? 'none' : 'block';
      });

      pc.classList.toggle('acercado');
      overlay.style.display = estaAcercado ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
      carpetas.forEach(c => c.style.display = 'none');
      pc.classList.remove('acercado');
      overlay.style.display = 'none';
    });
  }

  // === Zoom del tablero con miniaturas ===
  if (tablero && overlay) {
    tablero.addEventListener('click', () => {
      const estaAcercado = tablero.classList.contains('acercado');

      fotosMiniaturas.forEach(foto => {
        foto.style.display = estaAcercado ? 'none' : 'block';
      });

      tablero.classList.toggle('acercado');
      overlay.style.display = estaAcercado ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
      fotosMiniaturas.forEach(foto => foto.style.display = 'none');
      tablero.classList.remove('acercado');
      overlay.style.display = 'none';
    });
  }

  // === Zoom del teléfono - Mostrar número ===
  if (telefono && overlay && telefonoPantalla) {
    telefono.addEventListener('click', () => {
      const estaAcercado = telefono.classList.contains('acercado');

      telefono.classList.toggle('acercado');
      overlay.style.display = estaAcercado ? 'none' : 'block';
      telefonoPantalla.style.display = estaAcercado ? 'none' : 'flex';
    });

    overlay.addEventListener('click', () => {
      telefono.classList.remove('acercado');
      overlay.style.display = 'none';
      telefonoPantalla.style.display = 'none';
    });
  }

  // === Función abrir carrusel ===
  function abrirCarrusel(recursos) {
    recursosActuales = [...recursos];
    indiceRecurso = 0;
    carruselImg.src = recursos[indiceRecurso];
    carrusel.style.display = 'flex';
  }

  // === Eventos para abrir carpetas en carrusel (PC) ===
  document.getElementById('carpeta1')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso1.png',
      'Imagenes/recurso2.png',
      'Imagenes/recurso3.png',
      'Imagenes/recurso5.png',
      'Imagenes/recurso6.png',
      'Imagenes/recurso7.png'
    ];
    abrirCarrusel(recursos);
  });

  document.getElementById('carpeta2')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso2.png',
      'Imagenes/recurso3.png',
      'Imagenes/recurso5.png',
      'Imagenes/recurso6.png',
      'Imagenes/recurso7.png',
      'Imagenes/recurso1.png'
    ];
    abrirCarrusel(recursos);
  });

  document.getElementById('carpeta3')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso3.png',
      'Imagenes/recurso5.png',
      'Imagenes/recurso6.png',
      'Imagenes/recurso7.png',
      'Imagenes/recurso1.png',
      'Imagenes/recurso2.png'
    ];
    abrirCarrusel(recursos);
  });

  document.getElementById('carpeta4')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso5.png',
      'Imagenes/recurso6.png',
      'Imagenes/recurso7.png',
      'Imagenes/recurso1.png',
      'Imagenes/recurso2.png',
      'Imagenes/recurso3.png'
    ];
    abrirCarrusel(recursos);
  });

  document.getElementById('carpeta5')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso6.png',
      'Imagenes/recurso7.png',
      'Imagenes/recurso1.png',
      'Imagenes/recurso2.png',
      'Imagenes/recurso3.png',
      'Imagenes/recurso4.png'
    ];
    abrirCarrusel(recursos);
  });

  document.getElementById('carpeta6')?.addEventListener('click', () => {
    const recursos = [
      'Imagenes/recurso7.png',
      'Imagenes/recurso1.png',
      'Imagenes/recurso2.png',
      'Imagenes/recurso3.png',
      'Imagenes/recurso5.png',
      'Imagenes/recurso6.png'
    ];
    abrirCarrusel(recursos);
  });

  // === Eventos para abrir carrusel desde miniaturas del tablero ===
  fotosMiniaturas.forEach((foto, index) => {
    foto?.addEventListener('click', () => {
      const fotos = [
        'Imagenes/foto1.png',
        'Imagenes/foto2.png',
        'Imagenes/foto3.png',
        'Imagenes/foto4.png',
        'Imagenes/foto5.png'
      ];
      abrirCarruselDesde(index);
    });
  });

  // === Carrusel: Navegación ===
  function abrirCarruselDesde(indiceInicial = 0) {
    const fotos = [
      'Imagenes/foto1.png',
      'Imagenes/foto2.png',
      'Imagenes/foto3.png',
      'Imagenes/foto4.png',
      'Imagenes/foto5.png'
    ];
    indiceRecurso = indiceInicial;
    recursosActuales = [...fotos];
    carruselImg.src = fotos[indiceRecurso];
    carrusel.style.display = 'flex';
  }

  document.getElementById('prev')?.addEventListener('click', () => {
    if (recursosActuales.length > 0) {
      indiceRecurso = (indiceRecurso - 1 + recursosActuales.length) % recursosActuales.length;
      carruselImg.src = recursosActuales[indiceRecurso];
    }
  });

  document.getElementById('next')?.addEventListener('click', () => {
    if (recursosActuales.length > 0) {
      indiceRecurso = (indiceRecurso + 1) % recursosActuales.length;
      carruselImg.src = recursosActuales[indiceRecurso];
    }
  });

  // === Cerrar carrusel ===
  cerrarCarruselBtn?.addEventListener('click', () => {
    carrusel.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === carrusel) {
      carrusel.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      carrusel.style.display = 'none';
    }
  });
});
