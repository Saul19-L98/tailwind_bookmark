//Background image.
import iArrow from '../images/icon-arrow.svg';
import iClose from '../images/icon-close.svg';
import iError from '../images/icon-error.svg';
import iHamburger from '../images/icon-hamburger.svg';

//Social
import iTwitter from '../images/icon-twitter.svg';
import iGithub from '../images/icon-github.svg';
// import iFacebook from '../images/icon-facebook.svg';

//Illustration
import hero from '../images/illustration-hero.svg';
import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';

//Logo
import lBfooter from '../images/logo-bookmark-footer.svg';
import lBookmark from '../images/logo-bookmark.svg';
import lChrome from '../images/logo-chrome.svg';
import lFirefox from '../images/logo-firefox.svg';
import lOpera from '../images/logo-opera.svg';

export const viewTemplate = () => {
    const view = `
        <nav class="container relative mx-auto p-6">
        <div class="flex items-center justify-between space-x-20 my-6">
            <div class="z-30">
                <img src="${lBookmark}" alt="logo" id="logo">
            </div>
            <div class="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
                <a href="#features" class="tracking-widdest hover:text-softRed">
                    Features
                </a>
                <a href="#download" class="tracking-widdest hover:text-softRed">
                    Download
                </a>
                <a href="#faq" class="tracking-widdest hover:text-softRed">
                    FAQ
                </a>
                <a href="#" class="px-8 py-2 text-white bg-softRed Border-2 border-softRed rounded-lg shadow-end hover:text-sofRed hover:bg-veryDarkBlue">LOGIN</a>     
            </div>
            <button id="menu-btn" class="z-30 block md:hidden focus:outline-none hamburger">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
        </div>
        <div id="menu" class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue">
            <div class="w-full py-3 text-center">
                <a href="#features" class="block hover:text-softRed">Features</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#download" class="block hover:text-softRed">Download</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#faq" class="block hover:text-softRed">FAQ</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#" class="block hover:text-softRed">Login</a>
            </div>
        </div>
    </nav>
    <section id="hero">
        <div class="container flex flex-col-reverse p-6 mx-auto p-6 lg:flex-row lg:mb-0">
                <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                    <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
                        A Simple Bookmark Manager
                    </h1>
                    <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                        A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
                        <a href="#" class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">Get It On Chrome</a>
                        <a href="#" class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">Get It On Firefox</a>
                    </div>
                </div>
            <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                <div class="bg-hero"></div>
                <img src="${hero}" alt="" class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible">
            </div>
        </div>
    </section>
    <section id="features">
        <div class="container mx-auto mt-16 px-6">
            <h2 class="mb-6 text-4xl font-semibold text-center">
                Features
            </h2>
            <p class="max-w-md mx-auto text-center text-grayishBlue">
                Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
        </div>
    </section>
    <section id="tabs">
        <div class="container relative mx-auto my-auto my-6 mb-32 mt-12 px-6">
            <div class="bg-tabs">
                <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
                    <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-1">
                        <div class="py-5 border-b-4 border-softRed" data-target="panel-1">
                            Simple Bookmarking
                        </div>
                    </div>
                    <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-2">
                        <div class="py-5" data-target="panel-2">
                            Speedy Searching
                        </div>
                    </div>
                    <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-3">
                        <div class="py-5" data-target="panel-3">
                            Easy Sharing
                        </div>
                    </div>
                </div>
            </div>
            <div id="panels" class="container mx-auto">
                <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                    <div class="flex justify-center md:w-1/2">
                        <img src="${tab1}" alt="#" class="relative z-10">
                    </div>
                    <div class="flex flex-col space-y-8 md:w-1/2">
                        <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                            Bookmark in one click
                        </h3>
                        <p class="max-w-md text-center text-grayishBlue md:text-left">
                            Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorie sites.
                        </p>
                        <div class="mx-auto md:mx-0">
                            <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
                    <div class="flex justify-center md:w-1/2">
                        <img src="${tab2}" alt="#" class="relative z-10">
                    </div>
                    <div class="flex flex-col space-y-8 md:w-1/2">
                        <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                            Intelligent Search
                        </h3>
                        <p class="max-w-md text-center text-grayishBlue md:text-left">
                            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                        </p>
                        <div class="mx-auto md:mx-0">
                            <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
                    <div class="flex justify-center md:w-1/2">
                        <img src="${tab3}" alt="#" class="relative z-10">
                    </div>
                    <div class="flex flex-col space-y-8 md:w-1/2">
                        <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                            Share your bookmarks
                        </h3>
                        <p class="max-w-md text-center text-grayishBlue md:text-left">
                            Easily share your bookmarks and collections with others. Create a shareble a link that you can send at the click of a button.
                        </p>
                        <div class="mx-auto md:mx-0">
                            <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="download" class="lg:mt-60">
        <div class="container mx-auto px-6">
            <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">
                Download the extension
            </h2>
            <p class="max-w-lg mx-auto text-center text-grayishBlue">
                We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.
            </p>
        </div>
    </section>
    <section id="download-boxes" class="py-32">
        <div class="relative flex flex-col items-center max-w-5xl mx-auto  space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
            <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
                <div class="flex justify-center">
                    <img src="${lChrome}" alt="#">
                </div>
                <h5 class="pt-6 text-xl font-bold">Add to Chrome</h5>
                <p class="text-gray-400">Minimum Version 62</p>
                <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                    <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white hover:border-softBlue">Add & Install Extension</a>
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
                    <div class="flex justify-center">
                        <img src="${lFirefox}" alt="#">
                    </div>
                    <h5 class="pt-6 text-xl font-bold">Add to Firefox</h5>
                    <p class="text-gray-400">Minimum Version 55</p>
                    <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                        <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white hover:border-softBlue">Add & Install Extension</a>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
                    <div class="flex justify-center">
                        <img src="${lOpera}" alt="#">
                    </div>
                    <h5 class="pt-6 text-xl font-bold">Add to Opera</h5>
                    <p class="text-gray-400">Minimum Version 46</p>
                    <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                        <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white hover:border-softBlue">Add & Install Extension</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="faq">
        <div class="container mx-auto">
            <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">
                Frequently Asked Questions
            </h2>
            <p class="max-w-lg px-6 mx-auto text-center text-grayishBlue">
                Here are some of our FAQs. IF you have any other questions you'd like answered please feel free to email us.
            </p>
        </div>
    </section>
    <section id="faq-accordion">
        <div class="container mx-auto px-6 mb-32">
            <div class="max-w-2xl m-8 mx-auto overflow-hidden">
                <div class="py-1 border-b outline-none group" tabindex="1">
                    <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                        <div class="transition duration-500 ease group-hover:text-red-500">
                            What is Bookmark?
                        </div>
                        <div class="transition duration-500 ease group-focus:rotate-180 group-focus:-rotate-180 group-focus:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    d="M1 1l8 8 8-8"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                        <p class="py-2 text-justify text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                            repellat amet doloribus consequuntur eos similique provident
                            tempora voluptates iure quia fuga dicta voluptatibus culpa
                            mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>
                <div class="py-1 border-b outline-none group" tabindex="2">
                    <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                        <div class="transition duration-500 ease group-hover:text-red-500">
                            How can I request a new browser?
                        </div>
                        <div class="transition duration-500 ease group-focus:rotate-180 group-focus:-rotate-180 group-focus:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    d="M1 1l8 8 8-8"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                        <p class="py-2 text-justify text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                            repellat amet doloribus consequuntur eos similique provident
                            tempora voluptates iure quia fuga dicta voluptatibus culpa
                            mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>
                <div class="py-1 border-b outline-none group" tabindex="3">
                    <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                        <div class="transition duration-500 ease group-hover:text-red-500">
                            Is ther a mobile app?
                        </div>
                        <div class="transition duration-500 ease group-focus:rotate-180 group-focus:-rotate-180 group-focus:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    d="M1 1l8 8 8-8"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                        <p class="py-2 text-justify text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                            repellat amet doloribus consequuntur eos similique provident
                            tempora voluptates iure quia fuga dicta voluptatibus culpa
                            mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>
                <div class="py-1 border-b outline-none group" tabindex="4">
                    <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                        <div class="transition duration-500 ease group-hover:text-red-500">
                            What about other Chromium browsers
                        </div>
                        <div class="transition duration-500 ease group-focus:rotate-180 group-focus:-rotate-180 group-focus:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    d="M1 1l8 8 8-8"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                        <p class="py-2 text-justify text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                            repellat amet doloribus consequuntur eos similique provident
                            tempora voluptates iure quia fuga dicta voluptatibus culpa
                            mollitia recusandae delectus id suscipit labore?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="newsletter" class="bg-softBlue">
        <div class="max-w-lg mx-auto py-24">
            <p class="mb-6 text-lg tracking-widest text-center text-white uppercase">
                35,000+ ALready Joined
            </p>
            <h2 class="px-3 mb-6 text-3xl font-semibol text-center text-white md:text-4xl">
                Stay up-to-date with what we're doing
            </h2>
            <form action="" class="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
                <div class="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
                <input
                    type="text"
                    class="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                    placeholder="Enter your email address"
                />
                <input
                    type="submit"
                    class="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
                    value="Contact Us"
                />
                </div>
            </form>
        </div>
    </section>
    <footer class="py-16 bg-veryDarkBlue">
        <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
            <div class="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
                <img src="${lBfooter}" alt="#" class="mb-1">
                <a href="#features" class="uppercase hover:text-softRed">Features</a>
                <a href="#download" class="uppercase hover:text-softRed">Download</a>
                <a href="#faq" class="uppercase hover:text-softRed">FAQ</a>
            </div>
            <div class="flex space-x-10">
                <a href="https://github.com/Saul19-L98/tailwind_bookmark" target="_blank" rel="noopener noreferrer">
                    <img src="${iGithub}" alt="" class="h-6 ficon">
                </a>
                <a href="#">
                    <img src="${iTwitter}" alt="twitter" class="h-6 ficon">
                </a>
            </div>
        </div>
    </footer>
    `;
    return view;
}