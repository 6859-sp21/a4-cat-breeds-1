## Design Choices

In the assignment, I made 3 main design decisions: (1) how to contextualize a cat in the dataset, (2) the logic of the left-hand side panel and (3) whether to have the “close” button on the cat card. I will explain them one by one in the following paragraphs.

The “highlight” and “histogram” functionalities are the most important features in this visualization. Without them, this visualization is just a filtering tool. ”Histogram” shows the distribution of certain qualities of the cat and thus allows the user to have a vague idea such as “most cats have short hair”. “Highlight” allows the user to contextualize the cat that they are currently looking at in the cat pool. By directly showing the metadata of the cat in the panel, the user will have a clear idea of “how does my cat compare to other cats”.

The logic of the left-hand-side panel is a bit hard to figure out. I opt for an “or” logic for the cat size, hair length and shedding and an “and” logic for cat temperament. In particular, when a user selects both “long hair” and “short hair”, they mean “I want a cat that is either long hair or short hair”. When a use selects “affectionate” and “playful”, they mean that “I want a cat that is both affectionate and playful”. The logic of different filters combine with “and”. I choose to do it this way because the options in the first three filters are almost mutually exclusive, and combining with an “and” logic doesn’t make sense, while in the cat temper, it makes sense to logically combine different options with an “and”.

When I first designed the visualization, I wanted the cat card (the detail pages) to have a close button and the users will click the close button to close the cat card and continue on the filtering. However, I made this decision to not have a close button but instead have the user click on anywhere to close a cat card. This comes at a cost that the user is no longer able to copy and paste info from the page, but I believe it will greatly enhance the number of cat that a person touches on and thus allow the user to have a better whole-picture of different cat breeds.

## Development Process

I did not collaborate with anyone in this assignment.
In terms of workload, my situation is a bit different. I checked in with the TAs about this so this is indeed allowed. Before submitting this assignment, I already had a working prototype here for my other class. Note that although it looks very similar to my current website, it was implemented in a completely different library/language. The old website was implemented in p5.js three years ago and the new one is implemented in React.js. I choose to do this because I don’t think p5 is a good library to perform this task since it is CPU consuming and doesn’t directly interact with the dom. For example, the left hand side panel in the old website was completely fake and cannot be fixed so I had to remove it when the user scrolled down. Also, the design has changed in that I added the highlight and histogram features, which turns it from a one-way filter to a two-way visualization.
The most time was spent on (1) researching on how to connect d3 with React (2) find out how to implement the two-way data flow in React and (3) actually implementing everything in React.
The first part took me about a day, both to learn d3 and to find out ways to connect it with React and try to get the data out. In the end, I found that it’s just easier to directly interact with the DOM in React since my design is entirely rectangular.
The second part also took about a day. I relearned React on how to trigger a state change in a component’s child object as well as how to have other children reflect the change. In particular, this is reflected in the filter function (from panels to cat display) and the highlight function (from cat display to panels)
The third part also took about a day. After I figured out a minimum working prototype in React, I made various components and tweaked the CSS. All of them together took about an entire day, which is around 14 hours.

## Data Source

### Data Source
Wolfram Alpha API

### Site Name
James Grady

### Picture Source
vetstreet.com

cat-breeds-encyclopedia.com

cattime.com

pets4homes.com

omlet.co.uk

petguide.com

burmilla.us

catbreedselector.com

petpaw.com.au

my-pet-shop-ds.wikia.com

purina.com

purrfectcatbreeds.com

gccfcats.org

cat-breed-info.com

localkittensforsale.com
