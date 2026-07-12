// Full content for "Turning the Page (Without Losing the Plot)"
// 46 slides driving the deck's reusable layout components.
//
// layout values: title | section | statement | quote | stat | list | chart | closing
//
// Text fields use a light *word* markup to mark italic accent words —
// parsed by components/Emphasis.js.

export const deckMeta = {
  title: "Turning the Page (Without Losing the Plot)",
  subtitle: "How to use AI without losing yourself",
  speaker: "Daniel Hook · CEO, Digital Science",
  context: "A talk for Pan Macmillan",
};

const slides = [
  {
    id: 1,
    layout: "title",
    kicker: "INSPIRE",
    headline: "Turning the Page (Without *Losing* the Plot)",
    subtext: "How to use AI without losing yourself",
    byline: ["Daniel Hook · CEO, Digital Science", "A talk for Pan Macmillan"],
    notes: "Open warmly. This is a confession, not a thesis.",
  },
  {
    id: 2,
    layout: "list",
    kicker: "THREE THINGS I WROTE BEFORE I FELT IT",
    items: [
      {
        title: "Tinker, Researcher, Prompter, Wizard",
        meta: "May 2023",
        url: "https://www.digital-science.com/blog/tinker-researcher-prompter-wizard/",
        image:
          "https://www.digital-science.com/wp-content/uploads/2025/02/sci-fi-wizards-of-course-1024x509-3.jpg",
      },
      {
        title: "The Lone Banana Problem",
        meta: "June 2023",
        url: "https://www.digital-science.com/blog/the-lone-banana-problem-or-the-new-programming-speaking-ai/",
        image: "https://www.digital-science.com/wp-content/uploads/2023/06/image1-3.jpg",
      },
      {
        // Corrected from an earlier draft's working title ("AI in
        // Research") to the report's actual published title.
        title: "DeepSeek and the New Geopolitics of AI",
        meta: "Digital Science Report, July 2025",
        url: "https://doi.org/10.6084/m9.figshare.29336588",
        image: "https://s3-eu-west-1.amazonaws.com/pfigshare-u-previews/56093441/thumb.png",
      },
    ],
    notes:
      "Intellectual engagement isn't the same as feeling it. That gap is the whole point of this chapter.",
  },
  {
    id: 3,
    layout: "stat",
    symbol: "?  ?  ?  →  { }",
    headline: "Questions → SQL",
    subtext: "Christmas, this year. Dimensions data. Years of questions I'd never had time to ask — suddenly all within reach.",
    notes:
      "Not one question — many. Vibe-coding over the holidays opened up a whole backlog at once. My SQL is fine but slow — Claude wrote it faster than I could type.",
  },
  {
    id: 4,
    layout: "quote",
    quote:
      "I can't really explain it, I haven't got the words, it's a feeling that you can't control, I suppose it's like forgetting, losing who you are, and at the same time, something makes you whole.",
    attribution: "Elton John — Electricity",
    notes:
      "Careful here — this lyric is about losing yourself. Name that fear directly before subverting it.",
  },
  {
    id: 5,
    layout: "quote",
    quote: "Then suddenly I'm flying, flying like a bird… I'm free.",
    attribution: "Elton John — Electricity",
    notes:
      "This is closer to the real feeling — a constraint dropping away, not identity dissolving.",
  },
  {
    id: 6,
    layout: "statement",
    headline:
      "The Claude moment: when the constraint drops, and you realise what was actually on the other side of it.",
    notes: "Name the internal term. This is what the whole talk is about.",
  },
  {
    id: 7,
    layout: "statement",
    tone: "thesis",
    lines: ["Not less yourself.", "*More* yourself."],
    subtext: "Not an average. Not flattened. More you.",
    notes: "This is the thesis line. Say it slowly — pause on the full stop before 'More yourself.'",
  },
  {
    id: 8,
    layout: "section",
    eyebrow: "Chapter One",
    headline: "A 16-year-old startup rereads its own first chapter",
    notes: "Transition into the company origin story.",
  },
  {
    id: 9,
    layout: "chart",
    kicker: "PORTFOLIO",
    headline: "Sixteen years. Nineteen companies. One family tree.",
    chartData: {
      // The presenter's actual original chart (source: DS Development.ai),
      // rendered as a figure plate by components/charts/PortfolioSankey.js.
      // Do not relabel or regroup — the chart's own colour key (customer
      // segment) and era bands are load-bearing and shown as-is.
      type: "sankey",
    },
    notes:
      "This is the real portfolio chart, straight from Daniel's own Illustrator file. Let it breathe on screen for a beat before speaking over it — there's a lot of detail (colour = customer segment, bands = era).",
  },
  {
    id: 10,
    layout: "statement",
    headline: "Every one of them started as somebody's baby.",
    notes:
      "Founders and their manuscripts — nobody wants their chapter rewritten by committee.",
  },
  {
    id: 11,
    layout: "statement",
    headline: "Three years ago, we started becoming *one* Digital Science.",
    notes:
      "The deliberate move from federation to integration, accelerated by the market and then by AI.",
  },
  {
    id: 12,
    layout: "statement",
    bg: "#EDDFBE",
    headline: "Somewhere across sixteen years, we lost some of our startup culture.",
    notes: "Own this plainly. It buys credibility for the rest of the talk.",
  },
  {
    id: 13,
    layout: "statement",
    tone: "thesis",
    headline: "We didn't get to stay a startup. So we decided to become one again — *on purpose*.",
    notes: "Not nostalgia. A rewrite.",
  },
  {
    id: 14,
    layout: "section",
    eyebrow: "Chapter Two",
    headline: "Three rules for rewriting while the readers are still reading",
    notes: "Into the practical, two-years-ago initiatives.",
  },
  {
    id: 15,
    layout: "list",
    kicker: "TWO YEARS AGO: THREE LINES OF ATTACK",
    items: [
      "Tools in people's hands",
      "A place to share what people found",
      "Seminars that build real enthusiasm",
    ],
    notes: "Set up the three beats to come.",
  },
  {
    id: 16,
    layout: "list",
    kicker: "1 · TOOLS IN PEOPLE'S HANDS",
    items: [
      "ChatGPT subscription, company-wide",
      "Gemini access negotiated with Google",
      "120 managers · 3-day custom course · Cambridge Judge Business School · 'Generative AI: From Hype to Business Impact'",
    ],
    notes: "Leadership by example only works if the example is real.",
  },
  {
    id: 17,
    layout: "statement",
    headline: "2 · A place to share. An internal 'gig economy' for trying things and sharing what you found.",
    subtext: "Somewhat successful. Time was the real blocker.",
    notes:
      "Own the partial failure here — the rest of the talk depends on this honesty.",
  },
  {
    id: 18,
    layout: "statement",
    headline: "3 · Seminars that build real enthusiasm.",
    subtext: "The test: could you picture doing this on Monday morning — not 'how fascinating'.",
    notes: "Practical speakers over theorists, deliberately.",
  },
  {
    id: 19,
    layout: "statement",
    headline: "We still hit a wall: time. Client need always won.",
    notes: "The honest pivot point before the 12-week programme.",
  },
  {
    id: 20,
    layout: "statement",
    tone: "thesis",
    headline: "The great paradox: we sell data-driven decisions. Our own data is a mess of nineteen systems.",
    notes: "Sets up Chapter Three later — plant the seed here.",
  },
  {
    id: 21,
    layout: "section",
    eyebrow: "Early 2026",
    headline: "A heroic action",
    notes: "The board decides incremental isn't enough.",
  },
  {
    id: 22,
    layout: "stat",
    stats: [
      { value: "12 WEEKS", label: "" },
      { value: "1 DAY/WEEK", label: "" },
    ],
    subtext: "680 people. No email. No meetings.",
    notes: "State the scale plainly — this was not a pilot.",
  },
  {
    id: 23,
    layout: "quote",
    tone: "mission",
    quote: "Our goal is to re-found Digital Science as an AI-native organisation.",
    notes: "Their own words, from the internal deck. Not adopt. Not adapt. Re-found.",
  },
  {
    id: 24,
    layout: "list",
    kicker: "WHAT WE BUILT AROUND IT",
    items: [
      "Deadlines pushed back 12 days",
      "Line managers trained to support their teams",
      "Weekly help desk",
      "Programme committee designed the curriculum",
      "A companion app — built overnight by a colleague, unasked",
      "Progress tracking & peer collaboration",
    ],
    notes: "The chatbot-built-overnight detail is the best one — land it clearly.",
  },
  {
    id: 25,
    layout: "statement",
    headline: "AI Mondays. Then AI Tuesdays.",
    subtext: "Bank holidays forced the switch. Tuesday turned out better anyway.",
    notes: "A real, small, honest pivot mid-programme.",
  },
  {
    id: 26,
    layout: "statement",
    headline: "The cost was real.",
    subtext: "Claude available company-wide. Tokens and spend monitored weekly. Not a trivial bill.",
    notes: "Budget honestly — don't discover this in month two.",
  },
  {
    id: 27,
    layout: "chart",
    kicker: "FINDINGS",
    headline: "AI capability: Week 1 vs Week 12",
    subtext: "n = 442",
    chartData: {
      type: "bar-grouped",
      series: [{ name: "Week 1" }, { name: "Week 12" }],
      categories: [
        { label: "Explorer (Basic)", values: [27, 1] },
        { label: "Operator (Intermediate)", values: [47, 34] },
        { label: "Power User (Advanced)", values: [20, 52] },
        { label: "Strategist (Expert)", values: [5, 13] },
      ],
    },
    notes: "Read the headline number: advanced/expert roughly 25% → 65% combined.",
  },
  {
    id: 28,
    layout: "chart",
    kicker: "FINDINGS",
    headline: "AI usage: Week 1 vs Week 12",
    subtext: "% of working time spent using AI · n = 192",
    chartData: {
      type: "bar-grouped",
      series: [{ name: "Week 1" }, { name: "Week 12" }],
      categories: [
        { label: "Incidental (<10%)", values: [24, 4] },
        { label: "Supportive (10–40%)", values: [52, 37] },
        { label: "Collaborative (41–70%)", values: [20, 43] },
        { label: "AI-Enabled (>70%)", values: [4, 15] },
      ],
    },
    notes: "Combined >40% usage: roughly 25% → 60%.",
  },
  {
    id: 29,
    layout: "stat",
    kicker: "ENGAGEMENT",
    stats: [
      { value: "95%", label: "logged in" },
      { value: "83%", label: "engaged regularly" },
      { value: "+1", label: "grade level (self-assessed)" },
    ],
    notes: "Engagement numbers, stated fast and confidently.",
  },
  {
    id: 30,
    layout: "quote",
    quote:
      "An average day for me now involves four to five times the amount of work done compared to doing it all manually.",
    attribution: "Anonymous colleague",
    notes: "Colleague quote, anonymous.",
  },
  {
    id: 31,
    layout: "quote",
    quote: "I am moving beyond AI Tuesdays and using it every day. I imagine many others are as well.",
    attribution: "Anonymous colleague",
    notes: "Shows organic adoption beyond the mandated day.",
  },
  {
    id: 32,
    layout: "quote",
    tone: "heavy",
    quote: "AI speeds up code writing but shifts the bottleneck to code review. It's a real leadership challenge.",
    attribution: "Anonymous colleague",
    notes:
      "The most important quote in the deck — solving one constraint reveals the next. Don't rush past this one.",
  },
  {
    id: 33,
    layout: "section",
    eyebrow: "Chapter Three",
    headline: "The one we got wrong",
    notes: "Tone shift — slow down, be plain.",
  },
  {
    id: 34,
    layout: "statement",
    headline: "We sell data-driven decisions. Our own data estate is still disparate.",
    notes: "Callback to slide 20's paradox, now paid off.",
  },
  {
    id: 35,
    layout: "statement",
    align: "left",
    headline: "We built individual fluency faster than we built the data foundation underneath it.",
    subtext: "We taught 680 people to fly before finishing the ground beneath them.",
    notes: "This is the core admission of the whole talk. Say it plainly, no spin.",
  },
  {
    id: 36,
    layout: "list",
    tone: "stark",
    kicker: "STILL LIVE, STILL UNRESOLVED",
    items: [
      "How much dependence on one AI vendor is healthy?",
      "What's the environmental cost of the compute we're now using?",
      "Is some of what we're generating real value, or just more volume?",
    ],
    notes: "Don't offer false resolution — these are genuinely open.",
  },
  {
    id: 37,
    layout: "section",
    eyebrow: "Epilogue",
    headline: "Author, not ghostwriter",
    notes: "Final act. Return to the personal register from the prologue.",
  },
  {
    id: 38,
    layout: "statement",
    lines: [
      "140 million articles.",
      "Zero structured fields for AI use.",
      "One CEO with Tuesdays free.",
    ],
    notes: "Set up the personal Speakable/Unspeakable project.",
  },
  {
    id: 39,
    layout: "stat",
    stats: [
      { value: "80%", label: "say they use it" },
      { value: "2.5%", label: "say so in print" },
    ],
    notes: "The headline finding. Let it sit on screen a beat before speaking over it.",
  },
  {
    id: 40,
    layout: "chart",
    kicker: "FINDINGS",
    headline: "Citation premium for papers that disclose AI use (field-normalised)",
    subtext: "Causality uncertain — correlation only",
    chartData: {
      type: "bar-single",
      unit: "%",
      categories: [
        { label: "2022", value: 37 },
        { label: "2023", value: 98 },
        { label: "2024", value: 65 },
      ],
    },
    notes: "Honesty doesn't cost you — it appears to pay, though causality is uncertain.",
  },
  {
    id: 41,
    layout: "statement",
    headline: "From a Tuesday to Google.org.",
    subtext: "Rejected for a grant on a technicality. Invited back as consultancy instead.",
    notes: "A side-project's unexpected external validation.",
  },
  {
    id: 42,
    layout: "statement",
    tone: "thesis",
    headline: "Sound familiar?",
    notes: "Turn to face the room here — this is the pivot to why it matters to publishing specifically.",
  },
  {
    id: 43,
    layout: "statement",
    headline: "This is still early.",
    subtext: "Someone has to set the norm before somebody else does.",
    notes: "Early means nothing is fixed yet — that's the opportunity, not a caveat.",
  },
  {
    id: 44,
    layout: "statement",
    align: "left",
    headline: "Publishing has always decided what 'good' looks like when new tools show up.",
    subtext: "You get to do it again.",
    notes: "Word processors, digital typesetting, ebooks — now this.",
  },
  {
    id: 45,
    layout: "statement",
    tone: "thesis",
    headline: "*Author*, not ghostwriter.",
    subtext: "Claude wrote the SQL and the Python. I decided what was worth asking — and what it meant.",
    notes: "The central distinction of the whole talk.",
  },
  {
    id: 46,
    layout: "closing",
    headline: "Not only built on Tuesdays.",
    subtext: "How can AI help you to spend more time being creative?",
    notes: "End here. Let it sit. Then open for questions.",
  },
];

export default slides;
