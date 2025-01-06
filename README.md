# Online Library

An **Online Library System** developed using **React.js** with **Vite**, along with **HTML** and **CSS**. This project provides users with features to browse, view, and add books to the library. It also includes functionalities like dynamic routing, search, and form validation.

## Features

### 1. Home Page
- A landing page with a welcome message and a list of book categories (e.g., Fiction, Non-Fiction, Sci-Fi, etc.).
- Displays a list of popular books with a link to view more details.
- Includes a navigation bar with links to "Home," "Browse Books," and "Add Book."

### 2. Browse Books Page
- Displays a list of books filtered by category using dummy data.
- Implements dynamic routing to filter books by category (e.g., `/books/:category`).
- Each book has a "View Details" link routing to the Book Details page.
- Search functionality to filter books by title or author.

### 3. Book Details Page
- A dynamic route that displays detailed information about a selected book.
- Shows the book's title, author, description, and rating.
- Includes a "Back to Browse" button or link to return to the Browse Books page.

### 4. Add Book Page
- A form for adding new books to the library.
- Uses Redux to manage the state of the books list.
- Redirects the user to the Browse Books page after successfully adding a book.
- Implements form validation to ensure all fields are correctly filled out.

### 5. 404 Page
- A "Page Not Found" route for any undefined routes.
- Includes a link back to the Home page.

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd online-library
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Technologies Used
- **React.js**: Frontend library
- **Vite**: Build tool
- **Redux**: State management
- **HTML & CSS**: Structuring and styling

## Credits
This project was completed as part of a React.js assignment. Special thanks to the instructor and team for guidance and support.

## License
This project is open-source and available under the [MIT License](./LICENSE).
