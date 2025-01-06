import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    // Fiction
    {
      id: "1",
      img: "/public/Images/To Kill a Mockingbird.jpeg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about the serious issues of race, class, and gender in the American South.",
      rating: 4.8,
      category: "Fiction"
    },
    {
      id: "2",
      img: "/public/Images/The_Great_Gatsby.jpeg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story about the American dream and social stratification.",
      rating: 4.5,
      category: "Fiction"
    },
    {
      id: "3",
      img: "/public/Images/Pride_and_Prejudice.jpeg",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel about manners, marriage, and morality in early 19th-century England.",
      rating: 4.7,
      category: "Fiction"
    },
    {
      id: "4",
      img: "/public/Images/The_Catcher_in_the_Rye.jpeg",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A coming-of-age novel about the struggles of a teenage boy in New York City.",
      rating: 4.2,
      category: "Fiction"
    },
    {
      id: "5",
      img: "/public/Images/Little Women.jpeg",
      title: "Little Women",
      author: "Louisa May Alcott",
      description: "A story about the lives and struggles of four sisters growing up during the Civil War.",
      rating: 4.6,
      category: "Fiction"
    },
    {
      id: "6",
      img: "/public/Images/The Bell Jar.jpeg",
      title: "The Bell Jar",
      author: "Sylvia Plath",
      description: "A semi-autobiographical novel about a young woman’s struggle with mental illness.",
      rating: 4.4,
      category: "Fiction"
    },
  
    // Sci-Fi
    {
      id: "7",
      img: "/public/Images/Dune.jpeg",
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction novel about politics, religion, and ecology on a desert planet.",
      rating: 4.8,
      category: "Sci-Fi"
    },
    {
      id: "8",
      img: "/public/Images/Ender’s_Game.jpeg",
      title: "Ender’s Game",
      author: "Orson Scott Card",
      description: "A novel about a young boy trained to fight an interstellar war.",
      rating: 4.6,
      category: "Sci-Fi"
    },
    {
      id: "9",
      img: "/public/Images/Foundation.jpeg",
      title: "Foundation",
      author: "Isaac Asimov",
      description: "A story about the collapse and rebirth of a galactic empire.",
      rating: 4.4,
      category: "Sci-Fi"
    },
    {
      id: "10",
      img: "/public/Images/Neuromancer.jpeg",
      title: "Neuromancer",
      author: "William Gibson",
      description: "A cyberpunk novel about artificial intelligence and cyberspace.",
      rating: 4.3,
      category: "Sci-Fi"
    },
    {
      id: "11",
      img: "/public/Images/Hyperion.jpeg",
      title: "Hyperion",
      author: "Dan Simmons",
      description: "A sci-fi novel about seven pilgrims on a far-future journey to a mysterious planet.",
      rating: 4.5,
      category: "Sci-Fi"
    },
    {
      id: "12",
      img: "/public/Images/Snow Crash.jpeg",
      title: "Snow Crash",
      author: "Neal Stephenson",
      description: "A cyberpunk classic that explores virtual reality, hacking, and ancient mythology.",
      rating: 4.4,
      category: "Sci-Fi"
    },
  
    // Non-Fiction
    {
      id: "13",
      img: "/public/Images/Sapiens_A_Brief_History_of_Humankind.jpeg",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "A book exploring the history and evolution of the human species.",
      rating: 4.8,
      category: "Non-Fiction"
    },
    {
      id: "14",
      img: "/public/Images/Educated.jpeg",
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a woman overcoming her isolated and oppressive upbringing.",
      rating: 4.7,
      category: "Non-Fiction"
    },
    {
      id: "15",
      img: "/public/Images/Becoming.jpeg",
      title: "Becoming",
      author: "Michelle Obama",
      description: "A memoir by the former First Lady of the United States.",
      rating: 4.6,
      category: "Non-Fiction"
    },
    {
      id: "16",
      img: "/public/Images/The_Immortal_Life_of_Henrietta_Lacks.jpeg",
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description: "The story of a woman whose cells were used for scientific research without her consent.",
      rating: 4.7,
      category: "Non-Fiction"
    },
    {
      id: "17",
      img: "/public/Images/The Power of Habit.jpeg",
      title: "The Power of Habit",
      author: "Charles Duhigg",
      description: "A book that explores the science of habit formation and how habits shape our lives.",
      rating: 4.5,
      category: "Non-Fiction"
    },
    {
      id: "18",
      img: "/public/Images/The subtle art of.jpeg",
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      description: "A counterintuitive approach to living a good life by focusing on what truly matters.",
      rating: 4.3,
      category: "Non-Fiction"
    },
  
    // Mystery
    {
      id: "19",
      img: "/public/Images/Gone Girl.jpeg",
      title: "Gone Girl",
      author: "Gillian Flynn",
      description: "A thriller about a woman’s disappearance and the secrets in her marriage.",
      rating: 4.5,
      category: "Mystery"
    },
    {
      id: "20",
      img: "/public/Images/The Girl with the Dragon Tattoo.jpeg",
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      description: "A mystery about a journalist and a hacker investigating a decades-old disappearance.",
      rating: 4.6,
      category: "Mystery"
    },
    {
      id: "21",
      img: "/public/Images/Big Little Lies.jpeg",
      title: "Big Little Lies",
      author: "Liane Moriarty",
      description: "A mystery about secrets, lies, and a suspicious death in a suburban community.",
      rating: 4.4,
      category: "Mystery"
    },
    {
      id: "22",
      img: "/public/Images/The Da Vinci Code.jpeg",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      description: "A thriller involving religious symbols, secret societies, and a race to uncover the truth.",
      rating: 4.3,
      category: "Mystery"
    },
    {
      id: "23",
      img: "/public/Images/And Then There Were None.jpeg",
      title: "And Then There Were None",
      author: "Agatha Christie",
      description: "A classic mystery about ten strangers trapped on an island with a murderer among them.",
      rating: 4.8,
      category: "Mystery"
    },
    {
      id: "24",
      img: "/public/Images/The_Silent_Patient.jpeg",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller about a woman who stops speaking after a shocking act of violence.",
      rating: 4.5,
      category: "Mystery"
    },
  
    // Classics
    {
      id: "25",
      img: "/public/Images/1984.jpeg",
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism and surveillance.",
      rating: 4.8,
      category: "Classic"
    },
    {
      id: "26",
      img: "/public/Images/Moby-Dick.jpeg",
      title: "Moby-Dick",
      author: "Herman Melville",
      description: "A story about an obsessive quest to capture a giant white whale.",
      rating: 4.2,
      category: "Classic"
    },
    {
      id: "27",
      img: "/public/Images/Jane Eyre.jpeg",
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      description: "A novel about a young woman’s journey to independence and love.",
      rating: 4.7,
      category: "Classic"
    },
    {
      id: "28",
      img: "/public/Images/Wuthering Heights.jpeg",
      title: "Wuthering Heights",
      author: "Emily Brontë",
      description: "A tale of passion and revenge set on the Yorkshire moors.",
      rating: 4.5,
      category: "Classic"
    },
  
    // Mythology
    {
      id: "29",
      img: "/public/Images/mahabharata.jpeg",
      title: "The Mahabharata",
      author: "Vyasa",
      description: "An ancient Indian epic that narrates the Kurukshetra War and the fates of the Kaurava and the Pandava princes.",
      rating: 4.8,
      category: "Mythology"
    },
    {
      id: "30",
      img: "/public/Images/Ramayana.jpeg",
      title: "The Ramayana",
      author: "Valmiki",
      description: "The story of Lord Rama's journey to rescue his wife Sita from the demon king Ravana.",
      rating: 4.7,
      category: "Mythology"
    },
    {
      id: "31",
      img: "/public/Images/mythos.jpeg",
      title: "Mythos",
      author: "Stephen Fry",
      description: "A retelling of the Greek myths, full of humor and modern insights.",
      rating: 4.5,
      category: "Mythology"
    },
    {
      id: "32",
      img: "/public/Images/iliad.jpeg",
      title: "The Iliad",
      author: "Homer",
      description: "A classic epic that details the Trojan War and the rage of Achilles.",
      rating: 4.6,
      category: "Mythology"
    },
    {
      id: "33",
      img: "/public/Images/odyssey.jpeg",
      title: "The Odyssey",
      author: "Homer",
      description: "The epic journey of Odysseus as he tries to return home after the Trojan War.",
      rating: 4.7,
      category: "Mythology"
    },
    {
      id: "34",
      img: "/public/Images/indian-mythology.jpeg",
      title: "Indian Mythology: Tales, Symbols, and Rituals",
      author: "Devdutt Pattanaik",
      description: "A fascinating exploration of India's myths, symbols, and rituals.",
      rating: 4.6,
      category: "Mythology"
    },
    {
      id: "35",
      img: "/public/Images/norse-mythology.jpeg",
      title: "Norse Mythology",
      author: "Neil Gaiman",
      description: "A collection of Norse myths retold by Neil Gaiman, featuring gods like Odin, Thor, and Loki.",
      rating: 4.8,
      category: "Mythology"
    },
    {
      id: "36",
      img: "/public/Images/bhagavad-gita.jpeg",
      title: "The Bhagavad Gita",
      author: "Vyasa",
      description: "A spiritual classic and part of the Mahabharata, offering timeless wisdom and philosophy.",
      rating: 4.9,
      category: "Mythology"
    },
  
    // Others
    {
      id: "37",
      img: "/public/Images/The Alchemist.jpeg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "An inspiring tale about following your dreams and discovering your destiny.",
      rating: 4.7,
      category: "Others"
    },
    {
      id: "38",
      img: "/public/Images/Atomic Habits.jpeg",
      title: "Atomic Habits",
      author: "James Clear",
      description: "A practical guide on building good habits and breaking bad ones.",
      rating: 4.8,
      category: "Others"
    },

  ],
  
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

