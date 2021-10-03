export interface HeroListItem {
    id: string;
    name: string;
    image: string;
}

export interface HeroCardProp {
    name: string;
    image: string;
    id: string;
    selected: boolean;
    handleClickHeroCard:Function;
}

export interface PowerProp {
    powerName: string;
    num: number;
    totalLeft: number;
    modifyPower:Function;
}