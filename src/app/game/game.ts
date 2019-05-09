export interface Game {
    id: string;
    name: string;
    yearPublished: number | null;
    description: string | null;
    image: string | null;
    thumbnailImage: string | null;
}