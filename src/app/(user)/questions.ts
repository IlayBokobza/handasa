export interface Answer {
  option: string;
  score: number;
}

export interface HealthQuestion {
  question: string;
  answers: Answer[];
  importance: number;
}

export const HealthQuestion: HealthQuestion[] = [
  {
    question: "How many hours of sleep do you aim for each night?",
    answers: [
      { option: "Less than 6 hours", score: 4 },
      { option: "6-7 hours", score: 3 },
      { option: "7-8 hours", score: 2 },
      { option: "More than 8 hours", score: 1 },
    ],
    importance: 9,
  },
  {
    question: "How often do you engage in cardiovascular exercise?",
    answers: [
      { option: "Never", score: 4 },
      { option: "Once a week", score: 3 },
      { option: "3-4 times a week", score: 2 },
      { option: "Every day", score: 1 },
    ],
    importance: 8,
  },
  {
    question: "What is your typical daily water intake?",
    answers: [
      { option: "Less than 1 liter", score: 4 },
      { option: "1-2 liters", score: 3 },
      { option: "2-3 liters", score: 2 },
      { option: "More than 3 liters", score: 1 },
    ],
    importance: 7,
  },
  // {
  //   question: "How often do you practice stress-relieving activities?",
  //   answers: [
  //     { option: "Never", score: 4 },
  //     { option: "Rarely", score: 3 },
  //     { option: "Occasionally", score: 2 },
  //     { option: "Regularly", score: 1 },
  //   ],
  //   importance: 6,
  // },
  // {
  //   question: "What is your preferred type of physical activity?",
  //   answers: [
  //     { option: "Running or jogging", score: 1 },
  //     { option: "Weightlifting", score: 2 },
  //     { option: "Yoga or Pilates", score: 3 },
  //     { option: "Swimming", score: 4 },
  //   ],
  //   importance: 10,
  // },
  // {
  //   question: "How often do you have balanced meals with a variety of nutrients?",
  //   answers: [
  //     { option: "Rarely", score: 4 },
  //     { option: "Occasionally", score: 3 },
  //     { option: "Most days", score: 2 },
  //     { option: "Every day", score: 1 },
  //   ],
  //   importance: 5,
  // },
  // {
  //   question: "Do you take breaks to stretch and move during long periods of sitting?",
  //   answers: [
  //     { option: "Never", score: 4 },
  //     { option: "Rarely", score: 3 },
  //     { option: "Sometimes", score: 2 },
  //     { option: "Always", score: 1 },
  //   ],
  //   importance: 8,
  // },
  // {
  //   question: "How often do you go for regular health check-ups?",
  //   answers: [
  //     { option: "Never", score: 4 },
  //     { option: "Once a year", score: 3 },
  //     { option: "Twice a year", score: 2 },
  //     { option: "More than twice a year", score: 1 },
  //   ],
  //   importance: 7,
  // },
  // {
  //   question: "How would you rate your current stress levels?",
  //   answers: [
  //     { option: "Very high", score: 4 },
  //     { option: "High", score: 3 },
  //     { option: "Moderate", score: 2 },
  //     { option: "Low", score: 1 },
  //   ],
  //   importance: 6,
  // },
  // {
  //   question: "How often do you engage in activities that bring you joy and relaxation?",
  //   answers: [
  //     { option: "Rarely", score: 4 },
  //     { option: "Occasionally", score: 3 },
  //     { option: "Frequently", score: 2 },
  //     { option: "Daily", score: 1 },
  //   ],
  //   importance: 9,
  // },
];

