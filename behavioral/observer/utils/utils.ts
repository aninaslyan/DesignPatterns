export function changeTextContent(text: string, element: Element | null) {
    if (element) {
        element.textContent = text;
    }
}
