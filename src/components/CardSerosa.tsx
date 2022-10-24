const product = {
  name: 'TRIPA BOVINA',
  images: [
    {
      src: 'http://www.uniaocasings.com.br/wp-content/uploads/2016/07/beef-round1.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'http://www.uniaocasings.com.br/wp-content/uploads/2016/07/%5E007A31E991403E8F17513017DE3B1DE15EA3A5DCF26C05AF01%5Epimgpsh_fullsize_distr-1.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'http://www.uniaocasings.com.br/wp-content/uploads/2016/07/%5E56A2C6633BEF4D4AE291ADE093D4A2F49C7C3C0774A33E4758%5Epimgpsh_fullsize_distr.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
  ],
  description:
    'Produzidas com a mais alta qualidade, o processo segue todas as exigências do mercado a fim de atender e satisfazer todas as necessidades de nossos clientes e parceiros. O uso deste produto é indicado para a fabricação de linguiça calabresa, portuguesa, paio e também de salames do tipo italiano e hamburguês.',
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

export default function Example() {
  return (
    <div className="bg-white rounded-lg">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-b lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-[#1a5970] dark:text-white">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Calibre
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Capacidade de Embutimento
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Calibre
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Capacidade de Embutimento
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border border-[#1a5970]">
                  <td className="py-4 px-6">35-38 mm</td>
                  <td className="py-4 px-6">30 kg</td>
                  <td className="py-4 px-6">45-50 mm</td>
                  <td className="py-4 px-6">29-32 kg</td>
                </tr>
                <tr className="bg-white border border-[#1a5970]">
                  <td className="py-4 px-6">35-38 mm</td>
                  <td className="py-4 px-6">30 kg</td>
                  <td className="py-4 px-6">45-50 mm</td>
                  <td className="py-4 px-6">29-32 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
