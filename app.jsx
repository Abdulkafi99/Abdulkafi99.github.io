const { useState, useEffect, useRef } = React;
const {
  ArrowUpRight, ArrowRight, Download, Copy, Mail, Check,
  FlutterIcon, FirebaseIcon, DartIcon, ApiIcon,
  GitHubIcon, LinkedInIcon, XIcon, DribbbleIcon,
} = window.Icons;
const { FitnessScreen, WalletScreen, FoodScreen, MusicScreen, TasksScreen } = window.PhoneScreens;

/* ---------------- DATA ---------------- */
const PROJECTS = [
  {
    id: 'monawbaty',
    name: 'Monawbaty',
    cat: 'Healthcare · Mobile App',
    desc: 'Shift management system used by 500+ paramedics.',
    fullDesc: `
    Monawbaty is a shift management mobile application developed
    for the Syrian Arab Red Crescent.

    It helps paramedics manage schedules, track shifts,
    and coordinate field operations efficiently.

    Built using Flutter, Firebase, and Django backend,
    with real-time updates and notifications.
    `,
    tags: ['Flutter', 'Firebase', 'Django'],
    role: 'Flutter Developer',
    year: '2022',
    platforms: 'Android · iOS',
    links: { github: 'https://github.com/Abdulkafi99/monawbaty.git' },
    span: 'span-3',
    mock: 'pulse',
    images: [
      'images/projects/monawbaty/01.jpg',
      'images/projects/monawbaty/02.jpg',
      'images/projects/monawbaty/03.jpg',
    ]
  },
  {
    id: 'superdriver',
    name: 'SuperDriver',
    cat: 'Logistics · Delivery Ecosystem',
    desc: 'A 4-app delivery ecosystem live on the UAE App Store.',
    fullDesc: `
    SuperDriver is a complete delivery ecosystem made of 4 integrated mobile apps:
    Customer, Driver, Admin, and Operations Control Center.

    Real-time order tracking, live driver location, automated dispatch,
    and full order lifecycle management all synced across the system.

    Built from scratch with Flutter, Firebase, Google Maps, and Bloc.
    115+ Dart files, full Clean Architecture. Live on the UAE App Store.
    `,
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Bloc', 'Clean Architecture'],
    role: 'Founding Mobile Developer',
    year: '2026',
    platforms: 'iOS · Android',
    links: {
      appstore: 'https://apps.apple.com/ae/app/superdriver-delivery-hero/id6759180801',
      github: 'https://github.com/Abdulkafi99/superdriver.git'
    },
    span: 'span-3',
    mock: 'ledger',
    images: [
      'images/projects/superdriver/01.jpg',
      'images/projects/superdriver/02.jpg',
      'images/projects/superdriver/03.jpg',
    ]
  },
  {
    id: 'atlas',
    name: 'Atlas Field System',
    cat: 'Enterprise · Field Operations',
    desc: 'Offline-first CRM system for field employees.',
    fullDesc: `
    Atlas is an offline-first mobile system designed for field teams.

    Features include GPS tracking, digital signatures,
    PDF reporting, and data sync.

    Used by 50+ field employees in real-world operations.
    `,
    tags: ['Flutter', 'Offline Sync', 'PDF', 'GPS'],
    role: 'Mobile Developer',
    year: '2022',
    platforms: 'Android',
    links: { github: 'https://github.com/Abdulkafi99/atlas-company.git' },
    span: 'span-3',
    mock: 'forka',
    images: [
      'images/projects/atlas/01.jpg',
      'images/projects/atlas/02.jpg',
      'images/projects/atlas/03.jpg',
    ]
  },
  {
    id: 'bookfly',
    name: 'BookFly',
    cat: 'Booking · Multi-domain App',
    desc: 'All-in-one booking system for multiple industries.',
    fullDesc: `
    BookFly is a flexible booking platform supporting hotels,
    hospitals, academies, and tourist services.

    Built with modular architecture using Bloc and Firebase,
    with Google Maps integration.

    Designed to handle multiple business types in one system.
    `,
    tags: ['Flutter', 'Bloc', 'Firebase', 'Maps'],
    role: 'Flutter Developer',
    year: '2021',
    platforms: 'Android · iOS',
    links: { github: 'https://github.com/Abdulkafi99/bookfly.git' },
    span: 'span-3',
    mock: 'echo',
    images: [
      'images/projects/bookfly/01.jpg',
      'images/projects/bookfly/02.jpg',
    ]
  },
  {
    id: 'monasbat',
    name: 'Monasbat',
    cat: 'Events · 3-App Ecosystem',
    desc: 'A 3-app event management ecosystem live on Google Play, serving tribal communities in KSA.',
    fullDesc: `
    Monasbat is a complete event management ecosystem made of 3 integrated mobile apps:
    a public events viewer, an admin control panel, and a tribe-specific edition.

    The main "Monasbat" app lets users browse and view wedding events
    and invitations across the Al-Qunfudah region.

    The "Monasbat Control Panel" is the admin counterpart, used by event
    organizers to add, edit, and manage events shown in the user app.

    A third tribe-focused edition ("Bani Hussein Weddings") was built
    on the same architecture for a different community.

    All three apps live on Google Play and share a common Flutter + Firebase backbone.
    Built and shipped under the SHK Team brand.
    `,
    tags: ['Flutter', 'Firebase', 'Multi-app', 'Real-time', 'Admin Panel'],
    role: 'Mobile Developer',
    year: '2023 — 2024',
    platforms: 'Android',
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.qunfudah.marriages',
      github: 'https://github.com/Abdulkafi99/monasbat.git'
    },
    span: 'span-3',
    mock: 'taskline',
    images: [
      'images/projects/monasbat/01.jpg',
      'images/projects/monasbat/02.jpg',
    ]
  },
  {
  id: 'naqsh',
  name: 'Naqsh Alibtikar',
  cat: 'Community · Digital Platform',
  desc: 'Integrated platform for articles, events, volunteering, jobs, and digital community engagement in KSA.',
  fullDesc: `
  Naqsh Alibtikar is a complete digital platform developed for the Eastern Region in Saudi Arabia.

  The ecosystem combines a modern mobile application and web platform
  into one synchronized system connecting the community with content,
  initiatives, volunteering opportunities, and announcements.

  Features include article publishing, event management,
  volunteer & job opportunities, push notifications,
  dynamic links, and full synchronization between the app and website.

  Built using Flutter, Firebase Cloud Messaging,
  Django REST Framework, PostgreSQL, and React.js.
  `,
  tags: [
    'Flutter',
    'Firebase',
    'Django',
    'PostgreSQL',
    'React',
    'BLoC'
  ],
  role: 'Flutter Developer',
  year: '2025',
  platforms: 'Android · iOS · Web',
  links: {
    appstore: 'https://apps.apple.com/gb/app/%D9%86%D9%82%D8%B4-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1/id6755333950',
    github: 'https://github.com/Abdulkafi99'
  },
  span: 'span-3',
  mock: 'ledger',
  images: [
    'images/projects/Naqash/01.jpg',
    'images/projects/Naqash/02.jpg',
    'images/projects/Naqash/03.jpg',
  ]
},
];

const EXPERIENCE = [
  {
    period: '2023 — Now',
    current: true,
    role: 'Program Support · EdTech & Technical Operations',
    org: 'Oryx Sky ',
    desc: 'Supporting schools and educational programs with technology integration and operations.',
    bullets: [
      'Managing educational platforms and technical deployments.',
      'Supporting teachers and students in coding & cybersecurity programs.',
      'Handling system setup, troubleshooting, and training sessions.',
    ],
    tags: ['EdTech', 'Operations', 'Flutter', 'Support'],
  },
  {
    period: '2023 — Now',
    current: true,
    role: 'IT Support Specialist',
    org: 'World Knowledge',
    desc: 'Providing remote technical support for educational platforms and users.',
    bullets: [
      'Supporting users with system issues and technical troubleshooting.',
      'Handling account setup and access management for students and staff.',
      'Assisting in resolving platform-related problems remotely.',
    ],
    tags: ['IT Support', 'Remote Support', 'Troubleshooting'],
  },
];

const EDU_PROGRAMS = [
  {
    title: 'Mobile App Development with Flutter',
    desc: 'Hands-on Flutter bootcamps for high school and university students from first widget to publishing.',
  },
 {
  title: 'Web & Backend Foundations',
  desc: 'Introducing students to HTML, CSS, and JavaScript fundamentals — building their first websites and APIs.',
},
  {
    title: 'WozEd Programs',
    desc: 'Delivering robotics and physical-computing curriculum in partnership with WozEd across partner schools.',
  },
  {
    title: 'Coding Clubs · K-12',
    desc: 'Long-running after-school clubs introducing Scratch, Dart, and Python to younger students.',
  },
];

const EVENTS = [
  { title: 'STEM MENA Conference', cat: 'Conference', date: '2024', span: 'large', image: 'images/events/stem.jpg' },
  { title: 'MELLC Conference', cat: 'Conference', date: '2024', span: 'large', image: 'images/events/mellc.jpg' },
  { title: 'Lunch & Learn Event', cat: 'Training', date: '2024', span: 'med', image: 'images/events/Lunch.jpg' },
  { title: 'Teacher Training', cat: 'Training', date: '2024', span: 'med', image: 'images/events/training.jpg' },
  { title: 'MESLC Conference', cat: 'Conference', date: '2024', span: 'med', image: 'images/events/meslc.jpg' }
];

const SKILLS_PRIMARY = [
  { name: 'Flutter', detail: 'v3.x · 4 yrs', level: 95, Icon: FlutterIcon },
  { name: 'Dart', detail: 'Async · Streams · FFI', level: 92, Icon: DartIcon },
  { name: 'Firebase', detail: 'Auth · Firestore · FCM', level: 88, Icon: FirebaseIcon },
  { name: 'REST & GraphQL', detail: 'Dio · Retrofit · Hasura', level: 85, Icon: ApiIcon },
];

const SKILLS_SECONDARY = [
  'Riverpod', 'BLoC', 'GetX', 'Provider', 'SQLite',
  'CI/CD', 'Codemagic', 'Stripe',
  'Native channels', 'Figma → Flutter', 'App Store · Play Store',
];

/* ---------------- COMPONENTS ---------------- */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="nav-logo-mark">A</span>
          <span>abdulkafi.dev</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#education">Education</a>
          <a className="nav-link" href="#events">Events</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <div className="nav-status">
          <span className="nav-status-dot" />
          Available · Q2 2026
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Flutter Developer
            </span>
            <h1 className="hero-title">
              Abdulkafi Albrejawi
              <br />
            </h1>
            <p className="hero-desc">
              Flutter Developer & Software Engineer with strong experience in building
              production-ready mobile applications.

              I specialize in Flutter, Firebase, and Clean Architecture,
              delivering real-world apps used across UAE, KSA, and Syria.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                See selected work
                <ArrowUpRight size={16} stroke={2} />
              </a>
              <a href="abdulkafi-cv.pdf" download="abdulkafi-cv.pdf" className="btn btn-ghost">
                <Download size={16} />
                Download CV
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">4+</div>
                <div className="hero-stat-label">Years Flutter</div>
              </div>
              <div>
                <div className="hero-stat-num">10</div>
                <div className="hero-stat-label">Apps shipped</div>
              </div>
              <div>
                <div className="hero-stat-num">2.4K</div>
                <div className="hero-stat-label">Total downloads</div>
              </div>
            
            </div>
          </div>

          <div className="profile-card">
            <span className="profile-corner-tag">Open to work</span>
            <div className="profile-content">
              <div>
                <ProjectMock kind="profile" />
              </div>
              <div className="profile-text">
                <div className="profile-info-item">
                  <span>Age</span>
                  <strong>27</strong>
                </div>
                <div className="profile-info-item">
                  <span>Nationality</span>
                  <strong>Syrian</strong>
                </div>
                <div className="profile-info-item">
                  <span>Company</span>
                  <strong>Oryx Sky | World Knowledge</strong>
                </div>
                <div className="profile-info-item">
                  <span>Work</span>
                  <strong>Freelance | Full-time</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectMock({ kind, image, alt }) {
  if (kind === 'profile') {
    return (
      <div className="phone-mock">
        <div className="phone-mock-notch" />
        <div className="phone-mock-screen">
          <img
            src="images/profile.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    );
  }
  const Phone = ({ children, side = 'left', cls = '' }) => (
    <div className={'phone-mock' + (side === 'right' ? ' right' : '') + (cls ? ' ' + cls : '')}>
      <div className="phone-mock-notch" />
      <div className="phone-mock-screen">{children}</div>
    </div>
  );

  if (image) {
    return <img src={image} alt={alt || ''} className="project-mock-img" loading="lazy" />;
  }

  if (kind === 'pulse') return <Phone><FitnessScreen /></Phone>;
  if (kind === 'ledger') return <Phone side="right"><WalletScreen /></Phone>;
  if (kind === 'forka') return <Phone><FoodScreen /></Phone>;
  if (kind === 'echo') return <Phone side="right"><MusicScreen /></Phone>;
  if (kind === 'taskline') return <Phone><TasksScreen /></Phone>;
  return null;
}

function ProjectGalleryMocks({ kind }) {
  const screens = {
    pulse:    [<FitnessScreen key="a" />, <TasksScreen key="b" />, <MusicScreen key="c" />],
    ledger:   [<WalletScreen key="a" />, <FitnessScreen key="b" />, <TasksScreen key="c" />],
    forka:    [<FoodScreen key="a" />, <WalletScreen key="b" />, <MusicScreen key="c" />],
    echo:     [<MusicScreen key="a" />, <FoodScreen key="b" />, <TasksScreen key="c" />],
    taskline: [<TasksScreen key="a" />, <FitnessScreen key="b" />, <WalletScreen key="c" />],
  }[kind] || [];
  return (
    <>
      <div className="phone-mock alt-2"><div className="phone-mock-notch" /><div className="phone-mock-screen">{screens[2]}</div></div>
      <div className="phone-mock"><div className="phone-mock-notch" /><div className="phone-mock-screen">{screens[0]}</div></div>
      <div className="phone-mock alt-1"><div className="phone-mock-notch" /><div className="phone-mock-screen">{screens[1]}</div></div>
    </>
  );
}

/* ---------------- LIGHTBOX ---------------- */
function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close fullscreen">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img
        src={src}
        alt="Full size view"
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.body.classList.add('modal-open');
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, lightboxImage]);

  if (!project) return null;
  const { links = {} } = project;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="modal-gallery">
            {project.images && project.images.length > 1 ? (
              <div className="modal-gallery images">
                {project.images.slice(1).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className={'gallery-img' + (i === 0 && project.images.length > 3 ? ' featured' : '')}
                    loading="lazy"
                    onClick={() => setLightboxImage(src)}
                  />
                ))}
              </div>
            ) : (
              <>
                <ProjectGalleryMocks kind={project.mock} />
                <div className="modal-thumbs">
                  <div className="modal-thumb active" />
                  <div className="modal-thumb" />
                  <div className="modal-thumb" />
                </div>
              </>
            )}
          </div>

          <div className="modal-body">
            <div className="modal-cat">{project.cat}</div>
            <h3 className="modal-title">{project.name}</h3>
            <p className="modal-desc">{project.fullDesc}</p>

            <div className="modal-meta-grid">
              <div>
                <div className="modal-meta-label">Role</div>
                <div style={{ fontSize: 14 }}>{project.role}</div>
              </div>
              <div>
                <div className="modal-meta-label">Year</div>
                <div style={{ fontSize: 14 }}>{project.year}</div>
              </div>
              <div>
                <div className="modal-meta-label">Platforms</div>
                <div style={{ fontSize: 14 }}>{project.platforms}</div>
              </div>
              <div>
                <div className="modal-meta-label">Stack</div>
                <div className="modal-tags">
                  {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              {links.github && (
                <a className="btn btn-primary" href={links.github} target="_blank" rel="noreferrer">
                  <GitHubIcon size={15} /> View on GitHub
                </a>
              )}
              {links.appstore && (
                <a className="btn btn-ghost" href={links.appstore} target="_blank" rel="noreferrer">
                  App Store <ArrowUpRight size={14} stroke={2} />
                </a>
              )}
              {links.playstore && (
                <a className="btn btn-ghost" href={links.playstore} target="_blank" rel="noreferrer">
                  Play Store <ArrowUpRight size={14} stroke={2} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head">
            <span className="section-label">Selected work</span>
            <h2 className="section-title">Mobile apps that ship and stay shipped.</h2>
            <p className="section-sub">A small slice of the apps I've built end-to-end | from the first
              Flutter widget to the App Store submission. All numbers are real.</p>
          </div>
          
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className={'project-card ' + p.span} onClick={() => onOpen(p)}
              role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onOpen(p); }}>
              <div className="project-mock tall">
                <ProjectMock
                  kind={p.mock}
                  image={p.images && p.images.length > 0 ? p.images[0] : null}
                  alt={p.name}
                />
              </div>
              <div className="project-info">
                <div className="project-info-row">
                  <div>
                    <div className="project-cat">{p.cat}</div>
                    <div className="project-name" style={{ marginTop: 2 }}>{p.name}</div>
                  </div>
                  <div className="project-arrow">
                    <ArrowUpRight size={14} stroke={1.8} />
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" data-screen-label="02 Experience">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've been spending my days.</h2>
          <p className="section-sub">Beyond client app work, I split my time between operations and on-the-ground
            program support , helping schools, students, and educators actually use the technology they invest in.</p>
        </div>

        <div className="experience-grid">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-card">
              <div>
                <div className="exp-period">{e.period}</div>
                {e.current && <span className="exp-period-now">CURRENT</span>}
              </div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">@ {e.org}</div>
                <p className="exp-desc">{e.desc}</p>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="exp-meta-tags">
                  {e.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EduIcon = ({ kind }) => {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'flutter') return <svg {...common}><path d="M14.5 3L4 13.5l3 3L20.5 3h-6zM14.5 13L9 18.5 14.5 24h6L15 18.5l5.5-5.5h-6z" /></svg>;
  if (kind === 'shield') return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>;
  if (kind === 'cap') return <svg {...common}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
};

function Education() {
  return (
    <section className="section" id="education" data-screen-label="03 Education">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Education &amp; Training</span>
          <h2 className="section-title">Teaching the next generation of builders.</h2>
          <p className="section-sub">A part of every week goes to classrooms and workshops , turning what I do for a living
            into something a 14-year-old can ship by Friday.</p>
        </div>

        <div className="edu-grid">
          <div className="edu-feature">
            <div className="edu-feature-inner">
              <span className="edu-tag"><span style={{ width: 6, height: 6, borderRadius: 99, background: 'currentColor', display: 'inline-block' }} /> Mentor · Trainer</span>
              <h3>Bringing real-world coding, mobile development and cybersecurity into the classroom.</h3>
              <p>I work with schools and education programs to design and deliver hands-on technology curricula , ranging from
                first-time coders through to high schoolers shipping their own Flutter apps. The focus is always practical:
                ship something real, understand why it works, then break it on purpose.</p>
              <div className="edu-stats">
                <div>
                  <div className="edu-stat-num">12+</div>
                  <div className="edu-stat-label">Schools</div>
                </div>
                <div>
                  <div className="edu-stat-num">450+</div>
                  <div className="edu-stat-label">Students</div>
                </div>
                <div>
                  <div className="edu-stat-num">30+</div>
                  <div className="edu-stat-label">Workshops</div>
                </div>
              </div>
            </div>
          </div>

          <div className="edu-list">
            {[
              { kind: 'flutter', ...EDU_PROGRAMS[0] },
              { kind: 'shield',  ...EDU_PROGRAMS[1] },
              { kind: 'cap',     ...EDU_PROGRAMS[2] },
              { kind: 'spark',   ...EDU_PROGRAMS[3] },
            ].map((p, i) => (
              <div key={i} className="edu-item">
                <div className="edu-item-icon"><EduIcon kind={p.kind} /></div>
                <div>
                  <div className="edu-item-title">{p.title}</div>
                  <div className="edu-item-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightboxImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="section" id="events" data-screen-label="04 Events">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head">
            <span className="section-label">Events &amp; Activities</span>
            <h2 className="section-title">Snapshots from workshops, talks &amp; programs.</h2>
            <p className="section-sub">A growing scrapbook of the schools, meetups, and hackathons
              where I've shown up to teach, build, or just hang out with other builders.</p>
          </div>
        </div>

        <div className="events-grid">
          {EVENTS.map((ev, i) => (
            <div 
              key={i} 
              className={'event-tile ' + ev.span} 
              style={{ position: 'relative', overflow: 'hidden', cursor: ev.image ? 'zoom-in' : 'default' }}
              onClick={() => ev.image && setLightboxImage(ev.image)}
              role={ev.image ? "button" : undefined}
              tabIndex={ev.image ? 0 : undefined}
              onKeyDown={(e) => { if (e.key === 'Enter' && ev.image) setLightboxImage(ev.image); }}
            >
              <div className="event-tile-bg" style={{ '--c1': ev.c1, '--c2': ev.c2, '--angle': ev.angle }} />
              {ev.image ? (
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="event-img"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
                />
              ) : (
                <div className="event-tile-placeholder" style={{ zIndex: 1 }}>// photo</div>
              )}
              <div className="event-tile-overlay" style={{ position: 'relative', zIndex: 2 }}>
                <div className="event-tile-cat">{ev.cat}</div>
                <div className="event-tile-title">{ev.title}</div>
                <div className="event-tile-meta">{ev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
}

function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          <span className="section-label" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Toolkit</span>
          <h2 className="section-title">The stack I reach for every day.</h2>
          <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            A mobile-first developer with a wider toolbox: deep Flutter & Firebase
expertise, plus years of hands-on IT support, server admin, and EdTech
operations. I build apps and I keep them running.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_PRIMARY.map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-icon"><s.Icon size={22} /></div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-detail">{s.detail}</div>
              <div className="skill-bar">
                <div
                  className={'skill-bar-fill' + (visible ? ' in-view' : '')}
                  style={{ '--w': s.level + '%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-secondary">
          {SKILLS_SECONDARY.map((s) => <span key={s} className="skill-pill">{s}</span>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'kafi.brejawi@gmail.com';

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-inner">
            <span className="section-label" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Let's talk</span>
            <h2 className="contact-title">
              Got an idea worth <span className="accent">building</span>?
            </h2>
            <p className="contact-desc">
             I'm always happy to hear about new ideas, opportunities, or
collaborations. If there's anything I can help with, reach out anytime.
            </p>

            <button className={'email-btn' + (copied ? ' copied' : '')} onClick={copyEmail}>
              <Mail size={16} />
              <span>{email}</span>
              <span className="email-btn-copy">
                {copied ? <><Check size={11} stroke={2.4} /> copied</> : <><Copy size={11} /> copy</>}
              </span>
            </button>

            <div className="socials">
              <a className="social-btn" href="https://github.com/Abdulkafi99" target="_blank" rel="noreferrer">
                <GitHubIcon size={15} /> GitHub
              </a>
              <a className="social-btn" href="https://www.linkedin.com/in/abdulkafibr" target="_blank" rel="noreferrer">
                <LinkedInIcon size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div> © 2026 Abdulkafi Albrejawi · Built with Flutter on the brain</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- TWEAKS ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 180,
  "accentChroma": 0.14,
  "density": "comfortable",
  "headingStyle": "mixed",
  "showProfileTag": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = [
  { label: 'Mint', hue: 180, chroma: 0.14 },
  { label: 'Lime', hue: 145, chroma: 0.16 },
  { label: 'Amber', hue: 75, chroma: 0.16 },
  { label: 'Coral', hue: 30, chroma: 0.15 },
  { label: 'Iris', hue: 285, chroma: 0.14 },
];

function Tweaks({ tweaks, setTweak }) {
  const { TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSlider } = window;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', `oklch(0.82 ${tweaks.accentChroma} ${tweaks.accentHue})`);
    root.style.setProperty('--accent-soft', `oklch(0.82 ${tweaks.accentChroma} ${tweaks.accentHue} / 0.12)`);
    root.style.setProperty('--accent-fg', `oklch(0.18 0.02 ${tweaks.accentHue})`);
    if (tweaks.density === 'compact') {
      root.style.setProperty('--container', '1080px');
      document.body.style.fontSize = '15px';
    } else if (tweaks.density === 'spacious') {
      root.style.setProperty('--container', '1240px');
      document.body.style.fontSize = '17px';
    } else {
      root.style.setProperty('--container', '1180px');
      document.body.style.fontSize = '16px';
    }
  }, [tweaks]);

  const setPreset = (label) => {
    const p = ACCENT_PRESETS.find(p => p.label === label);
    if (p) setTweak({ accentHue: p.hue, accentChroma: p.chroma });
  };
  const currentPreset = ACCENT_PRESETS.find(p => p.hue === tweaks.accentHue)?.label || 'Custom';

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent color">
        <TweakRadio value={currentPreset} options={ACCENT_PRESETS.map(p => p.label)} onChange={setPreset} />
        <TweakSlider label="Hue" value={tweaks.accentHue} min={0} max={360} step={5} onChange={(v) => setTweak('accentHue', v)} />
      </TweakSection>
      <TweakSection title="Density">
        <TweakRadio value={tweaks.density} options={['compact', 'comfortable', 'spacious']} onChange={(v) => setTweak('density', v)} />
      </TweakSection>
      <TweakSection title="Display">
        <TweakToggle label="Show 'Open to work' tag" value={tweaks.showProfileTag} onChange={(v) => setTweak('showProfileTag', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

/* ---------------- APP ---------------- */
function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    document.querySelectorAll('.profile-corner-tag').forEach(el => {
      el.style.display = tweaks.showProfileTag ? '' : 'none';
    });
  }, [tweaks.showProfileTag]);

  return (
    <>
      <Nav />
      <main data-screen-label="01 Portfolio">
        <Hero />
        <Projects onOpen={setOpenProject} />
        <Experience />
        <Education />
        <Events />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);