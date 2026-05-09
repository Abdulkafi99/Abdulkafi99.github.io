// Mini fake app screens shown inside phone-shaped mockups in project cards.
// Pure CSS/JSX, no external assets.

const phoneScreenBase = {
  width: '100%',
  height: '100%',
  borderRadius: 18,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

// 1. Fitness app
const FitnessScreen = () => (
  <div style={{ ...phoneScreenBase, background: 'oklch(0.18 0.01 250)', color: '#fff', padding: '28px 14px 14px' }}>
    <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono', opacity: 0.6, marginBottom: 4 }}>SUNDAY · MAR 17</div>
    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, letterSpacing: '-0.02em' }}>Hey, Alex</div>
    <div style={{
      borderRadius: 12,
      padding: 12,
      background: 'linear-gradient(135deg, oklch(0.82 0.14 180), oklch(0.55 0.16 200))',
      color: 'oklch(0.18 0.02 200)',
      marginBottom: 10,
    }}>
      <div style={{ fontSize: 8, opacity: 0.7, fontWeight: 600, letterSpacing: '0.08em' }}>TODAY</div>
      <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1, marginTop: 4 }}>6,842</div>
      <div style={{ fontSize: 9, opacity: 0.7, marginTop: 2 }}>steps · 4.2km</div>
      <div style={{ height: 3, background: 'rgba(0,0,0,0.15)', borderRadius: 99, marginTop: 8 }}>
        <div style={{ width: '68%', height: '100%', background: 'oklch(0.18 0.02 200)', borderRadius: 99 }} />
      </div>
    </div>
    {[
      { label: 'Heart', val: '72', unit: 'bpm' },
      { label: 'Sleep', val: '7.4', unit: 'hrs' },
    ].map((s, i) => (
      <div key={i} style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 10px', background: 'oklch(0.22 0.012 250)', borderRadius: 10, marginBottom: 6, fontSize: 9,
      }}>
        <span style={{ opacity: 0.7 }}>{s.label}</span>
        <span><b style={{ fontSize: 11 }}>{s.val}</b> <span style={{ opacity: 0.5 }}>{s.unit}</span></span>
      </div>
    ))}
  </div>
);

// 2. Wallet app
const WalletScreen = () => (
  <div style={{ ...phoneScreenBase, background: 'oklch(0.10 0.01 250)', color: '#fff', padding: '28px 12px 12px' }}>
    <div style={{ fontSize: 9, opacity: 0.5, fontFamily: 'JetBrains Mono', marginBottom: 4 }}>BALANCE</div>
    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>$ 12,480<span style={{ opacity: 0.5, fontSize: 12 }}>.30</span></div>
    <div style={{
      marginTop: 10, borderRadius: 12,
      background: 'linear-gradient(135deg, oklch(0.30 0.04 280), oklch(0.18 0.02 250))',
      border: '1px solid oklch(0.40 0.02 250)',
      padding: 10, color: '#fff',
    }}>
      <div style={{ fontSize: 8, opacity: 0.6, fontFamily: 'JetBrains Mono' }}>VISA · 4242</div>
      <div style={{ fontSize: 10, marginTop: 14, fontFamily: 'JetBrains Mono', letterSpacing: '0.1em' }}>•••• 8847</div>
    </div>
    <div style={{ fontSize: 9, opacity: 0.5, fontFamily: 'JetBrains Mono', marginTop: 12, marginBottom: 6 }}>RECENT</div>
    {[
      { name: 'Spotify', val: '-9.99', col: 'oklch(0.78 0.18 145)' },
      { name: 'Uber', val: '-14.20', col: '#fff' },
      { name: 'Salary', val: '+3,200', col: 'oklch(0.78 0.18 145)' },
    ].map((t, i) => (
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, padding: '5px 4px', borderBottom: '1px solid oklch(0.22 0.012 250)' }}>
        <span style={{ opacity: 0.7 }}>{t.name}</span>
        <span style={{ color: t.col, fontFamily: 'JetBrains Mono' }}>{t.val}</span>
      </div>
    ))}
  </div>
);

// 3. Food delivery
const FoodScreen = () => (
  <div style={{ ...phoneScreenBase, background: 'oklch(0.96 0.01 60)', color: 'oklch(0.20 0.01 60)', padding: '28px 10px 10px' }}>
    <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>Discover</div>
    <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
      {['All', 'Pizza', 'Sushi', 'Drinks'].map((t, i) => (
        <div key={i} style={{
          fontSize: 8, padding: '4px 8px', borderRadius: 99,
          background: i === 0 ? 'oklch(0.20 0.01 60)' : 'transparent',
          color: i === 0 ? '#fff' : 'oklch(0.50 0.01 60)',
          border: i === 0 ? 'none' : '1px solid oklch(0.85 0.01 60)',
          fontWeight: 500,
        }}>{t}</div>
      ))}
    </div>
    {[
      { name: 'Margherita', price: '$12', col: 'oklch(0.85 0.10 30)' },
      { name: 'California', price: '$18', col: 'oklch(0.85 0.10 130)' },
    ].map((it, i) => (
      <div key={i} style={{
        display: 'flex', gap: 8, alignItems: 'center', padding: 8,
        background: '#fff', borderRadius: 10, marginBottom: 6,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: it.col, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600 }}>{it.name}</div>
          <div style={{ fontSize: 8, opacity: 0.5, fontFamily: 'JetBrains Mono', marginTop: 1 }}>★ 4.8 · 25min</div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 600 }}>{it.price}</div>
      </div>
    ))}
  </div>
);

// 4. Music
const MusicScreen = () => (
  <div style={{ ...phoneScreenBase, background: 'oklch(0.10 0.005 280)', color: '#fff', padding: '28px 14px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{
      width: 110, height: 110, borderRadius: 12,
      background: 'linear-gradient(135deg, oklch(0.55 0.18 320), oklch(0.30 0.10 250))',
      marginTop: 6, marginBottom: 14,
      boxShadow: '0 12px 30px -10px oklch(0.55 0.18 320 / 0.5)',
    }} />
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '-0.01em' }}>Midnight Drive</div>
    <div style={{ fontSize: 9, opacity: 0.5, fontFamily: 'JetBrains Mono', marginTop: 2 }}>Nova · Echo Nights</div>
    <div style={{ width: '100%', height: 2, background: 'oklch(0.25 0.01 280)', borderRadius: 99, marginTop: 14, position: 'relative' }}>
      <div style={{ width: '40%', height: '100%', background: '#fff', borderRadius: 99 }} />
      <div style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)', width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 8, fontFamily: 'JetBrains Mono', opacity: 0.5, marginTop: 4 }}>
      <span>1:24</span><span>3:32</span>
    </div>
    <div style={{ display: 'flex', gap: 16, marginTop: 14, alignItems: 'center' }}>
      <div style={{ width: 6, height: 8, background: '#fff', clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }} />
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: 0, height: 0, borderLeft: '7px solid oklch(0.10 0.005 280)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', marginLeft: 2 }} />
      </div>
      <div style={{ width: 6, height: 8, background: '#fff', clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
    </div>
  </div>
);

// 5. Tasks
const TasksScreen = () => (
  <div style={{ ...phoneScreenBase, background: 'oklch(0.18 0.01 250)', color: '#fff', padding: '28px 12px 12px' }}>
    <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono', opacity: 0.5, marginBottom: 2 }}>TODAY</div>
    <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>4 tasks left</div>
    {[
      { t: 'Design review', done: true },
      { t: 'Send invoice', done: true },
      { t: 'Sprint planning', done: false },
      { t: 'Code review · auth', done: false },
      { t: 'Update docs', done: false },
    ].map((task, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 6px', borderBottom: '1px solid oklch(0.25 0.012 250)',
      }}>
        <div style={{
          width: 12, height: 12, borderRadius: 4,
          border: '1.5px solid ' + (task.done ? 'oklch(0.82 0.14 180)' : 'oklch(0.40 0.02 250)'),
          background: task.done ? 'oklch(0.82 0.14 180)' : 'transparent',
          display: 'grid', placeItems: 'center',
        }}>
          {task.done && <span style={{ fontSize: 8, color: 'oklch(0.18 0.02 200)', fontWeight: 700 }}>✓</span>}
        </div>
        <div style={{
          fontSize: 10,
          textDecoration: task.done ? 'line-through' : 'none',
          opacity: task.done ? 0.4 : 1,
          flex: 1,
        }}>{task.t}</div>
      </div>
    ))}
  </div>
);

window.PhoneScreens = { FitnessScreen, WalletScreen, FoodScreen, MusicScreen, TasksScreen };
