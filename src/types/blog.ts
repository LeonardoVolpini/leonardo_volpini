export interface BlogItem {
    title: string;
    slug: string;
    excerpt?: string;        //estratto
    image?: string;
    content?: string;
    date?: string;         //data di pubblicazione
}