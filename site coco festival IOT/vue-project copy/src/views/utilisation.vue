<template>
    <header class="bg-custom-FAFAFA tablet:flex tablet:justify-around tablet:items-center tablet:px-4 tablet:py-3">
        <div class="flex items-center justify-between px-4 py-3 tablet:p-0">
            <div>
                <img class="h-8  bg-transparent" src="../assets/coco logo.svg" alt="Workcation">
            </div>
            <div class="tablet:hidden">
                <button @click="isOpen10 = !isOpen10" type="button"
                    class="block text-custom-121212 hover:text-custom-121212 focus:text-custom-121212 focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen10" fill-rule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        <path v-if="!isOpen10" fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen10 ? 'block' : 'hidden'"
            class="px-2 pt-2 pb-4 tablet:flex tablet:p-0 font-baloo font-800 text-lg text-[16px] gap-14">

            <router-link to="/COCO-BOX"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">COCO-BOX</router-link>
            <router-link to="/NousContacter"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Nous
                contacter</router-link>
            <router-link to="/QuiSommesNous"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Qui
                sommes-nous</router-link>
        </nav>
    </header>







    <main class="font-baloo font-300 ">

        <section class="max-w-screen-md  mx-auto px-4">
            <p class="text-custom-008533 pt-14 pb-5 mr-[38Opx] font-500 text-5xl">Conditions d'Utilisation de COCO</p>

            <p class="text-custom-008533 pt-14 mr-[38Opx] font-500 text-2xl">1. Acceptation des Conditions</p>

            <p class="text-white mt-5   text-l text-justify">En accédant et en utilisant le site web COCO , vous
                acceptez d'être lié par les présentes conditions d'utilisation. Si vous
                n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
            </p>

            <p class="text-custom-008533 mt-14   font-500 text-2xl">2. Description du Service</p>

            <p class="text-white mt-5   text-l text-justify">COCO est une plateforme en ligne qui permet aux
                organisateurs d'événements de demander des devis pour l'achat de poubelles et d'autres services
                connexes.
            </p>




            <p class="text-custom-008533 mt-14  mr-[38Opx] font-500 text-2xl">3. Utilisation du Site

            </p>

            <p class="text-white mt-5   text-l text-justify">

                3.1. Vous acceptez d'utiliser le Site uniquement à des fins légales et conformément à ces conditions
                d'utilisation.</p>

            <p class="text-white mt-5   text-l text-justify">

                3.2. Vous acceptez de ne pas utiliser le Site d'une manière qui pourrait endommager, désactiver,
                surcharger ou nuire à la disponibilité ou à l'accessibilité du Site.</p>


            <p class="text-white mt-5   text-l text-justify">

                3.3. Vous acceptez de ne pas utiliser le Site pour collecter des informations sur d'autres utilisateurs
                sans leur consentement.</p>





            <p class="text-custom-008533 mt-14  mr-[38Opx] font-500 text-2xl">4. Compte Utilisateur

            </p>

            <p class="text-white mt-5   text-l text-justify">

                4.1. Vous pouvez être amené à créer un compte utilisateur pour accéder à certaines fonctionnalités du
                Site. Vous êtes responsable de maintenir la confidentialité de vos informations de compte et de
                restreindre l'accès à votre compte.</p>

            <p class="text-white mt-5   text-l text-justify">

                4.2. Vous acceptez de fournir des informations exactes, à jour et complètes lors de la création de votre
                compte utilisateur.</p>


            <p class="text-custom-008533 mt-14   font-500 text-2xl">5. Devis et Transactions</p>

            <p class="text-white mt-5   text-l text-justify">5.1. COCO ne garantit pas l'exactitude ou la qualité des
                devis fournis par les fournisseurs tiers.</p>
            <p class="text-white mt-5   text-l text-justify">5.2. Vous comprenez et acceptez que toute transaction
                effectuée par le biais du Site est entre vous et le fournisseur tiers concerné, et que COCO n'est pas
                partie à ces transactions.</p>

            <p class="text-custom-008533 mt-14   font-500 text-2xl">6. Propriété Intellectuelle
            </p>

            <p class="text-white mt-5   text-l text-justify">
                6.1. Le contenu du Site, y compris mais sans s'y limiter, les textes, les graphiques, les logos, les
                images et les logiciels, est la propriété de COCO ou de ses concédants de licence et est protégé par les
                lois sur le droit d'auteur et autres lois applicables.</p>
            <p class="text-white mt-5   text-l text-justify">
                6.2. Vous acceptez de ne pas reproduire, distribuer, modifier, afficher publiquement, exécuter
                publiquement ou exploiter de quelque manière que ce soit le contenu du Site sans l'autorisation
                préalable écrite de COCO.</p>

            <p class="text-custom-008533 mt-14   font-500 text-2xl">7. Modification du Site
            </p>
            <p class="text-white mt-5   text-l text-justify">
                COCO se réserve le droit de modifier, suspendre ou interrompre temporairement ou définitivement tout ou
                partie du Site, avec ou sans préavis.</p>



            <p class="text-custom-008533 mt-14   font-500 text-2xl">8. Limitation de Responsabilité
            </p>
            <p class="text-white mt-5   text-l text-justify">
                Dans toute la mesure permise par la loi, COCO décline toute responsabilité envers vous ou tout tiers
                pour tout dommage résultant de votre utilisation ou de votre incapacité à utiliser le Site.</p>


            <p class="text-custom-008533 mt-14   font-500 text-2xl">9. Loi Applicable
            </p>
            <p class="text-white mt-5   text-l text-justify">
                Les présentes conditions d'utilisation sont régies par et interprétées conformément aux lois en
                vigueur.</p>

            <p class="text-custom-008533 mt-14   font-500 text-2xl">10. Contact
            </p>
            <p class="text-white mt-5   text-l text-justify">
                Si vous avez des questions ou des préoccupations concernant ces conditions d'utilisation, veuillez nous
                contacter à l'adresse suivante : COCO@gmail.com</p>


        </section>

    </main>
    <footer class="bg-custom-121212 text-center text-white lg:text-left ">
        <div
            class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between mb-3 ">

        </div>



        <div class="pl-6 pr-6text-center md:text-left bg-custom-121212 justify-center flex">
            <div class="grid-1 grid gap-14 md:grid-cols-2 lg:grid-cols-3 ">


                <div class="justify-center items-center">

                    <img class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start w-36 h-36"
                        src="../assets/Mode_Isolationblanc2.svg" alt="">
                    <p class="text-tablet">
                        © 2024 Copyright: COCO
                    </p>
                </div>


                <div>
                    <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start
                    ">
                        Mentions légales
                    </h6>
                    <p class="mb-4 hover:underline">

                        <router-link to="/utilisation">Conditions d'utilisation</router-link>
                    </p>
                    <p class="mb-4 hover:underline">

                        <router-link to="/Vente">Conditions de vente</router-link>
                    </p>
                    <p class="mb-4 hover:underline">

                        <router-link to="/entreprise">Informations sur l'entreprise</router-link>
                    </p>
                    <p class="hover:underline">
                        <router-link to="/Politique">Politique de confidentialité</router-link>
                    </p>
                </div>





                <div>
                    <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Contact
                    </h6>
                    <p class="mb-4 flex items-center justify-center md:justify-start hover:underline">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </span>
                        France, Bordeaux, place de la Bourse
                    </p>
                    <a href="mailto:COCO@gmail.com"
                        class="mb-4 flex items-center justify-center md:justify-start hover:underline">
                        <span class="me-3">
                            <img src="../assets/material-symbols_mail-outline.svg" alt="">
                        </span>
                        COCO@gmail.com
                    </a>
                    <p class="mb-4 flex items-center justify-center md:justify-start hover:underline">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        + 09 32 48 42 90
                    </p>
                    <p class="flex items-center justify-center md:justify-start hover:underline">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">

                            <img src="../assets/ic_baseline-whatsapp.svg" alt="">

                        </span>
                        WhatApps
                    </p>
                </div>
            </div>
        </div>



        <div class=" p-6"></div>

    </footer>
</template>

<script>


export default {

    data() {
        return {
            isOpen10: false,
        }
    }
}


</script>



<style scoped></style>
