### Sugary React Dashboard

A professional React dashboard application for managing materials with a modern UI, built with React, TypeScript, and shadcn/ui components.

## ✨ Features

- **Authentication System**: Secure login with JWT token management
- **Responsive Dashboard**: Beautiful interface that works on all devices
- **Material Management**: Browse materials
- **Infinite Scrolling**: Load materials as you scroll for better performance
- **Dark/Light Mode**: Full theme support with seamless transitions
- **Type Safety**: Built with TypeScript for robust code quality
- **Modern UI Components**: Leveraging shadcn/ui for consistent design

## 🛠️ Technologies

- **React 18** - Modern UI library
- **TypeScript** - Type safety and better developer experience
- **Next.js** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible and customizable component library
- **Tanstack Query** - Data fetching and state management
- **Axios** - HTTP client for API requests
- **js-cookie** - Cookie handling for authentication
- **Lucide React** - Beautiful SVG icons

## 📦 Installation

1. Clone the repository:

```shellscript
git clone https://github.com/Shakilofficial/sugary-react-recruitment.git
cd sugary-react-recruitment
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
# or
pnpm install
```

4. Start the development server:

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## 🚀 Usage

### Authentication

The application comes with a pre-configured authentication system. Use the following credentials to log in:

### Dashboard

The dashboard provides an overview of your materials with key metrics:

- Total materials count
- Available delivery areas
- Material tags

### Materials Management

Browse through materials with these features:

- **Infinite Scrolling**: Automatically loads more materials as you scroll
- **Filtering**: Filter materials by tags, delivery areas, and more
- **Sorting**: Sort materials by price or name
- **Search**: Find specific materials by name or description
- **Detail View**: Click on any material to see detailed information

## 📁 Project Structure

```plaintext
sugary-react-recruitment/
├── public/                     # Static assets (favicon, images, etc.)
│
├── src/                        # Main application source
│
│   ├── components/             # Reusable React components
│   │   ├── dashboard/          # Components specific to the Dashboard page
│   │   ├── material/           # Components for material listing/filtering
│   │   ├── ui/                 # Shared UI components (e.g., Dialogs, Buttons via shadcn/ui)
│   │   └── ...                 # Other shared or feature-specific components
│
│   ├── layout/                 # App-level layouts (e.g., root layout, dashboard layout)
│
│   ├── lib/                    # Utility functions (e.g., helpers, formatters)
│
│   ├── pages/                  # Route-based page components (if using traditional pages routing)
│
│   ├── providers/              # React context providers (e.g., AuthProvider)
│
│   ├── routes/                 # Application route definitions (e.g., with React Router or Next.js App Router)
│
│   ├── services/               # API service functions (e.g., auth, materials)
│
│   ├── types/                  # Global TypeScript types and interfaces
│
│   └── index.css              # Tailwind and global styles

```

## 🧪 Running Tests

```shellscript
npm run test
# or
yarn test
# or
pnpm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [TypeScript](https://www.typescriptlang.org/) for the TypeScript language
- [React](https://reactjs.org/) for the React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Axios](https://axios-http.com/) for HTTP client
- [js-cookie](https://github.com/js-cookie/js-cookie) for cookie handling
- [React Router DOM](https://reactrouter.com/docs/en/v6/getting-started/overview) for routing
- [Tanstack Query](https://tanstack.com/query/v4/docs/react/overview) for data fetching and state management
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ by [Shakil Hossain](https://github.com/Shakilofficial)
