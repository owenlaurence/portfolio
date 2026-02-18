### Building a Next.js app for iOS & Android with Plugins for full native support

Start with building a next.js app
~~~ bash
 npx create-next-app@latest
~~~
Name your application and follow the prompts.  
This example will use Typescript, ESLint, Tailwind, and App Router. You may change this configuration, but App Router is highly suggested.

From the root of your new Next.js application, install the necessary Capacitor packages: 
~~~ bash
  npm i @capacitor/core
  npm i -D @capacitor/cli
~~~

Use the @capacitor/cli tool to initiate an ios project and add your native platform(s): 

~~~ bash
npx cap init
npx cap add android # if you want android
npx cap add ios     # if you want ios
npx cap sync        # sync your next build with mobile platforms
~~~

<details open>

<summary>iOS</summary>

Install the iOS SDK for react
 ~~~bash
 npm install @capacitor/ios
 ~~~

Then open your iOS app in Xcode with the capacitor cli: 
 ~~~bash
 npx cap open ios
 ~~~


</details>
