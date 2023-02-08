import Choix from '../app/components/Choix'

function index(){

    return(
        <>
            <h1>Menu</h1>
            <Choix shown="true" contenus="Jouer/Crédits" liens={[
            { href: "/chapitres/intro/[id]", as: "/chapitres/intro/1" },
            { href: "/credits" },
            ]}></Choix>
        </>

    )

}

export default index;