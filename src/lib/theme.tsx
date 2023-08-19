import React from "react";

export type ThemeObject = {
    backgroundColor: string,
    guestColor: string,
    atSeparator: string,
    hostColor: string,
    locationColor: string,
    footerColor: string,
    borderColor: string,
    commandColor: string
}

interface ThemeContextType {
    themeSettings: ThemeObject;
    setThemeSettings: (ThemeObject) => void;
}

const ThemeContext = React.createContext<ThemeContextType>(null);
export const useTheme = () => React.useContext(ThemeContext);

export const Theme = ({ children }) => {

    const [themeSettings, setThemeSettings] = React.useState<ThemeObject>({
        backgroundColor: "#32312E",
        guestColor: "#7ba97b",
        atSeparator: "#ffffff",
        hostColor: "#7ba97b",
        locationColor: "#A6D3A0",
        footerColor: "#9faf9f",
        borderColor: "#9faf9f",
        commandColor: "#c2c2c9"
    });

    return (
        <ThemeContext.Provider
            value={{
                themeSettings,
                setThemeSettings
            }}>
            {children}
        </ThemeContext.Provider>
    )
}