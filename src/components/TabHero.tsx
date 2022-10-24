import { Tab } from '@headlessui/react';

import { Transition } from './animations/transition';
import Example from './CardSerosa';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const TabHero = () => {
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-700 shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            produto 1
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-700 shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            produto 2
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-700 shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            produto 3
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-700 shadow'
                  : 'text-blue-700 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            produto 4
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames('rounded-xl bg-transparent p-3')}>
            <Transition key={2}>
              <Example />
            </Transition>
          </Tab.Panel>
          <Tab.Panel className={classNames('rounded-xl bg-transparent p-3')}>
            <Transition key={2}>2</Transition>
          </Tab.Panel>
          <Tab.Panel className={classNames('rounded-xl bg-transparent p-3')}>
            <Transition key={2}>3</Transition>
          </Tab.Panel>
          <Tab.Panel className={classNames('rounded-xl bg-transparent p-3')}>
            <Transition key={2}>4</Transition>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
