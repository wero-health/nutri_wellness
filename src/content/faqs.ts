export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is Functional Medicine?",
    answer:
      "Functional Medicine is a systems biology-based approach that focuses on identifying and addressing the root cause of disease. Instead of just treating symptoms, it looks at the whole person — their genetics, environment, lifestyle, and biochemistry — to create personalized treatment plans that promote long-term healing.",
    category: "general",
  },
  {
    question: "How can nutrition and wellness practices improve my overall health?",
    answer:
      "Proper nutrition and wellness practices can significantly improve your health by reducing inflammation, balancing hormones, supporting gut health, enhancing immune function, boosting energy levels, and preventing chronic diseases. A personalized approach ensures the recommendations are tailored to your unique needs.",
    category: "nutrition",
  },
  {
    question: "What conditions can functional medicine address that traditional medicine might not?",
    answer:
      "Functional Medicine can address complex, chronic conditions such as autoimmune disorders, hormonal imbalances, chronic fatigue, digestive issues, metabolic syndrome, and unexplained symptoms that may not have clear answers in conventional medicine. It excels at finding root causes rather than managing symptoms.",
    category: "general",
  },
  {
    question: "How can I get started on a journey to better health and wellness?",
    answer:
      "Getting started is simple — reach out to schedule an initial consultation. During this session, Dr. Anusha Dasari will review your health history, discuss your concerns and goals, and create a personalized roadmap for your wellness journey. You can contact us through our website or call our clinic directly.",
    category: "general",
  },
  {
    question: "Is functional medicine supported by scientific research?",
    answer:
      "Yes, Functional Medicine is rooted in scientific principles and evidence-based practices. It integrates the latest research in genomics, systems biology, and nutritional science with clinical expertise to deliver personalized, effective care.",
    category: "general",
  },
  {
    question: "What should I expect during my first consultation?",
    answer:
      "During your first consultation, you can expect a comprehensive review of your health history, current symptoms, lifestyle factors, and health goals. Dr. Dasari will spend time understanding your unique situation before recommending any diagnostic tests or treatment approaches.",
    category: "general",
  },
];
