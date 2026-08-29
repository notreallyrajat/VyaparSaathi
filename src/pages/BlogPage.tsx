import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  category: 'GST' | 'Income Tax' | 'TDS' | 'Accounting' | 'Business Registration' | 'Compliance';
  title: string;
  date: string;
  summary: string;
  readTime: string;
}

const SAMPLE_ARTICLES: BlogPost[] = [
  {
    id: 'gst-compliance-guide',
    category: 'GST',
    title: 'Understanding Periodic GST Filing Deadlines & GSTR-3B Reconciliation',
    date: 'August 2026',
    summary: 'A structured breakdown of monthly GSTR-1 vs GSTR-3B reconciliation procedures for small business owners and commercial taxpayers.',
    readTime: '4 min read',
  },
  {
    id: 'itr-deductions-overview',
    category: 'Income Tax',
    title: 'Income Tax Return (ITR) Filing Essentials for Sole Proprietors',
    date: 'July 2026',
    summary: 'Key considerations when choosing between Old vs New tax regimes and reporting business turnover under presumptive tax provisions.',
    readTime: '5 min read',
  },
  {
    id: 'tds-quarterly-returns',
    category: 'TDS',
    title: 'TDS Return Filing: Form 26Q & 24Q Quarterly Timelines',
    date: 'June 2026',
    summary: 'An overview of statutory Tax Deduction at Source obligations, Form 16/16A generation, and interest penalties for late remittance.',
    readTime: '3 min read',
  },
  {
    id: 'routine-bookkeeping-best-practices',
    category: 'Accounting',
    title: 'Systematic Monthly Bookkeeping & Bank Statement Reconciliation',
    date: 'May 2026',
    summary: 'How organized transaction records, invoice tracking, and digital ledger entries simplify annual audit and tax filing preparation.',
    readTime: '4 min read',
  },
  {
    id: 'llp-vs-private-limited',
    category: 'Business Registration',
    title: 'Comparing Business Entities: Proprietorship, LLP, and Private Limited',
    date: 'April 2026',
    summary: 'An objective evaluation of capital requirements, promoter liability, statutory audit rules, and compliance overhead across legal structures.',
    readTime: '6 min read',
  },
  {
    id: 'annual-compliance-calendar',
    category: 'Compliance',
    title: 'Statutory Business Compliance Calendar: Key Annual Filing Dates',
    date: 'March 2026',
    summary: 'A chronological index of ROC filings, MSME setup, annual return deadlines, and periodic tax disclosures for growing enterprises.',
    readTime: '5 min read',
  },
];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'GST', 'Income Tax', 'TDS', 'Accounting', 'Business Registration', 'Compliance'];

  const filteredArticles = SAMPLE_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232]">
      
      {/* Header Banner */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6C7582] block">
              TAX &amp; ACCOUNTING INSIGHTS
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#152232]">
              Compliance &amp; Accounting Blog
            </h1>
            <p className="text-sm sm:text-base text-[#3D4653] leading-relaxed">
              Factual guides, regulatory updates, and practical compliance summaries for business owners.
            </p>
          </div>
        </div>
      </section>

      {/* Category & Search Controls */}
      <section className="py-6 border-b border-[#E2E5EA] bg-white sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold uppercase tracking-wider min-h-[36px] px-3.5 border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#152232] text-white border-[#152232]'
                      : 'bg-[#FAF9F6] text-[#4A525D] border-[#D5D8DE] hover:border-[#152232] hover:text-[#152232]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search size={14} className="absolute left-3 top-3 text-[#6C7582]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs font-mono pl-9 pr-3 py-2 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Articles Editorial Grid */}
      <section className="py-12 sm:py-16 border-b border-[#E2E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-[#E2E5EA] p-8 text-center space-y-2">
              <span className="text-xs font-mono uppercase text-[#6C7582] block">No Articles Found</span>
              <p className="text-sm text-[#3D4653]">No articles match your search or selected category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#E2E5EA] p-6 space-y-4 flex flex-col justify-between hover:border-[#152232] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E2E5EA] pb-3 text-[11px] font-mono">
                      <span className="bg-[#152232] text-white px-2 py-0.5 uppercase font-semibold">
                        {article.category}
                      </span>
                      <span className="text-[#6C7582]">{article.date}</span>
                    </div>

                    <h2 className="text-base font-bold text-[#152232] leading-tight">
                      {article.title}
                    </h2>

                    <p className="text-xs text-[#3D4653] leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E5EA] flex items-center justify-between text-xs text-[#6C7582]">
                    <span className="font-mono">{article.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-[#152232] font-semibold uppercase tracking-wider group">
                      <span>Read Overview</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* CMS Integration Note */}
          <div className="bg-white border border-[#E2E5EA] p-4 flex items-center gap-3 text-xs text-[#6C7582]">
            <BookOpen size={16} className="text-[#152232] shrink-0" />
            <span>Editorial blog structure prepared to connect directly to headless CMS or Markdown article data.</span>
          </div>

        </div>
      </section>

    </div>
  );
};
