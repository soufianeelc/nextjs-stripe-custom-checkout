# Next.js Stripe Custom Checkout

Build beautiful custom checkout experiences with Next.js 15, Stripe and Shadcn/ui.

## 📸 Preview

### Pricing Plans

![Pricing Plans Preview](/public/preview-plans.png)
_Modern pricing page_

### Custom Checkout

![Custom Checkout Preview](/public/preview-checkout.png)
_Custom checkout page with Stripe integration_

## 🌟 Features

- ⚡️ **Next.js 15** with App Router and React Server Components
- 💳 **Stripe Integration** with custom checkout flow
- 🔒 **Type Safety** with TypeScript
- 🎨 **Modern UI** with Tailwind CSS and Shadcn UI
- 🔐 **Secure Payments** handling with Stripe's latest SDK
- 📱 **Responsive Design** for all devices
- ✨ **Modern Development** features with Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- PNPM package manager
- Stripe account and API keys

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/soufianeelc/nextjs-stripe-custom-checkout.git
   cd nextjs-stripe-custom-checkout
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Stripe API keys and other required environment variables in `.env.local`

4. Start the development server:
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see the application in action.

## 🛠 Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable UI components
├── features/      # Feature-specific components and logic
└── lib/          # Utility functions and configurations
```

## 💻 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Payment Processing**: Stripe
- **Form Validation**: Zod
- **Icons**: Phosphor Icons, Lucide React
- **Development**: Turbopack, ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `pnpm lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ☕ Support

If you find this project helpful and want to support its development, you can buy me a coffee!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/soufianeelc)

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.
