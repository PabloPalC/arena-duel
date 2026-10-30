# Arena Duel ⚔️

Duelo medieval 1 contra 1 en tiempo real, al estilo de los juegos de cartas y torres. Cada jugador entra desde su móvil con su propio mazo de 8 cartas (de 27) y gana quien derribe más torres.

**Jugar:** https://pablopalc.github.io/arena-duel/

## Cómo jugar con un amigo

1. Elige tu mazo en **Tu mazo** (tienes 3 huecos para guardar mazos distintos).
2. Pulsa **Crear sala** y comparte el enlace (o el código de 4 letras).
3. Tu amigo abre el enlace y pulsa **Entrar**. Cuenta atrás y a luchar.

Ganar online da **+30 🏆** y perder quita 20. El juego guarda tu historial contra cada rival. También puedes **practicar contra la máquina** en tres niveles (no cuenta para trofeos).

## Reglas

- Arrastra una carta a tu mitad del campo (o tócala y luego toca el campo).
- Las cartas cuestan elixir, que se recarga solo. En el último minuto va al doble.
- Cada torre pequeña derribada es una corona. Si cae la torre del rey, se acaba la partida.
- Si tiras una torre, puedes soltar tropas en ese lado del campo rival.
- En los últimos 10 segundos aparece una cuenta atrás. Con empate a coronas hay muerte súbita de 1 minuto con elixir x3.

## Las 27 cartas

| Rareza | Cartas |
|---|---|
| Común | Caballero (3), Arqueras (3), Duendes (2), Esqueletos (1), Murciélagos (2), Granadero (3), Bárbaros (5), Lluvia de Flechas (3), Ballesta (3) |
| Especial | Gigante (5), Piromante (5), Arcabucero (4), Berserker (4), Lobo Asaltante (4), Autómata (4), Bola de Fuego (4), Cripta (3), Torre Arcana (5) |
| Épica | Draco (4), Lancero (5), Legión de Huesos (3), Relámpago (6), Ventisca (4), Grito de Guerra (2) |
| Legendaria | Gólem (7), Nigromante (5), Gélida (3) |

Mecánicas: carga del Lancero (doble daño), giro del Berserker, ralentizar (Gélida), congelar (Ventisca), furia (Grito de Guerra), generadores (Cripta, Nigromante), división al morir (Gólem), salto del río (Lobo Asaltante) y rayo que se intensifica (Torre Arcana). Los números se equilibraron con miles de partidas simuladas entre bots con mazos aleatorios.

## Cómo funciona por dentro

- **Gráficos 3D** con [Three.js](https://threejs.org). Los personajes se modelan por código, y cada tipo de tropa se dibuja con *instancing*: 12 esqueletos cuestan lo mismo que uno. Las partículas, sombras y barras de vida van en la GPU, las texturas se pintan por código y la resolución se adapta a los FPS del móvil. Hay un modo ahorro de batería a 30 FPS.
- **Arte de las cartas**: cada carta es un render de su propio modelo 3D (`tools/render_art.py`).
- **Red**: el móvil que crea la sala simula la partida (20 ticks/s) y envía el estado; el invitado manda sus jugadas.
  - Conexión directa WebRTC ([PeerJS](https://peerjs.com)) por un canal no ordenado, para que un paquete perdido no congele la partida. Si no hay conexión directa, usa un relé MQTT.
  - La tropa aparece al instante al soltarla (predicción) y el búfer se adapta a la calidad de la conexión.
- **Carga**: un solo archivo minificado con hash y un service worker que guarda el juego en caché, así la segunda vez abre al instante.

```
js/data.js       cartas, unidades, torres y constantes
js/sim.js        simulación (movimiento, combate, hechizos, estados)
js/bot.js        IA del modo práctica
js/models.js     modelos 3D de personajes, edificios y hechizos
js/textures.js   texturas pintadas por código
js/render3d.js   motor gráfico (instancing, efectos, cámara)
js/render.js     vista 2D de respaldo si no hay WebGL (?2d para forzarla)
js/net.js        salas, WebRTC y relé
js/main.js       menús, mazos, trofeos, partida y controles
tools/           build, generador de arte y plantilla del service worker
```

## Desarrollo

```bash
npm install
npm run dev          # servidor en http://localhost:8765 → abre /index.dev.html
npm run art          # vuelve a renderizar art/*.webp (con el servidor en marcha)
npm run build        # genera build/, index.html y sw.js para publicar
```

---
Hecho por [palazondev](https://palazondev.com).
