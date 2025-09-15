import { NodeData } from "./types";

export const ANIMAL_DATA_TREE: Array<NodeData> = [
  {
    value: "1",
    title: "Animals",
    children: [
      {
        value: "1-1",
        title: "Mammals",
        children: [
          {
            value: "1-1-1",
            title: "Dogs",
            children: [
              {
                value: "1-1-1-1",
                title: "Breeds",
                children: [
                  { value: "1-1-1-1-1", title: "Golden Retriever" },
                  { value: "1-1-1-1-2", title: "German Shepherd" },
                  { value: "1-1-1-1-3", title: "Bulldog" },
                  { value: "1-1-1-1-4", title: "Shiba Inu" },
                ],
              },
            ],
          },
          {
            value: "1-1-2",
            title: "Cats",
            children: [
              { value: "1-1-2-1", title: "Siamese" },
              { value: "1-1-2-2", title: "Maine Coon" },
              { value: "1-1-2-3", title: "Persian" },
            ],
          },
        ],
      },
      {
        value: "1-2",
        title: "Birds",
        children: [
          { value: "1-2-1", title: "Eagle" },
          { value: "1-2-2", title: "Parrot" },
          { value: "1-2-3", title: "Penguin" },
        ],
      },
    ],
  },
];

export const NATURE_TREE: Array<NodeData> = [
  {
    value: "1",
    title: "Earth",
    children: [
      {
        value: "1-1",
        title: "Continents",
        children: [
          {
            value: "1-1-1",
            title: "Africa",
            children: [
              {
                value: "1-1-1-1",
                title: "North Africa",
                children: [
                  { value: "1-1-1-1-1", title: "Egypt - Cairo" },
                  { value: "1-1-1-1-2", title: "Morocco - Rabat" },
                  { value: "1-1-1-1-3", title: "Algeria - Algiers" },
                  { value: "1-1-1-1-4", title: "Tunisia - Tunis" },
                ],
              },
              {
                value: "1-1-1-2",
                title: "East Africa",
                children: [
                  { value: "1-1-1-2-1", title: "Kenya - Nairobi" },
                  { value: "1-1-1-2-2", title: "Ethiopia - Addis Ababa" },
                  { value: "1-1-1-2-3", title: "Tanzania - Dodoma" },
                  { value: "1-1-1-2-4", title: "Uganda - Kampala" },
                ],
              },
              {
                value: "1-1-1-3",
                title: "South Africa",
                children: [
                  { value: "1-1-1-3-1", title: "South Africa - Cape Town" },
                  { value: "1-1-1-3-2", title: "Zimbabwe - Harare" },
                  { value: "1-1-1-3-3", title: "Botswana - Gaborone" },
                  { value: "1-1-1-3-4", title: "Namibia - Windhoek" },
                ],
              },
            ],
          },
          {
            value: "1-1-2",
            title: "Europe",
            children: [
              {
                value: "1-1-2-1",
                title: "Western Europe",
                children: [
                  { value: "1-1-2-1-1", title: "France - Paris" },
                  { value: "1-1-2-1-2", title: "Germany - Berlin" },
                  { value: "1-1-2-1-3", title: "Netherlands - Amsterdam" },
                  { value: "1-1-2-1-4", title: "Belgium - Brussels" },
                ],
              },
              {
                value: "1-1-2-2",
                title: "Northern Europe",
                children: [
                  { value: "1-1-2-2-1", title: "Sweden - Stockholm" },
                  { value: "1-1-2-2-2", title: "Norway - Oslo" },
                  { value: "1-1-2-2-3", title: "Denmark - Copenhagen" },
                  { value: "1-1-2-2-4", title: "Finland - Helsinki" },
                ],
              },
              {
                value: "1-1-2-3",
                title: "Eastern Europe",
                children: [
                  { value: "1-1-2-3-1", title: "Poland - Warsaw" },
                  { value: "1-1-2-3-2", title: "Czechia - Prague" },
                  { value: "1-1-2-3-3", title: "Hungary - Budapest" },
                  { value: "1-1-2-3-4", title: "Romania - Bucharest" },
                ],
              },
            ],
          },
          {
            value: "1-1-3",
            title: "Asia",
            children: [
              {
                value: "1-1-3-1",
                title: "East Asia",
                children: [
                  {
                    value: "1-1-3-1-1",
                    title: "Japan",
                    children: [
                      { value: "1-1-3-1-1-1", title: "Tokyo" },
                      { value: "1-1-3-1-1-2", title: "Osaka" },
                      { value: "1-1-3-1-1-3", title: "Kyoto" },
                      { value: "1-1-3-1-1-4", title: "Hokkavalueo - Sapporo" },
                    ],
                  },
                  {
                    value: "1-1-3-1-2",
                    title: "China",
                    children: [
                      { value: "1-1-3-1-2-1", title: "Beijing" },
                      { value: "1-1-3-1-2-2", title: "Shanghai" },
                      { value: "1-1-3-1-2-3", title: "Shenzhen" },
                      { value: "1-1-3-1-2-4", title: "Guangzhou" },
                    ],
                  },
                  {
                    value: "1-1-3-1-3",
                    title: "South Korea",
                    children: [
                      { value: "1-1-3-1-3-1", title: "Seoul" },
                      { value: "1-1-3-1-3-2", title: "Busan" },
                      { value: "1-1-3-1-3-3", title: "Incheon" },
                    ],
                  },
                ],
              },
              {
                value: "1-1-3-2",
                title: "South Asia",
                children: [
                  {
                    value: "1-1-3-2-1",
                    title: "India",
                    children: [
                      { value: "1-1-3-2-1-1", title: "Delhi" },
                      { value: "1-1-3-2-1-2", title: "Mumbai" },
                      { value: "1-1-3-2-1-3", title: "Bangalore" },
                      { value: "1-1-3-2-1-4", title: "Chennai" },
                    ],
                  },
                  {
                    value: "1-1-3-2-2",
                    title: "Pakistan",
                    children: [
                      { value: "1-1-3-2-2-1", title: "Islamabad" },
                      { value: "1-1-3-2-2-2", title: "Karachi" },
                      { value: "1-1-3-2-2-3", title: "Lahore" },
                    ],
                  },
                  {
                    value: "1-1-3-2-3",
                    title: "Sri Lanka",
                    children: [
                      { value: "1-1-3-2-3-1", title: "Colombo" },
                      { value: "1-1-3-2-3-2", title: "Kandy" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            value: "1-1-4",
            title: "Americas",
            children: [
              {
                value: "1-1-4-1",
                title: "North America",
                children: [
                  {
                    value: "1-1-4-1-1",
                    title: "USA",
                    children: [
                      {
                        value: "1-1-4-1-1-1",
                        title: "California - Los Angeles",
                      },
                      {
                        value: "1-1-4-1-1-2",
                        title: "California - San Francisco",
                      },
                      { value: "1-1-4-1-1-3", title: "Texas - Houston" },
                      { value: "1-1-4-1-1-4", title: "New York - NYC" },
                      { value: "1-1-4-1-1-5", title: "Florvaluea - Miami" },
                    ],
                  },
                  { value: "1-1-4-1-2", title: "Canada - Toronto" },
                  { value: "1-1-4-1-3", title: "Canada - Vancouver" },
                  { value: "1-1-4-1-4", title: "Mexico - Mexico City" },
                ],
              },
              {
                value: "1-1-4-2",
                title: "South America",
                children: [
                  { value: "1-1-4-2-1", title: "Brazil - Rio de Janeiro" },
                  { value: "1-1-4-2-2", title: "Argentina - Buenos Aires" },
                  { value: "1-1-4-2-3", title: "Chile - Santiago" },
                  { value: "1-1-4-2-4", title: "Peru - Lima" },
                ],
              },
            ],
          },
          {
            value: "1-1-5",
            title: "Oceania",
            children: [
              {
                value: "1-1-5-1",
                title: "Australia",
                children: [
                  { value: "1-1-5-1-1", title: "Sydney" },
                  { value: "1-1-5-1-2", title: "Melbourne" },
                  { value: "1-1-5-1-3", title: "Brisbane" },
                  { value: "1-1-5-1-4", title: "Perth" },
                ],
              },
              {
                value: "1-1-5-2",
                title: "New Zealand",
                children: [
                  { value: "1-1-5-2-1", title: "Auckland" },
                  { value: "1-1-5-2-2", title: "Wellington" },
                  { value: "1-1-5-2-3", title: "Christchurch" },
                ],
              },
              {
                value: "1-1-5-3",
                title: "Pacific Islands",
                children: [
                  { value: "1-1-5-3-1", title: "Fiji - Suva" },
                  { value: "1-1-5-3-2", title: "Samoa - Apia" },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        title: "Oceans",
        children: [
          { value: "1-2-1", title: "Atlantic Ocean" },
          { value: "1-2-2", title: "Pacific Ocean" },
          { value: "1-2-3", title: "Indian Ocean" },
          { value: "1-2-4", title: "Arctic Ocean" },
          { value: "1-2-5", title: "Southern Ocean" },
        ],
      },
      {
        value: "1-3",
        title: "Seas",
      },
    ],
  },
];

export const FILE_TREE: Array<NodeData> = [
  {
    value: "1",
    title: "src",
    children: [
      {
        value: "1-1",
        title: "components",
        children: [
          { value: "1-1-1", title: "Button.tsx" },
          { value: "1-1-2", title: "TreeView.tsx" },
        ],
      },
      {
        value: "1-2",
        title: "pages",
        children: [
          { value: "1-2-1", title: "index.tsx" },
          { value: "1-2-2", title: "about.tsx" },
        ],
      },
    ],
  },
];

export const ORGANIZATION_TREE: Array<NodeData> = [
  {
    value: "1",
    title: "Company",
    children: [
      {
        value: "1-1",
        title: "Engineering",
        children: [
          { value: "1-1-1", title: "Frontend Team" },
          { value: "1-1-2", title: "Backend Team" },
        ],
      },
      {
        value: "1-2",
        title: "Marketing",
        children: [
          { value: "1-2-1", title: "Content" },
          { value: "1-2-2", title: "SEO" },
        ],
      },
      {
        value: "1-3",
        title: "HR & Operations",
      },
      {
        value: "1-4",
        title: "Sales",
      },
    ],
  },
];
