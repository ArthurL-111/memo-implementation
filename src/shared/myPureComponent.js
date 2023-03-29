import React from 'react'

const shallowCompare = (objA, objB) => {
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

class myPureComponent extends React.Component{
    
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowCompare(this.props, nextProps) || !shallowCompare(this.state, nextState);
    }

}

export default myPureComponent;