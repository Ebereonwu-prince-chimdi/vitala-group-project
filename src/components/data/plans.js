const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Essential support for growing teams.",
    price: "$8",
    suffix: "/employee/month",
    features: [
      "Core health support",
      "Employee wellbeing resources",
      "Basic reporting",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "A complete solution for healthier teams.",
    price: "$12",
    suffix: "/employee/month",
    featured: true,
    features: [
      "Everything in Starter",
      "Personalized health programs",
      "Advanced reporting",
      "Dedicated support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Flexible care for organizations at scale.",
    price: "$18",
    suffix: "/employee/month",
    features: [
      "Everything in Growth",
      "Custom health programs",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

export default plans;