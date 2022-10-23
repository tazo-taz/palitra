interface input {
    label: string,
    inputProps: {},
    index?: number
}

export interface main {
    title: string,
    inputs: input[],
    button: {
        clickEvent: Function,
        title?: string
    },
    additionalHTML?: JSX.Element
}