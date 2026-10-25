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
      ]
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
    stat: '40 freelancers', venue: 'VL/HCC 2026', time: '6 min',
    takeaway: 'Tool choice shapes strategies, but does not guarantee better outcomes.',
    intro: 'Data cleaning is more than a sequence of corrections. People must decide what looks wrong, what to change, and whether to trust the result. I studied these decisions across ChatGPT, Jupyter, Excel, and OpenRefine.',
    role: 'As first author, I owned the research end to end: study design, recruitment, reVISit implementation and remote deployment, data collection, mixed-methods analysis, synthesis, and writing.',
    team: 'Shiyi He, El Kindi Rezig, Paul Rosen, Andrew M. McNutt',
    sections: [
      {id:'question', label:'The question', title:'A feature list cannot explain a workflow.', body:'The study examined how interface paradigms relate to cleaning strategies and outcomes. It compared a conversational assistant, a notebook, a spreadsheet, and a visual wrangler.', callout:'Research question: How does the tool change the way people approach the same data problem?'},
      {id:'approach', label:'Study design', title:'Watch the process. Examine the result.', body:'Forty freelancers completed two cleaning tasks in a between-subjects study. reVISit captured screen and think-aloud recordings. Tool access used browser environments, including noVNC and JupyterLite. Analysis combined outputs, workload and usability questionnaires, and the Technical Dimensions of Programming Systems framework.', steps:['Assign one tool','Complete two tasks','Capture work + reasoning','Compare outputs + strategies'], extra:'This combination connects what participants produced with how they got there. My synthesis translated behavioral evidence into recommendations for task guidance, visible transformations, and human verification.'},
      {id:'evidence', label:'Key finding', title:'A strategy shift, not a universal winner.', body:'No tool showed a consistent outcome advantage. Data-centered interfaces encouraged opportunistic corrections; abstraction-centered interfaces supported systematic transformations with added cognitive demands. The analysis was exploratory, not a statistical ranking.', callout:'The design opportunity is to support transitions between seeing a problem, applying a transformation, and checking its consequences.', widget:'wrangling'},
      {id:'implications', label:'Design implications', title:'Make transformations visible and verifiable.', body:'The practical recommendations in my research synthesis focus on task-oriented guidance, visibility of data transformations, and human verification of AI assistance.', cards:[['Guide the next step','Help people connect a task goal with a suitable cleaning action.'],['Expose transformations','Make it possible to inspect what a correction changes.'],['Support verification','Keep human judgment involved when reviewing AI-assisted results.']], extra:'These are design recommendations from the study, rather than claims of a shipped product improvement.'},
      {id:'reflection', label:'Scope & reflection', title:'Preserve the distinction between capability and outcome.', body:'The study covers two tasks and short-term use. Its results characterize trade-offs within that setting. They do not establish a generally best wrangling tool.', extra:'A next evaluation could test whether the proposed guidance and verification features help people detect incomplete or inappropriate transformations.'}
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
    stat:'215 crowd workers + 9 practitioners', venue:'VL/HCC 2026', time:'7 min',
    takeaway:'Usability extends beyond syntax to the tools, practices, and communities around a format.',
    intro:'JSON, YAML, XML, and their peers represent similar information in different ways. Developers have strong preferences, but preference alone does not explain how easily someone can read, edit, or maintain a file.',
    role:'As first author, I owned the research end to end: study design, recruitment, reVISit implementation and remote deployment, the 215-participant usability study, nine practitioner interviews, analysis, synthesis, and writing.',
    team:'Shiyi He, Zach Cutler, Andrew M. McNutt',
    sections:[
      {id:'question', label:'The question', title:'Turn a familiar debate into a researchable question.', body:'A format can look concise and still be difficult to maintain. Another can look verbose yet be easy to work with because editors, documentation, and established conventions remove effort. I wanted to separate the effects of notation from the surrounding workflow.', callout:'Does a different notation improve task performance—and what else shapes usability in practice?', widget:'dsf'},
      {id:'approach', label:'Study design', title:'Two methods, two timescales.', body:'The controlled study compared short reading, modifying, and writing tasks across seven formats and two data contexts: tabular data and configuration. A separate interview study with nine practitioners examined the choices and maintenance work that a short experiment could not capture.', steps:['Compare notation','Measure task performance','Interview practitioners','Connect the evidence'], extra:'The experiment used a consistent Monaco editor with syntax highlighting and basic indentation. Linters and auto-formatting were disabled to reduce differences caused by editor assistance. reVISit recorded timing, keyboard input, and correctness. This choice made the comparison more controlled, while also creating an explicit limit on ecological validity.'},
      {id:'evidence', label:'Key findings', title:'Limited performance differences. Rich differences in practice.', body:'There was no consistently best format across the tested tasks. HJSON and YAML showed advantages in some modification tasks, but those advantages did not persist across every level of task complexity. Practitioner interviews added a different explanation: familiar tools, compatibility, community conventions, and workflow expectations all contributed to usability.', cards:[['Notation is one layer','Syntax differences did not produce a stable overall performance winner.'],['Support changes the work','Formatters, linters, and programmatic generation reduce the amount of syntax people handle directly.'],['Maintenance has a context','Team conventions and ecosystem support affect what is practical to adopt and sustain.']], extra:'The combined interpretation is more useful than treating the absence of a consistent winner as an empty result. It redirects attention toward the conditions that help people work confidently with a format.'},
      {id:'implications', label:'Design implications', title:'Improve the environment around the notation.', body:'My synthesis prioritized tooling, documentation, task complexity, and ecosystem support. For developer-facing products, these findings suggest evaluating the complete editing and maintenance workflow alongside the underlying format.', cards:[['Make errors actionable','Explain where a file breaks and how to recover.'],['Respect established workflows','Consider compatibility, team practices, and existing tool support.'],['Evaluate realistic tasks','Include editor assistance and longer maintenance work in follow-up studies.']], extra:'These implications are opportunities for design and evaluation. The study did not measure adoption or business impact after implementing them.'},
      {id:'reflection', label:'Scope & reflection', title:'Be explicit about what the controls leave out.', body:'Short tasks and restricted editor assistance helped isolate notation, but they do not reproduce everyday development. The crowd sample leaned toward novices, and nine interviews provide depth rather than coverage of all developer roles.', extra:'An unexpectedly low-performing JSONC configuration condition was resampled; the reported results use the replacement sample. The research materials preserve both samples. A stronger follow-up would include more experienced developers, richer tooling, and longitudinal maintenance tasks.'}
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
