# Campaign Management Application

A modern web application for managing marketing campaigns and creator collaborations. This application helps brands and businesses streamline their campaign creation process, from setting goals to managing deliverables and creator partnerships.

## Features

### 1. Campaign Setup
- **Goal Setting**: Choose between awareness and traffic-focused campaigns
- **Conversion Tracking**: Select between conversion goals and content creation
- **Location Targeting**: Add and manage multiple target locations

### 2. Creator Management
- **Creator Types**: Choose between Influencers and UGC creators
- **Creator Preferences**: Set specific requirements for creator selection
- **Collaboration Settings**: Define gifting and shipment options

### 3. Campaign Design
- **Platform Selection**: Choose from multiple social media platforms
- **Content Types**: Select various content deliverables (Posts, Reels, Videos)
- **Product Details**: Add product links, categories, and market values
- **Media Upload**: Support for cover images and multiple product images

### 4. Campaign Overview
- **Summary Dashboard**: Complete overview of campaign settings
- **Progress Tracking**: Step-by-step campaign setup process
- **Review & Edit**: Easy modification of campaign details

## Tech Stack

- React.js
- React Router for navigation
- Context API for state management
- Modern CSS with responsive design
- React Icons for UI elements

## Project Structure

```
src/
├── components/         # Reusable UI components
├── context/           # React Context for state management
├── pages/             # Main page components
├── styles/            # CSS styles
└── App.js            # Main application component
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd my-campaign-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Component Overview

### Header
- Search functionality
- Notification system
- Profile management
- Settings access

### Sidebar
- Navigation menu
- Toggle functionality
- Campaign sections

### Main Pages
1. **Dashboard**: Campaign overview and initial setup
2. **Deliverable**: Content type and platform selection
3. **Audience**: Target audience and creator preferences
4. **Campaign Design**: Visual elements and product details
5. **Summary**: Complete campaign overview

## Styling

The application uses a modular CSS approach with separate stylesheets for each component. Global styles are managed through `styles.css` with component-specific styles in the `styles/` directory.

## Responsive Design

- Mobile-first approach
- Responsive layout adjustments
- Sidebar collapse functionality
- Adaptive content display

## State Management

Uses React Context API for global state management:
- Campaign data
- User preferences
- Navigation state
- Form data persistence

## Future Enhancements

- User authentication
- Campaign analytics
- Creator marketplace integration
- Advanced targeting options
- Campaign performance metrics
- Export functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please email [support@email.com] or open an issue in the repository.
