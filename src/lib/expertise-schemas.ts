import { buildSchema } from "./schemas";
/**
 * ============================================================
 * Phase 2 Schema — All 12 Expertise Sub-Pages
 * 
 * For each page, copy the `schema` const and the BaseLayout
 * title/description into the existing page's frontmatter.
 * ============================================================
 */

// ─── 1. TELECOMMUNICATIONS EXPERT WITNESS ─────────────────────────────────
// File: src/pages/communications-expert-witness/telecommunications-expert-witness/index.astro

const telecomSchema = buildSchema.expertisePage({
  name: 'Telecommunications Expert Witness',
  slug: 'telecommunications-expert-witness',
  description: 'Expert witness services in telecommunications for patent litigation in federal courts, USPTO PTAB, and ITC. Expertise in PSTN, VoIP, cellular, SONET/SDH, and wireless systems.',
  serviceType: 'Telecommunications Expert Witness',
  keywords: ['telecommunications expert witness', 'PTAB telecom', 'ITC telecommunications', 'PSTN', 'VoIP', 'cellular patent litigation'],
  breadcrumbLabel: 'Telecommunications',
  faqs: [
    {
      q: 'What does a telecommunications expert witness do?',
      a: 'A telecommunications expert witness provides technical analysis and testimony in patent litigation, ITC Section 337 proceedings, and federal court cases involving telecom technologies such as PSTN, VoIP, network communications, and Internet protocols.',
    },
    {
      q: 'What telecom qualifications does Dr. Lavian have?',
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley specializing in network communications, served as a Senior Researcher at Nortel Networks, has 120+ patents in telecom, 25+ peer-reviewed publications, and has testified in 100+ federal court, PTAB, and ITC proceedings.',
    },
    {
      q: 'In which courts has Dr. Lavian testified as a telecommunications expert?',
      a: 'Dr. Lavian has provided expert testimony in U.S. federal district courts, the USPTO Patent Trial and Appeal Board (PTAB) IPR proceedings, and the International Trade Commission (ITC). He has also testified in courts in Canada.',
    },
    {
      q: 'What telecommunications patent issues has Dr. Lavian addressed?',
      a: 'Dr. Lavian has addressed claim construction, infringement, and invalidity issues involving telephony protocols, cellular systems, VoIP, PSTN interfaces, network switching, and wireless communications standards.',
    },
  ],
});

const telecomTitle = "Telecommunications Expert Witness — Dr. Tal Lavian | TelecommNet";
const telecomDescription = "Telecommunications expert witness for patent litigation. PSTN, VoIP, cellular systems, SONET/SDH expertise. Federal court, USPTO PTAB, and ITC testimony. Ph.D. UC Berkeley.";

// ─── 2. NETWORK COMMUNICATIONS EXPERT WITNESS ────────────────────────────
// File: src/pages/communications-expert-witness/network-communications-expert-witness/index.astro

const networkCommsSchema = buildSchema.expertisePage({
  name: 'Network Communications Expert Witness',
  slug: 'network-communications-expert-witness',
  description: 'Expert witness in network communications for patent litigation. TCP/IP, routing protocols, LAN/WAN, network architecture, and distributed systems expertise for federal courts and PTAB.',
  serviceType: 'Network Communications Expert Witness',
  keywords: ['network communications expert witness', 'TCP/IP expert witness', 'routing protocols litigation', 'LAN WAN patent', 'network architecture expert'],
  breadcrumbLabel: 'Network Comms',
  faqs: [
    {
      q: 'What network communications topics has Dr. Lavian addressed as an expert witness?',
      a: 'Dr. Lavian has addressed TCP/IP protocol stacks, Ethernet, LAN/WAN architecture, routing protocols (BGP, OSPF), network switching, quality of service (QoS), and distributed network systems in patent litigation.',
    },
    {
      q: 'How does Dr. Lavian qualify as a network communications expert?',
      a: 'Dr. Lavian has a Ph.D. in Computer Science from UC Berkeley specializing in network communications, 20 years of research and lecturing at UC Berkeley\'s College of Engineering, and over 35 years of industry experience at Nortel Networks and as a startup founder.',
    },
    {
      q: 'Can Dr. Lavian serve as an expert witness in both plaintiff and defendant cases?',
      a: 'Yes. Dr. Lavian has been retained by both plaintiff and defendant parties in patent litigation matters involving network communications technologies in federal courts and PTAB proceedings.',
    },
  ],
});

const networkCommsTitle = "Network Communications Expert Witness — Dr. Tal Lavian | TelecommNet";
const networkCommsDescription = "Network communications expert witness. TCP/IP, routing protocols, LAN/WAN, network security expertise for patent litigation. Federal court & USPTO PTAB testimony.";

// ─── 3. INTERNET EXPERT WITNESS ───────────────────────────────────────────
// File: src/pages/communications-expert-witness/internet-expert-witness/index.astro

const internetSchema = buildSchema.expertisePage({
  name: 'Internet Expert Witness',
  slug: 'internet-expert-witness',
  description: 'Expert witness in Internet protocols for patent litigation. TCP/IP, HTTP, DNS, BGP, web technologies, and Internet infrastructure expertise for federal courts, USPTO PTAB, and ITC.',
  serviceType: 'Internet Expert Witness',
  keywords: ['internet expert witness', 'TCP/IP patent litigation', 'HTTP protocol expert', 'internet protocols PTAB', 'DNS expert witness', 'web technology patent', 'BGP routing expert witness', 'internet infrastructure expert', 'IPv4 IPv6 patent', 'network protocol expert witness'],
  breadcrumbLabel: 'Internet',
  faqs: [
    {
      q: 'What Internet protocol expertise does Dr. Lavian offer for patent litigation?',
      a: 'Dr. Lavian offers expert witness services covering TCP/IP protocol suites, HTTP/HTTPS, DNS, BGP routing, IPv4/IPv6 transition, web application architectures, and Internet security protocols in patent litigation matters.',
    },
    {
      q: 'Has Dr. Lavian testified in Internet technology patent cases?',
      a: 'Yes. Dr. Lavian has provided expert reports, deposition testimony, and trial testimony in patent cases involving Internet protocols, web-based communication systems, and network-based application technologies in federal district courts and PTAB.',
    },
    {
      q: 'What is Dr. Lavian\'s background in Internet technologies?',
      a: 'Dr. Lavian holds a Ph.D. from UC Berkeley and has published peer-reviewed research on Internet protocols and network architecture. He has 120+ patents, many covering Internet communication systems, and has 20 years of research experience at UC Berkeley.',
    },
    {
      q: 'What types of Internet patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving web application architectures, content delivery networks, Internet routing protocols, TCP/IP implementations, DNS systems, HTTP request processing, network infrastructure, and Internet-connected device communications.',
    },
  ],
});

const internetTitle = "Internet Expert Witness — Dr. Tal Lavian | TelecommNet";
const internetDescription = "Internet expert witness with Ph.D. from UC Berkeley and 100+ cases. TCP/IP, HTTP, DNS, BGP, web technologies expertise for patent litigation in federal courts, PTAB & ITC.";

// ─── 4. VOIP EXPERT WITNESS ───────────────────────────────────────────────
// File: src/pages/communications-expert-witness/voice-over-ip-voip-expert/index.astro

const voipSchema = buildSchema.expertisePage({
  name: 'VoIP Expert Witness',
  slug: 'voice-over-ip-voip-expert',
  description: 'Expert witness in VoIP and unified communications for patent litigation. SIP, RTP, H.323, voice-over-IP systems, and unified communications expertise for federal courts and PTAB.',
  serviceType: 'VoIP Expert Witness',
  keywords: ['VoIP expert witness', 'SIP protocol expert', 'RTP patent litigation', 'voice over IP PTAB', 'unified communications expert', 'H.323 patent'],
  breadcrumbLabel: 'VoIP',
  faqs: [
    {
      q: 'What VoIP protocols and technologies is Dr. Lavian expert in?',
      a: 'Dr. Lavian has deep expertise in SIP (Session Initiation Protocol), RTP (Real-time Transport Protocol), H.323, SRTP, voice codecs, unified communications platforms, and IP-PBX systems — all critical technology areas in VoIP patent disputes.',
    },
    {
      q: 'Can Dr. Lavian serve as a VoIP expert witness in PTAB IPR proceedings?',
      a: 'Yes. Dr. Lavian has extensive experience in USPTO Patent Trial and Appeal Board (PTAB) IPR proceedings involving VoIP and communications technologies, including submission of expert declarations and deposition testimony.',
    },
    {
      q: 'What VoIP companies has Dr. Lavian provided expert witness services for?',
      a: 'Dr. Lavian has provided expert witness services in cases involving leading technology companies including Avaya, Cisco Systems, Polycom, and other major telecommunications and VoIP platform providers.',
    },
  ],
});

const voipTitle = "VoIP Expert Witness — Dr. Tal Lavian | TelecommNet";
const voipDescription = "VoIP expert witness for patent litigation. SIP, RTP, H.323, unified communications expertise. Federal court and USPTO PTAB testimony. Ph.D. UC Berkeley.";

// ─── 5. NETWORK SECURITY EXPERT WITNESS ──────────────────────────────────
// File: src/pages/communications-expert-witness/network-security-expert/index.astro

const networkSecuritySchema = buildSchema.expertisePage({
  name: 'Network Security Expert Witness',
  slug: 'network-security-expert',
  description: 'Expert witness in network security for patent litigation. Encryption, authentication, firewalls, intrusion detection, and cybersecurity standards expertise for federal courts and PTAB.',
  serviceType: 'Network Security Expert Witness',
  keywords: ['network security expert witness', 'cybersecurity patent litigation', 'encryption expert witness', 'firewall patent', 'intrusion detection expert', 'authentication protocol patent', 'TLS SSL patent expert', 'VPN patent litigation', 'network access control expert', 'cybersecurity expert witness'],
  breadcrumbLabel: 'Network Security',
  faqs: [
    {
      q: 'What network security topics can Dr. Lavian address as an expert witness?',
      a: 'Dr. Lavian can address encryption protocols (TLS/SSL, IPsec), authentication systems, firewall architectures, intrusion detection and prevention systems (IDS/IPS), network access control, VPN technologies, and cybersecurity standards in patent litigation.',
    },
    {
      q: 'Does Dr. Lavian have experience with security patent cases?',
      a: 'Yes. Dr. Lavian has been retained in patent cases involving network security technologies at companies including Palo Alto Networks, Cisco Systems, and other cybersecurity leaders, providing technical analysis and testimony.',
    },
    {
      q: 'What is Dr. Lavian\'s background in network security?',
      a: 'Dr. Lavian\'s Ph.D. research at UC Berkeley covered network protocols and architecture, with significant work on secure communications. His 120+ patents include innovations in network security and authentication systems.',
    },
    {
      q: 'What security protocols and standards can Dr. Lavian analyze in patent disputes?',
      a: 'Dr. Lavian can analyze TLS/SSL implementations, IPsec tunnel and transport modes, PKI certificate management, RADIUS and TACACS+ authentication, 802.1X network access control, and compliance with NIST and ISO 27001 security frameworks in patent and technology disputes.',
    },
  ],
});

const networkSecurityTitle = "Network Security Expert Witness — Dr. Tal Lavian | TelecommNet";
const networkSecurityDescription = "Network security expert witness with Ph.D. from UC Berkeley. Encryption, TLS/SSL, firewalls, IDS/IPS, authentication, VPN expertise for patent litigation. 100+ cases in federal courts & PTAB.";

// ─── 6. STREAMING MEDIA EXPERT WITNESS ───────────────────────────────────
// File: src/pages/communications-expert-witness/streaming-media-audio-and-video-conferencing-expert/index.astro

const streamingSchema = buildSchema.expertisePage({
  name: 'Streaming Media Expert Witness',
  slug: 'streaming-media-audio-and-video-conferencing-expert',
  description: 'Expert witness in streaming media for patent litigation. Audio/video streaming protocols, conferencing systems, QoS, adaptive bitrate, and multimedia communications expertise.',
  serviceType: 'Streaming Media Expert Witness',
  keywords: ['streaming media expert witness', 'video streaming patent', 'audio streaming litigation', 'adaptive bitrate expert', 'multimedia patent PTAB', 'conferencing protocol expert'],
  breadcrumbLabel: 'Streaming Media',
  faqs: [
    {
      q: 'What streaming media technologies is Dr. Lavian expert in?',
      a: 'Dr. Lavian is expert in adaptive bitrate streaming (ABR), RTMP, HLS, DASH, RTP/RTCP, video conferencing protocols (WebRTC, H.264/H.265), quality of service (QoS) for media delivery, and content delivery network (CDN) architectures.',
    },
    {
      q: 'Has Dr. Lavian handled streaming media patent cases involving major technology companies?',
      a: 'Yes. Dr. Lavian has provided expert witness services in cases involving streaming media companies including Netflix, DirectTV, Emblaze, and others in federal court and ITC proceedings.',
    },
    {
      q: 'Can Dr. Lavian explain complex streaming technology to judges and juries?',
      a: 'Yes. Dr. Lavian has extensive experience translating complex network streaming concepts into clear, accessible explanations for federal court judges and juries, as well as technical PTAB panels.',
    },
  ],
});

const streamingTitle = "Streaming Media Expert Witness — Dr. Tal Lavian | TelecommNet";
const streamingDescription = "Streaming media expert witness. Audio/video streaming, conferencing protocols, QoS, multimedia communications expertise for patent litigation. Federal court & ITC testimony.";

// ─── 7. COMPUTER NETWORKING EXPERT WITNESS ───────────────────────────────
// File: src/pages/communications-expert-witness/computer-networking-expert-witness/index.astro

const computerNetworkingSchema = buildSchema.expertisePage({
  name: 'Computer Networking Expert Witness',
  slug: 'computer-networking-expert-witness',
  description: 'Expert witness in computer networking for patent litigation. LAN/WAN, Ethernet, network architecture, distributed systems, and cloud networking expertise for federal courts and PTAB.',
  serviceType: 'Computer Networking Expert Witness',
  keywords: ['computer networking expert witness', 'LAN WAN patent', 'Ethernet patent litigation', 'network architecture expert', 'distributed systems patent', 'cloud networking expert', 'network equipment patent expert', 'network infrastructure expert witness', 'SDN expert witness', 'network switch router patent'],
  breadcrumbLabel: 'Computer Networking',
  faqs: [
    {
      q: 'What computer networking expertise does Dr. Lavian offer for patent cases?',
      a: 'Dr. Lavian offers expert witness services in LAN/WAN architecture, Ethernet standards (10GbE, 40GbE, 100GbE), network switching and routing, software-defined networking (SDN), cloud networking, and distributed computer network systems.',
    },
    {
      q: 'What is Dr. Lavian\'s academic background in computer networking?',
      a: 'Dr. Lavian earned his Ph.D. in Computer Science from UC Berkeley with a specialization in network communications and served as a researcher and lecturer at UC Berkeley for 20 years, making him one of the leading academic experts in computer networking.',
    },
    {
      q: 'Has Dr. Lavian testified in computer networking patent cases?',
      a: 'Yes. Dr. Lavian has provided expert reports and testimony in 100+ patent cases involving computer networking technologies for companies including Cisco, Juniper Networks, Google, Amazon, Microsoft, and Apple.',
    },
    {
      q: 'What types of computer networking patent disputes does Dr. Lavian handle?',
      a: 'Dr. Lavian handles patent disputes involving network routers and switches, network interface cards, Ethernet implementations, network protocols, SDN controllers, network virtualization, load balancing, and data center network architectures.',
    },
  ],
});

const computerNetworkingTitle = "Computer Networking Expert Witness — Dr. Tal Lavian | TelecommNet";
const computerNetworkingDescription = "Computer networking expert witness with Ph.D. from UC Berkeley and 120+ patents. LAN/WAN, Ethernet, SDN, network architecture expertise. 100+ patent cases in federal courts & PTAB.";

// ─── 8. DATA COMMUNICATIONS EXPERT ───────────────────────────────────────
// File: src/pages/communications-expert-witness/data-communications-expert/index.astro

const dataCommsSchema = buildSchema.expertisePage({
  name: 'Data Communications Expert',
  slug: 'data-communications-expert',
  description: 'Expert witness in data communications for patent litigation. Cloud computing, data center architecture, communication protocols, and enterprise networking expertise for federal courts and PTAB.',
  serviceType: 'Data Communications Expert Witness',
  keywords: ['data communications expert witness', 'cloud computing patent', 'data center patent litigation', 'enterprise networking expert', 'communication protocol patent', 'storage networking expert', 'data center architecture expert', 'network protocol stack expert', 'enterprise communications patent', 'data network expert witness'],
  breadcrumbLabel: 'Data Comms',
  faqs: [
    {
      q: 'What data communications areas has Dr. Lavian addressed in patent litigation?',
      a: 'Dr. Lavian has addressed cloud computing architectures, data center networking, enterprise communication systems, storage area networks (SANs), communication protocol stacks, and high-performance computing interconnects in patent litigation.',
    },
    {
      q: 'Does Dr. Lavian have experience in cloud computing patent cases?',
      a: 'Yes. Dr. Lavian has been retained in patent cases involving cloud computing and data communications technologies at companies including Amazon, Google, Microsoft, ServiceNow, and other major cloud and enterprise technology providers.',
    },
    {
      q: 'What communication protocol expertise does Dr. Lavian offer for data communications patents?',
      a: 'Dr. Lavian provides expert analysis on OSI model protocol layers, TCP/IP data communications, Ethernet frame processing, data serialization protocols, API communication patterns, and application-layer data exchange mechanisms in patent disputes.',
    },
    {
      q: 'How does Dr. Lavian qualify as a data communications expert witness?',
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley with research focused on data communications architectures. He has 120+ patents in networking and communications technologies and has served as an expert witness in 100+ cases at federal courts, PTAB, and the ITC.',
    },
  ],
});

const dataCommsTitle = "Data Communications Expert — Dr. Tal Lavian | TelecommNet";
const dataCommsDescription = "Data communications expert witness with Ph.D. from UC Berkeley. Cloud computing, data center architecture, protocol stacks expertise. 100+ patent cases in federal courts, PTAB & ITC.";

// ─── 9. MOBILE WIRELESS EXPERT ───────────────────────────────────────────
// File: src/pages/communications-expert-witness/mobile-wireless-expert/index.astro

const mobileWirelessSchema = buildSchema.expertisePage({
  name: 'Mobile Wireless Expert',
  slug: 'mobile-wireless-expert',
  description: 'Expert witness in wireless communications for patent litigation. Wi-Fi, Bluetooth, wireless networking protocols, mobile communications, and WLAN expertise for federal courts, ITC Section 337, and USPTO PTAB.',
  serviceType: 'Mobile Wireless Expert Witness',
  keywords: ['wireless expert witness', 'Wi-Fi patent litigation', 'wireless networking expert witness', 'mobile communications expert', 'Bluetooth patent expert', 'WLAN expert witness', 'wireless protocol expert', 'ITC wireless Section 337'],
  breadcrumbLabel: 'Mobile Wireless',
  faqs: [
    {
      q: 'What wireless technologies is Dr. Lavian expert in?',
      a: 'Dr. Lavian is expert in Wi-Fi (802.11a/b/g/n/ac/ax), Bluetooth, wireless LAN protocols, mobile communications systems, wireless network architecture, and wireless device networking in the context of patent litigation.',
    },
    {
      q: 'Has Dr. Lavian testified in ITC wireless cases?',
      a: 'Yes. Dr. Lavian has provided expert witness services in International Trade Commission (ITC) Section 337 investigations involving wireless communications technologies, including smartphones and wireless networking equipment.',
    },
    {
      q: 'What is Dr. Lavian\'s background in wireless communications?',
      a: 'Dr. Lavian has a Ph.D. from UC Berkeley and extensive research experience in wireless network protocols. His patent portfolio includes patents covering wireless communication technologies, and he has testified in wireless cases in federal courts, PTAB, and ITC proceedings.',
    },
    {
      q: 'What types of wireless patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving Wi-Fi implementations, wireless network access control, Bluetooth communication protocols, wireless roaming and handoff mechanisms, WLAN security, and mobile device connectivity architectures.',
    },
  ],
});

const mobileWirelessTitle = "Mobile Wireless Expert Witness — Dr. Tal Lavian | TelecommNet";
const mobileWirelessDescription = "Wireless communications expert witness with Ph.D. from UC Berkeley. Wi-Fi, Bluetooth, wireless networking, mobile communications expertise. Federal court, PTAB & ITC testimony.";

// ─── 10. ROUTING & SWITCHING EXPERT ──────────────────────────────────────
// File: src/pages/communications-expert-witness/routing-switching-expert/index.astro

const routingSwitchingSchema = buildSchema.expertisePage({
  name: 'Routing & Switching Expert',
  slug: 'routing-switching-expert',
  description: 'Expert witness in routing and switching for patent litigation. BGP, OSPF, MPLS, packet switching, router architecture, and SDN expertise for federal courts and USPTO PTAB.',
  serviceType: 'Routing & Switching Expert Witness',
  keywords: ['routing switching expert witness', 'BGP patent litigation', 'OSPF expert witness', 'MPLS patent PTAB', 'router architecture expert', 'packet switching patent', 'SDN expert'],
  breadcrumbLabel: 'Routing & Switching',
  faqs: [
    {
      q: 'What routing and switching protocols is Dr. Lavian expert in?',
      a: 'Dr. Lavian is expert in BGP (Border Gateway Protocol), OSPF, EIGRP, MPLS, IP routing tables, packet switching architectures, spanning tree protocol (STP), VLAN configurations, and software-defined networking (SDN) including OpenFlow.',
    },
    {
      q: 'Has Dr. Lavian testified in routing and switching patent cases?',
      a: 'Yes. Dr. Lavian has provided expert witness services in patent litigation involving routing and switching technologies at companies including Cisco Systems, Juniper Networks, Arista Networks, and other major networking equipment providers.',
    },
    {
      q: 'Can Dr. Lavian handle router patent cases for both plaintiff and defendant?',
      a: 'Yes. Dr. Lavian has been retained by both plaintiff and defendant parties in routing and switching patent cases, providing independent technical analysis based on his expertise and review of the relevant prior art and claim constructions.',
    },
  ],
});

const routingSwitchingTitle = "Routing & Switching Expert Witness — Dr. Tal Lavian | TelecommNet";
const routingSwitchingDescription = "Routing & switching expert witness. BGP, OSPF, MPLS, packet switching, router architecture expertise for patent litigation. Federal court & USPTO PTAB testimony.";

// ─── 11. NETWORK MANAGEMENT EXPERT WITNESS ───────────────────────────────
// File: src/pages/communications-expert-witness/network-management-expert-witness/index.astro

const networkMgmtSchema = buildSchema.expertisePage({
  name: 'Network Management Expert Witness',
  slug: 'network-management-expert-witness',
  description: 'Expert witness in network management for patent litigation. SNMP, MIB, OSS/BSS, IP-PBX, network operations, and device management expertise for federal courts and USPTO PTAB.',
  serviceType: 'Network Management Expert Witness',
  keywords: ['network management expert witness', 'SNMP patent litigation', 'OSS BSS expert', 'IP-PBX patent expert', 'network operations expert witness', 'MIB patent PTAB'],
  breadcrumbLabel: 'Network Management',
  faqs: [
    {
      q: 'What network management technologies is Dr. Lavian expert in for patent cases?',
      a: 'Dr. Lavian is expert in SNMP (Simple Network Management Protocol), MIB structures, OSS/BSS systems, IP-PBX platforms, network operations centers (NOC), network monitoring, performance management, and fault management systems.',
    },
    {
      q: 'Has Dr. Lavian worked on network management patent cases at major companies?',
      a: 'Yes. Dr. Lavian has provided expert witness services in network management patent cases involving companies including Avaya, Cisco, ServiceNow, and other major enterprise networking and management software providers.',
    },
  ],
});

const networkMgmtTitle = "Network Management Expert Witness — Dr. Tal Lavian | TelecommNet";
const networkMgmtDescription = "Network management expert witness. SNMP, MIB, OSS/BSS, IP-PBX, device management expertise for patent litigation. Federal court & USPTO PTAB testimony.";

// ─── 12. NETWORKING EXPERT ────────────────────────────────────────────────
// File: src/pages/communications-expert-witness/networking-expert/index.astro

const networkingExpertSchema = buildSchema.expertisePage({
  name: 'Networking Expert',
  slug: 'networking-expert',
  description: 'Comprehensive networking expert witness for patent litigation. Computer networking and communications expertise across protocols, architecture, and standards for federal courts and PTAB.',
  serviceType: 'Networking Expert Witness',
  keywords: ['networking expert witness', 'computer network patent litigation', 'networking consultant expert', 'network protocol patent', 'network standards expert', 'telecommunications networking expert', 'network technology expert witness', 'communications networking patent', 'network expert consultant'],
  breadcrumbLabel: 'Networking Expert',
  faqs: [
    {
      q: 'What broad networking expertise does Dr. Lavian provide for patent litigation?',
      a: 'Dr. Lavian provides comprehensive expert witness services across all computer networking domains including LAN/WAN, wireless, Internet protocols, network security, VoIP, streaming, routing, switching, and network management in patent litigation and technical disputes.',
    },
    {
      q: 'Is Dr. Lavian qualified as a networking expert for both technical and litigation purposes?',
      a: 'Yes. Dr. Lavian combines 35+ years of hands-on networking industry experience (including at Nortel Networks), 20 years of academic research at UC Berkeley, and extensive litigation experience as a testifying expert witness in 100+ patent cases.',
    },
    {
      q: 'What types of networking patent cases has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent cases involving network protocols, router and switch architectures, network management systems, packet processing, VoIP implementations, network security mechanisms, and cloud networking technologies for major technology companies.',
    },
    {
      q: 'How many networking-related patents does Dr. Lavian hold?',
      a: 'Dr. Lavian holds 120+ issued and filed patents spanning network communications, telecommunications systems, active network architectures, programmable forwarding engines, network management, and data center infrastructure technologies.',
    },
  ],
});

const networkingExpertTitle = "Networking Expert Witness — Dr. Tal Lavian | TelecommNet";
const networkingExpertDescription = "Networking expert witness with Ph.D. from UC Berkeley and 120+ patents. Comprehensive networking and communications expertise for patent litigation. 100+ cases in federal courts & PTAB.";

// ─── 13. MESSAGING AND CHAT EXPERT WITNESS ──────────────────────────────
// File: src/pages/communications-expert-witness/messaging-and-chat-expert-witness/index.astro

const messagingChatSchema = buildSchema.expertisePage({
  name: 'Messaging & Chat Expert Witness',
  slug: 'messaging-and-chat-expert-witness',
  description: 'Expert witness in messaging and chat technologies for patent litigation. SMS, MMS, instant messaging, chat protocols, push notifications, and messaging platform expertise for federal courts and PTAB.',
  serviceType: 'Messaging & Chat Expert Witness',
  keywords: ['messaging expert witness', 'chat expert witness', 'SMS patent litigation', 'instant messaging patent', 'messaging protocol expert', 'push notification patent', 'chat platform expert witness', 'MMS patent expert'],
  breadcrumbLabel: 'Messaging & Chat',
  faqs: [
    {
      q: 'What messaging and chat technologies is Dr. Lavian expert in?',
      a: 'Dr. Lavian is expert in SMS/MMS protocols, instant messaging systems, chat platforms, XMPP, push notification architectures, real-time messaging protocols, and enterprise collaboration messaging systems in the context of patent litigation.',
    },
    {
      q: 'Has Dr. Lavian testified in messaging patent cases?',
      a: 'Yes. Dr. Lavian has provided expert witness services in patent cases involving messaging technologies, chat applications, and real-time communication systems in federal courts and USPTO PTAB proceedings.',
    },
    {
      q: 'What types of messaging patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving SMS/MMS message delivery, instant messaging protocols, chat application architectures, push notification systems, message queuing, presence detection, and group messaging implementations.',
    },
  ],
});

const messagingChatTitle = "Messaging & Chat Expert Witness — Dr. Tal Lavian | TelecommNet";
const messagingChatDescription = "Messaging and chat expert witness with Ph.D. from UC Berkeley. SMS, MMS, instant messaging, chat protocols expertise for patent litigation. Federal court & USPTO PTAB testimony.";

export {
  telecomSchema, telecomTitle, telecomDescription,
  networkCommsSchema, networkCommsTitle, networkCommsDescription,
  internetSchema, internetTitle, internetDescription,
  voipSchema, voipTitle, voipDescription,
  networkSecuritySchema, networkSecurityTitle, networkSecurityDescription,
  streamingSchema, streamingTitle, streamingDescription,
  computerNetworkingSchema, computerNetworkingTitle, computerNetworkingDescription,
  dataCommsSchema, dataCommsTitle, dataCommsDescription,
  mobileWirelessSchema, mobileWirelessTitle, mobileWirelessDescription,
  routingSwitchingSchema, routingSwitchingTitle, routingSwitchingDescription,
  networkMgmtSchema, networkMgmtTitle, networkMgmtDescription,
  networkingExpertSchema, networkingExpertTitle, networkingExpertDescription,
  messagingChatSchema, messagingChatTitle, messagingChatDescription,
};
