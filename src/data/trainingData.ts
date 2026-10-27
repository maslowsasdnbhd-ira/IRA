import { TrainingProgram, Testimonial } from '../types';

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'resilient-educator',
    title: 'The Resilient Educator: Nervous System Regulation & Classroom Vitality',
    tagline: 'Practical somatic stress mastery and boundary restoration for everyday classroom stamina.',
    category: 'Teachers',
    duration: 'Full Day (6 Hours) or 2x Half-Day Insets',
    format: 'On-Campus Inset',
    description: 'Designed specifically for international school educators operating under intense curricula (IB DP/MYP, Cambridge, AP). This workshop moves beyond superficial self-care slogans into evidence-based physiological de-escalation, emotional boundary maintenance, and sustainable day-to-day teaching vitality.',
    strugglesAddressed: [
      'Chronic physical fatigue and emotional depletion during grading and reporting periods',
      'Cognitive overload from rapid curriculum pivots and multifold stakeholder demands',
      'Difficulty leaving classroom anxieties at the school gate'
    ],
    coreOutcomes: [
      'Master 90-second nervous system reset techniques to use between class transitions',
      'Construct healthy psychological boundaries against over-involvement without sacrificing warmth',
      'Develop personalized early-warning indicators for acute emotional depletion',
      'Cultivate an energetic baseline that preserves enthusiasm across entire terms'
    ],
    syllabus: [
      {
        part: 'Session 1',
        title: 'The Neuroscience of Teacher Burnout',
        description: 'Deconstructing the autonomic nervous system under chronic school deadlines and understanding how sympathetic overdrive affects patience and memory.'
      },
      {
        part: 'Session 2',
        title: 'Micro-Restoration & Somatic Reset Protocols',
        description: 'Hands-on practice of discreet breathing, grounding, and vagal toning methods that can be performed at your desk or during lunch break.'
      },
      {
        part: 'Session 3',
        title: 'The Architecture of Educator Boundaries',
        description: 'Scripts and cognitive reframes for setting polite, firm limits on out-of-hours emails, extracurricular creep, and emotional over-functioning.'
      },
      {
        part: 'Session 4',
        title: 'Individual Sanctuary Action Plan',
        description: 'Crafting a sustainable weekly schedule incorporating restorative micro-intervals and peer check-in pacts.'
      }
    ],
    audience: 'Primary & Secondary Teachers, Specialist Subject Educators, Teaching Assistants',
    claimable: true,
    featured: true
  },
  {
    id: 'burnout-prevention-compassion-fatigue',
    title: 'Burnout Reversal & Compassion Fatigue in International Schools',
    tagline: 'A systematic clinical approach to identifying exhaustion stages and rebuilding inner reserve.',
    category: 'Teachers',
    duration: 'Full Day (6 Hours)',
    format: 'On-Campus Inset',
    description: 'Teaching abroad carries unique stressors—geographical dislocation, high tuition-driven parental expectations, and transient peer circles. This intensive program unpacks the 5 distinct phases of burnout and provides clinical tools to stem compassion fatigue before cynicism or resignation set in.',
    strugglesAddressed: [
      'Numbness, detachment, or sudden irritability when interacting with struggling students',
      'Guilt over feeling disengaged despite deep love for the teaching vocation',
      'The silent isolation of expatriate teaching far from home support networks'
    ],
    coreOutcomes: [
      'Differentiate between ordinary tiredness, clinical exhaustion, and secondary trauma',
      'Implement compassion satisfaction practices that reconnect educators with core purpose',
      'Build campus-level buddy decompression circles that eliminate workplace isolation',
      'Acquire cognitive reframing protocols for high-pressure assessment seasons'
    ],
    syllabus: [
      {
        part: 'Session 1',
        title: 'Mapping the 5 Stages of Exhaustion',
        description: 'From honeymoon idealism to functional freeze—self-locating on the Maslach Burnout continuum without shame.'
      },
      {
        part: 'Session 2',
        title: 'The Compassion Toll: Managing Vicarious Strain',
        description: 'How absorbing student anxiety impacts your emotional baseline and clinical boundaries to remain supportive without absorbing.'
      },
      {
        part: 'Session 3',
        title: 'Expatriate Anchoring & Cultural Recalibration',
        description: 'Addressing the compounding effects of living away from family networks and creating a grounded sense of belonging.'
      },
      {
        part: 'Session 4',
        title: 'The Regeneration Blueprint',
        description: 'Structured sleep, circadian, and mental hygiene practices that rebuild cognitive sharpness and emotional patience.'
      }
    ],
    audience: 'All Teaching Faculty, Homeroom Advisors, Pastoral Heads',
    claimable: true,
    featured: true
  },
  {
    id: 'pastoral-counselor-care',
    title: 'School Counselor & Pastoral Caregiver Support: Supervision & Secondary Trauma',
    tagline: 'Clinical decompression, ethical containment, and supervision frameworks for student wellbeing teams.',
    category: 'Counselors',
    duration: '2-Day Masterclass or 6-Week Cohort (12 Hours)',
    format: 'Hybrid Cohort',
    description: 'School counselors, social workers, and safeguarding leads carry immense emotional payloads with minimal opportunities to unpack. This specialized curriculum provides confidential group supervision models, secondary trauma containment protocols, and sustainable clinical hygiene.',
    strugglesAddressed: [
      'Carrying heavy safeguarding disclosures and high-stakes student mental health crises',
      'Severe emotional isolation as the sole counselor or small team on campus',
      'Balancing parental demands, academic leadership pressure, and student confidentiality'
    ],
    coreOutcomes: [
      'Adopt peer-supervision debriefing models that prevent clinical vicarious traumatization',
      'Establish clear ethical boundaries between emergency triage and ongoing therapeutic support',
      'Practice clinical case decompression techniques immediately following traumatic crises',
      'Formulate institutional protocols for self-care during high-intensity school incidents'
    ],
    syllabus: [
      {
        part: 'Session 1',
        title: 'The Weight of the Chair: Secondary Traumatic Stress',
        description: 'Neurobiological markers of counselor strain and the psychological mechanics of trauma absorption in educational settings.'
      },
      {
        part: 'Session 2',
        title: 'Case Decontamination & Clinical Hygiene',
        description: 'Systematic practices to release acute client narratives before transitioning back to personal life or next appointments.'
      },
      {
        part: 'Session 3',
        title: 'Navigating Triangulation: Parents, Heads & Safeguarding',
        description: 'Psychological strategies for defending counseling neutrality against administrative and parental urgency.'
      },
      {
        part: 'Session 4',
        title: 'Institutional Debrief Protocol Implementation',
        description: 'Setting up recurring peer-supervision cohorts within the school or across regional sister campuses.'
      }
    ],
    audience: 'School Counselors, Well-Being Leads, Safeguarding Officers, Pastoral Care Coordinators',
    claimable: true
  },
  {
    id: 'mindful-educational-leadership',
    title: 'Psychologically Safe Educational Leadership: Retaining Faculty & Leading with Empathy',
    tagline: 'Empowering Principals, Heads of School, and SLTs to prevent turnover through empathetic culture.',
    category: 'Leadership',
    duration: 'Full Day (6 Hours) or Executive Retreat',
    format: 'On-Campus Inset',
    description: 'Faculty retention is the number one operational challenge facing international schools today. This leadership program provides Principals, Vice Principals, and Heads of Department with the behavioral science of psychological safety, reducing staff turnover, and holding high standards with human compassion.',
    strugglesAddressed: [
      'Escalating international recruitment costs driven by mid-contract departures',
      'Middle management friction and silent staff disengagement',
      'Managing board performance targets while addressing an exhausted staff body'
    ],
    coreOutcomes: [
      'Measure and audit psychological safety indices across academic departments',
      'Conduct restorative one-on-one check-ins that surface hidden distress early',
      'Eliminate performative compliance tasks to return 15% discretionary energy to teachers',
      'Lead crisis communications with genuine composure, transparency, and calm authority'
    ],
    syllabus: [
      {
        part: 'Session 1',
        title: 'The Economics & Psychology of Teacher Retention',
        description: 'Why teachers actually leave international schools: unpicking administrative friction versus professional workload.'
      },
      {
        part: 'Session 2',
        title: 'Psychological Safety Architecture (Amy Edmondson Model adapted for Schools)',
        description: 'Creating cultures where educators feel safe to ask for assistance, admit overwhelm, and innovate without fear.'
      },
      {
        part: 'Session 3',
        title: 'Empathetic Accountability & High Expectations',
        description: 'How to uphold rigorous pedagogical benchmarks while demonstrating deep personal regard for the educator.'
      },
      {
        part: 'Session 4',
        title: 'The Leadership Vitality Compass',
        description: 'Preventing executive burnout among Principals and Senior Leadership Teams through peer support structures.'
      }
    ],
    audience: 'Principals, Heads of School, Deputy Heads, Heads of Department, Deans of Academics',
    claimable: true,
    featured: true
  },
  {
    id: 'parent-teacher-boundaries',
    title: 'Empathetic & Boundary-Clear Parent-Teacher Dynamics',
    tagline: 'De-escalating demanding parent encounters without internalizing guilt or anxiety.',
    category: 'Teachers',
    duration: 'Half Day (3.5 Hours)',
    format: 'Virtual Intensive',
    description: 'In premium international schooling, parental anxiety frequently manifests as combative emails, late-night messages, and micromanagement. This workshop trains educators in non-reactive conflict communication, objective documentation, and emotional armor.',
    strugglesAddressed: [
      'Anxiety triggered by Sunday evening parent emails and aggressive tone',
      'Imposter syndrome when challenged by influential or high-net-worth parents',
      'Administrative pressure to appease parents at the expense of teacher well-being'
    ],
    coreOutcomes: [
      'De-escalate high-temperature conversations within 3 minutes using clinical reflection',
      'Formulate objective, empathetic email responses that hold institutional boundaries',
      'Master the post-meeting emotional discharge technique to avoid carrying conflict home',
      'Protect teacher dignity while fostering genuine family-school partnership'
    ],
    syllabus: [
      {
        part: 'Session 1',
        title: 'The Psychology of Parent Anxiety in International Contexts',
        description: 'Understanding what drives hyper-vigilant parenting and separating parental fear from pedagogical evaluation.'
      },
      {
        part: 'Session 2',
        title: 'Non-Defensive Communication Protocols',
        description: 'Verbal scripts and linguistic pivots to keep meetings focused on student growth rather than blame.'
      },
      {
        part: 'Session 3',
        title: 'Email Armor & Digital Boundary Guidelines',
        description: 'Establishing realistic turnaround standards and crafting non-reactive written communication templates.'
      }
    ],
    audience: 'All Teachers, Grade Level Leaders, Admissions & Academic Coordinators',
    claimable: true
  },
  {
    id: 'school-wide-wellness-retreat',
    title: 'The Sanctuary of Growth: Whole-School Inset & Renewal Retreat',
    tagline: 'A transformative multi-tiered wellness immersion for the entire academic community.',
    category: 'Whole-School',
    duration: '1-2 Days (Customized Campus Inset or Offsite)',
    format: 'Weekend Retreat',
    description: 'Our flagship whole-school experience brings together administrative, academic, and pastoral teams for a restorative, non-judgmental immersion. Combining keynote inspiration, experiential somatic workshops, and departmental wellness audits, it re-anchors the collective spirit of the school.',
    strugglesAddressed: [
      'Siloed departments and inter-faculty cynicism after difficult school terms',
      'Low staff morale and skepticism towards superficial "wellness weeks"',
      'Disconnection between leadership vision and classroom reality'
    ],
    coreOutcomes: [
      'Reignite mutual camaraderie and genuine collegial trust across all faculties',
      'Institutionalize 3 lasting school-wide well-being policies co-created by staff',
      'Provide every staff member with tangible stress-reduction somatic tools',
      'Mark a clear restorative milestone before new academic terms or accreditation visits'
    ],
    syllabus: [
      {
        part: 'Morning',
        title: 'Keynote & Shared Humanity: Re-anchoring the Vocation',
        description: 'A collective reflection on the profound impact of educators and the necessity of personal preservation.'
      },
      {
        part: 'Midday',
        title: 'Differentiated Breakout Tracks',
        description: 'Targeted concurrent sessions for Early Years, Primary, Secondary, Counselors, and Leadership.'
      },
      {
        part: 'Afternoon',
        title: 'Departmental Well-Being Charter Drafting',
        description: 'Practical agreements on internal communications, meeting efficiency, and mutual coverage pacts.'
      },
      {
        part: 'Closing',
        title: 'Collective Grounding & Celebration',
        description: 'Restorative sound/breath immersion and celebration of shared achievements over the school year.'
      }
    ],
    audience: 'All Campus Staff (Academic, Administrative, Support & Pastoral)',
    claimable: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "MASLOW SA transformed our staff culture. Before their two-day Inset, our faculty was quietly breaking under IB reporting deadlines. Their facilitators brought clinical gravitas, empathy, and practical somatic tools that our teachers still use daily. Staff retention improved by 34% the following academic year.",
    author: "Dr. Alistair Vance",
    role: "Head of School",
    school: "British International School of Kuala Lumpur Network",
    location: "Malaysia",
    highlight: "Staff retention improved by 34%"
  },
  {
    quote: "As a school counselor dealing with serious adolescent crises, I felt completely depleted. MASLOW SA’s supervision framework gave our student wellbeing department the safe harbor and secondary trauma decontamination protocols we desperately needed. There is no other training provider in Southeast Asia with this depth.",
    author: "Elena Sorokin, MA",
    role: "Lead Pastoral Counselor",
    school: "Nexus & Garden International Partner Campuses",
    location: "Southeast Asia",
    highlight: "Unmatched clinical depth for pastoral teams"
  },
  {
    quote: "Unlike typical 'wellness webinars' that offer patronizing advice, MASLOW SA understands the brutal reality of parent pressures and timetable demands. The boundary scripts and nervous system resets were immediately actionable. It felt like an oasis of respect.",
    author: "Marcus Tan",
    role: "IB DP Mathematics Coordinator & Senior Teacher",
    school: "Mont'Kiara International School Community",
    location: "Kuala Lumpur",
    highlight: "Immediately actionable, zero superficial fluff"
  }
];

export const STATS = [
  { value: '20+', label: 'Years of Training Legacy', detail: 'Serving schools since 2004' },
  { value: '14,200+', label: 'Educators & Staff Empowered', detail: 'Across Asia-Pacific & beyond' },
  { value: '68+', label: 'International Campuses Partnered', detail: 'IB, Cambridge & American curricula' },
  { value: '98.7%', label: 'Participant Recommendation Rate', detail: 'Validated across 200+ cohorts' }
];

export const SELF_ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question: "When your morning alarm rings on a school day, what is your initial physical sensation?",
    options: [
      { text: "Light and rested, ready to greet my students with positive energy", score: 0 },
      { text: "Mild morning sluggishness that clears up after coffee or my commute", score: 1 },
      { text: "A heavy knot in the stomach or muscular tension before checking emails", score: 2 },
      { text: "Dread, exhaustion, or feeling as though sleep did not restore any energy at all", score: 3 }
    ]
  },
  {
    id: 2,
    question: "How do you respond when a student or colleague approaches you with an unexpected emotional issue?",
    options: [
      { text: "I listen with curiosity and have abundant patience to support them", score: 0 },
      { text: "I can support them well, though I may feel tired afterward", score: 1 },
      { text: "I feel an internal surge of irritation or anxiety before composing myself", score: 2 },
      { text: "I feel emotionally hollowed out, detached, or unable to absorb another crisis", score: 3 }
    ]
  },
  {
    id: 3,
    question: "What happens to your personal boundaries during grading, report cards, or parent-teacher weeks?",
    options: [
      { text: "I maintain firm cut-off times in the evening and protect my weekends", score: 0 },
      { text: "I work late occasionally, but quickly recover my baseline within a few days", score: 1 },
      { text: "I constantly check emails past 9 PM and carry anxiety throughout the weekend", score: 2 },
      { text: "Boundaries have vanished; I feel trapped in an endless loop of work and worry", score: 3 }
    ]
  },
  {
    id: 4,
    question: "When reflecting on your teaching vocation over the past 3 months:",
    options: [
      { text: "I still feel deeply connected to my sense of purpose and student growth", score: 0 },
      { text: "Most days are rewarding, though administrative burdens are occasionally frustrating", score: 1 },
      { text: "Cynicism or apathy creeps in frequently; I wonder if international schooling is sustainable", score: 2 },
      { text: "I feel disassociated from the joy I once had and am actively contemplating leaving education", score: 3 }
    ]
  },
  {
    id: 5,
    question: "Does your school environment feel like a place where you can safely say, 'I need support'?",
    options: [
      { text: "Yes, our leadership and peers offer genuine psychological safety and mutual backup", score: 0 },
      { text: "Somewhat; I have a couple of close colleagues I can vent to, but leadership is distant", score: 1 },
      { text: "Not really; admitting overwhelm is subtly viewed as poor performance or weakness", score: 2 },
      { text: "Not at all; high pressure to maintain a facade of effortless perfection at all times", score: 3 }
    ]
  }
];

export const FAQS = [
  {
    q: "Are MASLOW SA SDN BHD training programs HRD Corp claimable?",
    a: "Yes. For schools and academic entities registered in Malaysia, our corporate training modules are fully eligible for HRD Corp (HRDF) claim allowances under certified training categories. Our operations team provides all prerequisite documentation, course outlines, and attendance verification."
  },
  {
    q: "Can the workshops be customized to our specific school calendar and curriculum?",
    a: "Absolutely. We routinely tailor our half-day, full-day, and multi-week cohorts around international school calendars—whether for August/September start-of-year Insets, November mid-term de-escalations, or January staff retreats. We adapt case scenarios specifically for IB (PYP/MYP/DP), Cambridge IGCSE/A-Levels, or American curriculum demands."
  },
  {
    q: "Do you deliver training outside of Malaysia?",
    a: "Yes. In addition to our home base in Malaysia, MASLOW SA trainers frequently travel across Southeast Asia (Singapore, Thailand, Indonesia, Vietnam, Philippines) and deliver both in-person campus residencies and high-touch interactive virtual cohorts for international school networks."
  },
  {
    q: "How are your programs different from generic corporate wellness workshops?",
    a: "Generic corporate workshops fail in schools because they treat teachers like corporate desk workers. With over 20 years dedicated exclusively to educational settings, our facilitators are clinical psychologists and seasoned educators who understand parent politics, safeguarding burdens, lesson planning pressures, and expatriate isolation."
  },
  {
    q: "What is the recommended group size for on-campus sessions?",
    a: "For intensive workshops (like 'The Resilient Educator' and 'Counselor Supervision'), we recommend cohorts of 15 to 40 participants for high-engagement practice. For whole-school Insets and keynote retreats, we successfully facilitate campuses of 100 to 300+ faculty members with modular breakout tracks."
  }
];
