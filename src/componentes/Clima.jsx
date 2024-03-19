import { useState } from 'react'

export function Clima() {
    const [estaLloviendo, setestaLloviendo] = useState(false)

    const cambiarClima = () => {
        setestaLloviendo(!estaLloviendo)
    }

    return (
        <div>
            {estaLloviendo === true ?
                <h3>
                    LLUVIA TORRENCIAL 🌧️🌧️🌧️🌧️⚡⚡⚡⚡⚡💧☔💧☔💧☔
                </h3>
                :
                <h3>HAY SOL 🌅☀️⚡🌅☀️⚡🌅☀️⚡🌅☀️⚡🌅☀️⚡</h3>
            }

            <div className="card">
                <button onClick={cambiarClima}>
                    Cambiar Clima
                </button>
            </div>
        </div>
    )


}


