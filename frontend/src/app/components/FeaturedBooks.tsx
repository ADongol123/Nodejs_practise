import { Tab } from '@headlessui/react'
import React from 'react'
import BookCard from './BookCard'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const FeaturedBooks = () => {
  const categories = {
    "Featured": [
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      }
    ],
    "On Sale": [
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      }
    ],
    "Most Viewed": [
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 1,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 2,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 3,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 4,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      },
      {
        id: 5,
        image: "",
        name: "Rich Dad Poor Dad",
        brand: "Unique",
        price: "2.3"
      }
    ]
  }
  const [tab, setTabs] = React.useState("Featured")
  return (
    <div >
      <h1 className="text-center font-medium text-[30px]">Featured Books</h1>
      <div className="w-full px-2 sm:px-0 flex flex-col items-center justify-center">
        <Tab.Group>
          <Tab.List className="flex gap-5 mb-5">
            {Object.keys(categories)?.map((details: any) =>
              <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 text-[black] whitespace-nowrap', 'active: outline-none',
                  selected
                  && 'border-b border-[black]'
                )
              }>{details}</Tab>)}
          </Tab.List>
          <Tab.Panels className="w-[80%] mx-auto">
            {Object.values(categories).map((details, ids) => (
              <Tab.Panel key={ids} className="w-full">
                <div className="grid grid-cols-5 gap-4 grid-flow-row">
                  {details?.map((post) => (
                    <div key={post.id} className="w-full">
                      <BookCard
                        image={post.image}
                        name={post.name}
                        brand={post.brand}
                        price={post.price}
                      />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>

        </Tab.Group>
      </div>
    </div>
  )
}

export default FeaturedBooks