# `janitor-trw-neuter`

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).


1. Install
2. Chrome -> Extenstion -> Load Unpacked -> (wherever you cloned this repo)
3. Click Globe and load Ext Dialog

![](https://d.pr/i/XDjBlT.jpeg)

=======
see `~hook`; primarily lifted from [source, https://github.com/apoorvlathey/impersonator](https://github.com/apoorvlathey/impersonator). 

## TODO

This should only really work with walletconnect impersonting, then metamask connecting. In theory. YMMV. 

## Alternative methods

[see https://github.com/GiovanniFerrara/react-debugger-hook](https://github.com/GiovanniFerrara/react-debugger-hook), injection perhaps. Tho some more complex frontends (like oasis) may involve registration (via SWIE and then use a JWT based off ur account to maintain an entry in their database).


## Hacking

[see https://github.com/facebook/react/blob/0568c0f8cde4ac6657dff9a5a8a7112acc35a748/packages/react/index.js#L35](https://github.com/facebook/react/blob/0568c0f8cde4ac6657dff9a5a8a7112acc35a748/packages/react/index.js#L35)


## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/workflows#submit-your-extension) and you should be on your way for automated submission!
