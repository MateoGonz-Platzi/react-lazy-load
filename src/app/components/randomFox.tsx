const random = (): number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => { //Esta es la estructura del componente que se sugiere usar
    const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    return <img width={320} height="auto" src={image} className="rounded" />
};

/* const RandomFox: FunctionComponent = () => {
    return <img />
};

const RandomCat: FC = () => {
    return <img />
}; */