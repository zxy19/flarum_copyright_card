export enum COPYRIGHT_KEYS {
    url = "url",
    title = "title",
    author = "author",
    license = "license"
}

export enum COPYRIGHT_TYPE {
    original = "original",
    translation = "translation",
    transport = "transport",
    modify = "modify",
    revive = "revive",
}

export type COPYRIGHT_DATA = Partial<Record<COPYRIGHT_KEYS, string>> & {
    type: COPYRIGHT_TYPE;
}