
const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-foreground">
         

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Whitepaper</h1>
          <p className="text-xl text-muted-foreground">
            Tokenizing Engagement & Marketing in the Web3 Era
          </p>
        </div>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Abstract</h2>
          <p className="text-muted-foreground leading-relaxed">
            Digidrop is a Web3 SociaFi platform designed to transform how marketing and engagement are incentivized. Currently in beta, Digidrop enables users to earn rewards in crypto for liking, sharing, and engaging with promotional content, by aligning user participation with transparent, on-chain rewards. Digidrop offers brands more authentic reach while empowering users to monetize their social media activity.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            In the Web2 landscape, users drive attention—but only platforms and advertisers benefit financially. Digidrop introduces a new model where engagement is paid, provable, and fair exchange. Brands get exposure, users get rewarded, and communities grow stronger.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2. Problem Statement</h2>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>No Incentives for Engagement: Social media users create value but receive no compensation.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Lack of Transparency: Influencer and ad metrics are often unverifiable or inflated.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Inefficient Marketing Spend: Brands waste budget on low-quality engagement.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Data Silos: Users' attention and activity are locked in centralized platforms.</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">3. The Digidrop Solution</h2>
          <p className="text-muted-foreground mb-4">Digidrop flips the model by allowing:</p>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Marketers to create engagement-driven campaigns.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Users to earn crypto for authentic likes, shares, and participation.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>Communities to amplify messages and grow through incentive alignment.</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">
            All activity is logged on-chain, making engagement measurable, provable, and valuable.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">4. How It Works</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><strong className="text-foreground">1. Brands Launch Campaigns:</strong> Set goals (likes, shares, follows)</p>
            <p><strong className="text-foreground">2. Users Participate:</strong> Like, repost, or comment on eligible content</p>
            <p><strong className="text-foreground">3. Smart Contracts Verify Actions:</strong> On-chain validation through oracles or integrations</p>
            <p><strong className="text-foreground">4. Rewards Are Distributed:</strong> Users earn $DIGI tokens or campaign-specific rewards</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5. Key Features</h2>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Engage-to-Earn Model:</strong> Crypto rewards for real user activity</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Marketing Campaign Engine:</strong> Self-serve dashboard for brands and creators</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Social Verification:</strong> Proof-of-engagement validation</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Reputation Tracking:</strong> Users build profiles based on real activity and reliability</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Anti-Sybil System:</strong> Measures against bots or fake engagement</p>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">6. Tokenomics (Initial Concept)</h2>
          <div className="bg-card/30 rounded-lg p-6 backdrop-blur-sm border border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="font-semibold text-foreground">Allocation</div>
              <div className="font-semibold text-foreground">%</div>
              <div className="font-semibold text-foreground">Purpose</div>
              
              <div className="text-muted-foreground">User Reward</div>
              <div className="text-muted-foreground">40%</div>
              <div className="text-muted-foreground">Engage-to-earn incentives</div>
              
              <div className="text-muted-foreground">Marketing</div>
              <div className="text-muted-foreground">20%</div>
              <div className="text-muted-foreground">Brand onboarding campaigns</div>
              
              <div className="text-muted-foreground">Dev Team</div>
              <div className="text-muted-foreground">15%</div>
              <div className="text-muted-foreground">Core development</div>
              
              <div className="text-muted-foreground">Advisor & Ops</div>
              <div className="text-muted-foreground">10%</div>
              <div className="text-muted-foreground">Strategic support</div>
              
              <div className="text-muted-foreground">DAO Treasury</div>
              <div className="text-muted-foreground">15%</div>
              <div className="text-muted-foreground">Governance, grants, reserves</div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">7. Technical Overview</h2>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Status:</strong> Beta version live</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Chain:</strong> Polygon (or other EVM chain, configurable)</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Smart Contracts:</strong> Manage campaign rewards and proof of engagement</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Web Interface:</strong> Simple UX for non-crypto natives</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="block w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p><strong className="text-foreground">Native Governance:</strong> $DIGI token internal rewards / DAO voting</p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">8. Roadmap</h2>
          <div className="space-y-6">
            <div className="bg-card/30 rounded-lg p-6 backdrop-blur-sm border border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="font-semibold text-foreground">Phase</div>
                <div className="font-semibold text-foreground">Goals</div>
                <div className="font-semibold text-foreground">Timeline</div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/20">
                  <div className="text-muted-foreground">Beta Phase</div>
                  <div className="text-muted-foreground">Core app live, basic campaign engine</div>
                  <div className="text-muted-foreground">Now</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/20">
                  <div className="text-muted-foreground">Q1 2025</div>
                  <div className="text-muted-foreground">Token launch, rewards dashboard with fest layer</div>
                  <div className="text-muted-foreground">Planned</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-border/20">
                  <div className="text-muted-foreground">Q2 2025</div>
                  <div className="text-muted-foreground">Brand onboarding, community tools, DAO MVP</div>
                  <div className="text-muted-foreground">Planned</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                  <div className="text-muted-foreground">Q3 2025</div>
                  <div className="text-muted-foreground">Cross-chain support, full DAO governance</div>
                  <div className="text-muted-foreground">Planned</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;