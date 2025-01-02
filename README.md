Here’s a template for the `README.md` file that you can create in your project’s main directory:

```markdown
# BreadcrumbsKonan Component

## Description
`BreadcrumbsKonan` is a simple and customizable breadcrumb navigation component for React. It helps users understand their current location within an app by showing a hierarchical trail of links.

## Installation

To use the `BreadcrumbsKonan` component, first install the package using npm or yarn:

```bash
npm install breadcrumbs-konan
```
or
```bash
yarn add breadcrumbs-konan
```

## Usage

Import the `BreadcrumbsKonan` component and pass an array of paths as props:

```tsx
import React from 'react';
import BreadcrumbsKonan from './components/BreadcrumbsKonan';

const SomePage: React.FC = () => {
  const breadcrumbPaths = ['Home', 'Devices', 'Device Details'];

  return (
    <div>
      <BreadcrumbsKonan paths={breadcrumbPaths} />
      <h1>Device Details Page</h1>
    </div>
  );
};
```

## Props

- `paths`: An array of strings representing the path names for the breadcrumb trail.

## Styling

You can style the breadcrumbs using your own CSS or use libraries like Bootstrap for default styling.

Example:

```css
.breadcrumb {
  list-style-type: none;
}

.breadcrumb-item {
  display: inline;
  margin-right: 10px;
}

.breadcrumb-item::after {
  content: '>';
  margin-left: 10px;
}
```

## License

MIT License.
```

To add this file, you simply create a file named `README.md` in your main project directory and paste the above content into it. It explains how to install, use, and style the `BreadcrumbsKonan` component.
