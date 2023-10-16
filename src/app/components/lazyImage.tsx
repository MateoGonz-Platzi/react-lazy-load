import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
    src: string,
    alt: string,
    onLazyLoad?: (img: HTMLImageElement) => void
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type GeneralProps = LazyImageProps & ImageNative;

const DEFAULT_IMAGE: string = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

//Esta es la estructura del componente que se sugiere usar
export const LazyImage = ({ src, onLazyLoad, alt, ...imgProps }: GeneralProps): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null); //Se inicializa la refenecia en null
    const [srcImage, setSrc] = useState<string>(DEFAULT_IMAGE);

    //Implementamos useEffect para que se ejecute cuando se renderice el componente
    //De esta forma se puede usar el observer y nos carga la imagen cuándo el usuario esté ubicado en el viewport.
    useEffect(() => {
        //nuevo observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSrc(src);
                    //Solución del reto.
                    if (onLazyLoad !== undefined) {
                        onLazyLoad(imageRef.current!);
                        observer.unobserve(imageRef.current!);
                        return;
                    }
                };
            });
        });

        //uso del observer
        if (imageRef.current) observer.observe(imageRef.current);
        /* observer.observe(node.current!); */ //Se puede usar el signo de admiracion para indicar que no es null

        //desconectar el observer
        return () => observer.disconnect();
    }, [src]);

    return <img
        ref={imageRef}
        width={320}
        height="auto"
        src={srcImage}
        className="rounded bg-gray-300"
        alt={alt}
        {...imgProps}
    />
};

/* const RandomFox: FunctionComponent = () => {
    return <img />
};

const RandomFox: FC = () => {
    return <img />
}; */