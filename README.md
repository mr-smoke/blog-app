# Blog App - Fullstack

![Banner](https://i.ibb.co/JW1DwSc/banner.png)

## Table of Contents

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

A full-stack blog application built with React, MySQL, Express.js and Tailwind CSS. This project provides a platform for users to create, edit, and delete blog posts. It includes user authentication and authorization, allowing users to manage their own posts while viewing others' content. The application leverages the power of React for building a dynamic and responsive user interface, MySQL for a robust and reliable database solution, and Express.js for handling server-side logic and API endpoints, and Tailwind CSS for styling and responsive design.

### Larger Devices

<a href="https://ibb.co/cDk3grk"><img src="https://i.ibb.co/HnB4FHB/blog-app.gif" alt="blog-app" border="0" /></a>

### Smaller Devices

<a href="https://ibb.co/d0PYGwg"><img src="https://i.ibb.co/Kj2vFpw/mobile-blog-app.gif" alt="mobile-blog-app" border="0" /></a>

### Key Use Cases:

- Create, edit, and delete blog posts.
- User authentication and authorization.
- Categorize blogs and filter them based on categories.
- Upload images to blogs using the Multer package.
- Use a rich text editor for creating and editing blog content.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mr-smoke/blog-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-app
   ```

3. Install the [dependencies](#dependencies) for the API:

   ```bash
   cd api
   npm install
   ```

4. Set up environment variables for the API:

   - Create a `.env` file in the api directory and add the necessary environment variables.

5. Start the API development server:

   ```bash
   npm run dev
   ```

6. Open a new terminal and navigate to the project directory again:

   ```bash
   cd blog-app
   ```

7. Install the [dependecies](#dependencies) for the client:

   ```bash
   cd client
   npm install
   ```

8. Start the client development server:

   ```bash
   npm run dev
   ```

Now both the API and client servers should be running, and you can use the application.

## Usage

To use the blog app, follow these steps:

1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up for a new account or log in with an existing account.
3. Use the navigation menu to access different sections of the application, such as creating a new post or viewing existing posts.

### Example Commands

- To add a new blog post:

  1. Navigate to the "Write" section.
  2. Fill in the post details and submit the form.

- To manage your blog posts:
  1. Navigate to your post.
  2. View, edit, or delete post as needed.

## Features

- **Authentication**: Secure login and session management using JSON Web Tokens (JWT). Includes login, logout, and registration functionality.
- **Blog Management**: Create, edit, and delete blog posts. Categorize blogs and filter them based on categories.
- **Image Upload**: Upload images to blogs using the Multer package, allowing users to enhance their posts with visual content.
- **Rich Text Editor**: Use a rich text editor for creating and editing blog content, providing a better writing experience.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Dynamic updates without page reloads.
- **Server-side Rendering**: Improved performance and SEO with server-side rendering using Express.js.
- **Database Integration**: MySQL for robust and reliable data storage, ensuring data integrity and performance.
- **Error Handling**: Comprehensive error handling and validation to ensure data integrity and provide meaningful feedback to users.
- **Security**: Implemented security best practices, including password hashing, input validation, and secure authentication mechanisms.

## Technologies Used

- [![React][React.js]][React-url]
- [![Express][Express.js]][Express-url]
- [![MySQL][MySQL]][MySQL-url]
- [![Tailwind][Tailwind.css]][Tailwind-url]

## Dependencies

### Server Dependencies

- **bcrypt**: For hashing passwords and ensuring secure authentication.
- **cookie-parse**: Parse HTTP request cookies.
- **cors**: Enable Cross-Origin Resource Sharing.
- **dotenv**: Load environment variables from a .env file.
- **express**: Web framework for Node.js.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens.
- **multer**: Middleware for handling multipart/form-data, used for uploading files.
- **mysql-2**: MySQL client for Node.js.
- **nodemon**: Tool for automatically restarting the server during development.

### Client Dependencies

- **axios**: Promise-based HTTP client for the browser and Node.js.
- **dompurify**: Sanitizes HTML to prevent XSS attacks.
- **moment**: Parse, validate, manipulate, and display dates and times in JavaScript.
- **react**: Core library for building the frontend interface.
- **react-dom**: React library for DOM rendering.
- **react-hot-toast**: To display non-intrusive toast notifications.
- **react-icons**: Collection of popular icons to enhance the UI.
- **react-quil**: Rich text editor component for React.
- **react-router-dom**: Declarative routing for React applications.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions or feedback, feel free to reach out:

- Email: [muhammetbakiduman@gmail.com](mailto:muhammetbakiduman@gmail.com)
- LinkedIn: [Baki Duman](https://www.linkedin.com/in/muhammet-baki-duman-019451195/)

---

[React.js]: https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://react.dev
[Express.js]: https://img.shields.io/badge/express-20232A?style=for-the-badge&logo=express&logoColor=61DAFB
[Express-url]: https://expressjs.com
[MySQL]: https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=MySQL&logoColor=white
[MySQL-url]: https://www.mysql.com
[Tailwind.css]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwind-url]: https://tailwindcss.com
