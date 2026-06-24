import { 
  TruckIcon, 
  PackageSearchIcon, 
  HeadphonesIcon, 
  PackageIcon,
  UsersIcon,
  RefreshCwIcon,
  TrendingUpIcon,
  CreditCardIcon,
  GiftIcon
} from "lucide-react";

function ServicesPage() {
  const services = [
    {
      icon: TruckIcon,
      title: "Suphaa eelee biddeena fi daaboo",
      image: "/se.png",
      description:"Suphaa eelee biddeena fi daaboo kaamiyu ni keenina.",
      features: [

      ]
    },
    {
      icon: PackageSearchIcon,
      title: "Suphaa istoovi",
       image: "/istove.png",
      description:"Suphaa istoovi garagaraa kaamiyu ni keenina.",
      features: [
        // "Real-time status updates",
        // "SMS and email notifications",
        // "Live location tracking",
        // "Estimated delivery time"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Diishi hidhu fi sirreessu",
       image: "/tv.png",
      description:"Diishi fi TV sirreesu fi hidhu kaamiyu ni keenina.",
      
    },
    {
      icon: PackageIcon,
      title: "Suphaa maashina buna, shunkurti fi juusi",
       image: "/co.png",
      description: "Suphaa maashina buna, shunkurti fi juusi kaamiyu ni keenina .",
      
    },
    {
      icon: UsersIcon,
      title: "Generator fi ispiikari sagantaa garaagaraf kirreesu",
      
      description: "Mani daldala meeshalee mana charu Meeshalee guutuu qulqulina isaani eegatan gatii madalawaadhan Afooshalee hawaasa magaala keenya fi naanawa ishee jiraatanif kennu irrati ergamna. Kanaaf haala mijata kanneen armaan gadi uumne ",
      
    },
    {
      icon: RefreshCwIcon,
      title: "Suphaa mobile fi muuziqa fee'u",
      description: "Nuti fedhi maamiltoota keenya  giddu galeessa godhachuun jijiraa meeshalee bilisaan guyyaa 2 keessati taasisna .",
      features: [
        "Jijiraa bilisa guuya 2 keessati ni rawana",
        "Jijiraa meesha meeshaadhan guyyaa 2 keessati ni goona",
        
      ]
    },
    {
      icon: TrendingUpIcon,
      title: "Electric sirreesu fi hidhu",
      description: "Mani daldala meeshalee keenya daldaaltootaf meeshalee mana fi kanneen biro gati madalaawadhan dhiyeesu irrati kan argamuudha.",
      features: [
        // "Competitive commission rates",
        // "Marketing and promotional support",
        // "Dedicated seller dashboard",
        // "Easy product listing",
        // "Secure payment processing",
        // "Business analytics & insights"
      ]
    },
    {
      icon: CreditCardIcon,
      title: "Gurgurtaa meeshalee electronics haara ",
      description: "Feedhi maamitoota dursa kan godhaate hojatu mani daldala meeshalee mana keenya maamiltootni kafalti isaani qoqoodani akka kafalanif haala mijata uume jira. kafalti guutuu erga rawantani booda meesha akka fudhaatan haala mijata uume jira. ",
      features: [
        // "0% interest available",
        // "Flexible payment terms",
        // "Instant approval process",
        // "No hidden charges",
        // "Pay in 3, 6, or 12 months",
        // "Manage payments easily"
      ]
    },
    {
      icon: GiftIcon,
      title: "Beeksisaati badhafama",
      description: "maati , hiriyootan fi namoota naannoo keessanif tajaajila keenya beeksisun badhaafama ta'a.",
      features: [
        
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-content py-20 px-4">
        <div className="absolute inset-0 bg-[url('/data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTR2NGg0ek0yMCAzNHYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tajaajiloota Keenya</h1>
          <p className="text-lg md:text-xl text-primary-content/90 max-w-2xl mx-auto leading-relaxed">
            Mani suphaa fi Gurgurtaa electronics Fira tajaajiloota suphaa meeshalee electronics fi haara hedduu kennuu irrati argaama.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-base-200/50"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative card-body p-6">
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-br from-primary to-secondary text-white p-3 rounded-xl shadow-lg">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="card-title text-xl font-bold mb-4 pr-12">
                    {service.title}
                  </h2>

                  {/* Image or Icon */}
                  {service.image ? (
                    <div className="flex justify-center mb-4 rounded-xl overflow-hidden bg-base-200/50">
                      <img src={service.image} alt={service.title} className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl">
                        <Icon className="size-16 text-primary" />
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-base-content/70 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <>
                      <div className="divider my-4"></div>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="bg-success/10 p-1 rounded-full mt-0.5">
                              <svg
                                className="size-4 text-success"
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
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
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
      </div>
    </div>
  );
}

export default ServicesPage;
