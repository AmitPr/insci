const storedTheme: string | null = localStorage.getItem("theme");
let currentTheme: string;
if (storedTheme) {
    currentTheme = storedTheme;
} else {
    currentTheme = "light";
}
document.documentElement.classList.remove("dark","light");
document.documentElement.classList.add(currentTheme);

function setTheme(theme: string): void {
    localStorage.setItem("theme",theme);
    document.documentElement.classList.remove("dark","light");
    document.documentElement.classList.add(theme);
    currentTheme = theme;
}
function toggleTheme(): void {
    if (currentTheme == "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}
export { setTheme, toggleTheme, currentTheme }