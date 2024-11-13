export enum COPYRIGHT_KEYS {
    url = "url",
    title = "title",
    author = "author",
    license = "license",
    other = "other"
}

export enum COPYRIGHT_TYPE {
    original = "original",
    translation = "translation",
    transport = "transport",
    modify = "modify",
    revive = "revive",
    own = "own"
}

export type COPYRIGHT_DATA = Partial<Record<COPYRIGHT_KEYS, string>> & {
    type: COPYRIGHT_TYPE;
}