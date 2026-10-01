/**
 * Ilustraciones de la página Nosotros, dibujadas en SVG.
 *
 * Son de servidor y no cargan imágenes: todo el movimiento es CSS (clases
 * `ilus-*` en `globals.css`) y solo anima `transform` y `opacity`. Quien pidió
 * menos movimiento las ve quietas por la regla global de `prefers-reduced-motion`.
 *
 * Los colores de la carne y del chancho son fijos a propósito: son "el
 * dibujo", y se leen igual sobre fondo claro que oscuro. Lo que sí cambia con
 * el tema (vapor, brillo de fondo) usa `currentColor` o los tokens.
 */

/** Tabla de picar con un bife, una pierna y romero, con vapor y destellos. */
export function TablaCarnes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-labelledby="tabla-titulo">
      <title id="tabla-titulo">Tabla de picar con un bife de res y una pierna de cerdo</title>

      {/* Sombra en el suelo */}
      <ellipse className="ilus-sombra" cx="165" cy="222" rx="128" ry="10" fill="currentColor" opacity="0.12" />

      {/* Tabla: canto y cara */}
      <rect x="28" y="142" width="274" height="70" rx="24" fill="#9c6233" />
      <rect x="28" y="132" width="274" height="68" rx="24" fill="#d39a5f" />
      <path d="M52 152 C 110 146, 170 158, 280 150 M58 176 C 120 170, 190 182, 276 174" stroke="#b97c43" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <circle cx="286" cy="166" r="6" fill="#9c6233" />

      {/* Bife */}
      <g className="ilus-flota">
        <path
          d="M58 156 C 52 130, 92 116, 124 124 C 156 132, 166 156, 152 176 C 138 196, 88 198, 70 184 C 60 176, 60 166, 58 156 Z"
          fill="#c2353a"
          stroke="#f3d9c6"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path d="M80 148 C 92 142, 104 150, 116 144 M86 170 C 100 164, 118 174, 134 164 M122 136 C 132 140, 140 150, 142 158" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="96" cy="160" r="11" fill="#f4ece1" />
        <circle cx="96" cy="160" r="5" fill="#d9a48f" />
      </g>

      {/* Pierna de cerdo */}
      <g className="ilus-flota ilus-retraso">
        <path d="M262 132 L292 108" stroke="#f4ece1" strokeWidth="10" strokeLinecap="round" />
        <circle cx="294" cy="102" r="7" fill="#f4ece1" />
        <circle cx="299" cy="112" r="7" fill="#f4ece1" />
        <path d="M188 172 C 172 146, 190 118, 226 118 C 262 118, 280 142, 270 166 C 262 186, 214 194, 188 172 Z" fill="#d4544e" />
        <path d="M196 132 C 210 118, 250 112, 268 136 C 252 128, 214 128, 196 140 Z" fill="#f2c6b4" />
        <path d="M206 160 C 220 152, 240 162, 256 152" stroke="#fff" strokeOpacity="0.4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Romero */}
      <g className="ilus-mece">
        <path d="M150 196 C 168 186, 190 186, 214 192" stroke="#4d7c3a" strokeWidth="3" fill="none" strokeLinecap="round" />
        {[158, 170, 182, 194, 206].map((x, i) => (
          <g key={x}>
            <ellipse cx={x} cy={186 + (i % 2) * 2} rx="6" ry="2.4" fill="#6a9f4b" transform={`rotate(-30 ${x} ${186 + (i % 2) * 2})`} />
            <ellipse cx={x + 3} cy={196 - (i % 2) * 2} rx="6" ry="2.4" fill="#5a8d3e" transform={`rotate(25 ${x + 3} ${196 - (i % 2) * 2})`} />
          </g>
        ))}
      </g>

      {/* Vapor */}
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55">
        <path className="ilus-vapor" d="M86 108 C 76 96, 96 86, 86 72 C 78 62, 92 52, 86 42" />
        <path className="ilus-vapor ilus-vapor-2" d="M110 104 C 100 92, 120 82, 110 68 C 102 58, 116 48, 110 38" />
        <path className="ilus-vapor ilus-vapor-3" d="M134 108 C 124 96, 144 86, 134 72 C 126 62, 140 52, 134 42" />
      </g>

      {/* Destellos */}
      <g fill="#f5c542">
        <path className="ilus-destello" d="M232 70 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" />
        <path className="ilus-destello ilus-destello-2" d="M40 92 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" />
        <path className="ilus-destello ilus-destello-3" d="M182 40 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
      </g>
    </svg>
  );
}

/** Chancho que respira, parpadea y mueve la cola. */
export function Chancho({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 210" className={`ilus-chancho ${className}`} role="img" aria-labelledby="chancho-titulo">
      <title id="chancho-titulo">Dibujo de un chancho sonriente</title>

      <ellipse className="ilus-sombra" cx="128" cy="196" rx="86" ry="9" fill="currentColor" opacity="0.14" />

      <g className="ilus-respira">
        {/* Patas */}
        <g fill="#e88a9a">
          <rect x="66" y="140" width="20" height="42" rx="9" />
          <rect x="96" y="146" width="20" height="38" rx="9" />
          <rect x="146" y="146" width="20" height="38" rx="9" />
          <rect x="174" y="140" width="20" height="42" rx="9" />
        </g>
        <g fill="#b85468">
          <rect x="66" y="174" width="20" height="9" rx="4" />
          <rect x="96" y="176" width="20" height="9" rx="4" />
          <rect x="146" y="176" width="20" height="9" rx="4" />
          <rect x="174" y="174" width="20" height="9" rx="4" />
        </g>

        {/* Cola */}
        <path className="ilus-cola" d="M50 112 C 34 112, 30 96, 40 92 C 50 88, 52 102, 42 104" stroke="#e88a9a" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Cuerpo */}
        <ellipse cx="126" cy="118" rx="80" ry="54" fill="#f9a8b8" />
        <ellipse cx="120" cy="134" rx="54" ry="26" fill="#fcc6d0" />

        {/* Cabeza */}
        <g>
          <path className="ilus-oreja" d="M158 70 L164 38 L184 62 Z" fill="#f28da0" />
          <path className="ilus-oreja ilus-oreja-2" d="M196 60 L216 36 L220 70 Z" fill="#f28da0" />
          <circle cx="190" cy="96" r="42" fill="#f9a8b8" />
          <circle cx="166" cy="112" r="8" fill="#ff7f95" opacity="0.45" />
          <circle cx="220" cy="106" r="7" fill="#ff7f95" opacity="0.45" />
          <ellipse className="ilus-ojo" cx="178" cy="88" rx="5" ry="5.5" fill="#3b2a2a" />
          <ellipse className="ilus-ojo" cx="204" cy="84" rx="5" ry="5.5" fill="#3b2a2a" />
          <circle cx="180" cy="86" r="1.6" fill="#fff" />
          <circle cx="206" cy="82" r="1.6" fill="#fff" />
          <ellipse cx="214" cy="106" rx="19" ry="14" fill="#f28da0" />
          <ellipse cx="208" cy="106" rx="3" ry="4.5" fill="#b85468" />
          <ellipse cx="220" cy="106" rx="3" ry="4.5" fill="#b85468" />
          <path d="M184 124 C 190 130, 200 130, 206 124" stroke="#b85468" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* Corazoncitos */}
      <g fill="#ff7f95">
        <path className="ilus-corazon" d="M236 40 c-4 -6 -12 -2 -10 4 c1 4 10 10 10 10 c0 0 9 -6 10 -10 c2 -6 -6 -10 -10 -4 z" />
        <path className="ilus-corazon ilus-corazon-2" d="M30 60 c-3 -4.5 -9 -1.5 -7.5 3 c.8 3 7.5 7.5 7.5 7.5 c0 0 6.7 -4.5 7.5 -7.5 c1.5 -4.5 -4.5 -7.5 -7.5 -3 z" />
      </g>
    </svg>
  );
}
