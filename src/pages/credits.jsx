import Choix from '../app/components/Choix'

function Credits(){
    return(
        <>
            <h3>C'est moi qu'ai fait</h3>
            <Choix shown="true" contenus="Revenir au menu" liens={[
                        { href: "../", as: "../" },
                        { href: "../", as: "../" },                        
                        ]}                      />
        </>
    )
}

export default Credits