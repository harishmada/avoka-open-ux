# Transact Open UX React Template

This [React](https://reactjs.org/) template was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and utilizes the [Transact Open UX](https://docs.avoka.com/open-ux/) and [Material UI](https://material-ui.com) libraries.

To find information on how to perform common tasks related to Create React App please view their most recent guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) and to view how to style and theme your app using Material UI view their website [here](https://material-ui.com).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Browser Support](#browsersupport)

## Installation

You can install the template by following the [Transact Open UX Quick Start Guide.](https://docs.avoka.com/open-ux/docs/getting-started/quick-start.html)

## Usage

### Adding Pages

You can add a page by adding another [Page](https://docs.avoka.com/open-ux/docs/api/react/page.html) component from the `@transact-open-ux/react` library into the [PageController](https://docs.avoka.com/open-ux/docs/api/react/page-controller.html).

#### Example

```html
 <PageController>
    <Page id="LandingPage" offMenu>
         <LandingPage />
    </Page>
    <Page id="gettingstarted" label="all about you">
         <AllAboutYou />
    </Page>
    <Page id="newPage">
        new page here...
    </Page>         
 </PageController>
```

### Theme customization

See [Material UI](https://material-ui.com/customization/themes/) for theme customization. There is a theme.js file already setup in the project.

## Browser Support

By default, the generated project supports all modern browsers.

Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

_Note: this project includes no polyfills by default._
