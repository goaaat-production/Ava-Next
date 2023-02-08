import Choix from '../app/components/Choix'

function index(){

    return(
        <>
            <h1>Menu</h1>
            <Choix shown="true" contenus="Jouer/Crédits" liens="./chapitres/intro/1|/credits"></Choix>
        </>

    )

}

export default index;