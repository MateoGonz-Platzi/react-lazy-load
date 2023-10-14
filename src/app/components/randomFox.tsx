type RandomFoxProps = { image: string, alt: string }

export const RandomFox = ({ image, alt }: RandomFoxProps): JSX.Element => { //Esta es la estructura del componente que se sugiere usar
    return <img width={320} height="auto" src={image} className="rounded" alt={alt} />
};

/* const RandomFox: FunctionComponent = () => {
    return <img />
};

const RandomCat: FC = () => {
    return <img />
}; */