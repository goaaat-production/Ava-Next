import Choix from '../app/components/Choix'
import '../app/styles/creditsPage.css'


function Credits(){
    return(
        <>
            <section className='page'>
            <section className='texture'></section>

                
                <section className='titreCredits'>
                    <section className='titre'>Crédits</section>
                    <div className='decoTitre'></div>
                </section>

                <section className='credits'>
                    <section className='backGround'>
                    </section>

                    <h3>ARC Production</h3>
                    <h3>MMI Bordeaux Montaigne & <br/> Musée des Beaux-Arts</h3>

                    <section className='creditPart'>
                        <h4>Chef de projet</h4>
                        <p>
                            Camille Fourcade
                        </p>
                    </section>
                    <section className='creditPart'>
                        <h4>Conception & Rédaction</h4>
                        <p>
                            ARC Production
                        </p>
                    </section>
                    <section className='creditPart'>
                        <h4>Direction Artistique & <br/>Design d’interface</h4>
                        <p>
                            Cléo Laffargue <br/>
                            Perrine Joly <br/>
                            Camille Fourcade
                        </p>
                    </section>
                    <section className='creditPart'>
                        <h4>Développement</h4>
                        <p>
                            Francia Bidzimou<br/>
                            Killian Jaffrelot<br/>
                            Camille Fourcade
                        </p>
                    </section>
                    <section className='creditPart'>
                        <h4>Sound Design</h4>
                        <p>
                            Anaïs Delavier<br/>
                            Cleo Lafargue
                        </p>
                    </section>

                </section>

                <section className='boutonWrapper'>
                    <Choix shown="true" contenus="Revenir au menu" liens={[
                        { href: "../", as: "../" },
                        { href: "../", as: "../" },
                    ]} />
                </section>

                

        

            </section>

        </>
    )
}

export default Credits