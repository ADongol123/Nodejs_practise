import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoIosArrowDown } from "react-icons/io"
const DropDown = ({ title, data }: any) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center ">
            <div className="flex items-center gap-1">
              {title}
              <IoIosArrowDown className="h-4 w-4" />
            </div>
            {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data?.map((details: any) => <Menu.Item>
                {({ active }) => (
                  <div className={`${active ? 'bg-[#fff6f7]' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm  `}>
                    <button
                      className="transition-transform duration-300 ease-in-out hover:translate-x-4"
                    >
                      {details?.title}
                    </button>
                  </div>
                )}
              </Menu.Item>)}

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div >
  )
}

export default DropDown