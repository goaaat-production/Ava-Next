import { useState } from 'react'
import Choix from '../app/components/Choix'
import '../app/styles/creditsPage.css'
import React from 'react';


function Credits() {

    let [creditChange, setCreditChange] = useState(false);

    function handleClickFront() {
        setCreditChange(true);
    }
    function handleClickBack() {
        setCreditChange(false);
    }

    return (
        <>
            <section className='page'>
                <section className='texture'></section>


                <section className='titreCredits'>
                    <section className='titre'>Crédits</section>
                    <div className='decoTitre'></div>
                </section>

                {!creditChange ?
                    <section className='credits'>
                        <section className='backGround'>
                        </section>

                        <h3>Un projet de : <br /> ARC Production</h3>

                        <section className='creditPart'>
                            <h4>L'équipe :</h4>
                            <p>
                                Cléo Laffargue <br />
                                Perrine Joly <br />
                                Camille Fourcade <br />
                                Francia Bidzimou <br />
                                Killian Jaffrelot <br />
                                Anaïs Delavier
                            </p>
                        </section>
                        

                    </section>
                    :
                    <section className='credits'>
                        <section className='backGround'>
                        </section>

                        <h3>MMI Bordeaux Montaigne &</h3>
                        <section className='musba'></section>

                        <section className='creditPart'>
                            <h4>Tableaux utilisés : </h4>
                            <p>
                                “L'INCENDIE DU STEAMER AUSTRIA” <br /> Eugène Isabey - 1858
                            </p>
                        </section>
                        <section className='creditPart'>
                            <p>
                                “EMBARQUEMENT DE LA DUCHESSE D’ANGOULÊME À PAUILLAC” <br /> Antoine Jean Gros - 1818
                            </p>
                        </section>
                        <section className='creditPart'>
                            <p>
                                “MOZART EXPIRANT” <br /> Rinaldo Carnielo - 1877/1880
                            </p>
                        </section>
                        <section className='creditPart'>
                            <p>
                                “CHARLES QUINT RAMASSANT LE PINCEAU DE TITIEN” <br /> Pierre-Nolasque Bergeret - 1808
                            </p>
                        </section>
                    </section>
                }

                <section className='boutonWrapper'>

                    {creditChange ?

                        <button onClick={handleClickBack} className='boutonSuivant' >
                            &lt;
                        </button>

                        : null}

                    <Choix shown="true" contenus="Revenir au menu" liens={[
                        { href: "../", as: "../" },
                        { href: "../", as: "../" },
                    ]} />

                    {!creditChange ?

                        <button onClick={handleClickFront} className='boutonSuivant' >
                            &gt;
                        </button>

                        : null}

                </section>





            </section>

        </>
    )
}

export default Credits