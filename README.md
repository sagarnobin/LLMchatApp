# Chat Application

This lightweight chat application, built with Node.js, Express, and Socket.IO, enables real-time messaging and utilizes a locally installed LAMA 3.2 language model via Ollama to generate dynamic responses based on user input.

## Project Structure

```
chat-app
├── public
│   ├── css
│   │   └── style.css        # Styles for the chat application
│   ├── js
│   │   └── main.js          # JavaScript for handling chat functionality and API calls
│   └── index.html           # Main HTML document for the chat interface
├── server.js                # Entry point for the Node.js server
├── package.json             # npm configuration file
└── README.md                # Documentation for the project
```

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the server**
   Start the server with:
   ```bash
   node server.js
   ```

4. **Access the application**
   Open your web browser and navigate to `http://localhost:3000` to see the chat application in action.

## Features

- Real-time messaging with Socket.IO
- Integration with a Llama3.2 language model for generating responses
- Responsive design with a fixed chat interface and scrollable conversation area

## Technologies Used

- Node.js
- Express
- Socket.IO
- HTML/CSS/JavaScript

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
