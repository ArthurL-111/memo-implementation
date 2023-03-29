import React from 'react'

export const myMemo = (WrappedComponent) => {
    return class NewComponent extends React.Component{
        shallowCompare = (objA, objB) => {
            if (objA === objB) return true;
            if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) return false
            const keysA = Object.keys(objA);
            const keysB = Object.keys(objB);

            if (keysA.length === keysB.length) {
                for (let key of keysA) {
                    if (objA[key] !== objB[key]) return false;
                }
                return true;
            } else return false
        }

        shouldComponentUpdate(nextProps, nextState) {
            return !this.shallowCompare(this.props, nextProps);
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }
}