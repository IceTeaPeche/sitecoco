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
                class="mt-1 block px-2 py-1 text-custom-008533 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Nous
                contacter</router-link>
            <router-link to="/QuiSommesNous"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Qui
                sommes-nous</router-link>
        </nav>
    </header>


    <main class="font-baloo ">

        <section class=" flex justify-center items-center md:gap-24 gap-3  pt-16 pb-16">
            <button @click="selected = 'faq'"
                class="text-1xl font-700 rounded-[20px]  pt-2 pb-2 pl-4 pr-4 border-[2px] border-solid "
                :class="{ 'text-custom-008533 border-custom-008533': selected === 'faq', 'text-white': selected !== 'faq' }">
                Questions fréquentes
            </button>
            <button @click="selected = 'support'"
                class="text-1xl font-700 rounded-[20px] pt-2 pb-2 pl-4 pr-4 border-[2px] border-solid "
                :class="{ 'text-custom-008533 border-custom-008533': selected === 'support', 'text-white': selected !== 'support' }">
                Support en ligne
            </button>
        </section>




        <section v-if="selected === 'faq'" class="text-white flex justify-center pb-12 pt-10">




            <div class="w-[1000px]">

                <article class="border-t border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quelle taille fait la poubelle ?
                            <img :class="{ 'transform rotate-90': isOpen }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                La taille de la poubelle fait 1m de large sur 1m de longueur sur 2m de hauteur</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions2()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quelle taille fait la poubelle ?
                            <img :class="{ 'transform rotate-90': isOpen2 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options2" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                La taille de la poubelle fait 55 cm de large sur 55 cm de longueur sur 1,25m de
                                hauteur</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions3()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quelle est la capacité de la poubelle en termes de volume de déchets qu'elle peut contenir ?
                            <img :class="{ 'transform rotate-90': isOpen3 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options3" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                La poubelle peut contenir jusqu'à 378 litres de déchet.</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions4()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quelle taille fait la poubelle ?
                            <img :class="{ 'transform rotate-90': isOpen4 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options4" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                La taille de la poubelle fait 1m de large sur 1m de longueur sur 2m de hauteur</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions5()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quels types de déchets cette poubelle est-elle conçue pour collecter ?
                            <img :class="{ 'transform rotate-90': isOpen5 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options5" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                la poubelle peut collecter tout type de déchet, le principale c'est de ne pas les
                                mélangers</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions6()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Est-ce que la poubelle est équipée d'un système de tri sélectif ?
                            <img :class="{ 'transform rotate-90': isOpen6 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options6" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                                Non, nous travaillons actuellement sur une poubelle capable de trier les déchets.</a>
                        </div>
                    </div>

                </article>

                <article class=" border-b p-1">
                    <div class="flex-none p-3">
                        <button @click="showDropdownOptions7()"
                            class="flex flex-row items-center justify-between text-white text-lg w-full">
                            Quels matériaux ont été utilisés pour fabriquer la poubelle ? 
                            <img :class="{ 'transform rotate-90': isOpen7 }" src="../assets/chevronblanc.svg"
                                alt="Chevron" class="transition-transform duration-200 h-3 w-3">
                        </button>
                        <div id="options7" class="hidden pl-2">
                            <a href="#" class="text-gray-100">
                             Les matériaux utilisé pour cette poubelle sont du plastique et de l'acier.</a>
                        </div>
                    </div>

                </article>


            </div>

        </section>



        <section v-else-if="selected === 'support'" class=" flex justify-center pb-20 pt-10 w-full ">

            <section id="supportgrid"
                class="text-white flex grid md:grid-cols-3 sm:grid-cols-2 pl-5 pr-5 grid-cols-1 gap-7 sm:max-w-[1200px] w-full max-w-[302px] ">
                <div
                    class="w-full relative rounded-[25px] box-border h-[202px] w-[330px] overflow-hidden text-left text-[0.875rem] text-white font-baloo-2 border-[3px] border-solid border-white ">
                    <div class="absolute top-[0.875rem] left-[1.125rem] text-[1.063rem] ">E-mail
                    </div>
                    <div class="absolute top-[2.5rem] left-[1.125rem]">Nous vous répondrons sous 2 jours ouvrés.
                    </div>
                    <div
                        class="absolute top-[8.875rem] left-[1.125rem] rounded-[14px] bg-white w-[12.875rem] h-[2.25rem] overflow-hidden text-black">
                        <button class="absolute top-[0.438rem] left-[1.188rem] font-semibold">COCO-support@gmail.com
                        </button>
                    </div>
                </div>

                <div
                    class="w-full relative rounded-[25px] box-border h-[202px] w-[330px] overflow-hidden text-left text-[0.875rem] text-white font-baloo-2 border-[3px] border-solid border-white">
                    <div class="absolute top-[0.875rem] left-[1.125rem] text-[1.063rem] font-semibold">Téléphone
                    </div>
                    <div class="absolute top-[2.5rem] left-[1.125rem]">Du lundi au samedi de 9h à 21h.</div>
                    <div
                        class="absolute top-[8.875rem] left-[1.125rem] rounded-[14px] bg-white w-[7.688rem] h-[2.25rem] overflow-hidden text-black">
                        <button class="absolute top-[0.438rem] left-[1.188rem] font-semibold">09 23 71 49
                            04</button>
                    </div>
                </div>

                <div
                    class="w-full relative rounded-[25px] box-border h-[202px] w-[330px] overflow-hidden text-left text-[0.875rem] text-white font-baloo-2 border-[3px] border-solid border-white">
                    <div class="absolute top-[0.875rem] left-[1.125rem] text-[1.063rem] font-semibold">WhatsApp
                    </div>
                    <div class="absolute top-[2.5rem] left-[1.125rem]">Du lundi au samedi de 9h à 21h.</div>
                    <div
                        class="absolute top-[8.875rem] left-[1.125rem] rounded-[14px] bg-white w-[11.063rem] h-[2.25rem] overflow-hidden text-black">

                        <button class="absolute top-[0.438rem] left-[1.188rem] font-semibold">Nouvelle
                            conversation</button>
                    </div>
                </div>

                <div
                    class="w-full relative rounded-[25px] box-border h-[202px] w-[330px] overflow-hidden text-left text-[0.875rem] text-white font-baloo-2 border-[3px] border-solid border-white">
                    <div class="absolute top-[0.875rem] left-[1.125rem] text-[1.063rem] font-semibold">
                        Accessibilité
                        sourds
                        et malentendants</div>
                    <div class="absolute top-[2.5rem] left-[1.125rem]">Du lundi au samedi de 9h à 21h.</div>
                    <div class="absolute top-[3.813rem] left-[1.063rem] inline-block w-[16.875rem]">Échangez par
                        WhatApps, en Langage Parlé Complété, via la transcription ou en Langue des Signes Française
                        (LSF) avec un conseiller.</div>
                    <div
                        class="absolute top-[8.875rem] left-[1.125rem] rounded-[14px] bg-white w-[11.063rem] h-[2.25rem] overflow-hidden text-black">

                        <button class="absolute top-[0.438rem] left-[1.188rem] font-semibold">Nouvelle
                            conversation</button>
                    </div>
                </div>


                <div
                    class="w-full relative rounded-[25px] box-border h-[202px] w-[330px] overflow-hidden text-left text-[0.875rem] text-white font-baloo-2 border-[3px] border-solid border-white">
                    <div class="absolute top-[0.875rem] left-[1.125rem] text-[1.063rem] font-semibold">Prendre
                        rendez-vous</div>
                    <div class="absolute top-[2.5rem] left-[1.125rem]">Du lundi au samedi de 9h à 21h.</div>
                    <div
                        class="absolute top-[8.875rem] left-[1.125rem] rounded-[14px] bg-white w-[11.063rem] h-[2.25rem] overflow-hidden text-black">

                        <button class="absolute top-[0.438rem] left-[1.188rem] font-semibold">Prendre
                            rendez-vous</button>
                    </div>
                </div>

            </section>

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
            selected: 'support',
            isOpen: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            isOpen6: false,
            isOpen7: false,
            isOpen10: false,
        }
    },
    methods: {

         showDropdownOptions() {
            this.isOpen = !this.isOpen;
            document.getElementById("options").classList.toggle("hidden");
        },
        showDropdownOptions2() {
            this.isOpen2 = !this.isOpen2;
            document.getElementById("options2").classList.toggle("hidden");
        },
        showDropdownOptions3() {
            this.isOpen3 = !this.isOpen3;
            document.getElementById("options3").classList.toggle("hidden");
        },
        showDropdownOptions4() {
            this.isOpen4 = !this.isOpen4;
            document.getElementById("options4").classList.toggle("hidden");
        },
        showDropdownOptions5() {
            this.isOpen5 = !this.isOpen5;
            document.getElementById("options5").classList.toggle("hidden");
        },
        showDropdownOptions6() {
            this.isOpen6 = !this.isOpen6;
            document.getElementById("options6").classList.toggle("hidden");
        },
        showDropdownOptions7() {
            this.isOpen7 = !this.isOpen7;
            document.getElementById("options7").classList.toggle("hidden");
        },
        
        
    }
}


</script>

<style scoped>



</style>