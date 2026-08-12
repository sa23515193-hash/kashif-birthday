import React, { useEffect, useMemo, useState } from "react";

const BIRTHDAY = new Date(2026, 7, 9); // 9 August 2026
const DOB = new Date(2005, 7, 9);      // 9 August 2005
const NIKAH = "7 June 2026";
const PASSWORD = "07062026";

const pages = [
  { id: "home", label: "Home", icon: "♥" },
  { id: "birthday", label: "Birthday", icon: "🎂" },
  { id: "letter", label: "Letter", icon: "💌" },
  { id: "gifts", label: "Gifts", icon: "🎁" },
  { id: "reasons", label: "Why You", icon: "✨" },
  { id: "story", label: "Our Story", icon: "💍" },
  { id: "final", label: "Final", icon: "∞" }
];

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        delay: `${(i * 0.43) % 8}s`,
        duration: `${7 + (i % 5)}s`,
        size: `${12 + (i % 4) * 5}px`,
        char: i % 4 === 0 ? "✦" : "♥"
      })),
    []
  );

  return (
    <div className="floating-layer" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="float-item"
          style={{
            left: h.left,
            animationDelay: h.delay,
            animationDuration: h.duration,
            fontSize: h.size
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span key={i} style={{ "--i": i }}>✦</span>
      ))}
    </div>
  );
}

function LockScreen({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (value.trim() === PASSWORD) {
      setError("");
      onUnlock();
    } else {
      setError("Hmm... that's not the secret date. Try again, love. 💗");
      setShake(true);
      setTimeout(() => setShake(false), 550);
    }
  };

  return (
    <main className="lock-screen">
      <FloatingHearts />
      <Sparkles />
      <div className={`lock-card glass ${shake ? "shake" : ""}`}>
        <div className="lock-icon">🔐</div>
        <p className="eyebrow">A LITTLE SECRET FOR YOU</p>
        <h1>Someone special has<br /><span>something for Kashif...</span></h1>
        <p className="lock-copy">
          This little world is locked. Only one special date can open it.
        </p>

        <form onSubmit={submit}>
          <label htmlFor="password">Enter our secret date</label>
          <input
            id="password"
            inputMode="numeric"
            autoComplete="off"
            placeholder="DD-MM-YYYY"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError("");
            }}
          />
          <button className="primary-btn" type="submit">
            Unlock My Surprise <span>♥</span>
          </button>
        </form>

        <div className="hint">
          <span>💡 Hint</span>
          <strong>Our Nikah Date</strong>
          <small>7 June 2026</small>
        </div>

        {error && <p className="error">{error}</p>}
      </div>
      <p className="bottom-note">Made with a heart that chose you. ♡</p>
    </main>
  );
}

function Home({ go }) {
  return (
    <section className="page hero-page">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-content">
        <div className="mini-badge">♡ JUST FOR YOU, KASHIF ♡</div>
        <p className="script">Today is all about you...</p>
        <h1 className="display-title">
          Happy Birthday,
          <span>Kashif ❤️</span>
        </h1>
        <p className="lead">
          I made this tiny corner of the internet because some feelings
          deserve more than a simple “Happy Birthday.”
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => go("birthday")}>
            Begin the surprise <span>→</span>
          </button>
          <button className="ghost-btn" onClick={() => go("letter")}>
            Read my letter 💌
          </button>
        </div>
        <div className="love-stats">
          <div><strong>09</strong><span>August</span></div>
          <i />
          <div><strong>2005</strong><span>The year you arrived</span></div>
          <i />
          <div><strong>∞</strong><span>My favorite person</span></div>
        </div>
      </div>
    </section>
  );
}

function Birthday({ go }) {
  const days = daysBetween(DOB, BIRTHDAY);
  const years = 21;

  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">CHAPTER 01 • YOUR DAY</p>
        <h2>Today, the world celebrates <span>you.</span></h2>
        <p>And I get the sweetest reason to celebrate too. 🎂</p>
      </div>

      <div className="birthday-grid">
        <div className="cake-card glass">
          <div className="balloon b1">🎈</div>
          <div className="balloon b2">🎈</div>
          <div className="cake">
            <div className="flame">✦</div>
            <div className="candle" />
            <div className="cake-top">♥ ♥ ♥</div>
            <div className="cake-body">21</div>
            <div className="cake-plate" />
          </div>
          <h3>Happy {years}th Birthday</h3>
          <p>To the boy who makes my world a little softer.</p>
        </div>

        <div className="counter-card glass">
          <span className="counter-label">YOU HAVE BEEN HERE FOR</span>
          <div className="big-number">{days.toLocaleString()}</div>
          <h3>beautiful days</h3>
          <p>
            From <strong>9 August 2005</strong> to your birthday on{" "}
            <strong>9 August 2026</strong>.
          </p>
          <div className="tiny-hearts">♥ ♥ ♥ ♥ ♥</div>
          <div className="quote">
            “And somehow, one of those days brought you into my life.”
          </div>
        </div>
      </div>

      <div className="wish-banner">
        <span>🎂</span>
        <div>
          <strong>My birthday wish for you</strong>
          <p>May this year bring you peace, success, laughter, and everything your heart quietly wishes for.</p>
        </div>
        <button className="round-btn" onClick={() => go("letter")}>→</button>
      </div>
    </section>
  );
}

function Letter({ go }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="page letter-page">
      <div className="section-heading">
        <p className="eyebrow">CHAPTER 02 • FROM MY HEART</p>
        <h2>A letter I couldn't fit into a <span>text.</span></h2>
        <p>Tap the envelope. There are a few things I really want you to know.</p>
      </div>

      <div className={`envelope-wrap ${open ? "opened" : ""}`} onClick={() => setOpen(true)}>
        <div className="envelope">
          <div className="letter-paper">
            <p className="letter-greeting">My dearest Kashif,</p>
            <p>
              Happy Birthday to the person who has become such a beautiful part
              of my life. I don't know if words can ever properly explain how
              much your presence means to me, but I want to try.
            </p>
            <p>
              I love the little things about you — your care, your way of being
              there, your smile, your silly moments, and even those moments
              when you act like you don't need anyone. I hope you always know
              that you have someone cheering for you.
            </p>
            <p>
              I pray that life gives you the success you deserve, protects your
              heart, keeps you smiling, and gives us many more moments to look
              back on together.
            </p>
            <p>
              And yes... one tiny request: <strong>gussa thora kam kiya karo. 😭❤️</strong>
              You are much cuter when you're smiling.
            </p>
            <p>
              Thank you for being you. I hope this new year of your life is
              gentle with you and full of reasons to smile.
            </p>
            <p className="letter-sign">Always with you,<br />Your person ❤️</p>
          </div>
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <div className="envelope-front" />
          <div className="seal">♥</div>
        </div>
      </div>

      {!open && <p className="tap-note">Tap the envelope to open your letter 💌</p>}

      {open && (
        <button className="primary-btn next-under" onClick={() => go("gifts")}>
          There is more for you 🎁
        </button>
      )}
    </section>
  );
}

function Gifts() {
  const [selected, setSelected] = useState(null);
  const gifts = [
    ["💌", "A Letter", "A thousand things I could say, but one simple truth: I care about you deeply."],
    ["🌹", "A Rose", "For every little moment that made me smile because of you."],
    ["🧸", "A Hug", "One giant virtual hug. No escape. You are officially trapped. 🤭"],
    ["🍫", "Something Sweet", "Because life needs a little sweetness — and apparently so does my Kashif."],
    ["💍", "Forever", "Not a present you can wrap. Just a promise to keep choosing love, patience and us."]
  ];

  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">CHAPTER 03 • OPEN CAREFULLY</p>
        <h2>Your little <span>gift hamper.</span></h2>
        <p>Five tiny gifts. Each one has a message hidden inside.</p>
      </div>

      <div className="gift-scene">
        <div className="gift-box">
          <div className="gift-lid">♥</div>
          <div className="gift-body">
            <span />
            <b />
          </div>
        </div>
        <div className="gift-sparkle s1">✦</div>
        <div className="gift-sparkle s2">✦</div>
        <div className="gift-sparkle s3">✦</div>
      </div>

      <div className="gift-grid">
        {gifts.map(([icon, title, text]) => (
          <button className="gift-card glass" key={title} onClick={() => setSelected({ icon, title, text })}>
            <span className="gift-icon">{icon}</span>
            <strong>{title}</strong>
            <small>Tap to open →</small>
          </button>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="message-modal glass" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <span className="modal-icon">{selected.icon}</span>
            <p className="eyebrow">A LITTLE GIFT</p>
            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
            <button className="primary-btn" onClick={() => setSelected(null)}>Keep it safe in your heart ♥</button>
          </div>
        </div>
      )}
    </section>
  );
}

function Reasons() {
  const reasons = [
    ["01", "Your caring side", "The way you care about the people you love is one of the things I admire most."],
    ["02", "Your presence", "Sometimes you don't even have to say anything. Just being there is enough."],
    ["03", "Your little habits", "The small things you probably don't notice are often the things I remember."],
    ["04", "Your ambition", "I want to see you achieve every dream you have. I'll be quietly cheering for you."],
    ["05", "Your heart", "Under everything else, I know there is a good heart — and that's precious."],
    ["06", "Your smile", "Please use this more. Seriously. It suits you much better than that angry face. 😭"]
  ];

  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">CHAPTER 04 • LITTLE THINGS</p>
        <h2>Reasons I smile when I think of <span>you.</span></h2>
        <p>Not a complete list. There are far too many.</p>
      </div>

      <div className="reasons-grid">
        {reasons.map(([num, title, text]) => (
          <article className="reason-card glass" key={num}>
            <span className="reason-num">{num}</span>
            <div className="reason-heart">♥</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="angry-note">
        <span>😤</span>
        <div>
          <strong>Official birthday request:</strong>
          <p>Kashif please gussa thora kam kiya karein. Aap smile karte hue zyada handsome lagte hain. 😂❤️</p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="page story-page">
      <div className="section-heading">
        <p className="eyebrow">CHAPTER 05 • US</p>
        <h2>One date. One promise. <span>Our story.</span></h2>
        <p>Some dates become memories. Some become the beginning of everything.</p>
      </div>

      <div className="timeline">
        <div className="timeline-line" />
        <article className="timeline-item left">
          <div className="timeline-dot">♥</div>
          <div className="timeline-card glass">
            <span>09 AUGUST 2005</span>
            <h3>The world got Kashif</h3>
            <p>And years later, I would get to know the person behind this birthday.</p>
          </div>
        </article>

        <article className="timeline-item right">
          <div className="timeline-dot">✨</div>
          <div className="timeline-card glass">
            <span>THE DAYS IN BETWEEN</span>
            <h3>Life brought us here</h3>
            <p>Through ordinary days, little conversations and memories, something special found its way to us.</p>
          </div>
        </article>

        <article className="timeline-item left">
          <div className="timeline-dot">💍</div>
          <div className="timeline-card glass special">
            <span>07 JUNE 2026</span>
            <h3>Our Nikah 🤍</h3>
            <p>A date that changed two names into one beautiful chapter of “us”.</p>
          </div>
        </article>

        <article className="timeline-item right">
          <div className="timeline-dot">∞</div>
          <div className="timeline-card glass">
            <span>FROM HERE ON</span>
            <h3>More chapters to write</h3>
            <p>More birthdays, more laughter, more patience, more dua, more memories — together.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Final({ restart }) {
  const [burst, setBurst] = useState(false);

  const celebrate = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 2500);
  };

  return (
    <section className="page final-page">
      {burst && <div className="confetti" aria-hidden="true">{Array.from({length: 55}, (_, i) => <i key={i} style={{"--i": i}} />)}</div>}
      <div className="final-heart">♥</div>
      <p className="eyebrow">THE LAST PAGE • BUT NOT THE END</p>
      <h2>Kashif, I hope you always know...</h2>
      <p className="final-message">
        You are loved. You are appreciated. You are prayed for.
        And today, more than anything, I hope you feel how special you are.
      </p>
      <div className="final-wish">
        <span>🎂</span>
        <strong>Happy Birthday, Kashif!</strong>
        <span>❤️</span>
      </div>
      <p className="forever">Here's to you, to us, and to every beautiful chapter still waiting for us. ∞</p>
      <button className="primary-btn celebrate-btn" onClick={celebrate}>
        Make a little birthday magic ✨
      </button>
      <button className="text-btn" onClick={restart}>Replay from the beginning</button>
    </section>
  );
}

function Nav({ current, go, onLock }) {
  return (
    <nav className="bottom-nav">
      <div className="nav-inner">
        {pages.map((p) => (
          <button
            key={p.id}
            className={current === p.id ? "active" : ""}
            onClick={() => go(p.id)}
          >
            <span>{p.icon}</span>
            <small>{p.label}</small>
          </button>
        ))}
        <button className="lock-nav" onClick={onLock} title="Lock surprise">
          🔒
        </button>
      </div>
    </nav>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState("home");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.title = current === "home" ? "For Kashif ❤️" : `${pages.find(p => p.id === current)?.label} • For Kashif`;
  }, [current]);

  const go = (id) => {
    if (id === current) return;
    setTransitioning(true);
    window.setTimeout(() => {
      setCurrent(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTransitioning(false);
    }, 170);
  };

  const lock = () => {
    setUnlocked(false);
    setCurrent("home");
  };

  if (!unlocked) return <LockScreen onUnlock={() => setUnlocked(true)} />;

  const content = {
    home: <Home go={go} />,
    birthday: <Birthday go={go} />,
    letter: <Letter go={go} />,
    gifts: <Gifts />,
    reasons: <Reasons />,
    story: <Story />,
    final: <Final restart={() => { setUnlocked(false); setCurrent("home"); }} />
  }[current];

  return (
    <div className="app-shell">
      <FloatingHearts />
      <Sparkles />
      <header className="topbar">
        <button className="brand" onClick={() => go("home")}>
          <span>♥</span> KASHIF
        </button>
        <div className="top-date">09 • 08 • 2026</div>
        <div className="top-heart">∞</div>
      </header>

      <main className={transitioning ? "page-transition out" : "page-transition"}>
        {content}
      </main>

      <Nav current={current} go={go} onLock={lock} />
    </div>
  );
}

export default App;
