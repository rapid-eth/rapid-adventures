export function isClassComponent(component) {
    if (component.prototype) {
        return (
            typeof component === 'function' &&
            !!component.prototype.isReactComponent
        )
    }
    return false
}

export function isInlineFunctionComponent(component) {
    return (
        typeof component === 'function' &&
        String(component).includes('createElement')
    ) ? true : false;
}

export function isFunctionComponent(component) {
    return (
        typeof component === 'function' &&
        String(component).includes('return React.createElement')
    ) ? true : false;
}

export function isReactComponent(component) {
    return (
        isClassComponent(component) ||
        isFunctionComponent(component) ||
        isInlineFunctionComponent(component)
    ) ? true : false;
}

export function isElement(element) {
    return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'function';
}

export default (component, props) => (
    isReactComponent(component)
        ? React.createElement(component, props)
        : isElement(component)
            ? React.cloneElement(component, props)
            : null
)