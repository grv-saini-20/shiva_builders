<script lang="ts">
  function inView(node: HTMLElement, { threshold = 0.2 } = {}) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = '1';
            node.style.transform = 'translateY(0)';
          } else {
            node.style.opacity = '0';
            node.style.transform = 'translateY(30px)';
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }

  const positions = [
    {
      title: "General Manager (Civil)",
      description: "Lead, plan, and oversee major infrastructure projects at DWC Infra.",
      responsibilities: [
        "Oversee all civil engineering projects from planning to completion",
        "Lead cross-functional teams and manage resources"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, 10+ years in project management",
        "Strong knowledge of construction regulations and team leadership"
      ],
      skills: "Project management, budgeting, leadership, construction law, MS Project, AutoCAD"
    },
    {
      title: "Project Manager (Civil)",
      description: "Plan, execute, and oversee civil engineering projects.",
      responsibilities: [
        "Coordinate project phases, including planning, budgeting, and execution",
        "Manage resources and ensure compliance with safety regulations"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, 5+ years in project management",
        "Strong organizational and leadership skills"
      ],
      skills: "Scheduling, budgeting, coordination, risk management, MS Project, AutoCAD"
    },
    {
      title: "Deputy Project Manager (Civil)",
      description: "Support the Project Manager in executing civil projects efficiently.",
      responsibilities: [
        "Coordinate with contractors and monitor project progress",
        "Assist in planning, budgeting, and resource allocation"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, 3+ years in project coordination",
        "Strong communication and problem-solving skills"
      ],
      skills: "Coordination, budget management, collaboration, AutoCAD, MS Project"
    },
    {
      title: "Junior Engineer (Civil)",
      description: "Support project teams with design, supervision, and documentation.",
      responsibilities: [
        "Assist in design, drafting, and calculations",
        "Conduct site inspections and prepare progress reports"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, entry-level or internship",
        "Strong analytical skills and willingness to learn"
      ],
      skills: "AutoCAD, MS Office, problem-solving, communication"
    },
    {
      title: "Billing and Estimation Engineer (Civil)",
      description: "Prepare accurate project estimates, budgets, and billing documents.",
      responsibilities: [
        "Prepare and review project estimates and budgets",
        "Manage billing and ensure timely invoicing"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, 3+ years in estimation and billing",
        "Strong knowledge of construction materials and cost estimation"
      ],
      skills: "Cost estimation, billing software, MS Excel, AutoCAD"
    },
    {
      title: "Store Manager (Civil)",
      description: "Manage inventory, track materials, and ensure timely supply.",
      responsibilities: [
        "Oversee inventory management and stock records",
        "Coordinate with vendors for procurement"
      ],
      requirements: [
        "Bachelor’s in relevant field, 3+ years in store management",
        "Strong organizational and inventory management skills"
      ],
      skills: "Inventory control, vendor coordination, MS Excel"
    },
    {
      title: "Mechanical Engineer",
      description: "Design, analyze, and oversee mechanical systems.",
      responsibilities: [
        "Develop mechanical designs and test prototypes",
        "Oversee installation and maintenance of systems"
      ],
      requirements: [
        "Bachelor’s in Mechanical Engineering, 3+ years experience",
        "Knowledge of design principles and processes"
      ],
      skills: "AutoCAD, SolidWorks, problem-solving, safety standards"
    },
    {
      title: "MEP Engineer",
      description: "Design, coordinate, and manage mechanical, electrical, and plumbing systems.",
      responsibilities: [
        "Design and oversee MEP systems with safety compliance",
        "Coordinate with architects and contractors"
      ],
      requirements: [
        "Bachelor’s in Mechanical/Electrical/Civil, 3+ years MEP experience",
        "Knowledge of MEP codes and project coordination"
      ],
      skills: "Revit MEP, AutoCAD MEP, HVAC, electrical, plumbing"
    },
    {
      title: "Quality Engineer (Civil)",
      description: "Ensure construction quality and compliance with standards.",
      responsibilities: [
        "Conduct inspections and monitor construction activities",
        "Implement quality control plans and tests"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering, 3+ years QA/QC experience",
        "Knowledge of ISO, ASTM standards"
      ],
      skills: "QA/QC software, inspection techniques, MS Office"
    },
    {
      title: "Safety Engineer (Civil)",
      description: "Oversee and implement safety protocols on-site.",
      responsibilities: [
        "Conduct audits, risk assessments, and safety training",
        "Ensure compliance with safety regulations"
      ],
      requirements: [
        "Bachelor’s in Civil Engineering/EHS, 3+ years experience",
        "Knowledge of OSHA standards"
      ],
      skills: "Risk assessment, safety audits, safety software"
    },
    {
      title: "Crane Operator",
      description: "Safely operate crane machinery on construction sites.",
      responsibilities: [
        "Operate cranes for material handling",
        "Perform daily inspections of crane machinery"
      ],
      requirements: [
        "Certification in crane operation, 2+ years experience",
        "Knowledge of safety protocols and load handling"
      ],
      skills: "Crane operation, safety, equipment inspection"
    },
    {
      title: "Site Electrician",
      description: "Install, maintain, and repair electrical systems on-site.",
      responsibilities: [
        "Install wiring and equipment as per specifications",
        "Perform maintenance and troubleshooting"
      ],
      requirements: [
        "Certification in electrical work, 2+ years site experience",
        "Knowledge of safety regulations"
      ],
      skills: "Wiring, troubleshooting, electrical tools"
    },
    {
      title: "Site Foreman",
      description: "Supervise and coordinate construction activities on-site.",
      responsibilities: [
        "Lead daily site activities and enforce safety",
        "Manage teams and ensure timely progress"
      ],
      requirements: [
        "5+ years construction supervisory experience",
        "Strong leadership and safety knowledge"
      ],
      skills: "Team management, scheduling, safety enforcement"
    },
    {
      title: "Site Supervisor",
      description: "Oversee and monitor day-to-day construction activities.",
      responsibilities: [
        "Supervise workforce and ensure safety compliance",
        "Monitor material usage and report issues"
      ],
      requirements: [
        "3+ years site supervision experience",
        "Knowledge of construction processes and safety"
      ],
      skills: "Supervision, coordination, MS Office"
    }
  ];
</script>

<!-- HERO -->
<section class="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 overflow-hidden">
  <div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 text-center max-w-3xl">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
      Careers
    </h1>
    <p use:inView class="reveal mt-6 text-lg sm:text-xl text-gray-200 uppercase">
      Our goal is to help our clients through outstanding quality and delivering the best services. <br/>
      Your skills and passion could be the perfect fit for our innovative projects.
    </p>
    <p class="mt-6 text-lg text-gray-100 uppercase">Send your applications at: 
      <span class="font-bold text-yellow-400">careers@dwcinfra.com</span>
    </p>
  </div>
</section>

<!-- POSITIONS GRID -->
<section class="bg-gray-50 px-6 py-20 max-w-7xl mx-auto">
  <h2 class="reveal text-3xl font-bold text-black-900 text-center uppercase" use:inView>
  Our Team
</h2>
<div class="reveal mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-500 mb-12" use:inView></div>


  <div class="grid md:grid-cols-2 gap-10">
    {#each positions as pos}
      <div class="bg-white shadow-lg  p-8 border-t-4 border-yellow-500 hover:shadow-2xl transition-all reveal" use:inView>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{pos.title}</h3>
        <p class="text-gray-600 mb-4">{pos.description}</p>

        <h4 class="font-semibold text-gray-800">Responsibilities:</h4>
        <ul class="list-disc ml-5 mb-4 text-gray-700">
          {#each pos.responsibilities as r}
            <li>{r}</li>
          {/each}
        </ul>

        <h4 class="font-semibold text-gray-800">Requirements:</h4>
        <ul class="list-disc ml-5 mb-4 text-gray-700">
          {#each pos.requirements as r}
            <li>{r}</li>
          {/each}
        </ul>

        <p class="text-sm text-gray-600"><span class="font-semibold">Skills:</span> {pos.skills}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
</style>
