export const handleChangeStyles = (e, font, colorName) => {
    document.body.style.background = "yellow"
    if (e.target.nodeName === "P") {
        e.target.style.color = colorName
        e.target.style.fontSize = font + "px"
    }
    else if (e.target.nodeName === "BUTTON") {
        e.target.style.fontSize = font + "px"
    }
    else if (e.target.nodeName === "DIV") {
        e.target.style.backgroundColor = colorName
    }
}