import type { NavItem, Feature } from "./types";
import {
  BookOpen, Languages, Clapperboard, Compass, Theater, PenTool, Search, BarChart3, Lightbulb, Edit3, Rocket, Globe,
} from "lucide-react";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const LITERARY_PROCESS = [
  {
    title: 'Discovery',
    description: 'We are smelling and fishing stories. Identifying the unique soul of your narrative.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Refinement',
    description: 'Surgical precision in editing. We ensure narrative structure is sound while preserving your voice.',
    icon: <Edit3 className="w-6 h-6" />,
  },
  {
    title: 'Strategy',
    description: 'Publishing insights, ISBN formatting, and distribution guidance to help your manuscript succeed.',
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: 'Visibility',
    description: 'SEO and digital marketing to ensure your storytelling is seen by the right audience.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Impact',
    description: 'Metamorphosing your draft into a literary bestseller that resonates globally.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

export const FEATURES: Feature[] = [
  {
    // INDEX 0
    title: 'Literary Agency & Translation',
    description: (
      <>
        "How many languages?"<br />
        "Regional? International?"<br />
        "How many awards?"<br />
        These are repeated questions asked in international book fairs. Nowadays, international publishers judge a book based on how widely it's translated.
        Clarion calls to all regional authors and publishers! Make your book translated into English and attain global fame!
        We help your book reach esteemed international book fairs such as CIBF, SIBF, NDWBF, Frankfurter Buchmesse, etc.
      </>
    ),
    icon: <Languages className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    // INDEX 1
    title: 'Subtitling',
    description: (
    <>
    "Are you a film-maker?" <br/>
    "Ad director?"<br/> 
    "Youtube creator?"<br/> 
    "News agency?"<br/>
    Subtitles help in bringing production value and audience reach to your visual content. Whether you need subtitles from scratch or precise editing of existing ones, we balance linguistic clarity with storytelling rhythm, so your visuals speak universally. We make subtitles for Indian languages like Tamil, Telugu, Malayalam, Kannada, Hindi and international languages like German, French and Japanese.,
    </>),
    icon: <Clapperboard className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 2
    title: 'Publishing Strategy',
    description:(
    <> 
    "Are you an aspiring author?"<br/> 
    "Getting rejection mails from top publishing firms?"<br/> 
    "Writer in you losing hope?"<br/> 
    You reached the right space.<br/>
     Whether you're self-publishing or preparing for a traditional release, we provide manuscript review, formatting ISBN, design, and distribution guidance and publishing insights to help your manuscript shine and succeed in the marketplace.
    </>
    ) ,
    icon: <BookOpen className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 3
    title: 'Theatre Productions',
    description: "All the world's a stage, Glassbones also enacts few plays in the stage. Representing rooted dramas and localised adaptations, we are on a mission to spotlight various forms of theatre. Additionally, we also provide theatre training to schools and colleges so the stage of the world fills with many enactments. Recently, Glassbones Creative Nexus Produced a theatrical production, Hotdesk and enacted it in the esteemed Short and Sweet theatre festival at Alliance Française of Madras.",
    icon: <Theater className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 4
    title: 'Pen Your Tale',
    description: "Stories….Stories…Stories…. We are smelling and fishing stories. Pen Your Tale is a five-day immersive creative writing initiative by Glassbones Creative, crafted to discover, mentor, and elevate student voices within academic spaces. The programme offers intensive, hands-on engagement with published authors, editors, translators, theatre practitioners, and publishing professionals. Students explore poetry, short fiction, memoir, and reflective writing while developing voice, structure, and confidence through guided sessions, peer dialogue, and critical feedback. The workshop culminates in the publication of a professionally curated and edited book with an ISBN, featuring selected student works.",
    icon: <PenTool className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 5
    title: 'Editorial Excellence',
    description: "Glassbones refine your manuscript with surgical precision. We ensure your narrative structure is sound while preserving your unique creative voice. We metamorphose your first draft into a literary bestseller with our dedicated team of editors.",
    icon: <Edit3 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 6
    title: 'SEO Strategy',
    description: 'Creative storytelling deserves to be seen and heard by the right audience. Our comprehensive SEO, digital, and performance marketing services are designed to maximize your online visibility, engagement, and conversions.',
    icon: <BarChart3 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    // INDEX 7
    title: 'Content Strategy',
    description: 'From blog series to full-scale digital campaigns, your brand needs a soul to become a companion to customers. Our marketing team helps in crafting content strategies, maintaining brand relationships and bringing organic growth.',
    icon: <Lightbulb className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600',
  },
];