export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    location: "Hyderabad",
    rating: 5,
    text: "Dr. Anusha Dasari completely transformed my approach to health. Her functional medicine expertise helped me understand the root cause of my chronic fatigue. After months of personalized treatment, I feel more energetic than ever before.",
    service: "Functional Medicine",
  },
  {
    name: "Rajesh K.",
    location: "Hyderabad",
    rating: 5,
    text: "I had been struggling with digestive issues for years. Dr. Dasari's holistic approach and personalized nutrition plan made a huge difference. She took the time to understand my concerns and provided a comprehensive treatment plan.",
    service: "Gut Health",
  },
  {
    name: "Ananya M.",
    location: "Hyderabad",
    rating: 5,
    text: "The precision medicine approach at Nutri Wellness gave me insights into my health I never had before. The genomic analysis and personalized recommendations have been life-changing. Highly recommend Dr. Dasari!",
    service: "Precision Medicine",
  },
  {
    name: "Vikram D.",
    location: "Hyderabad",
    rating: 5,
    text: "As someone who was skeptical about functional medicine, Dr. Dasari won me over with her evidence-based approach. The comprehensive testing and thoughtful treatment plan addressed issues no other doctor had identified.",
    service: "Functional Medicine",
  },
  {
    name: "Sunita P.",
    location: "Hyderabad",
    rating: 5,
    text: "The nutrition counseling I received from Dr. Anusha was exactly what I needed. She created a practical meal plan that worked with my lifestyle, and the results have been remarkable — better energy, sleep, and overall well-being.",
    service: "Nutrition & Wellness",
  },
  {
    name: "Karthik R.",
    location: "Hyderabad",
    rating: 5,
    text: "I appreciate the thorough and caring approach at Nutri Wellness. Dr. Dasari combines the best of modern science with a deep understanding of individual health needs. My family and I have been patients for over two years now.",
    service: "General",
  },
];
