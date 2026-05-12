import rockImg from "@/assets/band-rock.jpg";
import jazzImg from "@/assets/band-jazz.jpg";
import acousticImg from "@/assets/band-acoustic.jpg";
import djImg from "@/assets/band-dj.jpg";

export type Band = {
  slug: string;
  name: string;
  genre: string;
  description: string;
  members: number;
  repertoire: string[];
  image: string;
};

export const bands: Band[] = [
  {
    slug: "the-velvet-strings",
    name: "MINHA BANDAn",
    genre: "Rock & Pop",
    description: "Quarteto de alta energia com setlist de clássicos do rock e hits pop atuais. Ideal para festas, formaturas e grandes eventos corporativos.",
    members: 4,
    repertoire: ["Queen", "Foo Fighters", "Coldplay", "Maroon 5", "Legião Urbana"],
    image: rockImg,
  },
  {
    slug: "midnight-quartet",
    name: "Midnight Quartet",
    genre: "Jazz & Bossa",
    description: "Sofisticação em forma de música. Quarteto de jazz com saxofone, piano, contrabaixo acústico e bateria — a trilha sonora perfeita para coquetéis e jantares.",
    members: 4,
    repertoire: ["Frank Sinatra", "Tom Jobim", "Ella Fitzgerald", "Chet Baker"],
    image: jazzImg,
  },
  {
    slug: "duo-aurora",
    name: "Duo Aurora",
    genre: "Acústico & Romântico",
    description: "Voz e violão em harmonia perfeita. O duo ideal para cerimônias de casamento, bodas e celebrações íntimas ao ar livre.",
    members: 2,
    repertoire: ["Ed Sheeran", "Jack Johnson", "Marisa Monte", "John Mayer"],
    image: acousticImg,
  },
  {
    slug: "dj-noctus",
    name: "DJ Noctus",
    genre: "Eletrônica & House",
    description: "Sets imersivos com produção visual completa. Do open bar ao after, mantém a pista cheia até o último minuto da festa.",
    members: 1,
    repertoire: ["House", "Tech House", "Pop Remixes", "Brazilian Bass"],
    image: djImg,
  },
];
