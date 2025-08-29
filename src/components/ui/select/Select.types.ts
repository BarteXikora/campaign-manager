type TSelectProps = {
    options: { id: string, name: string }[],
    value: string,
    setValue: (t: string) => void
}

export default TSelectProps