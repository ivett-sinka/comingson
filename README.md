# ComingSon - Figma Integration

This project provides Figma API integration for the ComingSon project.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your Figma token in `.env` file:
```bash
FIGMA_ACCESS_TOKEN=your_token_here
```

## Usage

### Test Connection

Test your Figma API connection:
```bash
npm test
```

### Run Main Application

```bash
npm start
```

## API Methods

The `FigmaClient` class provides the following methods:

- `getMe()` - Get authenticated user information
- `getFile(fileKey)` - Get a Figma file by its key
- `getComments(fileKey)` - Get comments from a file
- `getTeamProjects(teamId)` - Get projects in a team
- `getProjectFiles(projectId)` - Get files in a project

## Example Usage

```javascript
import FigmaClient from './src/figma-client.js';

const figma = new FigmaClient();

// Get user info
const user = await figma.getMe();
console.log(user);

// Get a file
const file = await figma.getFile('YOUR_FILE_KEY');
console.log(file.name);
```

## Security

- Never commit your `.env` file
- Keep your Figma access token secure
- Use `.env.example` as a template for other developers

## Documentation

- [Figma API Documentation](https://www.figma.com/developers/api)
