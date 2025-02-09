"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 499,
    yearlyPrice: 4999,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 team members",
      "Basic project management tools",
      "10 GB storage",
      "Email support",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 999,
    yearlyPrice: 9999,
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced project management",
      "50 GB storage",
      "Priority email & chat support",
      "Custom integrations",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 2499,
    yearlyPrice: 24999,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "Advanced project & resource management",
      "500 GB storage",
      "24/7 phone, email & chat support",
      "Custom integrations & API access",
      "Advanced analytics & reporting",
      "Dedicated account manager",
    ],
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Choose the plan that's right for your business</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center mb-8"
      >
        <span className="mr-3 text-sm font-medium">Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
        <span className="ml-3 text-sm font-medium">Yearly (Save 15%)</span>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ₹{isYearly ? plan.yearlyPrice.toLocaleString("en-IN") : plan.monthlyPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{isYearly ? "/year" : "/month"}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * (featureIndex + 1) }}
                      className="flex items-center"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Get started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 dark:text-gray-300">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Need a custom plan?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact us
          </a>
        </p>
      </motion.div>
    </div>
  )
}

