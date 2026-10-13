const DEV = {
  SWITCH: "Nintendo Switch",
  OLED: "Nintendo Switch OLED Model",
  LITE: "Nintendo Switch Lite",
  SW2: "Nintendo Switch 2",
  DECK_LCD: "Steam Deck LCD",
  DECK_OLED: "Steam Deck OLED",
  ALLY: "ASUS ROG Ally",
  ALLY_X: "ASUS ROG Ally X",
  LEGION: "Lenovo Legion Go",
  CLAW: "MSI Claw (A1M)"
};

const SWITCH_FAMILY = [DEV.SWITCH, DEV.OLED, DEV.LITE];
const STEAM_DECKS = [DEV.DECK_LCD, DEV.DECK_OLED];
const WINDOWS_HANDHELDS = [DEV.ALLY, DEV.ALLY_X, DEV.LEGION, DEV.CLAW];

const SW2_NOTE = "Nintendo Switch 2 plays many Switch games through backward compatibility, but not all. Confirm this title on Nintendo's official compatibility page.";

const products = [
  {
    id: 1,
    image: "https://webobjects2.cdw.com/is/image/CDW/5806144?$product-detail$",
    name: "Nintendo Switch", category: "consoles", brand: "Nintendo", price: 17990,
    description: "Hybrid console with a 6.2-inch LCD screen. Play handheld, tabletop, or docked on a TV.",
    compatibility: ["Nintendo Switch game library (cartridges and eShop)"],
    compatibilityNote: "Plays Nintendo Switch games. Same game library as the OLED Model. Includes a dock for TV play.",
    platform: "Nintendo Switch"
  },
  {
    id: 2,
    image: "https://webobjects2.cdw.com/is/image/CDW/6890294b?$product-detail$",
    name: "Nintendo Switch OLED Model", category: "consoles", brand: "Nintendo", price: 21990,
    description: "Hybrid console with a 7-inch OLED screen, wider adjustable stand, and a dock with a LAN port.",
    compatibility: ["Nintendo Switch game library (cartridges and eShop)"],
    compatibilityNote: "Shares the same game library as the standard Nintendo Switch.",
    platform: "Nintendo Switch"
  },
  {
    id: 3,
    image: "https://electroworld.abenson.com/media/catalog/product/1/7/171546.jpg",
    name: "Nintendo Switch Lite", category: "consoles", brand: "Nintendo", price: 11990,
    description: "Compact, handheld-only Switch with a 5.5-inch screen and built-in controls.",
    compatibility: ["Nintendo Switch games that support handheld mode"],
    compatibilityNote: "Cannot connect to a TV. Games that need detachable Joy-Con features or TV/tabletop mode may need extra controllers or may not be fully playable.",
    platform: "Nintendo Switch"
  },
  {
    id: 4,
    image: "https://webobjects2.cdw.com/is/image/CDW/8570352d?$product-detail$",
    name: "Nintendo Switch 2", category: "consoles", brand: "Nintendo", price: 28990,
    description: "Next-generation Nintendo hybrid console with a larger 7.9-inch 1080p display and a dock for TV play.",
    compatibility: ["Nintendo Switch 2 games", "Many Nintendo Switch games (backward compatible)"],
    compatibilityNote: "Not every Nintendo Switch game is compatible. Check Nintendo's official compatibility information for each title.",
    platform: "Nintendo Switch 2"
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/51hwYG0PdmL.jpg",
    name: "Steam Deck LCD", category: "consoles", brand: "Valve", price: 29990,
    description: "Valve's original handheld PC with a 7-inch LCD screen, running SteamOS (Linux).",
    compatibility: ["Steam library (SteamOS / Proton)"],
    compatibilityNote: "Runs Steam games through SteamOS. Many games are rated Verified or Playable, but some (for example titles with unsupported anti-cheat) will not run. Windows-only launchers need workarounds. Valve has stopped selling this model, so availability varies.",
    platform: "SteamOS"
  },
  {
    id: 6,
    image: "https://gamextreme.ph/cdn/shop/files/2_edcfef66-3d72-4165-b781-0cceccb168b5.png?crop=center&height=740&v=1755158170&width=840",
    name: "Steam Deck OLED", category: "consoles", brand: "Valve", price: 44990,
    description: "Upgraded Steam Deck with a 7.4-inch HDR OLED screen, better battery life, and faster Wi-Fi.",
    compatibility: ["Steam library (SteamOS / Proton)"],
    compatibilityNote: "Same game compatibility as the Steam Deck LCD. Check each game's Steam Deck rating (Verified, Playable, Unsupported) on Steam.",
    platform: "SteamOS"
  },
  {
    id: 7,
    image: "https://images-na.ssl-images-amazon.com/images/I/61Ub5N8jQlL.jpg",
    name: "ASUS ROG Ally", category: "consoles", brand: "ASUS", price: 36990,
    description: "Windows 11 handheld with a 7-inch 1080p 120 Hz display and AMD Ryzen Z1 series processor.",
    compatibility: ["Windows PC games (Steam, Epic, GOG, Xbox app)"],
    compatibilityNote: "Runs Windows games and launchers. Some games or subscriptions (such as PC Game Pass) need separate purchases.",
    platform: "Windows 11"
  },
  {
    id: 8,
    image: "https://gamextreme.ph/cdn/shop/files/h732_22_1600x_4b84a93c-1fc1-4316-8671-48a3ecb9508f.webp?crop=center&height=740&v=1763514764&width=840",
    name: "ASUS ROG Ally X", category: "consoles", brand: "ASUS", price: 52990,
    description: "Updated ROG Ally with more RAM, a much larger battery, and more storage.",
    compatibility: ["Windows PC games (Steam, Epic, GOG, Xbox app)"],
    compatibilityNote: "Same Windows game compatibility as the ROG Ally, with better sustained performance because of the larger battery and RAM.",
    platform: "Windows 11"
  },
  {
    id: 9,
    image: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/09/a-lenovo-legion-go-8-8-2-with-its-two-controllers-on-the-side-with-a-white-background-1.jpg?q=49&fit=contain&w=750&h=422&dpr=2",
    name: "Lenovo Legion Go", category: "consoles", brand: "Lenovo", price: 42990,
    description: "Windows 11 handheld with an 8.8-inch QHD+ 144 Hz display and detachable controllers.",
    compatibility: ["Windows PC games (Steam, Epic, GOG, Xbox app)"],
    compatibilityNote: "Runs Windows games and launchers. The large screen and detachable controllers support FPS-style play.",
    platform: "Windows 11"
  },
  {
    id: 10,
    image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/xcvxcvxc_59889108-95e1-483e-ba4f-88bdc1ad5334.jpg?v=1711164078&width=1200",
    name: "MSI Claw (A1M)", category: "consoles", brand: "MSI", price: 39990,
    description: "Windows 11 handheld with a 7-inch 1080p 120 Hz display and Intel Core Ultra processor.",
    compatibility: ["Windows PC games (Steam, Epic, GOG, Xbox app)"],
    compatibilityNote: "Runs Windows games and launchers. This entry refers to the original MSI Claw (A1M), not later Claw models.",
    platform: "Windows 11"
  },
  {
    id: 11,
    image: "https://www.amadorvalleytoday.org/wp-content/uploads/2023/05/840_560.jpeg",
    name: "The Legend of Zelda: Tears of the Kingdom", category: "games", brand: "Nintendo", price: 3290,
    genre: "Action-Adventure",
    description: "Open-world adventure across Hyrule's land, sky and depths.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Nintendo Switch game that supports handheld mode, so it works on the Lite. " + SW2_NOTE
  },
  {
    id: 12,
    image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453",
    name: "Mario Kart 8 Deluxe", category: "games", brand: "Nintendo", price: 2990,
    genre: "Racing",
    description: "Kart racing with 48 courses, items, and local and online multiplayer.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Playable in handheld mode on the Lite. Local multiplayer needs extra controllers. Nintendo Switch Online membership is required for online play. " + SW2_NOTE
  },
  {
    id: 13,
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
    name: "Super Mario Odyssey", category: "games", brand: "Nintendo", price: 2990,
    genre: "Platformer",
    description: "3D platformer where Mario travels between kingdoms using the sentient hat Cappy.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Supports handheld mode, so it works on the Lite. " + SW2_NOTE
  },
  {
    id: 14,
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
    name: "Super Smash Bros. Ultimate", category: "games", brand: "Nintendo", price: 3290,
    genre: "Fighting",
    description: "Crossover platform fighter featuring characters from many franchises.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Playable on the Lite, but multiplayer works best with extra controllers. Online play needs a Nintendo Switch Online membership. " + SW2_NOTE
  },
  {
    id: 15,
    image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000053966/849c234de8df7265201d26d9d72f88eed3f32438d3dca12fc135beb4c3befc85",
    name: "Pokémon Scarlet", category: "games", brand: "Nintendo / The Pokémon Company", price: 2990,
    genre: "RPG",
    description: "Open-world Pokémon adventure set in the Paldea region.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Nintendo Switch game that supports handheld mode. Some online features need a Nintendo Switch Online membership. " + SW2_NOTE
  },
  {
    id: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMo-VZgQltYmFVX3265E1UjVpCON4hzDpkHTgt8Wm44VZQlXHKkl1v24&s=10",
    name: "Animal Crossing: New Horizons", category: "games", brand: "Nintendo", price: 2990,
    genre: "Simulation",
    description: "Life simulation where you build a community on a deserted island.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Supports handheld mode, so it works on the Lite. " + SW2_NOTE
  },
  {
    id: 17,
    image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MetroidDread.jpg",
    name: "Metroid Dread", category: "games", brand: "Nintendo", price: 2490,
    genre: "Action / Metroidvania",
    description: "2D side-scrolling Metroid adventure featuring Samus and the E.M.M.I. robots.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2],
    platform: "Nintendo Switch",
    compatibilityNote: "Supports handheld mode, so it works on the Lite. " + SW2_NOTE
  },
  {
    id: 18,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    name: "Hades", category: "games", brand: "Supergiant Games", price: 1190,
    genre: "Indie / Roguelike",
    description: "Action roguelike where you fight out of the Underworld as Zagreus.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "Nintendo Switch / PC (Steam, Epic)",
    compatibilityNote: "Switch version for the Switch family. On PC it is available through Steam and other stores and was rated Steam Deck Verified. Windows handhelds run the PC version. Switch 2 compatibility was not verified for this catalog."
  },
  {
    id: 19,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    name: "Stardew Valley", category: "games", brand: "ConcernedApe", price: 690,
    genre: "Indie / Farming Sim",
    description: "Farming and life simulation where you restore a run-down family farm.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "Nintendo Switch / PC (Steam)",
    compatibilityNote: "Switch version for the Switch family. PC version through Steam for Steam Deck (SteamOS) and Windows handhelds. Switch 2 compatibility was not verified for this catalog."
  },
  {
    id: 20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    name: "Hollow Knight", category: "games", brand: "Team Cherry", price: 350,
    genre: "Indie / Metroidvania",
    description: "Hand-drawn action-adventure exploring the insect kingdom of Hallownest.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "Nintendo Switch / PC (Steam)",
    compatibilityNote: "Switch version for the Switch family. PC version through Steam for Steam Deck and Windows handhelds. Switch 2 compatibility was not verified for this catalog."
  },
  {
    id: 21,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    name: "Celeste", category: "games", brand: "Maddy Makes Games", price: 450,
    genre: "Indie / Platformer",
    description: "Precision platformer about climbing Celeste Mountain.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "Nintendo Switch / PC (Steam)",
    compatibilityNote: "Switch version for the Switch family. PC version through Steam for Steam Deck and Windows handhelds. Switch 2 compatibility was not verified for this catalog."
  },
  {
    id: 22,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2379780/header.jpg",
    name: "Balatro", category: "games", brand: "LocalThunk / Playstack", price: 520,
    genre: "Indie / Card Roguelike",
    description: "Poker-inspired roguelike deck builder with scoring jokers and modifiers.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "Nintendo Switch / PC (Steam)",
    compatibilityNote: "Switch version for the Switch family. PC version through Steam for Steam Deck and Windows handhelds. Switch 2 compatibility was not verified for this catalog."
  },
  {
    id: 23,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    name: "Elden Ring", category: "games", brand: "FromSoftware / Bandai Namco", price: 2495,
    genre: "Action RPG",
    description: "Open-world action RPG created by FromSoftware with world-building by George R. R. Martin.",
    compatibility: [...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "PC (Steam)",
    compatibilityNote: "Not available on Nintendo Switch. Reported as Steam Deck Verified at launch; ratings can change, so check the Steam page. Windows handhelds run the PC version. Demanding game: expect lower settings and frame rates on handhelds."
  },
  {
    id: 24,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
    name: "Portal 2", category: "games", brand: "Valve", price: 330,
    genre: "Puzzle",
    description: "First-person puzzle game using portals and physics, with a co-op campaign.",
    compatibility: [...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    platform: "PC (Steam)",
    compatibilityNote: "Valve game sold on Steam. Runs on Steam Deck (SteamOS) and Windows handhelds. Not listed for Nintendo Switch in this catalog."
  },
  {
    id: 25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    name: "Forza Horizon 5", category: "games", brand: "Playground Games / Xbox Game Studios", price: 2290,
    genre: "Racing",
    description: "Open-world racing set in Mexico with hundreds of cars.",
    compatibility: [...WINDOWS_HANDHELDS],
    platform: "PC (Steam / Microsoft Store)",
    compatibilityNote: "Listed for Windows handhelds only. Steam Deck status was not confirmed for this catalog, so check Valve's Steam Deck rating before buying. Demanding game that needs a lot of storage. Some features need an Xbox / Microsoft account."
  },
  {
    id: 26,
    image: "https://riazcomputer.com/wp-content/uploads/2024/07/SANDISK-ULTRA-256GB.jpg",
    name: "microSDXC Memory Card 256GB (UHS-I)", category: "accessories", brand: "SanDisk", price: 1890,
    description: "Extra storage for games and saves on handhelds with a microSD slot.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Standard microSD cards do NOT work in the Nintendo Switch 2, which needs microSD Express cards. Check each device's maximum supported card capacity."
  },
  {
    id: 27,
    image: "https://assets-prd.ignimgs.com/2022/02/25/steam-deck-dock-1-1645821128746.jpg",
    name: "Steam Deck Dock", category: "accessories", brand: "Valve", price: 5290,
    description: "Official dock with HDMI, DisplayPort, USB ports and Ethernet for connecting the Steam Deck to a TV or monitor.",
    compatibility: [...STEAM_DECKS],
    limitations: "Designed for the Steam Deck LCD and OLED only. Not for Nintendo or Windows handhelds."
  },
  {
    id: 28,
    image: "https://media.cnn.com/api/v1/images/stellar/prod/210714105155-anker-nano-ii-65w.jpg?q=x_0,y_0,h_903,w_1604,c_fill/h_720,w_1280",
    name: "Nano II 65W GaN USB-C Charger", category: "accessories", brand: "Anker", price: 2290,
    description: "Compact USB-C Power Delivery wall charger for handhelds and other devices.",
    compatibility: [...SWITCH_FAMILY, DEV.SW2, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Requires a USB-C cable that supports the wattage. Charging speed depends on each device: lower-wattage chargers charge Windows handhelds slowly or not at all while gaming."
  },
  {
    id: 29,
    image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/1_83b82bb9-d5ab-4a03-b72b-4684135702a2.jpg?v=1694223098",
    name: "ROG Ally Travel Case", category: "accessories", brand: "ASUS", price: 1990,
    description: "Hard-shell case designed to protect the ROG Ally and its accessories during travel.",
    compatibility: [DEV.ALLY],
    limitations: "Made for the original ROG Ally. Fit for the ROG Ally X was not confirmed, so check ASUS before buying for that model."
  },
  {
    id: 30,
    image: "https://www.spigen.com/cdn/shop/products/detail_web_steamdeck_ez_fit_04.jpg?v=1699289247&width=1946",
    name: "Tempered Glass Screen Protector for Steam Deck LCD", category: "accessories", brand: "Spigen", price: 790,
    description: "Scratch-resistant tempered glass protector cut for the Steam Deck LCD screen.",
    compatibility: [DEV.DECK_LCD],
    limitations: "The Steam Deck OLED has a larger 7.4-inch screen, so this LCD-sized protector is not intended for it. Always check that the pack lists your exact model."
  },
  {
    id: 31,
    image: "https://eshopperreviews.com/wp-content/uploads/2025/06/joy-con-2-controllers.jpg?w=1024",
    name: "Joy-Con (L/R) Pair", category: "controllers", brand: "Nintendo", price: 4990,
    connectionType: "Proprietary wireless (Bluetooth-based) / attaches to console",
    connectionMode: "Attaches to Switch / OLED handheld; pairs wirelessly with Switch Lite",
    description: "Detachable left and right controllers with motion controls and HD Rumble.",
    compatibility: [DEV.SWITCH, DEV.OLED, DEV.LITE],
    limitations: "Slide onto the Switch and OLED Model. The Switch Lite cannot attach them but can pair them wirelessly. Not intended for Steam Deck or Windows handhelds."
  },
  {
    id: 32,
    image: "https://gameline.ph/cdn/shop/files/5_4f1e6394-0be1-4ec5-a516-f41b525973cc_700x700.png?v=1750903166",
    name: "Switch Pro Controller", category: "controllers", brand: "Nintendo", price: 4690,
    connectionType: "Bluetooth / USB-C wired",
    connectionMode: "Wireless, works with handheld mode; best for docked or tabletop play",
    description: "Full-size controller with motion controls, HD Rumble and a long battery life.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Works natively with the Switch family. On Steam Deck and Windows handhelds it connects through Bluetooth or USB and may need Steam Input configuration for full features such as motion controls. Switch 2 support was not verified for this catalog."
  },
  {
    id: 33,
    image: "https://assets.kogan.com/images/mightyape/MPE-40822104/5-225c2c6098-329189048.jpeg?auto=webp&bg-color=fff&canvas=1200%2C800&dpr=1&enable=upscale&fit=bounds&height=800&quality=90&width=1200",
    name: "Ultimate Bluetooth Controller", category: "controllers", brand: "8BitDo", price: 3290,
    connectionType: "Bluetooth / USB-C wired",
    connectionMode: "Wireless, can be used with the handheld or when docked or connected to a display",
    description: "Hall-effect joysticks, remappable back buttons, and a charging dock.",
    compatibility: [...SWITCH_FAMILY, ...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Needs to be put in the right mode (Switch or PC) when pairing. Features such as motion controls differ by platform. Switch 2 support was not verified for this catalog."
  },
  {
    id: 34,
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Xbox-Wireless-Controller_Hero-0_Carbon-Black_3000x1682:VP1-539x440",
    name: "Xbox Wireless Controller", category: "controllers", brand: "Microsoft", price: 3490,
    connectionType: "Bluetooth / Xbox Wireless / USB-C wired",
    connectionMode: "Wireless Bluetooth, usable with handheld or docked PC handheld",
    description: "Familiar Xbox gamepad with textured grips and a hybrid D-pad.",
    compatibility: [...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Works well with Steam Deck and Windows handhelds. Not natively supported by the Nintendo Switch family without third-party adapters, so it is not listed for them."
  },
  {
    id: 35,
    image: "https://gamextreme.ph/cdn/shop/products/dualsense-5-controller-1.jpg?crop=center&height=740&v=1770272397&width=840",
    name: "DualSense Wireless Controller", category: "controllers", brand: "Sony", price: 3690,
    connectionType: "Bluetooth / USB-C wired",
    connectionMode: "Wireless Bluetooth, usable with handheld or docked PC handheld",
    description: "PlayStation 5 controller with adaptive triggers, haptic feedback and a built-in microphone.",
    compatibility: [...STEAM_DECKS, ...WINDOWS_HANDHELDS],
    limitations: "Adaptive triggers and haptics only work in games and drivers that support them on PC. Not natively supported by the Nintendo Switch family, so it is not listed for them."
  },
  {
    id: 36,
    image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/split-pad-pro/114301-hori-split-pad-pro-black-front-detached-1200x675",
    name: "Split Pad Pro", category: "controllers", brand: "HORI", price: 3990,
    connectionType: "Direct attach to console (no wireless pairing)",
    connectionMode: "Handheld mode only: attaches directly to the handheld",
    description: "Ergonomic grips that attach to the sides of the Switch for handheld play.",
    compatibility: [DEV.SWITCH, DEV.OLED],
    limitations: "Handheld mode only. It cannot be used when the Switch is docked and does not fit the Switch Lite. Lacks some Joy-Con features such as HD Rumble and IR camera."
  }
];

let currentFilter = "all";
let currentSearch = "";
let currentSort = "default";

const FILTER_MAP = {
  "all": ["consoles", "games", "accessories", "controllers"],
  "consoles": ["consoles"],
  "games": ["games"],
  "accessories-controllers": ["accessories", "controllers"]
};

const CATEGORY_LABELS = {
  consoles: "Handheld Console",
  games: "Console Game",
  accessories: "Accessory",
  controllers: "Controller"
};

const CATEGORY_COLORS = {
  consoles: "#e5e5e5",
  games: "#f0abfc",
  accessories: "#fcd34d",
  controllers: "#6ee7b7"
};

const pesoFormatter = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

function formatPrice(value) {
  return Number.isFinite(value) ? pesoFormatter.format(value) : "Price unavailable";
}

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function makePlaceholder(product) {
  const color = CATEGORY_COLORS[product.category] || "#8b5cf6";
  const label = CATEGORY_LABELS[product.category] || "Product";
  const title = product.name.length > 34 ? product.name.slice(0, 33) + "…" : product.name;
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#171717"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>' +
    '<rect width="600" height="360" fill="url(#g)"/>' +
    '<rect x="20" y="20" width="560" height="320" rx="18" fill="none" stroke="' + color + '" stroke-width="2" stroke-opacity="0.35"/>' +
    '<text x="300" y="165" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#fafafa">' + escapeHTML(title) + '</text>' +
    '<text x="300" y="215" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="' + color + '">' + escapeHTML(label) + '</text>' +
    '</svg>';
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function createCardHTML(product, index, animate) {
  const image = product.image || makePlaceholder(product);
  const fallback = makePlaceholder(product);

  const categoryLabel = CATEGORY_LABELS[product.category] || "Product";
  const brand = product.brand ? '<p class="card-brand">' + escapeHTML(product.brand) + '</p>' : "";
  const description = product.description ? '<p class="card-desc">' + escapeHTML(product.description) + '</p>' : "";

  const details = [];
  if (product.genre) details.push('<li><strong>Genre:</strong> ' + escapeHTML(product.genre) + '</li>');
  if (product.platform) details.push('<li><strong>Platform:</strong> ' + escapeHTML(product.platform) + '</li>');
  if (product.connectionType) details.push('<li><strong>Connection:</strong> ' + escapeHTML(product.connectionType) + '</li>');
  if (product.connectionMode) details.push('<li><strong>Mode:</strong> ' + escapeHTML(product.connectionMode) + '</li>');
  if (Array.isArray(product.compatibility) && product.compatibility.length > 0) {
    const label = product.category === "consoles" ? "Plays" : "Compatible with";
    details.push('<li><strong>' + label + ':</strong> ' + product.compatibility.map(escapeHTML).join(", ") + '</li>');
  }
  if (product.compatibilityNote) details.push('<li>' + escapeHTML(product.compatibilityNote) + '</li>');
  if (product.limitations) details.push('<li class="limit"><strong>Limitations:</strong> ' + escapeHTML(product.limitations) + '</li>');

  return (
    '<article class="card' + (animate ? ' reveal' : '') + '" style="--i:' + ((index || 0) % 4) + '" data-id="' + product.id + '">' +
      '<div class="card-media"><img class="card-img" src="' + image + '" alt="' + escapeHTML(product.name + " - " + categoryLabel + (product.image ? "" : " placeholder image")) + '" loading="lazy" referrerpolicy="no-referrer" ' +
        'onerror="this.onerror=null;this.src=\'' + fallback.replace(/'/g, "%27") + '\'"></div>' +
      '<span class="badge ' + escapeHTML(product.category) + '">' + escapeHTML(categoryLabel) + '</span>' +
      '<h3>' + escapeHTML(product.name) + '</h3>' +
      brand +
      description +
      '<ul class="meta">' + details.join("") + '</ul>' +
      '<div class="card-footer">' +
        '<span class="price">' + formatPrice(product.price) + '<small>Estimated price</small></span>' +
      '</div>' +
    '</article>'
  );
}

const MIN_SEARCH_LENGTH = 3;

const CATEGORY_SEARCH_TERMS = {
  consoles: ["console", "consoles", "handheld"],
  games: ["game", "games"],
  accessories: ["accessory", "accessories"],
  controllers: ["controller", "controllers"]
};

function toWords(text) {
  return String(text || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function getSearchWords(product) {
  return toWords([
    product.name,
    product.brand,
    product.category,
    ...(CATEGORY_SEARCH_TERMS[product.category] || []),
    product.genre,
    product.platform,
    ...(Array.isArray(product.tags) ? product.tags : [])
  ].join(" "));
}

function matchesSearch(product, queryWords) {
  const words = getSearchWords(product);
  return queryWords.every(q => words.some(w => w.startsWith(q)));
}

function isSearchActive() {
  return currentSearch.trim().length >= MIN_SEARCH_LENGTH;
}

function getVisibleProducts() {
  const allowedCategories = FILTER_MAP[currentFilter] || FILTER_MAP.all;

  let result = products.filter(p => allowedCategories.includes(p.category));

  if (isSearchActive()) {
    const queryWords = toWords(currentSearch);
    result = result.filter(p => matchesSearch(p, queryWords));
  }

  result = result.slice();
  if (currentSort === "price-asc") result.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") result.sort((a, b) => b.price - a.price);
  else if (currentSort === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function displayProducts(animate = true) {
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("productCount");
  const empty = document.getElementById("emptyState");

  const visible = getVisibleProducts();

  grid.innerHTML = visible.map((p, i) => createCardHTML(p, i, animate)).join("");
  if (animate) observeReveals(grid);

  const typed = currentSearch.trim().length;
  document.getElementById("searchHint").hidden = !(typed > 0 && typed < MIN_SEARCH_LENGTH);

  empty.textContent = isSearchActive()
    ? 'No products found for "' + currentSearch.trim() + '". Try a different keyword or another category.'
    : "No products found.";
  empty.hidden = visible.length !== 0;
  count.textContent = "Showing " + visible.length + " of " + products.length + " products";
}

function filterProducts(filterName) {
  currentFilter = FILTER_MAP[filterName] ? filterName : "all";

  document.querySelectorAll(".filter-btn").forEach(btn => {
    const isActive = btn.dataset.filter === currentFilter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  displayProducts();
}

function setupCatalogControls() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filterProducts(btn.dataset.filter));
  });

  document.getElementById("searchInput").addEventListener("input", event => {
    currentSearch = event.target.value;
    displayProducts(false);
  });

  document.getElementById("sortSelect").addEventListener("change", event => {
    currentSort = event.target.value;
    displayProducts();
  });
}

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 60;
const NAME_DISALLOWED = /[^\p{L}\p{M}'’\- ]/u;
const NAME_STARTS_WITH_LETTER = /^\p{L}/u;

function normalizeName(raw) {
  return String(raw).normalize("NFC").replace(/\s+/g, " ").trim();
}

function getNameError(name) {
  if (!name) return "Please enter your full name.";
  if (NAME_DISALLOWED.test(name)) return "Full name can only contain letters, spaces, hyphens, and apostrophes.";
  if (!NAME_STARTS_WITH_LETTER.test(name)) return "Full name must start with a letter.";
  if (name.length < NAME_MIN_LENGTH) return "Full name must be at least " + NAME_MIN_LENGTH + " characters.";
  if (name.length > NAME_MAX_LENGTH) return "Full name must be " + NAME_MAX_LENGTH + " characters or fewer.";
  return "";
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".") && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getEmailError(email) {
  return isValidEmail(email) ? "" : "Enter a valid email address (for example, name@example.com).";
}

function getMessageError(message) {
  return message.length < 10 ? "Message must be at least 10 characters." : "";
}

const FORM_FIELDS = {
  name:    { errorId: "nameError",    trim: true,  getValue: v => normalizeName(v), getError: getNameError },
  email:   { errorId: "emailError",   trim: true,  getValue: v => v.trim(),         getError: getEmailError },
  message: { errorId: "messageError", trim: false, getValue: v => v.trim(),         getError: getMessageError }
};

function setFieldError(inputId, errorId, message, options) {
  const shake = !options || options.shake !== false;
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const hasValue = input.value.trim().length > 0;

  error.textContent = message;
  input.classList.toggle("invalid", Boolean(message));
  input.classList.toggle("valid", !message && hasValue);
  input.classList.remove("shake");
  if (message && shake) { void input.offsetWidth; input.classList.add("shake"); }
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateField(inputId, options) {
  const field = FORM_FIELDS[inputId];
  const input = document.getElementById(inputId);
  const value = field.getValue(input.value);
  if (field.trim && input.value !== value) input.value = value;
  const message = field.getError(value);
  setFieldError(inputId, field.errorId, message, options);
  return message;
}

function validateContactForm() {
  const problems = [];
  const labels = { name: "Full name", email: "Email", message: "Message" };

  Object.keys(FORM_FIELDS).forEach(id => {
    document.getElementById(id).dataset.touched = "true";
    if (validateField(id)) problems.push(labels[id]);
  });

  return { valid: problems.length === 0, problems, name: normalizeName(document.getElementById("name").value) };
}

function showFormMessage(text, type) {
  const box = document.getElementById("formMessage");
  box.textContent = text;
  box.className = "form-message " + type;
}

function clearFormValidationState() {
  Object.keys(FORM_FIELDS).forEach(id => {
    const input = document.getElementById(id);
    input.classList.remove("invalid", "valid", "shake");
    input.removeAttribute("aria-invalid");
    delete input.dataset.touched;
    document.getElementById(FORM_FIELDS[id].errorId).textContent = "";
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");

  Object.keys(FORM_FIELDS).forEach(id => {
    const input = document.getElementById(id);
    const field = FORM_FIELDS[id];

    input.setAttribute("aria-describedby", field.errorId);

    input.addEventListener("blur", () => {
      if (input.value.trim() === "" && !input.dataset.touched) return;
      input.dataset.touched = "true";
      validateField(id, { shake: false });
    });

    input.addEventListener("input", () => {
      if (!input.dataset.touched) {
        if (id === "name" && NAME_DISALLOWED.test(input.value)) {
          input.dataset.touched = "true";
        } else {
          return;
        }
      }
      setFieldError(id, field.errorId, field.getError(field.getValue(input.value)), { shake: false });
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const result = validateContactForm();

    if (!result.valid) {
      const errorText = "Please correct the following: " + result.problems.join(", ") + ".";
      showFormMessage(errorText, "error");
      alert(errorText);
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const successText = "Thank you, " + result.name + "! Your message passed all checks.";
    showFormMessage(successText, "success");
    form.reset();
    clearFormValidationState();
    alert(successText);
  });
}

const CATALOG_NOTES = {
  lastReviewed: "October 2026",
  priceDisclaimer: "All prices in this catalog are estimates in Philippine pesos. They may differ from current retail prices.",
  notes: [
    "The catalog covers 10 handheld consoles, 15 games, 5 accessories and 6 controllers.",
    "Product images are shown for reference. Packaging and colors may differ from the actual product.",
    "Some listed devices (for example the Steam Deck LCD) may be discontinued or not officially sold in the Philippines."
  ],
  compatibilityTips: [
    "Nintendo Switch and Switch OLED share the same game library. The Switch Lite plays Switch games that support handheld mode.",
    "Nintendo Switch 2 is backward compatible with many, but not all, Switch games. Check Nintendo's official list.",
    "Steam Deck uses SteamOS. Check each game's Steam Deck rating (Verified, Playable, Unsupported).",
    "ROG Ally, ROG Ally X, Legion Go and MSI Claw run Windows, so their game support differs from SteamOS.",
    "Standard microSD cards do not work in the Switch 2, which needs microSD Express."
  ]
};

const EXCHANGE_RATE_URL = "https://api.frankfurter.dev/v1/latest?base=USD&symbols=PHP";

function renderCatalogNotes() {
  const body = document.getElementById("catalogInfoBody");
  const info = CATALOG_NOTES;
  body.className = "info-body";
  body.innerHTML =
    '<p>Catalog data last reviewed: <strong>' + escapeHTML(info.lastReviewed) + '</strong></p>' +
    '<p>' + escapeHTML(info.priceDisclaimer) + '</p>' +
    '<ul>' + info.notes.map(n => '<li>' + escapeHTML(n) + '</li>').join("") + '</ul>' +
    '<p><strong>Compatibility tips</strong></p>' +
    '<ul>' + info.compatibilityTips.map(t => '<li>' + escapeHTML(t) + '</li>').join("") + '</ul>' +
    '<p id="rateStatus" class="rate-status" role="status"></p>';
}

async function loadCatalogInfo() {
  renderCatalogNotes();
  const status = document.getElementById("rateStatus");

  status.className = "rate-status is-loading";
  status.textContent = "Loading live USD to PHP exchange rate…";

  try {
    const response = await fetch(EXCHANGE_RATE_URL);

    if (!response.ok) {
      throw new Error("Server responded with status " + response.status);
    }

    const data = await response.json();

    if (!data || !data.rates || typeof data.rates.PHP !== "number") {
      throw new Error("Unexpected response format");
    }

    status.className = "rate-status is-success";
    status.textContent = "Live exchange rate: US$1 = ₱" + data.rates.PHP.toFixed(2) +
      " (as of " + data.date + ", source: Frankfurter API). Helpful when comparing with US prices.";
  } catch (error) {
    status.className = "rate-status is-error";
    status.textContent = "Live exchange rate could not be loaded (" + error.message + "). The product catalog still works.";
  }
}

const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver = null;

function observeReveals(root) {
  const targets = root.querySelectorAll(".reveal:not(.in-view)");
  if (!revealObserver && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  targets.forEach(el => {
    if (revealObserver && !prefersReducedMotion) revealObserver.observe(el);
    else el.classList.add("in-view");
  });
}

function setupScrollReveal() {
  document.querySelectorAll(".products-section .container > h2, .section-note, .info-panel, .toolbar, .contact-inner")
    .forEach(el => el.classList.add("reveal"));
  observeReveals(document);
}

function setupActiveNav() {
  if (!("IntersectionObserver" in window)) return;
  const links = Array.from(document.querySelectorAll(".nav-list a"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

function setupScrollEffects() {
  const header = document.querySelector(".site-header");
  const bar = document.getElementById("scrollProgress");
  const topButton = document.getElementById("backToTop");
  let waiting = false;

  function update() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    header.classList.toggle("scrolled", y > 8);
    topButton.classList.toggle("visible", y > 600);
    waiting = false;
  }

  window.addEventListener("scroll", () => {
    if (!waiting) { waiting = true; requestAnimationFrame(update); }
  }, { passive: true });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  update();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  setupCatalogControls();
  setupContactForm();
  displayProducts();
  loadCatalogInfo();
  setupScrollReveal();
  setupActiveNav();
  setupScrollEffects();
});