import { TabHero } from "./TabHero"

function Features() {
    return (
        <section className="relative">
            <div
                className="absolute inset-0 bg-[#eeeeee] pointer-events-none mb-16"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-10 md:pt-10">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Explore nossos Produtos.</h1>
                        <p className="text-xl text-gray-600">
                            Produtos produzidos com a mais alta qualidade, com certificação
                            SIF(Brasil), que garante o selo de qualidade federal.
                        </p>
                    </div>
                    <TabHero />
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                        >

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
