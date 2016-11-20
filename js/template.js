export const getElementFromTemplate = (template) => {
    const node = document.createElement('div');
    node.innerHTML = template;
    return node;
}
