'use client';
import React from 'react';
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
      'turpis eu consequatur tempor sit lacus faucibus lobortis, sit sed lorem, commodo elit non, quis commodo cursus massa odio non efficitur, tempor urna convallis, ultrices enim, dignissim, eget libero, tempor eu vehicula, Donec leo est, odio porta nulla, non, amet, elementum dui, dignissim, tincidunt laoreet odio volutpat.',
      'sodales, sed lobortis, Nullam placerat, viverra viverra nec amet, amet, nisl Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex',
    ],
  },
  {
    id: 'rights-laws',
    title: '2. Rights & Laws',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis, dolor tortor. tincidunt Ut quis scelerisque id vel diam placerat Nullam amet, massa lacus, quis malesuada massa quis tempor urna ex odio tincidunt.',
      'turpis eu consequatur tempor sit lacus faucibus lobortis, sit sed lorem, commodo elit non, quis commodo cursus massa odio non efficitur, tempor urna convallis, ultrices enim, dignissim, eget libero, tempor eu vehicula, Donec leo est, odio porta nulla, non, amet, elementum dui, dignissim, tincidunt laoreet odio volutpat.',
      'sodales, sed lobortis, Nullam placerat, viverra viverra nec amet, amet, nisl Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex',
    ],
  },
  {
    id: 'third-party',
    title: '3. 3rd Party Applications',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis, dolor tortor. tincidunt Ut quis scelerisque id vel diam placerat Nullam amet, massa lacus, quis malesuada massa quis tempor urna ex odio tincidunt.',
      'turpis eu consequatur tempor sit lacus faucibus lobortis, sit sed lorem, commodo elit non, quis commodo cursus massa odio non efficitur, tempor urna convallis, ultrices enim, dignissim, eget libero, tempor eu vehicula, Donec leo est, odio porta nulla, non, amet, elementum dui, dignissim, tincidunt laoreet odio volutpat.',
      'sodales, sed lobortis, Nullam placerat, viverra viverra nec amet, amet, nisl Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex',
    ],
  },
  {
    id: 'rights-grant',
    title: '4. Rights You Grant to Us Laws',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis, dolor tortor. tincidunt Ut quis scelerisque id vel diam placerat Nullam amet, massa lacus, quis malesuada massa quis tempor urna ex odio tincidunt.',
      'turpis eu consequatur tempor sit lacus faucibus lobortis, sit sed lorem, commodo elit non, quis commodo cursus massa odio non efficitur, tempor urna convallis, ultrices enim, dignissim, eget libero, tempor eu vehicula, Donec leo est, odio porta nulla, non, amet, elementum dui, dignissim, tincidunt laoreet odio volutpat.',
      'sodales, sed lobortis, Nullam placerat, viverra viverra nec amet, amet, nisl Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex',
    ],
  },
  {
    id: 'privacy',
    title: '5. Privacy Policy',
    content: [
      'adipiscing convallis. tempor Lorem tincidunt convallis, dolor tortor. tincidunt Ut quis scelerisque id vel diam placerat Nullam amet, massa lacus, quis malesuada massa quis tempor urna ex odio tincidunt.',
      'turpis eu consequatur tempor sit lacus faucibus lobortis, sit sed lorem, commodo elit non, quis commodo cursus massa odio non efficitur, tempor urna convallis, ultrices enim, dignissim, eget libero, tempor eu vehicula, Donec leo est, odio porta nulla, non, amet, elementum dui, dignissim, tincidunt laoreet odio volutpat.',
      'sodales, sed lobortis, Nullam placerat, viverra viverra nec amet, amet, nisl Ut commodo quis porta ex ex leo. tincidunt tincidunt Ut ex',
    ],
  },
];

export default function Page(): JSX.Element {
  return (
    <main className=" bg-gradient-to-b from-[#081A3A] to-[#0A1E4A] text-white">
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-12">
        {/* Sidebar */}
        <aside className="md:w-1/4 mb-10 md:mb-0">
          <nav className="sticky top-24">
            <ul className="space-y-6">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="block text-2xl text-gray-300 hover:text-white transition-colors"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="md:w-3/4 md:pl-12 space-y-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Terms &amp; Conditions
          </h1>
          {SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 leading-relaxed text-base md:text-xl max-w-[80%]"
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
