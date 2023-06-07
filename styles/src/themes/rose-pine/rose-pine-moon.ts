import {
    chroma,
    colorRamp,
    ThemeAppearance,
    ThemeLicenseType,
    ThemeConfig,
} from "../../common"

export const theme: ThemeConfig = {
    name: "Rosé Pine Moon",
    author: "edunfelt",
    appearance: ThemeAppearance.Dark,
    licenseType: ThemeLicenseType.MIT,
    licenseUrl: "https://github.com/edunfelt/base16-rose-pine-scheme",
    licenseFile: `${__dirname}/LICENSE`,
    inputColor: {
        neutral: chroma
            .scale([
                "#232136",
                "#2A273F",
                "#393552",
                "#3E3A53",
                "#56526C",
                "#6E6A86",
                "#908CAA",
                "#E0DEF4",
            ])
            .domain([0, 0.3, 0.55, 1]),
        red: colorRamp(chroma("#EB6F92")),
        orange: colorRamp(chroma("#EBBCBA")),
        yellow: colorRamp(chroma("#F6C177")),
        green: colorRamp(chroma("#8DBD8D")),
        cyan: colorRamp(chroma("#409BBE")),
        blue: colorRamp(chroma("#9CCFD8")),
        violet: colorRamp(chroma("#C4A7E7")),
        magenta: colorRamp(chroma("#AB6FE9")),
    },
    override: { syntax: {} },
}