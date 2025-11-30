import React from 'react';

const AnimatedBackground = () => {
  const mathSymbols = [
    '∫', '∂', '∆', '∇', '∑', '∏', '√', '∞', '±', '≡',
    'π', 'θ', 'λ', 'α', 'β', 'γ', 'σ', 'μ', 'ω', 'φ',
    '≤', '≥', '≠', '≈', '∈', '∉', '⊂', '⊃', '∪', '∩',
    '∴', '∵', '∝', '⊥', '||', '∠', '°', '′', '″', '∀',
    'ℝ', 'ℕ', 'ℤ', 'ℚ', '⊕', '⊗', '⊙', '⊘', '∅', '⌊',
    '⌈', '⌉', '⌋', '∂²', 'dx', 'dy', 'dz', 'dt', '∇²', '∂f'
  ];

  const mathExpressions = [
    'f(x) = ax² + bx + c',
    '∫ f(x)dx = F(x) + C',
    'lim(x→∞) f(x)',
    '∂f/∂x = f\'(x)',
    'E = mc²',
    'Σ(x²) = n(n+1)(2n+1)/6',
    '∇·F = ∂P/∂x + ∂Q/∂y',
    'sin²θ + cos²θ = 1',
    'e^(iπ) + 1 = 0',
    'F = ma',
    '∫₀^∞ e^(-x²) dx = √π/2',
    'det(A) = |A|',
    'A⁻¹ = adj(A)/det(A)',
    'y = mx + b',
    '∇²u = 0',
    'PV = nRT',
    'H = -Σ p(x) log p(x)',
    'χ² = Σ(O-E)²/E'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background curves and shapes */}
      <div className="absolute inset-0 opacity-[0.08]">
        {[...Array(8)].map((_, i) => (
          <svg key={`sine-${i}`} className="absolute"
               style={{
                 left: `${(i * 15) % 90}%`,
                 top: `${(i * 20) % 80}%`,
                 width: '360px',
                 height: '240px'
               }}
               viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q12.5,20 25,50 T50,50 T75,50 T100,50" stroke="#cccccc" strokeWidth="1.2" fill="none" />
            <path d="M0,50 Q12.5,80 25,50 T50,50 T75,50 T100,50" stroke="#bbbbbb" strokeWidth="0.6" fill="none" />
          </svg>
        ))}
        {[...Array(6)].map((_, i) => (
          <svg key={`parabola-${i}`} className="absolute"
               style={{
                 left: `${(i * 18 + 10) % 85}%`,
                 top: `${(i * 25 + 15) % 75}%`,
                 width: '300px',
                 height: '300px'
               }}
               viewBox="0 0 100 100">
            <path d="M20,90 Q50,20 80,90" stroke="#cccccc" strokeWidth="0.8" fill="none" />
            <path d="M30,85 Q50,35 70,85" stroke="#bbbbbb" strokeWidth="0.5" fill="none" />
          </svg>
        ))}
        {[...Array(5)].map((_, i) => (
          <svg key={`exp-${i}`} className="absolute"
               style={{
                 left: `${(i * 22) % 80}%`,
                 top: `${(i * 30) % 70}%`,
                 width: '320px',
                 height: '200px'
               }}
               viewBox="0 0 100 100">
            <path d="M0,80 Q30,60 60,30 Q80,15 100,5" stroke="#cccccc" strokeWidth="0.8" fill="none" />
          </svg>
        ))}
        {[...Array(4)].map((_, i) => (
          <svg key={`normal-${i}`} className="absolute"
               style={{
                 left: `${(i * 25 + 5) % 85}%`,
                 top: `${(i * 35) % 75}%`,
                 width: '360px',
                 height: '240px'
               }}
               viewBox="0 0 100 100">
            <path d="M0,80 Q20,60 40,30 Q50,20 60,30 Q80,60 100,80" stroke="#cccccc" strokeWidth="0.7" fill="none" />
          </svg>
        ))}
        {[...Array(6)].map((_, i) => (
          <svg key={`grid-${i}`} className="absolute"
               style={{
                 left: `${(i * 16) % 90}%`,
                 top: `${(i * 18) % 85}%`,
                 width: '240px',
                 height: '240px'
               }}
               viewBox="0 0 100 100">
            {[...Array(6)].map((_, j) => (
              <g key={`grid-lines-${i}-${j}`}>
                <line x1={j * 20} y1="0" x2={j * 20} y2="100" stroke="#bbbbbb" strokeWidth="0.2" />
                <line x1="0" y1={j * 20} x2="100" y2={j * 20} stroke="#bbbbbb" strokeWidth="0.2" />
              </g>
            ))}
            <line x1="20" y1="50" x2="80" y2="50" stroke="#aaaaaa" strokeWidth="0.4" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="#aaaaaa" strokeWidth="0.4" />
          </svg>
        ))}
        {[...Array(4)].map((_, i) => (
          <svg key={`log-${i}`} className="absolute"
               style={{
                 left: `${(i * 28) % 80}%`,
                 top: `${(i * 32) % 70}%`,
                 width: '300px',
                 height: '200px'
               }}
               viewBox="0 0 100 100">
            <path d="M5,90 Q20,50 40,30 Q60,20 100,15" stroke="#cccccc" strokeWidth="0.7" fill="none" />
          </svg>
        ))}
        {[...Array(6)].map((_, i) => (
          <svg key={`trig-${i}`} className="absolute"
               style={{
                 left: `${(i * 17) % 85}%`,
                 top: `${(i * 19) % 80}%`,
                 width: '340px',
                 height: '160px'
               }}
               viewBox="0 0 100 100">
            <path d="M0,50 Q25,30 50,50 Q75,70 100,50" stroke="#cccccc" strokeWidth="0.6" fill="none" />
            <path d="M0,50 Q25,70 50,50 Q75,30 100,50" stroke="#bbbbbb" strokeWidth="0.4" fill="none" />
          </svg>
        ))}
        {[...Array(8)].map((_, i) => (
          <svg key={`circle-${i}`} className="absolute"
               style={{
                 left: `${(i * 13) % 90}%`,
                 top: `${(i * 23) % 80}%`,
                 width: '180px',
                 height: '180px'
               }}
               viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" stroke="#bbbbbb" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="#999999" strokeWidth="0.3" fill="none" />
            <path d="M20,50 L80,50 M50,20 L50,80" stroke="#888888" strokeWidth="0.25" />
          </svg>
        ))}
      </div>

      {/* Mathematical symbols */}
      <div className="absolute inset-0 opacity-[0.09]">
        {[...Array(80)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-white font-serif select-none"
            style={{
              left: `${(i * 5.7) % 95 + 2.5}%`,
              top: `${(i * 7.3) % 90 + 5}%`,
              fontSize: `${24 + (i % 5) * 6}px`,
              transform: `rotate(${(i * 13) % 40 - 20}deg)`,
              fontWeight: 500,
              color: '#dddddd'
            }}
          >
            {mathSymbols[i % mathSymbols.length]}
          </div>
        ))}
      </div>

      {/* Mathematical expressions */}
      <div className="absolute inset-0 opacity-[0.06]">
        {mathExpressions.map((expr, i) => (
          <div
            key={`expr-${i}`}
            className="absolute text-white font-mono select-none"
            style={{
              left: `${(i * 17.5) % 85 + 5}%`,
              top: `${(i * 23.7) % 85 + 7.5}%`,
              fontSize: `${20 + (i % 3) * 4}px`,
              transform: `rotate(${(i * 19) % 30 - 15}deg)`,
              fontWeight: 500,
              color: '#dddddd'
            }}
          >
            {expr}
          </div>
        ))}
      </div>

      {/* Matrix symbols */}
      <div className="absolute inset-0 opacity-[0.05]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-white font-mono text-base select-none"
            style={{
              left: `${(i * 24) % 80 + 10}%`,
              top: `${(i * 31) % 75 + 12.5}%`,
              fontSize: '18px',
              transform: `rotate(${(i * 15) % 25 - 12}deg)`,
              color: '#dddddd'
            }}
          >
            {i % 3 === 0 ? (
              <>
                [a₁₁ a₁₂]<br/>
                [a₂₁ a₂₂]
              </>
            ) : i % 3 === 1 ? (
              <>
                [x₁]<br/>
                [x₂]<br/>
                [x₃]
              </>
            ) : (
              'det(A) = |A|'
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-transparent to-black/15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/16"></div>
    </div>
  );
};

export default AnimatedBackground;
