import Choix from '../app/components/Choix'
import '../app/styles/homePage.css'

function index(){

    return(
        <>  
            <section className='page'>
            <section className='texture'></section>

                <section className='logo'>
                    <section className='topLogo'> 
                        <img className='textLogo' src="/AvaLogo.svg" alt="Logo Ava" />
                        <div className='circle'></div>
                    </section>
                    <section className='bottomLogo'>
                        <h2 className='subTextLogo'>Ad Vitam Aeternam</h2>
                        <img className='logoDeco' src="/AvaLogoDeco.svg" alt="Logo Ava" />
                    </section>

                    

                </section>



                <section className='boutons'>
                    <Choix shown="true" contenus="Jouer" liens={[
                    { href: "/chapitres/intro/1", as: "/chapitres/intro/1" },
                    ]}></Choix>

                    <Choix shown="true" contenus="Crédits" liens={[
                    { href: "/credits" },
                    ]}></Choix>

                </section>

                <section className='decoBottom'>
                    <img src='/menuBottomDeco.svg'></img>
                </section>
                
            </section>
            
        </>

    )

}

export default index;