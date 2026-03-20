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
// File: src/pages/communications-expert-witness/pstn-voip-cellular-expert-witness/index.astro

const telecomSchema = buildSchema.expertisePage({
  name: 'PSTN, VoIP & Cellular Systems Expert',
  slug: 'pstn-voip-cellular-expert',
  description: 'PSTN, VoIP & cellular systems expert witness for patent litigation. SONET/SDH, DWDM, telecom switching, SS7 signaling. 70+ cases, 120+ patents.',
  serviceType: 'PSTN, VoIP & Cellular Systems Expert Witness',
  keywords: ['PSTN expert witness', 'VoIP expert witness', 'cellular systems expert witness', 'telecom protocol expert', 'PTAB telecom expert', 'ITC telecom expert', 'SONET SDH expert witness', 'SS7 signaling expert', 'telephony expert witness', 'circuit switching expert witness'],
  breadcrumbLabel: 'PSTN, VoIP & Cellular',
  faqs: [
    {
      q: 'What does a telecommunications expert witness do?',
      a: 'A telecommunications expert witness provides technical analysis and testimony in patent litigation, ITC Section 337 proceedings, and federal court cases involving telecom technologies such as PSTN, VoIP, network communications, and Internet protocols.',
    },
    {
      q: 'What telecom qualifications does Dr. Lavian have?',
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley specializing in network communications, served as a Senior Researcher at Nortel Networks, has 120+ patents in telecom, 25+ peer-reviewed publications, and has testified in 70+ federal court, PTAB, and ITC proceedings.',
    },
    {
      q: 'In which courts has Dr. Lavian testified as a telecommunications expert?',
      a: 'Dr. Lavian has provided expert testimony in U.S. federal district courts, the USPTO Patent Trial and Appeal Board (PTAB) IPR proceedings, and the International Trade Commission (ITC). He has also testified in the Tax Court in Canada, and a court in Asia.',
    },
    {
      q: 'What telecommunications patent issues has Dr. Lavian addressed?',
      a: 'Dr. Lavian has addressed claim construction, infringement, and invalidity issues involving telephony protocols, cellular systems, VoIP, PSTN interfaces, network switching, and wireless communications standards.',
    },
    {
      q: 'How is a telecommunications expert witness used in patent litigation?',
      a: 'In patent litigation, a telecommunications expert witness like Dr. Lavian provides expert reports analyzing patent claims, claim construction opinions, infringement and validity analyses, deposition testimony, and trial testimony. Attorneys retain telecom experts to explain complex technology to judges, juries, and PTAB panels.',
    },
    {
      q: 'What companies has Dr. Lavian served as a telecom expert witness for?',
      a: 'Dr. Lavian has been retained in telecommunications patent cases involving major companies including Apple, Google, Microsoft, Samsung, Meta (Facebook), Cisco, AT&T, Verizon, T-Mobile, Juniper (HPE), Huawei, and many others, providing analysis and testimony on telecom protocols and systems.',
    },
    {
      q: 'What qualifications should a telecommunications expert witness have?',
      a: 'A telecommunications expert witness must demonstrate reliable methodology and relevant expertise. Dr. Lavian qualifies through his Ph.D. from UC Berkeley, 120+ patents, 25+ peer-reviewed publications, and 70+ cases where his methodology and opinions have been accepted by federal courts, PTAB panels, and the ITC.',
    },
    {
      q: 'What is the difference between a telecommunications expert witness and a general technology expert?',
      a: 'A telecommunications expert witness has specialized knowledge in telecom-specific technologies — PSTN, VoIP, cellular systems, signaling protocols, and telecom standards (ITU-T, 3GPP). Unlike a general technology expert, a telecom expert can analyze protocol-level details, carrier network architectures, and telecom-specific patent claims with the depth required for credible testimony.',
    },
    {
      q: 'How much does a telecommunications expert witness cost?',
      a: 'Telecommunications expert witness fees vary based on case complexity, scope of analysis, and whether testimony is needed at deposition or trial. Dr. Lavian provides expert witness rates commensurate with his credentials (Ph.D. UC Berkeley, 120+ patents, 70+ cases). Contact Dr. Lavian directly for a fee schedule and case evaluation.',
    },
  ],
});

const telecomTitle = "PSTN, VoIP & Cellular Expert Witness — Dr. Tal Lavian, Ph.D.";
const telecomDescription = "PSTN, VoIP & cellular expert witness — 120+ patents, 70+ cases. Telecom switching, SS7, SONET/SDH. Ph.D. UC Berkeley.";

// ─── 2. NETWORK COMMUNICATIONS EXPERT WITNESS ────────────────────────────
// File: src/pages/communications-expert-witness/network-communications-expert-witness/index.astro

const networkCommsSchema = buildSchema.expertisePage({
  name: 'Network Communications Expert Witness',
  slug: 'network-communications-expert-witness',
  description: 'Network communications expert witness for patent litigation. TCP/IP, routing protocols, LAN/WAN, OSI model. 70+ cases, 120+ patents.',
  serviceType: 'Network Communications Expert Witness',
  keywords: ['network communications expert witness', 'TCP/IP expert witness', 'routing protocols litigation', 'LAN WAN patent expert', 'network architecture expert witness', 'OSI model patent', 'network protocol expert', 'distributed systems expert witness'],
  breadcrumbLabel: 'Network Comms',
  faqs: [
    {
      q: 'What network communications topics has Dr. Lavian addressed as an expert witness?',
      a: 'Dr. Lavian has addressed TCP/IP protocol stacks, Ethernet, LAN/WAN architecture, routing protocols (BGP, OSPF), network switching, quality of service (QoS), and distributed network systems in patent litigation.',
    },
    {
      q: 'How does Dr. Lavian qualify as a network communications expert?',
      a: 'Dr. Lavian has a Ph.D. in Computer Science from UC Berkeley specializing in network communications, nearly 20 years of research and lecturing at UC Berkeley\'s College of Engineering, and over 35 years of industry experience at Nortel Networks and as a startup founder.',
    },
    {
      q: 'Can Dr. Lavian serve as an expert witness in both plaintiff and defendant cases?',
      a: 'Yes. Dr. Lavian has been retained by both plaintiff and defendant parties in patent litigation matters involving network communications technologies in federal courts and PTAB proceedings.',
    },
    {
      q: 'What network communications patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving TCP/IP protocol implementations, packet switching architectures, network interface cards, quality of service mechanisms, network congestion control, and distributed computing systems for companies including Cisco, Google, Intel, and Microsoft.',
    },
    {
      q: 'How does network communications expertise apply to patent claim construction?',
      a: 'Network communications expertise is relevant to interpreting patent claims involving protocol layers, packet header fields, routing table structures, and network stack implementations. Dr. Lavian\'s 120+ patents and knowledge of the OSI model and TCP/IP stack enable him to provide claim construction opinions for judges and PTAB panels.',
    },
    {
      q: 'What courts has Dr. Lavian testified in as a network communications expert?',
      a: 'Dr. Lavian has provided expert testimony in U.S. federal district courts across multiple jurisdictions, the USPTO Patent Trial and Appeal Board (PTAB) in IPR and PGR proceedings, the International Trade Commission (ITC), the Tax Court in Canada, and a court in Asia.',
    },
    {
      q: 'What is a network communications expert witness and when do you need one?',
      a: 'A network communications expert witness is a technical specialist who provides analysis and testimony in legal disputes involving network protocols, data transmission systems, and communication architectures. You need one in patent infringement cases, trade secret disputes, or regulatory matters where network protocol behavior, packet routing, or network architecture is at issue.',
    },
    {
      q: 'How does a network communications expert witness help in patent claim construction?',
      a: 'A network communications expert witness helps courts interpret technical patent terms — such as "packet header," "routing table," "protocol stack," and "network interface" — by providing definitions grounded in industry standards (IEEE, IETF RFCs) and the OSI model. Dr. Lavian\'s 120+ patents in networking give him firsthand insight into how these terms are used by inventors.',
    },
  ],
});

const networkCommsTitle = "Network Communications Expert Witness — Dr. Tal Lavian, Ph.D.";
const networkCommsDescription = "Network communications expert witness — 120+ patents, 70+ cases. TCP/IP, routing, LAN/WAN. Ph.D. UC Berkeley. PTAB & ITC.";

// ─── 3. INTERNET EXPERT WITNESS ───────────────────────────────────────────
// File: src/pages/communications-expert-witness/internet-expert-witness/index.astro

const internetSchema = buildSchema.expertisePage({
  name: 'Internet Expert Witness',
  slug: 'internet-expert-witness',
  description: 'Internet expert witness for patent litigation. TCP/IP, HTTP, DNS, BGP, web technologies, internet protocols. 70+ cases, 120+ patents. Ph.D. UC Berkeley.',
  serviceType: 'Internet Expert Witness',
  keywords: ['internet technologies expert witness', 'internet expert witness', 'TCP/IP expert witness', 'internet protocols expert witness', 'TCP/IP patent litigation', 'HTTP protocol expert', 'DNS expert witness', 'web technology patent expert', 'BGP routing expert witness', 'internet infrastructure expert witness'],
  breadcrumbLabel: 'Internet & TCP/IP',
  faqs: [
    {
      q: 'What Internet technologies and protocol expertise does Dr. Lavian offer for patent litigation?',
      a: 'Dr. Lavian offers Internet technologies expert witness services covering TCP/IP protocol suites, HTTP/HTTPS, DNS, BGP routing, IPv4/IPv6 transition, web application architectures, and Internet security protocols in patent litigation matters.',
    },
    {
      q: 'Has Dr. Lavian testified in Internet technologies patent cases?',
      a: 'Yes. Dr. Lavian has provided expert reports, deposition testimony, and trial testimony in patent cases involving Internet technologies, TCP/IP protocols, web-based communication systems, and network-based application technologies in federal district courts and PTAB.',
    },
    {
      q: 'What is Dr. Lavian\'s background in Internet technologies and TCP/IP?',
      a: 'Dr. Lavian holds a Ph.D. from UC Berkeley and has published peer-reviewed research on Internet protocols, TCP/IP, and network architecture. He has 120+ patents, many covering Internet communication systems, and has nearly 20 years of research experience at UC Berkeley.',
    },
    {
      q: 'What types of Internet patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving web application architectures, content delivery networks, Internet routing protocols, TCP/IP implementations, DNS systems, HTTP request processing, network infrastructure, and Internet-connected device communications.',
    },
    {
      q: 'Why do attorneys choose Dr. Lavian as an Internet technologies expert witness?',
      a: 'Attorneys choose Dr. Lavian because he combines deep academic credentials (Ph.D. UC Berkeley, 25+ publications on Internet protocols and TCP/IP) with practical industry experience building Internet systems and 120+ patents. His ability to explain complex Internet technologies clearly to judges and juries, backed by 70+ case track record, makes him a compelling and credible expert witness.',
    },
    {
      q: 'Can Dr. Lavian testify on Internet of Things (IoT) patent cases?',
      a: 'Yes. Dr. Lavian\'s expertise in Internet protocols, network communications, and embedded systems enables him to provide expert testimony on IoT patent cases, including device-to-cloud architectures, IoT communication protocols, smart device networking, and Internet-connected systems.',
    },
    {
      q: 'What is an Internet expert witness and what cases require one?',
      a: 'An Internet expert witness is a technical specialist with deep knowledge of Internet protocols (TCP/IP, HTTP, DNS), web technologies, and network architecture who provides testimony in legal proceedings. Cases requiring an Internet expert include patent infringement involving web technologies, cybersecurity breaches, Internet service disputes, and e-commerce platform litigation.',
    },
    {
      q: 'How does an Internet technologies expert witness analyze protocol-level patent claims?',
      a: 'An Internet technologies expert witness analyzes patent claims by mapping claim elements to specific protocol behaviors — such as TCP handshake sequences, HTTP request/response flows, DNS resolution steps, or BGP route advertisements. Dr. Lavian\'s 120+ patents and academic research in TCP/IP enable him to provide protocol-level infringement and validity analyses.',
    },
  ],
});

const internetTitle = "Internet Expert Witness — Dr. Tal Lavian, Ph.D. UC Berkeley";
const internetDescription = "Internet & TCP/IP expert witness — 120+ patents, 70+ cases. HTTP, DNS, BGP, web technologies. Ph.D. UC Berkeley. PTAB & ITC.";

// ─── 4. VOIP EXPERT WITNESS ───────────────────────────────────────────────
// File: src/pages/communications-expert-witness/voice-over-ip-voip-expert/index.astro

const voipSchema = buildSchema.expertisePage({
  name: 'VoIP Expert Witness',
  slug: 'voice-over-ip-voip-expert',
  description: 'VoIP expert witness for patent litigation. SIP, RTP, H.323, unified communications, IP telephony, voice codecs. 70+ cases, 120+ patents.',
  serviceType: 'VoIP Expert Witness',
  keywords: ['VoIP expert witness', 'SIP protocol expert', 'RTP patent litigation', 'voice over IP PTAB', 'unified communications expert', 'H.323 patent', 'IP telephony expert witness', 'voice codec patent expert', 'SIP trunking patent', 'WebRTC expert witness'],
  breadcrumbLabel: 'VoIP',
  faqs: [
    {
      q: 'What VoIP protocols and technologies is Dr. Lavian expert in?',
      a: 'Dr. Lavian provides expert analysis on SIP (Session Initiation Protocol), RTP (Real-time Transport Protocol), H.323, SRTP, voice codecs, unified communications platforms, and IP-PBX systems — all common technology areas in VoIP patent disputes.',
    },
    {
      q: 'Can Dr. Lavian serve as a VoIP expert witness in PTAB IPR proceedings?',
      a: 'Yes. Dr. Lavian has provided testimony in USPTO Patent Trial and Appeal Board (PTAB) IPR proceedings involving VoIP and communications technologies, including submission of expert declarations and deposition testimony.',
    },
    {
      q: 'What VoIP companies has Dr. Lavian provided expert witness services for?',
      a: 'Dr. Lavian has provided expert witness services in cases involving technology companies including Avaya, Cisco Systems, Polycom, and other telecommunications and VoIP platform providers.',
    },
    {
      q: 'How does VoIP expertise apply to patent infringement analysis?',
      a: 'VoIP patent cases require an expert who can analyze SIP signaling flows, RTP media streams, voice codec implementations, call routing logic, and quality of service mechanisms at the protocol level. Dr. Lavian provides claim construction, infringement analysis, and validity opinions on VoIP patents in federal court and PTAB proceedings.',
    },
    {
      q: 'What is Dr. Lavian\'s background in voice communications technology?',
      a: 'Dr. Lavian holds a Ph.D. from UC Berkeley, specializing in telecommunications, network communication, and Internet technologies. He has 120+ patents covering VoIP and communications systems, nearly 20 years of industry experience at Nortel Networks developing voice and data systems, and 70+ expert witness engagements.',
    },
    {
      q: 'Can Dr. Lavian testify on unified communications and WebRTC patents?',
      a: 'Yes. Dr. Lavian\'s expertise extends beyond traditional VoIP to include unified communications platforms, WebRTC browser-based communications, SIP trunking, video conferencing integration, and cloud-based communications services — all common subjects in modern VoIP patent disputes.',
    },
  ],
});

const voipTitle = "VoIP Expert Witness — Dr. Tal Lavian, Ph.D. UC Berkeley";
const voipDescription = "VoIP expert witness — 120+ patents, 70+ cases. SIP, RTP, H.323, WebRTC. Ph.D. UC Berkeley. PTAB, ITC & trial testimony.";

// ─── 5. NETWORK SECURITY EXPERT WITNESS ──────────────────────────────────
// File: src/pages/communications-expert-witness/network-security-expert-witness/index.astro

const networkSecuritySchema = buildSchema.expertisePage({
  name: 'Network Security Expert Witness',
  slug: 'network-security-expert',
  description: 'Network security expert witness for patent litigation. Encryption, firewalls, IDS/IPS, authentication, cybersecurity. 70+ cases, 120+ patents.',
  serviceType: 'Network Security Expert Witness',
  keywords: ['internet security expert witness', 'network security expert witness', 'cybersecurity patent litigation', 'encryption expert witness', 'firewall patent', 'intrusion detection expert', 'authentication protocol patent', 'TLS SSL patent expert', 'VPN patent litigation', 'cybersecurity expert witness'],
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
      a: 'Dr. Lavian\'s Ph.D. research at UC Berkeley covered network protocols and architecture, with work on secure communications. His 120+ patents include innovations in network security and authentication systems.',
    },
    {
      q: 'What security protocols and standards can Dr. Lavian analyze in patent disputes?',
      a: 'Dr. Lavian can analyze TLS/SSL implementations, IPsec tunnel and transport modes, PKI certificate management, RADIUS and TACACS+ authentication, 802.1X network access control, and compliance with NIST and ISO 27001 security frameworks in patent and technology disputes.',
    },
    {
      q: 'How does network security expertise apply to patent litigation?',
      a: 'Network security patent cases require an expert who can analyze encryption algorithms, firewall architectures, intrusion detection methods, and authentication protocols at the code and protocol level. Dr. Lavian provides claim construction, infringement analysis, and validity opinions on security technology patents in federal court and PTAB proceedings.',
    },
    {
      q: 'Has Dr. Lavian worked on cybersecurity patent cases for major companies?',
      a: 'Yes. Dr. Lavian has been retained in patent cases involving network security technologies at companies including Palo Alto Networks, Cisco, Fortinet, and other cybersecurity leaders, addressing firewall architectures, VPN implementations, network access control systems, and threat detection technologies.',
    },
  ],
});

const networkSecurityTitle = "Network Security Expert Witness — Dr. Tal Lavian, Ph.D.";
const networkSecurityDescription = "Network security expert witness — 120+ patents, 70+ cases. Encryption, TLS/SSL, firewalls, VPN, IDS/IPS. Ph.D. UC Berkeley.";

// ─── 6. STREAMING MEDIA EXPERT WITNESS ───────────────────────────────────
// File: src/pages/communications-expert-witness/streaming-media-expert-witness/index.astro

const streamingSchema = buildSchema.expertisePage({
  name: 'Streaming Media Expert Witness',
  slug: 'streaming-media-expert-witness',
  description: 'Streaming media expert witness for patent litigation. Video/audio streaming, adaptive bitrate, WebRTC, CDN, QoS. 70+ cases, 120+ patents.',
  serviceType: 'Streaming Media Expert Witness',
  keywords: ['streaming media expert witness', 'video streaming patent', 'audio streaming litigation', 'adaptive bitrate expert', 'multimedia patent PTAB', 'conferencing protocol expert', 'CDN patent expert', 'WebRTC expert witness', 'video conferencing patent', 'HLS DASH streaming expert'],
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
      a: 'Yes. Dr. Lavian has testified before federal court judges and juries, as well as technical PTAB panels, translating complex network streaming concepts into clear, accessible explanations.',
    },
    {
      q: 'What types of streaming media patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving adaptive bitrate streaming algorithms, video codec implementations (H.264, H.265, VP9, AV1), content delivery network architectures, real-time streaming protocols, video conferencing systems, and media transcoding technologies.',
    },
    {
      q: 'How does streaming media expertise apply to patent infringement analysis?',
      a: 'Streaming media patents often involve complex protocol interactions between servers, CDN edge nodes, and client devices. Dr. Lavian\'s expertise in RTP/RTCP, HLS/DASH manifest handling, codec negotiation, and QoS mechanisms enables him to provide detailed claim construction and infringement analyses for streaming technology patents.',
    },
    {
      q: 'What is Dr. Lavian\'s background in multimedia communications?',
      a: 'Dr. Lavian holds a Ph.D. from UC Berkeley, specializing in telecommunications, network communication, and Internet technologies. His 120+ patents include innovations in real-time media delivery and network streaming, and he has served as a principal investigator on DARPA-funded multimedia network research projects.',
    },
  ],
});

const streamingTitle = "Streaming Media Expert Witness — Dr. Tal Lavian, Ph.D.";
const streamingDescription = "Streaming media expert witness — 120+ patents, 70+ cases. Video streaming, WebRTC, CDN, adaptive bitrate. Ph.D. UC Berkeley.";

// ─── 7. COMPUTER NETWORKING EXPERT WITNESS ───────────────────────────────
// File: src/pages/communications-expert-witness/computer-networking-expert-witness/index.astro

const computerNetworkingSchema = buildSchema.expertisePage({
  name: 'Computer Networks Expert Witness',
  slug: 'computer-networking-expert-witness',
  description: 'Computer networks expert witness for patent litigation. LAN/WAN, Ethernet, routers, switches, SDN, cloud networking. 70+ cases, 120+ patents.',
  serviceType: 'Computer Networks Expert Witness',
  keywords: ['computer networks expert witness', 'computer networking expert witness', 'computer network expert witness', 'LAN WAN patent expert', 'Ethernet patent litigation', 'network architecture expert witness', 'distributed systems patent', 'cloud networking expert', 'network infrastructure expert witness', 'SDN expert witness'],
  breadcrumbLabel: 'Computer Networks',
  faqs: [
    {
      q: 'What computer networks expertise does Dr. Lavian offer for patent cases?',
      a: 'Dr. Lavian offers computer networks expert witness services in LAN/WAN architecture, Ethernet standards (10GbE, 40GbE, 100GbE), network switching and routing, software-defined networking (SDN), cloud networking, and distributed computer network systems.',
    },
    {
      q: 'What is Dr. Lavian\'s academic background in computer networks?',
      a: 'Dr. Lavian earned his Ph.D. in Computer Science from UC Berkeley with a specialization in network communications and spent nearly 20 years researching, studying, and lecturing at UC Berkeley\'s College of Engineering.',
    },
    {
      q: 'Has Dr. Lavian testified in computer networks patent cases?',
      a: 'Yes. Dr. Lavian has provided expert reports and testimony in 70+ patent cases involving computer networks technologies for companies including Cisco, Juniper Networks, Google, Amazon, Microsoft, and Apple.',
    },
    {
      q: 'What types of computer networks patent disputes does Dr. Lavian handle?',
      a: 'Dr. Lavian handles computer networks patent disputes involving network routers and switches, network interface cards, Ethernet implementations, network protocols, SDN controllers, network virtualization, load balancing, and data center network architectures.',
    },
    {
      q: 'What qualifies Dr. Lavian as a computer networks expert witness?',
      a: 'Dr. Lavian has hands-on industry experience designing network switch software at Nortel Networks and Bay Networks, 120+ networking patents, and nearly 20 years of researching, studying, and lecturing at UC Berkeley. He has been retained in over 70 cases and given 80+ depositions.',
    },
    {
      q: 'What courts has Dr. Lavian testified in as a computer networks expert witness?',
      a: 'Dr. Lavian has provided computer networks expert testimony in U.S. federal district courts across multiple jurisdictions, the USPTO Patent Trial and Appeal Board (PTAB) in IPR and PGR proceedings, the International Trade Commission (ITC), the Tax Court in Canada, and a court in Asia.',
    },
    {
      q: 'What is the role of a computer networking expert witness in patent litigation?',
      a: 'A computer networking expert witness analyzes patent claims involving network hardware (routers, switches, NICs), network protocols (Ethernet, TCP/IP, OSPF, BGP), and network architectures (LAN/WAN, SDN, cloud networking). They provide claim construction opinions, infringement analyses, and validity assessments, and testify at depositions, PTAB hearings, and trials.',
    },
    {
      q: 'How does a computer networking expert witness explain technical concepts to a jury?',
      a: 'An effective computer networking expert witness translates complex networking concepts — like packet switching, routing algorithms, and protocol handshakes — into clear, relatable explanations for judges and juries. Dr. Lavian\'s nearly 20 years of teaching at UC Berkeley and experience in 70+ cases equip him to present network technology concepts accessibly and persuasively.',
    },
  ],
});

const computerNetworkingTitle = "Computer Networking Expert Witness — Dr. Tal Lavian, Ph.D.";
const computerNetworkingDescription = "Computer networking expert witness — 120+ patents, 70+ cases. LAN/WAN, Ethernet, SDN, routers, switches. Ph.D. UC Berkeley.";

// ─── 8. DATA COMMUNICATIONS EXPERT ───────────────────────────────────────
// File: src/pages/communications-expert-witness/data-communications-expert-witness/index.astro

const dataCommsSchema = buildSchema.expertisePage({
  name: 'Data Communications Expert Witness',
  slug: 'data-communications-expert',
  description: 'Data communications expert witness for patent litigation. Data networking, cloud computing, data centers, protocol stacks. 70+ cases, 120+ patents.',
  serviceType: 'Data Communications Expert Witness',
  keywords: ['data communications expert witness', 'data communications expert', 'data networking expert witness', 'data network expert witness', 'cloud computing patent', 'data center patent litigation', 'enterprise networking expert', 'communication protocol patent', 'network protocol stack expert', 'data communications consulting expert'],
  breadcrumbLabel: 'Data Communications',
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
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley with research focused on data communications architectures. He has 120+ patents in networking and communications technologies and has served as an expert witness in 70+ cases at federal courts, PTAB, and the ITC.',
    },
    {
      q: 'What types of data center patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving data center switch fabric architectures, server virtualization, load balancing systems, storage area network protocols, east-west traffic optimization, and cloud infrastructure orchestration platforms.',
    },
    {
      q: 'Can Dr. Lavian testify on enterprise software and API communication patents?',
      a: 'Yes. Dr. Lavian\'s expertise extends to enterprise software architectures, RESTful API communications, microservices patterns, message queuing systems, and data serialization protocols — all common subjects in modern data communications patent litigation.',
    },
    {
      q: 'What is a data communications expert witness and when is one needed?',
      a: 'A data communications expert witness is a specialist in data transmission technologies, networking protocols, and communication system architectures who provides testimony in legal proceedings. One is needed in patent disputes involving data networking equipment, cloud computing infrastructure, data center technologies, protocol implementations, and enterprise communication systems.',
    },
    {
      q: 'How does a data communications expert witness differ from a networking expert witness?',
      a: 'While both fields overlap, a data communications expert focuses specifically on data transmission methods, protocol stacks, data encoding/decoding, and end-to-end data delivery mechanisms. A networking expert has broader scope including network hardware and topology. Dr. Lavian covers both areas with 120+ patents spanning data communications protocols and computer networking technologies.',
    },
  ],
});

const dataCommsTitle = "Data Communications Expert Witness — Dr. Tal Lavian, Ph.D.";
const dataCommsDescription = "Data communications expert witness — 120+ patents, 70+ cases. Cloud computing, data centers, protocol stacks. Ph.D. UC Berkeley.";

// ─── 9. MOBILE WIRELESS EXPERT ───────────────────────────────────────────
// File: src/pages/communications-expert-witness/mobile-wireless-expert-witness/index.astro

const mobileWirelessSchema = buildSchema.expertisePage({
  name: 'Mobile & Wireless Expert Witness',
  slug: 'mobile-wireless-expert',
  description: 'Wireless & mobile expert witness for patent litigation. Wi-Fi, Bluetooth, cellular, 5G, WLAN, RF technology. 70+ cases, 120+ patents.',
  serviceType: 'Wireless Expert Witness',
  keywords: ['cell phone expert witness', 'wireless expert witness', 'Wi-Fi patent litigation', 'wireless networking expert witness', 'mobile communications expert witness', 'Bluetooth patent expert', 'WLAN expert witness', 'wireless protocol expert', 'ITC wireless Section 337', 'mobile wireless expert witness'],
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
      a: 'Dr. Lavian has a Ph.D. from UC Berkeley and research experience in wireless network protocols. His patent portfolio includes patents covering wireless communication technologies, and he has testified in wireless cases in federal courts, PTAB, and ITC proceedings.',
    },
    {
      q: 'What types of wireless patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving Wi-Fi implementations, wireless network access control, Bluetooth communication protocols, wireless roaming and handoff mechanisms, WLAN security, and mobile device connectivity architectures.',
    },
    {
      q: 'Can Dr. Lavian provide expert witness services for cellular and 5G patent cases?',
      a: 'Yes. Dr. Lavian\'s wireless expertise covers cellular network technologies including LTE and 5G NR architectures, carrier aggregation, MIMO antenna systems, and mobile network infrastructure. He can provide expert reports and testimony on cellular standard-essential patents (SEPs) and FRAND licensing disputes.',
    },
    {
      q: 'What wireless companies has Dr. Lavian served as an expert witness for?',
      a: 'Dr. Lavian has been retained in wireless patent cases involving companies including Apple, Samsung, Qualcomm, Motorola, and other major wireless device manufacturers and semiconductor companies, providing analysis and testimony on Wi-Fi, Bluetooth, and cellular technologies.',
    },
  ],
});

const mobileWirelessTitle = "Wireless & Mobile Expert Witness — Dr. Tal Lavian, Ph.D.";
const mobileWirelessDescription = "Wireless & mobile expert witness — 120+ patents, 70+ cases. Wi-Fi, Bluetooth, 5G, cellular, WLAN. Ph.D. UC Berkeley. PTAB & ITC.";

// ─── 10. ROUTING & SWITCHING EXPERT ──────────────────────────────────────
// File: src/pages/communications-expert-witness/routing-switching-expert-witness/index.astro

const routingSwitchingSchema = buildSchema.expertisePage({
  name: 'Routing & Switching Expert Witness',
  slug: 'routing-switching-expert',
  description: 'Routing & switching expert witness for patent litigation. BGP, OSPF, MPLS, packet switching, SDN, router/switch architectures. 70+ cases, 120+ patents.',
  serviceType: 'Routing & Switching Expert Witness',
  keywords: ['routing switching expert witness', 'BGP patent litigation', 'OSPF expert witness', 'MPLS patent PTAB', 'router architecture expert', 'packet switching patent', 'SDN expert', 'network switch expert witness', 'VLAN patent expert', 'OpenFlow SDN patent'],
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
    {
      q: 'What is Dr. Lavian\'s industry experience with routing and switching hardware?',
      a: 'Dr. Lavian was a Senior Research Scientist at Nortel Networks (formerly Bay Networks) where he designed routing and switching software for enterprise and carrier-grade network equipment. He has invented 120+ patents, many covering programmable forwarding engines and active network architectures for routers and switches.',
    },
    {
      q: 'What types of routing and switching patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving BGP route processing, MPLS label switching, packet classification engines, forwarding table implementations, TCAM-based lookups, network-on-chip switch fabrics, SDN controller architectures, and programmable network device pipelines.',
    },
    {
      q: 'Can Dr. Lavian testify on software-defined networking (SDN) patent cases?',
      a: 'Yes. Dr. Lavian\'s expertise includes SDN architectures, OpenFlow protocol implementations, network function virtualization (NFV), programmable data planes, and SDN controller platforms. His research at UC Berkeley on programmable forwarding engines is directly relevant to SDN patent disputes.',
    },
  ],
});

const routingSwitchingTitle = "Routing & Switching Expert Witness — Dr. Tal Lavian, Ph.D.";
const routingSwitchingDescription = "Routing & switching expert witness — 120+ patents, 70+ cases. BGP, OSPF, MPLS, SDN. Ph.D. UC Berkeley. PTAB, ITC & federal court.";

// ─── 11. NETWORK MANAGEMENT EXPERT WITNESS ───────────────────────────────
// File: src/pages/communications-expert-witness/network-management-expert-witness/index.astro

const networkMgmtSchema = buildSchema.expertisePage({
  name: 'Network Management Expert Witness',
  slug: 'network-management-expert-witness',
  description: 'Network management expert witness for patent litigation. SNMP, OSS/BSS, network monitoring, configuration management. 70+ cases, 120+ patents.',
  serviceType: 'Network Management Expert Witness',
  keywords: ['network management expert witness', 'SNMP patent litigation', 'OSS BSS expert', 'IP-PBX patent expert', 'network operations expert witness', 'MIB patent PTAB', 'network monitoring patent', 'configuration management expert', 'device management patent expert', 'NOC systems expert witness'],
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
    {
      q: 'What types of network management patent disputes has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent disputes involving SNMP polling and trap-based monitoring, MIB object definitions, network configuration management systems, automated provisioning, performance threshold alerting, fault correlation engines, and IT service management platforms.',
    },
    {
      q: 'How does Dr. Lavian qualify as a network management expert witness?',
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley with expertise in network protocols and management systems. At Nortel Networks, he developed network management software for carrier-grade equipment. His 120+ patents include innovations in network monitoring and device management.',
    },
    {
      q: 'Can Dr. Lavian testify on IT operations management (ITOM) and AIOps patents?',
      a: 'Yes. Dr. Lavian\'s network management expertise extends to modern IT operations management platforms, automated network orchestration, AIOps event correlation, and infrastructure monitoring systems — all increasingly common subjects in patent litigation.',
    },
    {
      q: 'What is the role of a network management expert witness in patent litigation?',
      a: 'A network management expert witness analyzes patent claims involving monitoring protocols, management information bases, configuration databases, and operations support systems. Dr. Lavian provides claim construction opinions, infringement analyses, and validity assessments for network management patents in federal courts and PTAB proceedings.',
    },
  ],
});

const networkMgmtTitle = "Network Management Expert Witness — Dr. Tal Lavian, Ph.D.";
const networkMgmtDescription = "Network management expert witness — 120+ patents, 70+ cases. SNMP, OSS/BSS, monitoring. Ph.D. UC Berkeley. PTAB & ITC.";

// ─── 12. NETWORKING EXPERT ────────────────────────────────────────────────
// File: src/pages/communications-expert-witness/networking-expert-witness/index.astro

const networkingExpertSchema = buildSchema.expertisePage({
  name: 'Networking Expert Witness',
  slug: 'networking-expert',
  description: 'Networking expert witness for patent litigation. Enterprise networking, protocol architecture, network design and infrastructure. 70+ cases, 120+ patents.',
  serviceType: 'Networking Expert Witness',
  keywords: ['networking expert witness', 'computer network patent litigation', 'networking consultant expert', 'network protocol patent', 'network standards expert', 'telecommunications networking expert', 'network technology expert witness', 'communications networking patent', 'network expert consultant'],
  breadcrumbLabel: 'Networking Expert',
  faqs: [
    {
      q: 'What broad networking expertise does Dr. Lavian provide for patent litigation?',
      a: 'Dr. Lavian provides expert witness services across computer networking domains including LAN/WAN, wireless, Internet protocols, network security, VoIP, streaming, routing, switching, and network management in patent litigation and technical disputes.',
    },
    {
      q: 'Is Dr. Lavian qualified as a networking expert for both technical and litigation purposes?',
      a: 'Yes. Dr. Lavian has 35+ years of networking industry experience (including at Nortel Networks), nearly 20 years of academic research at UC Berkeley, and has served as a testifying expert witness in 70+ patent cases.',
    },
    {
      q: 'What types of networking patent cases has Dr. Lavian handled?',
      a: 'Dr. Lavian has handled patent cases involving network protocols, router and switch architectures, network management systems, packet processing, VoIP implementations, network security mechanisms, and cloud networking technologies for major technology companies.',
    },
    {
      q: 'How many networking-related patents has Dr. Lavian invented?',
      a: 'Dr. Lavian has invented 120+ issued and filed patents spanning network communications, telecommunications systems, active network architectures, programmable forwarding engines, network management, and data center infrastructure technologies.',
    },
    {
      q: 'Why hire a generalist networking expert vs. a specialist for patent cases?',
      a: 'Many patent cases span multiple networking domains — a VoIP patent may involve network security, routing, and QoS. Dr. Lavian\'s expertise across networking disciplines allows him to address cross-domain patent claims. His 120+ patents and Ph.D. from UC Berkeley span the full networking stack.',
    },
    {
      q: 'What companies has Dr. Lavian served as a networking expert witness for?',
      a: 'Dr. Lavian has been retained in networking patent cases involving companies including Google, Apple, Microsoft, Amazon, Intel, Cisco, Qualcomm, AT&T, Verizon, Samsung, and many other major technology companies, providing analysis and testimony across the full range of networking technologies.',
    },
  ],
});

const networkingExpertTitle = "Networking Expert Witness — Dr. Tal Lavian, Ph.D. UC Berkeley";
const networkingExpertDescription = "Networking expert witness — 120+ patents, 70+ cases. Enterprise networking, protocol architecture, network design. Ph.D. UC Berkeley.";

// ─── 13. MESSAGING AND CHAT EXPERT WITNESS ──────────────────────────────
// File: src/pages/communications-expert-witness/messaging-and-chat-expert-witness/index.astro

const messagingChatSchema = buildSchema.expertisePage({
  name: 'Messaging & Chat Expert Witness',
  slug: 'messaging-and-chat-expert-witness',
  description: 'Messaging & chat expert witness for patent litigation. SMS, MMS, instant messaging, XMPP, push notifications. 70+ cases, 120+ patents.',
  serviceType: 'Messaging & Chat Expert Witness',
  keywords: ['messaging expert witness', 'chat expert witness', 'SMS patent litigation', 'instant messaging patent', 'messaging protocol expert', 'push notification patent', 'chat platform expert witness', 'MMS patent expert', 'XMPP expert witness', 'enterprise messaging patent'],
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
    {
      q: 'How does Dr. Lavian qualify as a messaging and chat expert witness?',
      a: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley with expertise in real-time communication protocols. His 120+ patents include innovations in network communications and messaging architectures. He has served as an expert witness in 70+ cases involving communications technologies.',
    },
    {
      q: 'Can Dr. Lavian testify on enterprise collaboration and team messaging patents?',
      a: 'Yes. Dr. Lavian\'s messaging expertise extends to enterprise collaboration platforms, team chat architectures, channel-based messaging systems, file sharing integrations, presence and status protocols, and API-based messaging bots — all common subjects in modern patent litigation.',
    },
    {
      q: 'What is the role of a messaging expert witness in patent litigation?',
      a: 'A messaging expert witness analyzes patent claims involving message routing, delivery protocols, chat session management, notification systems, and messaging platform architectures. Dr. Lavian provides claim construction opinions, infringement analyses, and validity assessments for messaging patents in federal courts and PTAB proceedings.',
    },
  ],
});

const messagingChatTitle = "Messaging & Chat Expert Witness — Dr. Tal Lavian, Ph.D.";
const messagingChatDescription = "Messaging & chat expert witness — 120+ patents, 70+ cases. SMS, MMS, XMPP, push notifications. Ph.D. UC Berkeley. PTAB & ITC.";

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
