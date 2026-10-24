# Arena Duel ⚔️

Duelo medieval 1 contra 1 en tiempo real, al estilo de los juegos de cartas y torres. Cada jugador entra desde su móvil, los dos usan el mismo mazo de 8 cartas y gana quien derribe más torres.

**Jugar:** https://pablopalc.github.io/arena-duel/

## Cómo jugar con un amigo

1. Abre el juego y pulsa **Crear sala**. Te sale un código de 4 letras.
2. Pulsa **Compartir enlace** y mándaselo por WhatsApp (o dale el código).
3. Tu amigo abre el enlace y pulsa **Entrar**. Empieza la cuenta atrás.

También puedes **practicar contra la máquina** en tres niveles: Escudero, Caballero y Rey Negro.

## Reglas

- Arrastra una carta a tu mitad del campo (o tócala y luego toca el campo).
- Las cartas cuestan elixir, que se recarga solo. En el último minuto va al doble.
- Cada torre pequeña derribada es una corona. Si cae la torre del rey, se acaba la partida.
- Si tiras una torre, puedes soltar tropas en ese lado del campo rival.
- Empate a coronas a los 3 minutos: muerte súbita de 1 minuto con elixir x3.

## El mazo

| Carta | Elixir | Qué hace |
|---|---|---|
| 🤺 Caballero | 3 | Tanque cuerpo a cuerpo |
| 🏹 Arqueras | 3 | Dos tiradoras, alcanzan voladores |
| 👺 Duendes | 2 | Tres tropas muy rápidas y frágiles |
| 🗿 Gólem | 5 | Mucha vida, solo ataca edificios |
| 🐉 Dragoncito | 4 | Vuela y hace daño en área |
| 🧙 Mago | 5 | Daño en área a distancia |
| ☄️ Bola de fuego | 4 | Hechizo de área, empuja tropas |
| 🎯 Ballesta | 3 | Defensa fija durante 30 s |

## Cómo funciona por dentro

- HTML, CSS y JavaScript sin frameworks ni build: se publica tal cual en GitHub Pages.
- El móvil que crea la sala ejecuta la simulación (20 ticks/s) y envía el estado al otro; el invitado manda solo sus jugadas.
- Conexión directa entre móviles con WebRTC ([PeerJS](https://peerjs.com)). Si la red no lo permite, cambia sola a un relé MQTT público.
- Sonidos sintetizados con Web Audio; gráficos dibujados en Canvas.

```
js/data.js    cartas, torres y constantes
js/sim.js     simulación (movimiento, combate, puentes, tiempo)
js/bot.js     IA del modo práctica
js/render.js  dibujo de la arena y efectos
js/net.js     salas, WebRTC y relé
js/main.js    menús, partida y controles
```

Para probarlo en local: `python3 -m http.server` en esta carpeta y abre `http://localhost:8000`.

---
Hecho por [palazondev](https://palazondev.com).
