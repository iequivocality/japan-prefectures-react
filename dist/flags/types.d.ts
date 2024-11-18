export type PrefectureFlagProps = {
    height?: number;
    width?: number;
    className?: string;
};
export type Size = {
    width: number;
    height: number;
};
export type PrefectureFlagComponent = React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;
