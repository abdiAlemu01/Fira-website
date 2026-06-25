import { 
  BookOpenIcon, 
  TargetIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon,
  UsersIcon,
  TruckIcon,
  CreditCardIcon,
  GiftIcon
} from "lucide-react";

function AboutPage() {
  const sections = [
    {
      icon: BookOpenIcon,
      title: "SEENA ",
       description:"Mani supha fi Gurgurtaa electronics Fira kan eegaleef supha meeshalee electronics fi meeshalee electronics haara qulqulinaa isaani eegatan haawasa magaala leemani fi naanawa isheetif akkata fedhi maamiltoota giddugaleefateen dhiyeesudha.  ",
      color: "text-blue-500",
    },
    {
      icon: TargetIcon,
      title: "Kaayoon Keenya",
      // description: "To provide affordable, trusted, and convenient shopping experiences for every customer.",
      description:"Supha fi Gurgurtaa meeshalee electronics ogummaa irrati hunda'ee qulqulina olaana fi amanamumadhaan keennudhaa.",
      color: "text-green-500"
    },
    {
      icon: CheckCircleIcon,
      title: "Maaliif nu filatu",
      features: [
        "Supha meeshalee electronics garagara guutu waan goonuf",
        "Meeshalee Electronics haara waan qabnuuf",
        "Maamiltoota keenyaf dursa waan keninuuf",
        "Feedhi maamiltoota keeny waan eegnuuf",
      ],
      color: "text-purple-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Qulqulina Meeshalee Keenya",
      description:"Mani Supha fi Gurgurtaa meeshalee electronics Fira dhiyeesa meeshalee hawaasaf osoo hin godhiin dura qulqulinna isaani kan mirkaneefatudha ",
      color: "text-orange-500"
    },
    {
      icon: UsersIcon,
      title: "Gargaarsa hawaasa",
      // description: "We work with local suppliers and businesses to strengthen our community economy.",
      description:"Mani suphaa fi Gurgurtaa meeshalee electronics Fira ogummaa yeroo dheeraa kan qabu yoo ta'u suphaa meeshalee electronicsin  gahuumsa olaana kan  argateedhaa. sanaanis hawaasa magaala leemani fi naanawa isheetif tajaajila amansiisa, si'ata ,qulqulu gahuumsa barnoota yeroo dheeraan argateen hawaasa tajaajilu irrati argama.",
    },
    {
      icon: TruckIcon,
      title: "Dhiyeesi keenya",
 
      description:"Nuti mani suphaa fi Gurgurtaa meeshalee electronics Fira dhiyeessi meeshalee electronics haara fi suphaa garagara ni qabna. kanneen muraasni isaani",
      features: [
        "Suphaa eelee biddeena fi daaboo",
        "Suphaa istoovi garagaraa",
        "Suphaa maashinaa buna, shunkurti, juusi fi kanneen biro",
        "Suphaa mobile fi memory irrati musiqa fee'u",
        "Diishi TV sirreesu fi hidhu",
        "Generetor fi ispikeeri sagaanta garaagaraf kireesu",
        "Electric hidhu fi sirreesu"
      ],
      color: "text-indigo-500"
    },
 
    {
      icon: GiftIcon,
      title: "Amanamuumma fi badhaasa",
            description:"Maamiltoota keenya yeroo maraaf tajajila adda, discounts fi badhaasa yeroo garaagarati ni goona. ",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">WAAY'EE KEENYA</h1>
        <p className="text-lg text-base-content/70">
          Mani supha fi gurgurtaa electronics Fira ogummaa barnootan yeroo dheeraan ergateen taajajila suphaa meeshalee electronics garaagara bifa qulqulina is eegaten kennu irrati kan argamuudha. 
        </p>

        <br/>
        <p className="text-lg text-base-content/70" >Tajajila isaa kananis hawaasa magaala leemani fi naanawa isheetin fudhatama guddaa kan argateedha.</p>

        
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="card-body">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className={`size-10 ${section.color}`} />
                  </div>
                </div>

                {/* Title */}
                <h2 className="card-title text-2xl justify-center mb-3">
                  {section.title}
                </h2>

                {/* Description */}
                {section.description && (
                  <p className="text-center text-base-content/70 mb-4">
                    {section.description}
                  </p>
                )}

                {/* Features List */}
                {section.features && (
                  <>
                    <div className="divider"></div>
                    <ul className="space-y-2">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg 
                            className="size-5 text-success mt-0.5 flex-shrink-0" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      

      {/* Stats Section */}
      <div className="stats stats-vertical lg:stats-horizontal shadow mt-16 w-full max-w-4xl mx-auto">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Maamiltoota gammado</div>
          <div className="stat-value text-primary">550+</div>
          <div className="stat-desc">Guyyaa guyyaan dabala deema</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Meeshalee dhiyeesine</div>
          <div className="stat-value text-secondary">3000+</div>
          <div className="stat-desc">safisan fi amanamuman</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <div className="stat-title">Hawaasa tajajilee</div>
          <div className="stat-value text-accent">6000+</div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;
