export const site = {
  name: "777 Painting & Decorating",
  url: "https://777paintinganddecorating.co.uk",
  phoneDisplay: "07769 387868",
  phoneTel: "+447769387868",
  email: "mk40d@hotmail.com",
  street: "Unit 9, Market Hall",
  locality: "Bedford",
  region: "Bedfordshire",
  postcode: "MK40 1NS",
  country: "United Kingdom",
  countryCode: "GB",
  lat: 52.1374,
  lng: -0.4676,
  category: "Painter",
  hoursLabel: "Open 24 hours, seven days a week",
  rating: 5,
  reviewCount: 3,
  maps: "https://www.google.com/maps/search/?api=1&query=777+Painting+%26+Decorating+Unit+9+Market+Hall+Bedford+MK40+1NS",
  checked: "1 October 2026",
} as const;

export const addressLine = `${site.street}, ${site.locality} ${site.postcode}`;

export const reviews = [
  {
    name: "Wioleta Kozubska",
    stars: 5,
    date: "September 2026",
    text: "Great service and a job well done.",
  },
  {
    name: "Wiktoria Kozubska",
    stars: 5,
    date: "September 2026",
    text: "Damian did a fantastic job painting the stairs and putting up wallpaper. He was efficient, polite, and left the place spotless.",
  },
  {
    name: "Małgorzata Arrami",
    stars: 5,
    date: "September 2026",
    text: "",
  },
] as const;

export const services = [
  {
    slug: "interior-painting",
    nav: "Interior painting",
    title: "Interior painting in Bedford",
    description:
      "Room painting in Bedford. Walls, ceilings and woodwork, with floors covered and a tidy finish. Call 07769 387868.",
    lede: "Walls, ceilings and woodwork inside homes in Bedford.",
    paragraphs: [
      "A fresh coat inside is the job we are asked for most. It might be one room, or the whole house. We paint walls, ceilings, doors, skirting and window boards.",
      "The photos on our Google profile show how we work. Floors and furniture are covered. Cutting-in is done by hand around the edges. A bedroom that was patchy pink was painted a soft green. A bathroom went from a hard red to a warm off-white.",
      "Tell us which rooms, and whether anyone will be living there while we paint. We will say what needs filling or sanding before the colour goes on.",
    ],
    includes: [
      "Walls and ceilings",
      "Doors, skirting and window boards",
      "Single rooms or a full house",
      "Dust sheets down before we start",
    ],
  },
  {
    slug: "exterior-painting",
    nav: "Exterior painting",
    title: "Exterior painting in Bedford",
    description:
      "Outside painting in Bedford. Timber gates, fences and the outside of a building, prepared and coated to last. Call 07769 387868.",
    lede: "Outside wood and walls, so the building stands up to the weather.",
    paragraphs: [
      "Bedford rain and sun wear paint down. A gate or the front of a house starts to look tired long before the timber is rotten. A proper coat protects it.",
      "One job on our Google profile is a side gate. The old boards were grey and open to the weather. They were coated a deep red, with the brick pier left as it was.",
      "Outside work depends on dry weather. We will tell you if a surface needs scraping and sanding first. Bare, flaky wood will not hold a new coat.",
    ],
    includes: [
      "Timber gates and fences",
      "House exteriors",
      "Preparation before the new coat",
      "Colours chosen to suit the building",
    ],
  },
  {
    slug: "wallpapering",
    nav: "Wallpapering",
    title: "Wallpapering in Bedford",
    description:
      "Wallpaper hanging in Bedford. A 2026 Google review covers stairs painted and wallpaper put up, with the place left clean.",
    lede: "Wallpaper hung straight, and the room left clean.",
    paragraphs: [
      "Wallpaper shows every bump in the wall and every wonky edge. The lining and the paste matter as much as the paper you pick.",
      "A Google review from September 2026 says Damian painted the stairs and put up wallpaper, then left the place spotless. That is the standard we work to.",
      "If the old paper is loose, it comes off first. If the plaster is rough, it needs making good before new paper goes on. We will say so before we start, not halfway through.",
    ],
    includes: [
      "Feature walls and full rooms",
      "Stairs and landings",
      "Old paper removed when it needs to come off",
      "A clean finish when we leave",
    ],
  },
  {
    slug: "commercial-painting",
    nav: "Commercial painting",
    title: "Commercial painting in Bedford",
    description:
      "Shop and office painting in Bedford. We paint commercial premises as well as homes. Call 07769 387868 to talk about the job.",
    lede: "Shops and offices, painted so you can get back to work.",
    paragraphs: [
      "Our Google description covers commercial premises as well as homes. A shop, a cafe or a small office can be painted without turning the place upside down for weeks.",
      "The photos show a shop wall in a deep green. One picture is mid-job, with sheets, a tray and steps still out. The next shows the same wall finished, with the shop dressed again.",
      "Tell us when you can close, or whether we need to work around customers. Late afternoon and evening work is something we already offer.",
    ],
    includes: [
      "Shops and showrooms",
      "Offices and back rooms",
      "Work timed around opening hours",
      "Plain, durable colours",
    ],
  },
  {
    slug: "stairs-and-woodwork",
    nav: "Stairs and woodwork",
    title: "Stairs and woodwork painting in Bedford",
    description:
      "Stair painting and woodwork in Bedford. A customer named Damian for painting the stairs and leaving the house clean.",
    lede: "Stairs, spindles, doors and the wood that frames a room.",
    paragraphs: [
      "Stairs take knocks every day. Gloss and satin show brush marks if the prep is rushed. We sand, fill and then paint so the finish is smooth.",
      "Wiktoria Kozubska wrote on Google that Damian painted the stairs and hung wallpaper, and was efficient and polite. The house was left spotless.",
      "Woodwork is often painted with the walls, but it can be a job on its own. Doors, banisters and window sills are the pieces people notice.",
    ],
    includes: [
      "Stair treads, risers and spindles",
      "Banisters and handrails",
      "Doors and frames",
      "Skirting and window boards",
    ],
  },
  {
    slug: "colour-advice",
    nav: "Colour advice",
    title: "Paint colour advice in Bedford",
    description:
      "Help choosing paint colours in Bedford. We test shades in the room, because morning light and evening light are not the same.",
    lede: "Test the colour in the room. Light changes it.",
    paragraphs: [
      "A colour chip in the shop is not the colour on your wall. North light, a lamp, and a glossy tile all shift it.",
      "In September 2026 we posted about a kitchen refresh. Two test patches went on a yellow wall above the tiles. A soft warm grey can look right in the morning and different under evening spotlights.",
      "We will put samples on the wall you actually live with, then you can choose. You do not have to guess from a card.",
    ],
    includes: [
      "Sample patches on the real wall",
      "Advice for kitchens and small rooms",
      "Help matching existing woodwork",
      "No pressure to pick on the spot",
    ],
  },
] as const;

export const areas = [
  {
    slug: "bedford",
    name: "Bedford",
    description:
      "Painters in Bedford. 777 Painting & Decorating is based at Unit 9, Market Hall, MK40 1NS. Homes, shops and offices. Call 07769 387868.",
    paragraphs: [
      "We are based in Bedford, at Unit 9, Market Hall, MK40 1NS. The town centre has older shops and flats. Further out you get Victorian terraces, 1930s houses, and newer homes near the river and the station.",
      "That mix changes the work. An old terrace often needs more filling. A newer flat may only need a clean coat on sound walls. We look at the surface before we name a price.",
      "Google lists us as covering Bedford and nearby areas. If your street is in the town, call and we will tell you straight.",
    ],
  },
  {
    slug: "kempston",
    name: "Kempston",
    description:
      "Painters and decorators covering Kempston, on the south-west side of Bedford. Interior, exterior and wallpaper. Call 07769 387868.",
    paragraphs: [
      "Kempston sits on the south-west edge of Bedford, a short hop from the town centre. The streets mix older brick houses with later estates.",
      "Outside wood on those houses takes the weather. Gates, fascia boards and garden fences are common jobs, along with full interior refreshes.",
      "We cover Kempston from our base in central Bedford. Tell us the road and what you want painted.",
    ],
  },
  {
    slug: "biddenham",
    name: "Biddenham",
    description:
      "Painting and decorating in Biddenham, west of Bedford. Houses, woodwork and garden timber. Call 777 Painting & Decorating on 07769 387868.",
    paragraphs: [
      "Biddenham is a village just west of Bedford. You will find older houses along the lanes and newer homes tucked in between them.",
      "Older timber windows and garden fences need a coat that is scraped back properly. A thin coat over flakes will peel again.",
      "We work in Biddenham as part of the Bedford area on our Google listing. Call with the address and a rough idea of the rooms.",
    ],
  },
  {
    slug: "bromham",
    name: "Bromham",
    description:
      "Painters covering Bromham, north-west of Bedford. Careful prep on older brick and timber homes. Call 07769 387868.",
    paragraphs: [
      "Bromham is north-west of Bedford, by the river. Many homes are older brick, with timber windows and garden walls.",
      "Paint on those houses fails at the edges first: sills, gates and the sunny side of a wall. We deal with that prep before the new colour.",
      "If you are in Bromham and want a quote, ring 07769 387868. We cover the village with the rest of the Bedford area.",
    ],
  },
  {
    slug: "clapham",
    name: "Clapham",
    description:
      "Painting services in Clapham, north of Bedford. Rooms, woodwork and outside work. Call 777 Painting & Decorating on 07769 387868.",
    paragraphs: [
      "Clapham village is north of Bedford. There is older housing near the green and newer streets around it.",
      "Jobs here are the usual mix: a bedroom and landing, a stair refresh, or the outside of a house before winter.",
      "We are painters for Bedford and nearby areas. Clapham is close enough that we can come and look without a fuss.",
    ],
  },
  {
    slug: "goldington",
    name: "Goldington",
    description:
      "House painters in Goldington, east Bedford. Walls, kitchens and full room refreshes. Call 07769 387868.",
    paragraphs: [
      "Goldington is on the east side of Bedford. Most of the housing is post-war and later family homes, with some flats.",
      "Kitchens, halls and bedrooms are the rooms people repaint first. A kitchen in particular needs the colour tested in that light. Morning and evening do not match.",
      "Call us if the house is in Goldington. We will ask what is being painted and when you need it done.",
    ],
  },
  {
    slug: "putnoe",
    name: "Putnoe",
    description:
      "Painters in Putnoe, north-east Bedford. Room-by-room painting while you stay in the house. Call 07769 387868.",
    paragraphs: [
      "Putnoe is a residential part of north-east Bedford. The roads are mostly houses, so a lot of the work is indoors.",
      "We can paint room by room if you are living there. Sheets go down, and we keep the mess in the room we are in.",
      "Putnoe is inside the Bedford area we cover. Ring or send the form with the room list.",
    ],
  },
  {
    slug: "elstow",
    name: "Elstow",
    description:
      "Painting and decorating in Elstow, south of Bedford. Cottages and newer homes. Call 07769 387868.",
    paragraphs: [
      "Elstow is south of Bedford, a village with older cottages and newer houses around them.",
      "Cottage walls are rarely flat. We fill and sand before paint, or the new coat will show every dent.",
      "We cover Elstow with the other places near Bedford. Tell us if it is inside, outside, or both.",
    ],
  },
  {
    slug: "wootton",
    name: "Wootton",
    description:
      "Painters covering Wootton, south-west of Bedford. Houses, fences and gates. Call 777 Painting & Decorating on 07769 387868.",
    paragraphs: [
      "Wootton is a village south-west of Bedford. Houses run from older brick to newer estates.",
      "Garden gates and fences are a steady job in villages like this. Our own photos include a timber gate taken from bare grey boards to a deep red coat.",
      "If you are in Wootton, we can come out from Bedford. Call 07769 387868.",
    ],
  },
  {
    slug: "wixams",
    name: "Wixams",
    description:
      "Painters in Wixams, the newer settlement south of Bedford. First and second coats on new homes. Call 07769 387868.",
    paragraphs: [
      "Wixams is the newer settlement south of Bedford. A lot of the houses are still on an early coat of paint.",
      "New plaster should be sealed properly before a strong colour. If we skip that, the paint flashes and looks patchy. We will say if a room is not ready.",
      "We cover Wixams as part of the Bedford area. Send the plot or the street and what you want changed.",
    ],
  },
  {
    slug: "great-denham",
    name: "Great Denham",
    description:
      "Painting services in Great Denham, west of Bedford. New homes, inside and out. Call 07769 387868.",
    paragraphs: [
      "Great Denham is west of Bedford, towards the country park. Most homes there are newer.",
      "Inside, the work is often a change of colour once you have lived with the builder’s paint. Outside, timber still needs protection even on a new house.",
      "We paint in Great Denham and the rest of the nearby Bedford area. Ask us for a price before you buy the paint yourself.",
    ],
  },
  {
    slug: "shortstown",
    name: "Shortstown",
    description:
      "Painters in Shortstown, south-east of Bedford. Older houses and newer streets. Call 07769 387868.",
    paragraphs: [
      "Shortstown is south-east of Bedford, near the old Cardington sheds. The housing is a mix of older homes and newer streets.",
      "Older rooms often need more than paint. Cracks get filled. Stains get sealed if they will show through. We would rather say that at the start.",
      "Shortstown is close to Bedford and inside the area we cover. Call and describe the job.",
    ],
  },
  {
    slug: "oakley",
    name: "Oakley",
    description:
      "Painting and decorating in Oakley, north-west of Bedford. Small jobs and full houses. Call 07769 387868.",
    paragraphs: [
      "Oakley is a village north-west of Bedford. Homes are smaller and older than the new estates, with some newer houses mixed in.",
      "A small job is still worth doing properly. One room, a stair, or a front door. We treat those the same as a full house.",
      "We cover Oakley from Bedford. Phone 07769 387868 or use the form.",
    ],
  },
  {
    slug: "cardington",
    name: "Cardington",
    description:
      "Painters covering Cardington, east of Bedford. Older houses that need filling and sanding first. Call 07769 387868.",
    paragraphs: [
      "Cardington is the village east of Shortstown, known for the airship sheds. Many properties are older.",
      "Older plaster and old gloss need time. Sanding and filling are the job, not an extra. The colour only looks even if that work is done.",
      "Cardington is part of the nearby area on our Google listing. Tell us the address and we will confirm we can take it.",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Where are you based?",
    a: "Unit 9, Market Hall, Bedford, MK40 1NS. The phone is 07769 387868. Email is mk40d@hotmail.com.",
  },
  {
    q: "Which areas do you cover?",
    a: "Google lists Bedford and nearby areas. That includes Kempston, Biddenham, Bromham, Clapham, Goldington, Putnoe, Elstow, Wootton, Wixams, Great Denham, Shortstown, Oakley and Cardington. If your town is not on the list, ask.",
  },
  {
    q: "Do you hang wallpaper?",
    a: "Yes. A Google review from September 2026 describes stairs painted and wallpaper put up, with the place left clean.",
  },
  {
    q: "Do you paint shops as well as houses?",
    a: "Yes. The firm paints homes and commercial premises. Photos on the Google profile include a shop wall painted deep green.",
  },
  {
    q: "When can I call?",
    a: "The Google listing says open 24 hours, seven days. You can call 07769 387868 at any time. Late afternoon and evening visits are also offered.",
  },
  {
    q: "How do I get a price?",
    a: "Call, email, or send the form. Say which rooms or which outside areas, and we will come back with a price. In October 2026 the Google profile offers 10% off projects booked that month.",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export function serviceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function areaBySlug(slug: string) {
  return areas.find((item) => item.slug === slug);
}
