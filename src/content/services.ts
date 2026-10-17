export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
  whoIsItFor: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "functional-medicine",
    title: "Functional Medicine",
    shortDescription:
      "A personalized, patient-centered approach that addresses the root causes of disease rather than just treating symptoms.",
    description:
      "Functional Medicine is a systems biology-based approach that focuses on identifying and addressing the root cause of disease. Each symptom or differential diagnosis may be one of many contributing factors to an individual's illness. Dr. Anusha Dasari uses this approach to understand the origins, prevention, and treatment of complex, chronic diseases.",
    image: "/images/functional-medicine-consult.jpg",
    icon: "Microscope",
    benefits: [
      "Root cause identification",
      "Personalized treatment plans",
      "Holistic patient assessment",
      "Long-term health optimization",
      "Prevention-focused approach",
    ],
    whoIsItFor: [
      "Individuals with chronic health conditions",
      "Those seeking holistic health solutions",
      "Patients wanting personalized care",
      "People looking for preventive healthcare",
    ],
    process: [
      "Comprehensive health history review",
      "Advanced diagnostic testing",
      "Personalized treatment protocol",
      "Ongoing monitoring and adjustment",
      "Lifestyle and nutrition guidance",
    ],
    faqs: [
      {
        question: "What is Functional Medicine?",
        answer:
          "Functional Medicine is a systems biology-based approach that focuses on identifying and addressing the root cause of disease rather than just treating symptoms.",
      },
      {
        question: "How is it different from conventional medicine?",
        answer:
          "While conventional medicine often treats symptoms, Functional Medicine digs deeper to understand why the disease occurred and addresses those underlying factors.",
      },
    ],
  },
  {
    slug: "precision-medicine",
    title: "Precision Medicine",
    shortDescription:
      "Tailored medical treatment based on your unique genetic makeup, lifestyle, and environment for optimal health outcomes.",
    description:
      "Precision Medicine takes into account individual differences in patients' genes, environments, and lifestyles. Dr. Dasari leverages cutting-edge genomic insights and personalized diagnostics to create treatment plans that are uniquely suited to each patient.",
    image: "/images/genomics-precision.jpg",
    icon: "Dna",
    benefits: [
      "Genetically-informed treatment",
      "Targeted therapeutic interventions",
      "Reduced trial-and-error in treatment",
      "Better health outcomes",
      "Personalized risk assessment",
    ],
    whoIsItFor: [
      "Patients seeking genetically-informed care",
      "Individuals with complex health conditions",
      "Those interested in preventive genomics",
      "Families with genetic health concerns",
    ],
    process: [
      "Genetic testing and analysis",
      "Comprehensive biomarker assessment",
      "Personalized treatment design",
      "Pharmacogenomic guidance",
      "Follow-up and optimization",
    ],
    faqs: [
      {
        question: "What is Precision Medicine?",
        answer:
          "Precision Medicine is an innovative approach that uses information about a person's own genes or proteins to prevent, diagnose, or treat disease.",
      },
      {
        question: "Do I need genetic testing?",
        answer:
          "Genetic testing can provide valuable insights, but Dr. Dasari will recommend it based on your individual health needs and goals.",
      },
    ],
  },
  {
    slug: "nutrition-counseling",
    title: "Nutrition & Wellness",
    shortDescription:
      "Evidence-based nutritional guidance to support your health goals, manage conditions, and optimize overall well-being.",
    description:
      "Our Nutrition & Wellness program provides personalized dietary plans and lifestyle recommendations based on scientific evidence. Dr. Dasari combines her medical expertise with nutritional science to create comprehensive wellness strategies.",
    image: "/images/cellular-nutrition.jpg",
    icon: "Apple",
    benefits: [
      "Customized dietary plans",
      "Evidence-based nutrition advice",
      "Weight management support",
      "Chronic disease management through diet",
      "Improved energy and vitality",
    ],
    whoIsItFor: [
      "Anyone looking to improve their diet",
      "Those managing chronic conditions with nutrition",
      "Individuals seeking weight management",
      "People wanting to optimize health through food",
    ],
    process: [
      "Nutritional assessment",
      "Dietary analysis and evaluation",
      "Personalized meal planning",
      "Supplement recommendations",
      "Progress monitoring and adjustments",
    ],
    faqs: [
      {
        question: "How does nutritional counseling help with chronic diseases?",
        answer:
          "Proper nutrition can significantly impact chronic conditions by reducing inflammation, balancing hormones, supporting gut health, and providing the nutrients your body needs to heal.",
      },
    ],
  },
  {
    slug: "gut-health",
    title: "Gut Health",
    shortDescription:
      "Comprehensive gut health assessment and treatment to restore microbiome balance and improve digestive wellness.",
    description:
      "The gut microbiome plays a crucial role in overall health. Our gut health program focuses on understanding and optimizing your digestive health through advanced testing, dietary interventions, and targeted treatments.",
    image: "/images/microbiome-science.jpg",
    icon: "HeartPulse",
    benefits: [
      "Microbiome analysis",
      "Digestive symptom relief",
      "Improved nutrient absorption",
      "Enhanced immune function",
      "Better mental clarity",
    ],
    whoIsItFor: [
      "Those with digestive issues",
      "Individuals with autoimmune conditions",
      "People experiencing food sensitivities",
      "Anyone wanting to optimize gut health",
    ],
    process: [
      "Comprehensive gut assessment",
      "Microbiome testing",
      "Personalized gut restoration plan",
      "Dietary modifications",
      "Probiotic and supplement protocol",
    ],
    faqs: [
      {
        question: "Why is gut health important?",
        answer:
          "The gut microbiome influences digestion, immunity, mental health, and virtually every system in your body. Optimizing gut health is foundational to overall wellness.",
      },
    ],
  },
];

export const serviceCategories = [
  { label: "All Services", value: "all" },
  { label: "Medicine", value: "medicine" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Wellness", value: "wellness" },
];
