// Updated story data 

// Text-only stories from the PDF 
const textOnlyStories = [
    {
        id: 1,
        title: "The Cat Who Lost His Meow",
        genre: "animal",
        genreName: "Animal Friends",
        excerpt: "Tom was a big orange cat. He lived in a blue house. Tom loved to meow. But one day, Tom woke up and opened his mouth to meow. But no sound came out!",
        content: `<p>Tom was a big orange cat. He lived in a blue house. Tom loved to meow. He meowed in the morning. He meowed at lunch. He meowed at night.</p>
        
        <p>One day, Tom woke up. He opened his mouth to meow. But no sound came out! Tom tried again. Still no meow!</p>
        
        <p>"Oh no!" thought Tom. "Where is my meow?"</p>
        
        <p>Tom looked under his bed. No meow there. He looked in his food bowl. No meow there either. He looked in the yard. Still no meow!</p>
        
        <p>Tom felt sad. How could he be a cat with no meow?</p>
        
        <p>Then Tom saw his friend Pip the mouse. Pip was very small and gray.</p>
        
        <p>"Hi Tom!" said Pip. "You look sad. What is wrong?"</p>
        
        <p>Tom opened his mouth. He tried to tell Pip about his lost meow. But no words came out!</p>
        
        <p>Pip was smart. "Did you lose your meow?" asked Pip.</p>
        
        <p>Tom nodded his head yes.</p>
        
        <p>"I will help you find it!" said Pip.</p>
        
        <p>Pip and Tom looked everywhere. They looked in the garden. They looked by the pond. They looked in the barn.</p>
        
        <p>Then Pip had an idea. "Maybe your meow is stuck!" said Pip.</p>
        
        <p>"Stuck where?" Tom wanted to ask. But he could not talk.</p>
        
        <p>"Maybe it is stuck in your throat. Try drinking some water," said Pip.</p>
        
        <p>Tom drank a big bowl of water. Then he tried to meow.</p>
        
        <p>"Meow!" came out loud and clear!</p>
        
        <p>Tom was so happy! His meow was back!</p>
        
        <p>"Thank you, Pip!" meowed Tom. "You are the best friend ever!"</p>
        
        <p>From that day on, Tom never forgot to drink water. And he never lost his meow again.</p>`,
        readingTime: "5 min read",
        tags: ["Cat", "Mouse", "Friendship", "Problem Solving"],
        image: "linear-gradient(135deg, #ff9a56, #ffad56)"
    },
    {
        id: 2,
        title: "The Dog Who Could Not Bark",
        genre: "animal",
        genreName: "Animal Friends",
        excerpt: "Spot was a little white dog with black spots. All dogs bark. But Spot could not bark. When other dogs said 'Woof!' Spot could only say 'Squeak!'",
        content: `<p>Spot was a little white dog with black spots. All dogs bark. But Spot could not bark.</p>
        
        <p>When other dogs said "Woof!" Spot could only say "Squeak!"</p>
        
        <p>The other dogs laughed at Spot. "You sound like a toy!" they said. This made Spot very sad.</p>
        
        <p>One day, Spot met a new friend. Her name was Bell. Bell was a small bird with yellow feathers.</p>
        
        <p>"Why do you look sad?" asked Bell.</p>
        
        <p>"I cannot bark like other dogs," said Spot. "I can only squeak."</p>
        
        <p>"Show me," said Bell.</p>
        
        <p>Spot tried to bark. "Squeak!" he said.</p>
        
        <p>Bell smiled. "That is not a bad sound! It is just different."</p>
        
        <p>"But I want to bark like other dogs," said Spot.</p>
        
        <p>"Maybe you do not need to bark," said Bell. "Maybe your squeak is special."</p>
        
        <p>Just then, they heard a cry for help. "Help! Help!" someone called.</p>
        
        <p>A little girl was stuck in a tree. She could not get down. The other dogs were barking loudly. "Woof! Woof! Woof!" But no one could hear the girl over all the barking.</p>
        
        <p>Spot had an idea. He made his special sound. "Squeak! Squeak! Squeak!"</p>
        
        <p>The girl heard Spot's squeak. It was different from the barking. She looked down and saw Spot.</p>
        
        <p>"Here I am!" called the girl. "I am stuck in the tree!"</p>
        
        <p>Soon, people came to help the girl get down. She was safe!</p>
        
        <p>"Thank you, Spot!" said the girl. "Your special squeak saved me!"</p>
        
        <p>From that day on, Spot was proud of his squeak. He learned that being different can be good. And all the other dogs thought Spot was very brave.</p>`,
        readingTime: "6 min read",
        tags: ["Dog", "Bird", "Being Different", "Helping Others"],
        image: "linear-gradient(135deg, #74b9ff, #0984e3)"
    },
    {
        id: 3,
        title: "The Rabbit Who Could Not Hop",
        genre: "animal",
        genreName: "Animal Friends",
        excerpt: "Benny was a small brown rabbit. All rabbits hop. But Benny could not hop. His legs were too short. When other rabbits hopped fast, Benny could only walk slowly.",
        content: `<p>Benny was a small brown rabbit. All rabbits hop. But Benny could not hop. His legs were too short. When other rabbits hopped fast, Benny could only walk slowly.</p>
        
        <p>"Come on, Benny!" called his friends. "Hop with us!"</p>
        
        <p>But Benny could not keep up. He felt left out.</p>
        
        <p>One day, Benny was walking alone. He met a turtle named Shelly. Shelly was green and moved very slowly.</p>
        
        <p>"Hi there," said Shelly. "You look sad."</p>
        
        <p>"I cannot hop like other rabbits," said Benny. "I am too slow."</p>
        
        <p>"I am slow too," said Shelly. "But I still have fun."</p>
        
        <p>"How?" asked Benny.</p>
        
        <p>"I see things that fast animals miss," said Shelly. "Want to walk with me?"</p>
        
        <p>Benny and Shelly walked together. They saw pretty flowers. They saw busy ants. They saw a bird building a nest.</p>
        
        <p>"Wow!" said Benny. "I never saw these things before!"</p>
        
        <p>Then they heard crying. A baby bird had fallen from its nest. The nest was high in a tree.</p>
        
        <p>The other rabbits hopped by. They were going too fast to notice the baby bird.</p>
        
        <p>But Benny saw the baby bird. "We have to help!" he said.</p>
        
        <p>Benny could not hop up the tree. But he was good at climbing. Slowly and carefully, Benny climbed up the tree. He put the baby bird back in its nest.</p>
        
        <p>"Thank you!" chirped the baby bird.</p>
        
        <p>The mother bird was so happy. "You saved my baby!" she said.</p>
        
        <p>From that day on, Benny was proud to be different. He learned that slow can be good too. And he made many new friends who liked to walk and explore.</p>`,
        readingTime: "6 min read",
        tags: ["Rabbit", "Turtle", "Slow and Steady", "Helping Others"],
        image: "linear-gradient(135deg, #55a3ff, #003d82)"
    },
    {
        id: 4,
        title: "The Fish Who Was Afraid of Water",
        genre: "animal",
        genreName: "Animal Friends",
        excerpt: "Finn was a little gold fish. He lived in a big blue pond. But Finn had a problem. He was afraid of deep water!",
        content: `<p>Finn was a little gold fish. He lived in a big blue pond. But Finn had a problem. He was afraid of deep water!</p>
        
        <p>Finn stayed near the edge of the pond. He never swam to the middle. The other fish thought this was very strange.</p>
        
        <p>"Come swim with us, Finn!" called his friends.</p>
        
        <p>"No thank you," said Finn. "I like it here by the edge."</p>
        
        <p>One day, a new fish came to the pond. Her name was Splash. She had silver scales that sparkled.</p>
        
        <p>"Hi!" said Splash. "Want to swim with me?"</p>
        
        <p>"I cannot swim in deep water," said Finn. "I am scared."</p>
        
        <p>"That is okay," said Splash. "We can swim in shallow water."</p>
        
        <p>Splash and Finn swam together near the edge. They had fun playing games and looking for food.</p>
        
        <p>"See?" said Splash. "Swimming is fun!"</p>
        
        <p>Slowly, Splash helped Finn swim a little deeper. Just a little bit each day.</p>
        
        <p>"You are doing great!" said Splash.</p>
        
        <p>One day, they heard a splash. A little frog had fallen into the deep part of the pond. The frog could not swim well. He was in trouble!</p>
        
        <p>"Help!" called the frog.</p>
        
        <p>The other fish were too far away. Only Finn and Splash were close enough to help.</p>
        
        <p>"I have to save him," said Finn. "Even if I am scared."</p>
        
        <p>Finn swam deeper than he ever had before. He reached the frog just in time. Together, Finn and Splash helped the frog get to safety.</p>
        
        <p>"Thank you, Finn!" said the frog. "You are very brave!"</p>
        
        <p>Finn felt proud. He had faced his fear to help someone else. From that day on, Finn was not afraid of deep water anymore. He learned that being brave means doing the right thing, even when you are scared.</p>`,
        readingTime: "7 min read",
        tags: ["Fish", "Friendship", "Overcoming Fear", "Bravery"],
        image: "linear-gradient(135deg, #74b9ff, #0984e3)"
    },
    {
        id: 5,
        title: "The Bird Who Could Not Fly",
        genre: "animal",
        genreName: "Animal Friends",
        excerpt: "Chirp was a small red bird. All birds fly. But Chirp could not fly. His wings were too small. When other birds flew high in the sky, Chirp had to stay on the ground.",
        content: `<p>Chirp was a small red bird. All birds fly. But Chirp could not fly. His wings were too small. When other birds flew high in the sky, Chirp had to stay on the ground.</p>
        
        <p>"I wish I could fly," said Chirp sadly.</p>
        
        <p>One day, Chirp met a frog named Hop. Hop was green with big eyes.</p>
        
        <p>"Why do you look sad?" asked Hop.</p>
        
        <p>"I cannot fly like other birds," said Chirp.</p>
        
        <p>"I cannot fly either," said Hop. "But I can do other things."</p>
        
        <p>"Like what?" asked Chirp.</p>
        
        <p>"I can jump very high," said Hop. "And I can swim. What can you do?"</p>
        
        <p>Chirp thought about it. "I can sing," he said.</p>
        
        <p>"That is wonderful!" said Hop. "I love to hear birds sing."</p>
        
        <p>Chirp sang a beautiful song. Hop clapped his hands.</p>
        
        <p>Just then, they heard someone crying. A little mouse was lost in the tall grass. She could not find her way home.</p>
        
        <p>"Help me!" cried the mouse. "I am lost!"</p>
        
        <p>The flying birds were too high up to hear the mouse. But Chirp was on the ground. He heard her right away.</p>
        
        <p>"I will help you!" said Chirp.</p>
        
        <p>Chirp could not fly, but he could walk through the grass. He followed the sound of the mouse's voice.</p>
        
        <p>"Keep calling!" said Chirp. "I will find you!"</p>
        
        <p>Soon, Chirp found the little mouse. She was scared and alone.</p>
        
        <p>"Do not worry," said Chirp. "I will help you get home."</p>
        
        <p>Chirp sang a loud, clear song. The mouse's family heard the song. They followed the sound and found their little mouse.</p>
        
        <p>"Thank you, Chirp!" said the mouse family. "Your song saved our little one!"</p>
        
        <p>From that day on, Chirp was proud of his voice. He learned that everyone has special gifts. You do not need to fly to be important.</p>`,
        readingTime: "6 min read",
        tags: ["Bird", "Frog", "Special Talents", "Helping Others"],
        image: "linear-gradient(135deg, #fd79a8, #e84393)"
    }
];

// Audio stories 
const audioStories = [
    {
        id: 1,
        title: "The Dragon Who Couldn't Roar",
        description: "Join Tanisha, Talia, and Taya as they help a baby dragon named Pip find his roar!",
        audioFile: "audio/Story1TheDragonWhoCouldn'tRoar.mp3",
        textFile: "text/Story1TheDragonWhoCouldn'tRoar.txt",
        timingFile: "timings/Story1TheDragonWhoCouldn'tRoar_timings.json"
    },
    {
        id: 2,
        title: "The Midnight Garden Express",
        description: "All aboard the magical train that travels through enchanted gardens!",
        audioFile: "audio/Story2TheMidnightGardenExpress.mp3",
        textFile: "text/Story2TheMidnightGardenExpress.txt",
        timingFile: "timings/Story2TheMidnightGardenExpress_timings.json"
    },
    {
        id: 3,
        title: "The Cloud Shepherd's Apprentices",
        description: "Learn about the magical job of herding clouds across the sky!",
        audioFile: "audio/Story3TheCloudShepherd'sApprentices.mp3",
        textFile: "text/Story3TheCloudShepherd'sApprentices.txt",
        timingFile: "timings/Story3TheCloudShepherd'sApprentices_timings.json"
    },
    {
        id: 4,
        title: "The Library of Lost Stories",
        description: "Discover a magical library where forgotten stories come to life!",
        audioFile: "audio/Story4TheLibraryOfLostStories.mp3",
        textFile: "text/Story4TheLibraryOfLostStories.txt",
        timingFile: "timings/Story4TheLibraryOfLostStories_timings.json"
    },
    {
        id: 5,
        title: "The Sleepy Volcano's Lullaby",
        description: "A gentle volcano sings the whole valley to sleep each night!",
        audioFile: "audio/Story5TheSleepyVolcano'sLullaby.mp3",
        textFile: "text/Story5TheSleepyVolcano'sLullaby.txt",
        timingFile: "timings/Story5TheSleepyVolcano'sLullaby_timings.json"
    },
    {
        id: 6,
        title: "The Invisible Circus",
        description: "Step right up to see the most amazing invisible circus performers!",
        audioFile: "audio/Story6TheInvisibleCircus.mp3",
        textFile: "text/Story6TheInvisibleCircus.txt",
        timingFile: "timings/Story6TheInvisibleCircus_timings.json"
    },
    {
        id: 7,
        title: "The Time Traveling Treehouse",
        description: "Climb up to a treehouse that can travel through time!",
        audioFile: "audio/Story7TheTimeTravelingTreehouse.mp3",
        textFile: "text/Story7TheTimeTravelingTreehouse.txt",
        timingFile: "timings/Story7TheTimeTravelingTreehouse_timings.json"
    },
    {
        id: 8,
        title: "The Moonbeam Weavers",
        description: "Meet the magical creatures who weave moonbeams into silver cloth!",
        audioFile: "audio/Story8TheMoonbeamWeavers.mp3",
        textFile: "text/Story8TheMoonbeamWeavers.txt",
        timingFile: "timings/Story8TheMoonbeamWeavers_timings.json"
    },
    {
        id: 9,
        title: "The Singing Stones of Echo Valley",
        description: "Explore a valley where the stones sing beautiful melodies!",
        audioFile: "audio/Story9TheSingingStonesOfEchoValley.mp3",
        textFile: "text/Story9TheSingingStonesOfEchoValley.txt",
        timingFile: "timings/Story9TheSingingStonesOfEchoValley_timings.json"
    },
    {
        id: 10,
        title: "The Sleepy Star's Bedtime Story",
        description: "Listen as a sleepy star tells the most wonderful bedtime story!",
        audioFile: "audio/Story10TheSleepyStar'sBedtimeStory.mp3",
        textFile: "text/Story10TheSleepyStar'sBedtimeStory.txt",
        timingFile: "timings/Story10TheSleepyStar'sBedtimeStory_timings.json"
    }
];
