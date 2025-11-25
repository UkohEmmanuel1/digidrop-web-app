"use client"
import { ChevronDown, ChevronRight } from 'lucide-react';
import React, {useState} from 'react'
import { motion } from "motion/react"
const faqs = [
    {
      question: "What is the Black Pass?",
      answer: "We offer a 30-day refund policy. If you're not satisfied, you can request a full refund.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our support team is available 24/7 to assist you with any issues.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime from your account settings without any additional charges.",
    },
    {
        question: "What are Shards and how can I collect them?",
        answer: "Yes, you can cancel anytime from your account settings without any additional charges.",
      },
      {
        question: "How to navigate blackpass?",
        answer: "Yes, you can cancel anytime from your account settings without any additional charges.",
      },
  ];
const FAQ = () => { 
      const [openIndex, setOpenIndex] = useState<number | null>(null);
      const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <section id='FAQs' className='max-w-4xl mx-auto mt-14 p-6'>
        <h2 className="text-3xl font-bold text-start mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg shadow-sm">
            {/* Accordion Header */}
            <div
              onClick={() => toggleAccordion(index)}
              className="flex items-start justify-between w-full py-4 bg-[#1C1C1C] outline-none border-r-0 border-l-0 border-t-gray-100/50 border-t transition"
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </div>

            {/* Accordion Body */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-[#1C1C1C]"
            >
              <p className="p-4 text-xl text-white">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ