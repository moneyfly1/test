import { Provider, inject, observer } from 'mobx-react'


export const wrapper = stores => {
    return Component => {
        return props => (
            <Provider {...stores}><Component {...props}/></Provider>
        )
    }
}

export const connected = mapper => {
    return Component => {
        if (typeof mapper === 'string') {
            return inject(mapper)(observer(Component))
        } else if (Array.isArray(mapper)) {
            return inject(...mapper)(observer(Component))
        } else if (typeof mapper === 'function') {
            return inject(mapper)(Component)
        } else if (typeof mapper === 'undefined') {
            return inject(stores => stores)(Component)
        }
    }
}

export default (stores,mapper)=>{
    return Component=>{
        const connectedComponent = connected(mapper)(Component)
        return wrapper(stores)(connectedComponent)
    }
}