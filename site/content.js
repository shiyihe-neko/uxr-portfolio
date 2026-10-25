const projects = [
{
  "id": "qualivision",
  "showFacts": false,
  "number": "01",
  "short": "QualiVision",
  "category": "HUMAN–AI INTERACTION",
  "color": "blue",
  "title": "Traceable analysis. AI-supported reflection.",
  "question": "How can an integrated workspace combine timeline-linked evidence, traceable coding relationships, visualization, and AI assistance to support reflection and insight exploration in qualitative video analysis?",
  "summary": "Designing an integrated video-analysis workspace that links evidence, codes, and notes on a shared timeline, makes evolving coding relationships traceable and visually comparable, and supports reflection and insight exploration with AI.",
  "methods": [
    "Research through design",
    "System prototyping",
    "Qualitative analysis",
    "Traceability",
    "AI-supported reflection"
  ],
  "stat": "Early prototype · In development",
  "venue": "VL/HCC 2026 GC",
  "time": "4 min",
  "intro": "I designed QualiVision to address fragmented qualitative video-analysis workflows by connecting video evidence, transcripts, codes, and analytic notes on a shared timeline. The design aims to make coding relationships and their evolution traceable and visually comparable. The project explores how visualization and AI can support researchers in revisiting evidence, reflecting on interpretations, and developing insights. QualiVision is currently an early prototype, with further features still in development.",
  "role": "As the sole author, I lead the project from problem framing and review of existing tools to interaction design, prototype implementation, and evaluation planning. I also use the prototype in my own video-based research analysis to identify workflow needs.",
  "team": "Shiyi He",
  "sections": [
    {
      "id": "question",
      "label": "Research questions",
      "title": "Connect the workflow. Follow the analysis. Explore AI support.",
      "body": "Qualitative video analysis is often fragmented across tools, while codes, relationships, and interpretations continue to evolve. QualiVision brings workflow integration, traceability, visual comparison, and AI-assisted reflection into three connected research questions:",
      "cards": [
        [
          "RQ1 · Workflow integration",
          "How can video evidence, transcripts, codes, and analytic notes be connected within a coherent analysis workflow?"
        ],
        [
          "RQ2 · Traceability and visual comparison",
          "How can researchers trace evolving coding relationships and compare coding patterns across moments, coding streams, and stages of analysis?"
        ],
        [
          "RQ3 · AI-assisted reflection",
          "How can visualization and AI support researchers in reflecting on interpretations and exploring insights grounded in the evidence?"
        ]
      ]
    },
    {
      "id": "evidence",
      "label": "Prototype & design goals",
      "title": "An early prototype, still in development.",
      "body": "The early prototype supports video playback, transcript editing, multiple coding streams, undo and redo, and preliminary visual summaries and reports. I use it in my own video-based analyses. Further development focuses on the following contribution and design goals.",
      "designContribution": {
        "label": "Core design contribution",
        "title": "Spreadsheets as the data-management backend.",
        "body": "The design keeps annotation data in sync between the interface and a spreadsheet backend. Annotations added or edited in the interface will update the sheets, and edits made in the sheets will appear back in the interface.",
        "rationale": "This will let researchers organize their annotation data and carry out their own analyses in the sheets, while keeping their changes in sync with the interface."
      },
      "cards": [
        [
          "Connect video annotations with the sheets",
          "Keep codes and notes linked to video moments on the timeline, with annotation edits syncing both ways between the interface and the sheets."
        ],
        [
          "Trace and compare changes in coding",
          "Show how codes and their relationships change over time, and let researchers compare earlier and later coding."
        ],
        [
          "Explore reflection with visualization and AI",
          "Explore how visualizations and AI can help researchers reflect on interpretations and discover possible connections in the evidence."
        ]
      ],
      "figure": {
        "src": "assets/qualivision/system-architecture.png",
        "width": 2034,
        "height": 602,
        "alt": "QualiVision system architecture: external video URLs feed the video analysis workspace; a Google Apps Script bridge connects annotations with spreadsheet storage; the Visual/AI dashboard presents summaries and prompts; an export module provides analysis data and summaries. The figure includes screenshots of the early workspace and dashboard.",
        "caption": "System architecture and early prototype views.",
        "sourceLabel": "Figure 1 · QualiVision paper",
        "sourceUrl": "https://arxiv.org/html/2608.13594v1"
      }
    },
    {
      "id": "next",
      "label": "Next steps",
      "title": "Continue developing QualiVision.",
      "body": "The next stage will add two-way annotation sync between the interface and the sheets, views for tracing and comparing coding changes, and visual and AI support for reflection and insight exploration."
    },
    {
      "id": "evaluation",
      "label": "Evaluation plan",
      "title": "From structured tasks to researchers’ own projects.",
      "body": "I plan to begin with Comparative Structured Observation (CSO), comparing QualiVision with a conventional multi-tool workflow using tasks we provide. This phase will focus on usability and user experience, combining task performance, observations, and participant feedback to understand how well the tool supports qualitative video analysis.",
      "extra": "To examine ecological validity, I then plan to invite researchers to use QualiVision in their own projects over a longer period. This will help me understand how it fits their existing practices and supports analysis as their questions, codes, and interpretations evolve in real use."
    }
  ],
  "links": [
    [
      "Read the paper",
      "https://arxiv.org/abs/2608.13594"
    ]
  ],
  "sourceNote": "Based on Towards Scaling Qualitative Analysis of Video Data, project design notes, and my UXR résumé. Prototype capabilities and proposed extensions are distinguished in the text. The interaction below is a conceptual reconstruction with a fictional example, not participant evidence."
},
  {
    id: 'wrangling', number: '02', short: 'Wrangling tools', category: 'HUMAN–AI INTERACTION', color: 'sage',
    title: 'Same data, different tools, different ways of thinking.',
    question: 'How do interfaces shape the way people clean data?',
    summary: 'Looking beyond task completion to understand how people plan, explore, and verify their work across four tool paradigms.',
    methods: ['Mixed methods', 'Think-aloud', 'Remote study', 'Crowdwork study'],
    stat: '40 freelancers', venue: 'VL/HCC 2026', time: '4 min',
    takeaway: 'Tool choice shapes strategies, but does not guarantee better outcomes.',
    intro: 'Data cleaning is more than a sequence of corrections. People must decide what looks wrong, what to change, and whether to trust the result. I studied these decisions across ChatGPT, Jupyter, Excel, and OpenRefine.',
    role: 'As first author, I owned the research end to end: study design, recruitment, reVISit implementation and remote deployment, data collection, mixed-methods analysis, synthesis, and writing.',
    team: 'Shiyi He, El Kindi Rezig, Paul Rosen, Andrew M. McNutt',
    sections: [
  {
    "id": "approach",
    "label": "Study design",
    "title": "Follow each cleaning task from action to outcome.",
    "body": "I compared how participants approached the same two cleaning tasks using different tools. I used <a class=\"study-platform-link\" href=\"https://revisit.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">reVISit</a>, an open-source platform for running online user studies, to deploy the study remotely and collect screen and think-aloud recordings, cleaned datasets, and workload and usability questionnaires.",
    "widget": "wrangling-study",
    "extra": "I used the Technical Dimensions of Programming Systems framework to examine how interface characteristics related to participants’ cleaning strategies."
  },
  {
    "id": "evidence",
    "label": "Key findings",
    "title": "Different interface trade-offs, no consistent advantage in output quality.",
    "body": "Output comparisons showed no consistent advantage for one tool. Solutions were more similar in the constrained task and more varied in the open-ended task. The qualitative analysis identified seven design trade-offs; the four themes below are selected highlights.",
    "widget": "wrangling",
    "cards": [
      [
        "Visibility vs. Abstraction",
        "Visible data made local issues easier to notice and encouraged opportunistic corrections. Abstraction-centered workflows supported systematic, compositional transformations, while requiring more cognitive and procedural effort."
      ],
      [
        "Predictability vs. Simplicity",
        "Natural-language interfaces made complex requests easier to express, but introduced ambiguity about the resulting actions. Explicit specifications offered more control and predictability, with additional procedural effort and opportunities for errors."
      ],
      [
        "Big vs. Small Steps",
        "One-shot automation simplified multi-step transformations but obscured intermediate states and downstream effects. Smaller steps gave users more opportunities to inspect results, adjust individual operations, and recover incrementally from errors."
      ],
      [
        "Entangled Integration vs. Fragmented Splits",
        "Separating data, transformations, and outputs made their roles clearer, but increased navigation and fragmented the workflow. Bringing them together supported continuous work while risking confusion between operations and results."
      ]
    ]
  },
  {
    "id": "implications",
    "label": "Design implications",
    "title": "Make transformations visible and verifiable.",
    "body": "The findings informed three design directions for helping people carry a cleaning decision through to a result they can inspect:",
    "cards": [
      [
        "Guide the next step",
        "Help users connect a task goal with an appropriate cleaning action."
      ],
      [
        "Expose transformations",
        "Show what a transformation changes so users can inspect its effects."
      ],
      [
        "Combine complementary interaction styles",
        "Explore notebooks with AI assistance, or combine spreadsheet-style data views with the programmable transformations of notebooks. These combinations could bring complementary strengths into one cleaning workflow."
      ]
    ]
  }
],
    links:[['Read the paper','https://arxiv.org/abs/2607.26198'],['Explore the reVISit study','https://wrangler-tdops-study.netlify.app/a-notebook']],
    sourceNote:'Publication details and methods: the linked paper. Recommendation summary: my October 2026 UXR résumé. First authorship and end-to-end research ownership confirmed by Shiyi He. Illustrations on this page are explanatory reconstructions.'
  },
  {
    id:'dsf', number:'03', short:'Data formats', category:'DEVELOPER EXPERIENCE', color:'peach',
    title:'Are “human-friendly” data formats easier to use?',
    question:'What makes a data format usable in practice?',
    summary:'Combining usability evaluation with practitioner interviews to understand how data formats shape the way people read, edit, and write data.',
    methods:['Usability evaluation','Practitioner interviews','Mixed methods','Crowdwork study'],
    stat:'215 crowd workers + 9 practitioners', venue:'VL/HCC 2026', time:'4 min',
    takeaway:'Usability extends beyond syntax to the tools, practices, and communities around a format.',
    intro:'JSON, YAML, XML, and their peers represent similar information in different ways. Developers have strong preferences, but preference alone does not explain how easily someone can read, edit, or maintain a file.',
    role:'As first author, I owned the research end to end: study design, recruitment, reVISit implementation and remote deployment, the 215-participant usability study, nine practitioner interviews, analysis, synthesis, and writing.',
    team:'Shiyi He, Zach Cutler, Andrew M. McNutt',
    sections:[
  {
    "id": "approach",
    "label": "Study design",
    "title": "Compare notation, then look beyond it.",
    "body": "I paired a controlled usability study with practitioner interviews to understand both how people perform with different formats and what makes those formats workable in everyday development.",
    "widget": [
      "dsf",
      "dsf-study"
    ],
    "extra": "I deployed the task study through <a class=\"study-platform-link\" href=\"https://revisit.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">reVISit</a>, an open-source platform for running online user studies. All conditions used the same Ace editor with syntax highlighting and basic indentation; linting and automatic formatting were disabled to focus the comparison on notation."
  },
  {
    "id": "evidence",
    "label": "Key findings",
    "title": "Limited performance differences. Rich differences in practice.",
    "body": "The experiment did not identify a format that consistently performed best. Bringing those results together with the interviews helped explain why usability involves more than how a file looks. These four highlights connect the task results with the three interview themes.",
    "cards": [
      [
        "No format was consistently best",
        "In the task study, TOML, YAML, and HJSON outperformed XML when adding fields. These advantages did not extend across reading, authoring, or the easiest and hardest modifications. Task difficulty mattered more consistently than format."
      ],
      [
        "Readability preferences differed",
        "In interviews, some practitioners preferred indentation; others found explicit braces clearer. These preferences help explain competing views of “human-friendly” syntax, without establishing a universally easier notation."
      ],
      [
        "Conventions shaped format choices",
        "Practitioners often followed team practices, language ecosystems, or legacy requirements. Familiar examples, documentation, and compatibility made an established format practical to keep using."
      ],
      [
        "Tools changed the effort of editing",
        "Practitioners described using formatters, linters, and generated files to manage syntax. Their experiences pointed to early error detection and reliable editor support as important parts of usability."
      ]
    ]
  },
  {
    "id": "implications",
    "label": "Design implications",
    "title": "Design for the whole format ecosystem.",
    "body": "Usability comes from how syntax, tools, documentation, and shared practices work together. This shifts the design focus toward the support that makes formats manageable in everyday work.",
    "cards": [
      [
        "Prioritize tooling over new syntax variants",
        "Invest in linters, formatters, and IDE integration that help people work with existing formats. Strengthening this support may yield greater usability gains than introducing another syntactic variant."
      ],
      [
        "Support conventions, onboarding, and migration",
        "Format adoption depends on community practices, documentation, and familiar workflows. Shared tools and clear migration paths can support adoption while accounting for existing dependencies and the effort of switching."
      ],
      [
        "Consider human factors in usability evaluation",
        "Evaluate format usability in specific tasks and user contexts, considering differences in experience, language, and cultural background."
      ]
    ]
  }
],
    links:[['Read the paper','https://arxiv.org/abs/2607.26211']],
    sourceNote:'Based on the DSF manuscript, presentation notes, and my UXR résumé. First authorship and end-to-end research ownership confirmed by Shiyi He. The linked publication provides the full research context. Code examples below are newly created illustrations, not experimental stimuli.'
  },
  {
    id:'bibwrangler', number:'04', short:'BibWrangler', category:'INTERFACE & SYSTEM DESIGN', color:'lavender',
    title:'Cleaning references is also a question of trust.',
    question:'Where does bibliography assistance fit into real writing workflows?',
    summary:'Designing and building a bibliography-cleaning system, then evaluating its interface and workflow fit through a remote lab study and a two-week take-home study.',
    methods:['Workflow comparison','Remote lab study','Interviews','Take-home study'],
    stat:'21 experts · Remote lab study + 2-week take-home study', venue:'Submitted to CHI', time:'5 min',
    takeaway:'Useful automation needs a place in the workflow—and a way to inspect its changes.',
    intro:'A bibliography can look finished while still containing duplicate records, missing metadata, or inconsistent formatting. BibWrangler approaches this work as data wrangling. The research asks how people notice issues, decide what matters, and assess suggested repairs.',
    role:'As first author, I led the interface design, system development, and end-to-end research: study design, recruitment, the moderated remote lab study, the two-week take-home study, interview and survey coding, thematic synthesis, and writing.',
    team:'Shiyi He, El Kindi Rezig, Paul Rosen, Andrew McNutt',
    sections:[
      {id:'question', label:'The question', title:'Finding more issues is only part of the problem.', body:'Researchers bring existing habits and tools to bibliography work. They also have different standards for what deserves attention. The study therefore examines both the cleaning task and the surrounding writing workflow.', callout:'When does bibliography assistance save effort, and when does it create more checking or coordination?'},
      {id:'approach', label:'Study design', title:'From a structured task to everyday use.', body:'The moderated remote lab study, conducted via Zoom, asked participants to clean bibliography files with BibWrangler and their usual workflow while thinking aloud. Interviews explored issue severity, confidence, verification, and workflow fit. Participants then used BibWrangler in their own work during a two-week take-home study and completed a questionnaire about their experience.', steps:['Remote lab study','Compare workflows','Interview participants','Two-week take-home study'], extra:'The study involved 21 experts. The take-home stage matters because a tool that helps in a prepared task may still be inconvenient to use during writing. It lets the evaluation extend from structured tasks to participants’ own bibliography work.'},
      {id:'evidence', label:'Emerging themes', title:'A useful checkpoint needs reviewable changes.', body:'The thematic analysis identifies four areas: workflows, situated quality standards, issue visibility, and automation and trust. These are preliminary themes from the available study materials.', cards:[['Fit is situational','Bibliography maintenance is distributed across writing stages and projects. BibWrangler can become a checking point rather than replace the whole workflow.'],['Visibility needs priorities','Surfacing more issues expands awareness, but also creates decisions about what to fix first and what can wait.'],['Trust needs inspection','Automation makes larger repairs tractable, while confidence depends on being able to review the changes.']], widget:'bib', extra:'These summaries paraphrase the coding themes. They do not reproduce identifiable participant responses or claim a measured effect.'},
      {id:'implications', label:'Design opportunities', title:'Help people review, prioritize, and return to writing.', body:'The following opportunities are portfolio synthesis from the emerging themes; they are not presented as implemented or evaluated features.', cards:[['Review the change','Provide a clear before-and-after view and a way to revisit recent edits.'],['Prioritize what matters','Distinguish consequential issues from formatting preferences and allow context-sensitive checks.'],['Reduce coordination','Explore closer integration with the writing environments people already use.']]},
      {id:'reflection', label:'Scope & reflection', title:'Separate promising themes from demonstrated impact.', body:'The study with 21 experts supports a qualitative account of workflow fit and trust. Structured remote tasks and a two-week take-home study capture different aspects of use, while longer-term adoption remains outside this study’s scope.', extra:'A next step is to connect each design opportunity to its supporting coded evidence and test whether it reduces review effort without obscuring consequential changes.'}
    ],
    links:[['Try BibWrangler','https://bib-wrangler.netlify.app/']],
    sourceNote:'Based on the research protocol and thematic coding. Submitted to CHI, as confirmed by Shiyi He. First authorship and end-to-end research ownership confirmed by Shiyi He. Participant records, transcripts, and private source links are intentionally omitted from the portfolio.'
  },
  {
    id:'palette', number:'05', short:'Color palette tools', category:'ACCESSIBILITY & DESIGN BEHAVIOR', color:'yellow',
    title:'The tool changes what a designer notices.',
    question:'How does palette assistance shape design attention?',
    summary:'Exploring the relationship between design aids, accessibility constraints, and creative judgment across four palette tools.',
    methods:['Think-aloud','Comparative evaluation','Remote study'],
    stat:'40 designers', venue:'IEEE VIS Poster 2026', time:'4 min',
    takeaway:'Assistance can make constraints actionable while narrowing attention toward what the tool checks.',
    intro:'Color palette design involves competing priorities. This exploratory study examined how different forms of assistance shape both the resulting palettes and the reasoning behind them.',
    role:'As first author, I owned the research end to end: tool comparison, task and study design, reVISit implementation and deployment, recruitment, data collection, qualitative and quantitative analysis, synthesis, and writing.',
    team:'Shiyi He, Andrew McNutt',
    sections:[
      {id:'question', label:'The question', title:'What becomes visible becomes a design priority.', body:'The question was how direct manipulation, generation, inspection, and evaluation relate to designers’ decisions across different constraints.'},
      {id:'approach', label:'Study design', title:'Compare reasoning alongside palette outcomes.', body:'Forty designers recruited through Prolific used Color Buddy, QualPal, Viz Palette, or ColorExplorer. Tasks concerned accessibility, thematic fit, and aesthetics. reVISit collected screens and think-aloud audio; analysis examined reasoning and palette metrics.', steps:['Assign a tool','Vary constraints','Capture reasoning','Inspect palettes'], extra:'The accompanying coding materials distinguish fine-tuning, broader changes, reframing, and different forms of evaluation. They offer a vocabulary for examining how people move through design decisions.'},
      {id:'evidence', label:'Key finding', title:'Support guides attention as well as output.', body:'Accessibility-related patterns were more pronounced in constrained tasks. Some assistance also influenced palettes and reasoning when accessibility was not required. These are exploratory observations, not a tool ranking.', widget:'palette'},
      {id:'implications', label:'Design opportunity', title:'Make constraints actionable. Keep exploration possible.', body:'A design opportunity is to make the purpose of assistance clear and let people decide how it relates to their current goal.', extra:'The palette explorer above is a new explanatory illustration. It is not participant data, a CVD simulation, or a recreation of the study’s outcome metrics.'},
      {id:'reflection', label:'Scope & reflection', title:'Treat the patterns as a starting point.', body:'Small conditions and unequal accessibility-task assignment limit interpretation. More targeted evaluation is needed before claiming superiority.', extra:'Future work could examine when assistance prompts useful reflection and when it interrupts or prematurely constrains exploration.'}
    ],
    links:[['Read the paper','https://arxiv.org/abs/2608.19148'],['Explore the reVISit study','https://shiyihe-neko.github.io/reVISit_study/color-buddy/']],
    sourceNote:'Research summary: Trade-offs in Data Color Palette Design Tools. Coding vocabulary: project coding schema. First authorship and end-to-end research ownership confirmed by Shiyi He. The interactive palette is synthetic.'
  }
,
{
  "id": "charles",
  "number": "06",
  "short": "ChARLES",
  "category": "EXPLAINABLE ANALYTICS",
  "color": "sand",
  "title": "Make data changes understandable—and open to inspection.",
  "question": "How can people explore data changes without reading every changed row?",
  "summary": "Building an interface for exploring semantic explanations of database changes, with adjustable complexity and visual views of the data each explanation covers.",
  "methods": [
    "Interface design",
    "System prototyping",
    "Visual analytics",
    "Explainability",
    "Data semantics"
  ],
  "stat": "Interactive system demonstration",
  "venue": "SIGMOD 2025 Demo",
  "time": "5 min",
  "takeaway": "An explanation interface should expose its scope and let people choose the detail they need.",
  "intro": "A list of changed cells shows where data differs, but leaves people to work out the pattern. ChARLES generates semantic summaries that describe which records changed and how. I developed an interface that lets people explore those summaries, adjust their complexity, and inspect the records they describe.",
  "role": "As first author, I developed the explanation-exploration interface, including attribute recommendations, adjustable explanation complexity, and data-coverage views. My work connected model-generated summaries to an interactive workflow for inspecting and comparing explanations.",
  "team": "Shiyi He, Alexandra Meliou, Anna Fariha",
  "sections": [
    {
      "id": "question",
      "label": "The problem",
      "title": "A difference is not yet an explanation.",
      "body": "When a dataset changes, an analyst wants to know which groups changed and how. A detailed list of edits can be overwhelming, while an overly broad summary can hide important differences. The interface needs to make these alternatives understandable and inspectable.",
      "callout": "What information does a person need to judge whether a change summary is useful?"
    },
    {
      "id": "approach",
      "label": "Interaction design",
      "title": "Turn model settings into an exploration workflow.",
      "body": "I designed a workflow for uploading two data versions, choosing a target attribute, reviewing recommended attributes, and requesting explanations. People can adjust how many attributes a summary uses and the balance between accuracy and interpretability.",
      "steps": [
        "Choose data versions",
        "Select attributes",
        "Compare summaries",
        "Inspect coverage"
      ],
      "extra": "Defaults offer a starting point, while the controls let people refine the question and the level of detail they want to see."
    },
    {
      "id": "evidence",
      "label": "The interface",
      "title": "Show the rule and the records it describes.",
      "body": "The interface presents ranked explanations alongside their scores. Opening an explanation reveals a partition view: each region represents a group of records, with its size indicating coverage and further details available on inspection.",
      "cards": [
        [
          "Recommend a starting point",
          "Surface relevant attributes before asking users to configure a summary."
        ],
        [
          "Expose the trade-off",
          "Keep accuracy and interpretability visible when comparing alternatives."
        ],
        [
          "Make coverage inspectable",
          "Connect each conditional transformation to the data partition it describes."
        ]
      ],
      "widget": "charles"
    },
    {
      "id": "implications",
      "label": "Design rationale",
      "title": "Give people a way to question the summary.",
      "body": "The design rationale is to make explanation exploration an iterative process. Attribute selection narrows the question, complexity controls change the form of the answer, and coverage views let people examine its scope.",
      "extra": "My contribution connects model-generated results with a workflow people can configure, compare, and inspect."
    },
    {
      "id": "reflection",
      "label": "Scope & reflection",
      "title": "A model summary is a hypothesis to examine.",
      "body": "The published work is a system demonstration. Its summaries describe patterns in the supplied data; they do not establish the external cause of a change. This case does not claim a completed usability study or measured improvement in user performance.",
      "extra": "A useful next evaluation would ask whether people can identify the affected records, understand the accuracy–interpretability trade-off, and recognize when a summary leaves important variation unexplained."
    }
  ],
  "links": [
    [
      "Read the paper",
      "https://doi.org/10.1145/3722212.3725089"
    ],
    [
      "Open-access paper",
      "https://arxiv.org/abs/2409.18386"
    ]
  ],
  "sourceNote": "Based on the SIGMOD 2025 demonstration paper, interface design notes, and my UXR résumé. The explanations in the interactive example are synthetic and illustrate granularity rather than reproducing model output or empirical results."
}
];
