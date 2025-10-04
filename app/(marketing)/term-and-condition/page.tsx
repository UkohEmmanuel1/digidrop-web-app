'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type TermSection = {
  id: string;
  title: string;
  content: string[];
};

const SECTIONS: TermSection[] = [
  {
    id: 'agreements',
    title: '1. Agreements',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis, dolor tortor. tincidunt Ut quis scelerisque id vel diam placerat Nullam amet, massa lacus, quis malesuada massa quis tempor urna ex odio tincidunt.',
      'turpis eu consectetur tempor eu lacus faucibus lobortis, sit sed lorem. commodo elit non, quis commodo cursus massa odio non efficitur. tempor urna convallis, ultricies enim, dignissim, eget libero, tempor eu vehicula.',
      'sodales, sed lobortis, Nullam placerat. viverra viverra nec amet, amet, nisi Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex.'
    ],
  },
  {
    id: 'rights-laws',
    title: '2. Rights & Laws',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis...',
      'turpis eu consectetur tempor eu lacus faucibus lobortis...',
      'sodales, sed lobortis, Nullam placerat...'
    ],
  },
  {
    id: 'third-party',
    title: '3. 3rd Party Applications',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis...',
      'turpis eu consectetur tempor eu lacus faucibus lobortis...',
      'sodales, sed lobortis, Nullam placerat...'
    ],
  },
  {
    id: 'rights-grant',
    title: '4. Rights You Grant to Us Laws',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis...',
      'turpis eu consectetur tempor eu lacus faucibus lobortis...',
      'sodales, sed lobortis, Nullam placerat...'
    ],
  },
  {
    id: 'privacy',
    title: '5. Privacy Policy',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis...',
      'turpis eu consectetur tempor eu lacus faucibus lobortis...',
      'sodales, sed lobortis, Nullam placerat...'
    ],
  },
];

export default function Page() {
  const [activeId, setActiveId] = useState<string>('agreements');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });
      const current = offsets.findLast((s) => s.offset <= 150);
      if (current) setActiveId(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#081A3A] to-[#0A1E4A] text-white min-h-screen scroll-smooth">
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-16">
        
        {/* Sidebar */}
        <aside className="md:w-1/4 mb-12 md:mb-0">
          <nav className="sticky top-24">
            <ul className="space-y-6">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`block text-lg md:text-xl transition-colors ${
                      activeId === section.id
                        ? 'text-white font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="md:w-3/4 md:pl-16 space-y-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Term &amp; Condition
          </h1>
          {SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
