<template >

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
                class="mt-1 block px-2 py-1 text-custom-008533 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">COCO-BOX</router-link>
            <router-link to="/NousContacter"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Nous
                contacter</router-link>
            <router-link to="/QuiSommesNous"
                class="mt-1 block px-2 py-1 text-custom-121212 font-semibold rounded hover:text-custom-008533 tablet:mt-0 tablet:ml-2">Qui
                sommes-nous</router-link>
        </nav>
    </header>





















    <main class=" ">
        <h1 class="text-custom-FAFAFA justify-center flex font-baloo font-800 text-3xl pt-20 bg-transparent">COCO-BOX
        </h1>

        <div class="h-[2600px] flex justify-center relative" id="canvas">
            <img src="../assets/poubellemain.png" class="absolute top-0 bottom-0 mt-20  h-[380px] object-cover" />
        </div>


        <button
            class="absolute left-1/2 top-[760px] transform -translate-x-1/2 -translate-y-1/2 font-baloo font-600 max-w-screen-md px-4 text-m center-0 text-white text-custom-008533 border-custom-008533 rounded-[20px] pt-2 pb-2 pl-8 pr-8 border-[2px] border-solid hover:scale-105 transition-transform duration-200"
            id="faireundevis">
            <RouterLink to="/NousContacter">
                Prendre rendez-vous
            </RouterLink>
        </button>

        <h2
            class="absolute left-1/2 top-[800px] transform -translate-x-1/2 -translate-y-1/2 font-baloo font-400 max-w-screen-md px-4 text-m center-0 text-white text-custom-008533 ">
            Prix sur devis
        </h2>


        <div id="scroll-text1"
            class="absolute top-[1000px] z-10 font-baloo font-600 max-w-screen-md px-4 text-tablet sm:w-[420px] w-full sm:pl-20 ">
            <h1 class="bg-transparent">Une poubelle mais pas comme <span class="text-custom-008533">les autres
                    ...</span></h1>
        </div>

        <div id="scroll-text6"
            class="absolute sm:top-[920px] top-[1160px] z-10 font-baloo font-300 max-w-screen-md px-4 text-tablet  sm:right-0 sm:w-[440px] w-[320px] sm:pr-20 ">
            <div class="rounded-[18px]">
                <img class="rounded-[18px] h-[344px]" src="../assets/image3.png" alt="">
            </div>
        </div>

        <div id="scroll-text2"
            class="absolute top-[1500px] z-10 font-baloo font-600 max-w-screen-md px-4 text-tablet right-0  w-full sm:w-[440px] sm:pr-10 ">
            <h1 class="bg-transparent">Redéfinissez l'expérience utilisateur au sein de vos <span
                    class="text-custom-008533">événements.</span></h1>
        </div>

        <div id="scroll-text5"
            class="absolute sm:top-[1450px] top-[1690px] z-10 font-baloo font-300 max-w-screen-md px-4 text-tablet sm:w-[440px] w-[320px] sm:pl-20 ">
            <div class="rounded-[18px]  h-[344px]">
                <img id="imagefestival" src="../assets/festival.jpg" alt="" class="rounded-[18px] h-[344px]">
            </div>
        </div>

        <div id="scroll-text3"
            class="absolute top-[2000px] z-10 font-baloo font-600 max-w-screen-md px-4 text-tablet sm:w-[400px] w-full sm:pl-20 ">
            <h1 class="bg-transparent">réduisez votre pollution grâce à <span class="text-custom-008533">la
                    gamification.</span></h1>
        </div>

        <div id="scroll-text4"
            class="absolute sm:top-[1950px] top-[2150px] z-10 font-baloo font-300 max-w-screen-md px-4 text-tablet sm:right-0 sm:w-[440px] w-[320px] sm:pr-20 ">
            <div class="rounded-[18px] h-[344px]">
                <img class="rounded-[18px]" src="../assets/Designer-2.jpeg" alt="">
            </div>
        </div>








        <section class="pl-4 pr-4">
            <div class="py-16">
                <div class="mx-auto max-w-6xl text-gray-500">
                    <h1 class="text-custom-008533 font-baloo text-3xl pb-8 font-700 ">Quelques informations sur la
                        poubelle</h1>
                    <div class="relative">
                        <div class="relative z-10 grid gap-5 grid-cols-6 ">
                            <div id="div1"
                                class="col-span-full lg:col-span-2 overflow-hidden rounded-xl bg-custom-FAFAFA hover:scale-105 transition-transform duration-200 d-flex flex-column align-items-end  h-[250px]">



                                <div class="bg-custom-121212 flex flex-col justify-end text-white h-1/3 opacity-80 font-baloo p-2
                                text-start font-600 justify-center">
                                    <h1 class="">La poubelle est faite en acier afin de résister à la pluie, au choc et
                                        résiste dans le temps.</h1>
                                </div>



                            </div>


                            <div id="div2"
                                class="col-span-full lg:col-span-2 overflow-hidden rounded-xl bg-custom-FAFAFA hover:scale-105 transition-transform duration-200 d-flex flex-column align-items-end h-[250px]">


                                <div class="bg-custom-121212 flex flex-col justify-end text-white h-1/3 opacity-80 font-baloo p-2
                                text-start font-600 justify-center">
                                    <p>1,25 m de hauteur</p>
                                    <p>55 cm de largeur</p>
                                    <p>55cm de longueur</p>


                                </div>

                            </div>



                            <div id="div3"
                                class="col-span-full lg:col-span-2 overflow-hidden rounded-xl bg-custom-FAFAFA hover:scale-105 transition-transform duration-200 d-flex flex-column align-items-end  h-[250px]">


                                <div class="bg-custom-121212 flex flex-col justify-end text-white h-1/3 opacity-80 font-baloo p-2
                                text-start font-600 justify-center">
                                    <h1>Cette poubelle est fabriquée en France dans notre atelier situé en Bretagne.
                                    </h1>




                                </div>
                            </div>
                            <div id="div4"
                                class="col-span-full lg:col-span-3 overflow-hidden rounded-xl bg-custom-FAFAFA  hover:scale-105 transition-transform duration-200 d-flex flex-column align-items-end h-[300px]">


                                <div class="bg-custom-121212 flex flex-col justify-end text-white h-1/4 opacity-80 font-baloo p-2
                                text-start w-full font-600 justify-center">
                                    <h1>La poubelle peut contenir jusqu'à 378 litres de déchet. </h1>
                                </div>


                                <div class="absolute flex gap-1 top-2 left-3">







                                </div>
                            </div>
                            <div id="div5"
                                class="col-span-full lg:col-span-3 overflow-hidden rounded-xl bg-custom-FAFAFA hover:scale-105 transition-transform duration-200  d-flex flex-column align-items-end h-[300px]">


                                <div class="bg-custom-121212 flex flex-col justify-end text-white h-1/4 opacity-80 font-baloo p-2
                                text-start w-full font-600 justify-center">
                                    <h1>Scanner de QRcode pour s'identifier.</h1>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="py-16 mx-auto max-w-6xl mt-24 pl-2 pr-2 md:pl-5 md:pr-5">

            <h1 class="text-custom-008533 font-baloo text-3xl pb-8 font-700 ">Comment ça marche ?</h1>


            <div class="flex gap-6 w-full">

                <div id="car1"
                    class="w-1/3 h-[240px] bg-white rounded-[18px] hover:scale-105 transition-transform duration-200">

                </div>

                <div class="justify-end flex w-2/3 ">
                    <div class="py-16  w-full md:w-full lg:w-full rounded-[18px] h-[240px] mb-6 flex items-center ">

                        <div class=" w-4/5 ">

                            <p class="justify-self-end  font-baloo font-500 text-2xl text-white">Un scanner est placé
                                sur la poubelle, scannez votre code depuis l'application et jeter un ou plusieurs
                                déchets. </p>

                        </div>
                    </div>
                </div>

            </div>







            <div class="flex gap-6 w-full">



                <div class="justify-end flex w-2/3">
                    <div
                        class="py-16 w-full justify-end md:w-full lg:w-full rounded-[18px] h-[240px] mb-6 flex items-center ">

                        <div class=" w-4/5">

                            <p class="font-baloo font-500 justify-end text-right  text-2xl text-white ">Chaque déchet
                                jeté donne 1 point aussi appelé coco'Z. Vous pouvez retrouver vos coco'Z sur votre
                                application si vous possédez une.</p>


                        </div>
                    </div>
                </div>
                <div id="car2"
                    class="w-1/3 h-[240px] bg-white rounded-[18px] hover:scale-105 transition-transform duration-200">

                </div>

            </div>








            <div class="flex gap-6 w-full">

                <div id="car3"
                    class="w-1/3 h-[240px] bg-white rounded-[18px] hover:scale-105 transition-transform duration-200">

                </div>

                <div class="justify-end flex w-2/3">
                    <div class="py-16  w-full md:w-full lg:w-full rounded-[18px] h-[240px] mb-6 flex items-center ">

                        <div class=" w-4/5 max-w-[580px]">

                            <p class="  font-baloo font-500  text-2xl text-white">Les coco'Z sont
                                utilisables pour
                                des
                                services ou
                                objets selon vos
                                préférences. </p>

                        </div>
                    </div>
                </div>

            </div>






            <div class="flex gap-6 w-full">
                <div class="justify-end flex w-2/3">
                    <div class="py-16 w-full md:w-full lg:w-full rounded-[18px] h-[240px] mb-6 flex items-center ">
                        <div class="w-full">
                            <p class="font-baloo font-500 justify-self-end text-2xl text-white text-right">Alors vous
                                attendez quoi pour prendre rendez-vous et découvrir une nouvelle manière de moins
                                polluer !</p>
                        </div>
                    </div>
                </div>
                <div id="car4"
                    class="w-1/3 h-[240px] bg-white rounded-[18px] hover:scale-105 transition-transform duration-200">
                </div>
            </div>


        </section>






        <section class="py-16 mx-auto max-w-6xl mt-[200px]">

            <h1 class="text-custom-008533 font-baloo text-3xl pb-8 font-700 pl-5">Concernant l'application</h1>
            <div class="mx-auto  w-full rounded-[18px] h-[240px] mb-6 ">

                <div class="justify-center flex">

                    <p class="text-white font-baloo font-700 text-3xl mb-10 ">Deux offres</p>

                </div>

                <div class="grid lg:grid-cols-2 gap-4 lg:pl-5 lg:pr-5 pl-5 pr-5 justify-center">
                    <div
                        class="col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden relative p-8 rounded-[20px] border-[3px] border-solid border-white h-[210px] w-[360px] justify-self-end">
                        <div>
                            <div class="h-[250px]">
                                <div class="size-fit m-auto relative h-[250px]">
                                    <h1 class="text-custom-FAFAFA font-semibold">

                                        On vous fait votre application pour votre festival qui contient le système de
                                        points.

                                    </h1>


                                </div>
                                <div
                                    class="absolute top-[9.275rem] left-[1.225rem] rounded-[14px] bg-white w-[12.875rem] h-[2.25rem] overflow-hidden text-black">
                                    <router-link to="/NousContacter"><button
                                            class="absolute top-[0.438rem] left-[1.188rem] font-semibold">Prendre
                                            rendez-vous
                                        </button></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-span-full sm:col-span-3 lg:col-span-1 overflow-hidden relative p-8 rounded-[20px] border-[3px] border-solid border-white h-[210px] w-[360px]">
                        <div class="">
                            <div class=" m-auto relative h-[250px]">
                                <h1 class="text-custom-FAFAFA font-semibold">

                                    On reprend votre application déjà existante pour y intégrer notre système de points.

                                </h1>


                            </div>
                            <div
                                class="absolute top-[9.275rem] left-[1.225rem] rounded-[14px] bg-white w-[12.875rem] h-[2.25rem] overflow-hidden text-black">
                                <router-link to="/NousContacter"> <button
                                        class="absolute top-[0.438rem] left-[1.188rem] font-semibold">Prendre
                                        rendez-vous
                                    </button></router-link>
                            </div>
                            <div class="absolute flex gap-1 top-2 left-3">
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>




        <div class="pb-8 font-700  mx-auto  flex items-center justify-center mt-[250px]">
            <p class="text-custom-FAFAFA hover:text-custom-008533 font-baloo text-base underline " @click="scrollToTop">
                <a>Remonter en haut de la page</a>
            </p>
        </div>













    </main>













































    <footer class="bg-custom-121212 text-center text-white lg:text-left ">
        <div class="flex items-center justify-center  p-6 -white/10 lg:justify-between mb-3 ">

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
    },

    methods: {
        scrollToTop() {
            const scrollDuration = 450; 
            const scrollStep = -window.scrollY / (scrollDuration / 10);
            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        },

        setSelected(value) {
            this.selected = value;
        }
    },

    mounted() {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        });

        const scrollText1 = document.querySelector('#scroll-text1');
        observer.observe(scrollText1);



          const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        });

        const scrollText3 = document.querySelector('#scroll-text3');
        observer3.observe(scrollText3);



        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate2');
                } else {
                    entry.target.classList.remove('animate2');
                }
            });
        });

        const scrollText2 = document.querySelector('#scroll-text2');
        observer2.observe(scrollText2);



        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate2');
                } else {
                    entry.target.classList.remove('animate2');
                }
            });
        });

        const scrollText4 = document.querySelector('#scroll-text4');
        observer4.observe(scrollText4);


        const observer5 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        });

        const scrollText5 = document.querySelector('#scroll-text5');
        observer5.observe(scrollText5);






        const observer6 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate2');
                } else {
                    entry.target.classList.remove('animate2');
                }
            });
        });

        const scrollText6 = document.querySelector('#scroll-text6');
        observer6.observe(scrollText6);
    }



    
}

</script>

<style scoped>
#bg1 {
    opacity: 0, 5;
}


#canvas {}

#scroll-text1 h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 2em;
    color: #ffffff;
    background-color: transparent !important;
}

#scroll-text2 h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 2em;
    color: #ffffff;
    background-color: transparent !important;
}

#scroll-text3 h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 2em;
    color: #ffffff;
    background-color: transparent !important;
}



@keyframes slideUp {
    from {
        transform: translate(-52%, 60px);
    }

    to {
        transform: translate(-52%, -10);
    }
}

@keyframes slideUp1 {
    from {
        transform: translate(-52%, 50px);
    }

    to {
        transform: translate(-52%, -10);
    }
}


#div1 {
    background-image: url("../assets/poubelle1.png");
    background-size: cover;
    background-position: center;
    display: flex;
        flex-direction: column;
        justify-content: flex-end;
}

#div2 {
    background-image: url("../assets/poubelle2.png");
    background-size: cover;
    display: flex;
        flex-direction: column;
        justify-content: flex-end;
    
}

#div3 {
    background-image: url("../assets/poubelle3.jpg");
    display: flex;
        flex-direction: column;
        justify-content: flex-end;
;
}

#div4 {
    background-image: url("../assets/poubelle4.png");
    display: flex;
        flex-direction: column;
        justify-content: flex-end;
}

#div5 {
    background-image: url("../assets/poubelle5.png");
    background-size: cover;
    display: flex;
        flex-direction: column;
        justify-content: flex-end;
}

#car1 {
    background-image: url("../assets/designer-4.jpeg");
    background-size: cover;
    background-position: bott;
}

#car2 {
    background-image: url("../assets/Frame968.png");
    background-size: cover;
    background-position: center;
}

#car3 {
    background-image: url("../assets/Designer-3.jpeg");
    background-size: cover;
}

#car4 {
    background-image: url("../assets/car5.jpg");
    background-size: cover;
}

#bg3{
    background-size: auto;
}

#faireundevis {
    animation: slideUp1 1s;
}

 h2 {
    animation: slideUp 1s;
}

.animate {
    animation: fadeIn 0.8s ease-in-out ;
}

#imagefestival {
    background-size: auto;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

    from {
        transform: translate(-50%, 0px);
    }

    to {
        transform: translate(0%, 0px);
    }
}

.animate2 {
    animation: fadeIn2 1s ease-in-out both;
}

@keyframes fadeIn2 {
0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

    from {
        transform: translate(50%, 0px);
    }

    to {
        transform: translate(0%, 0px);
    }
}

</style>