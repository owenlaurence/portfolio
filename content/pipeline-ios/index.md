## Fully automated delivery to the App Store and Google Play

In this document, we will deliver our [geolocation mobile application](/topic/capacitor-intro) using Ruby with Match and Fastlane.

## Table of Contents
### iOS
- [Manual Delivery](#ios-manual-delivery)
- [CI/CD Setup](#ios-pipeline-setup)
- [Match](#ios-match)

### Android
- [Manual Delivery](#android-manual-delivery)
- [CI/CD Setup](#android-pipeline-setup)


## iOS
### Manual Delivery <a id="ios-manual-delivery"></a>


To run an iOS simulator, you must have a MacOS system. Otherwise, you may skip directly to [CI/CD setup](#ios-pipeline-setup).

The preferred way to install fastlane is via [Homebrew](https://brew.sh). This will also install a version of Ruby compatible with Fastlane.
> Note: MacOS systems ship with Ruby, however you will still need a version of Ruby separate from your system version. 

~~~ shell 
brew install fastlane   # install fastlane CLI
cd your/ios/app
fastlane init           # Create your fastlane config 
~~~

If this is your first time deploying an app to App Store Connect, you must run the init command with your company name set as an environment variable like so: 

~~~ shell
PRODUCE_COMPANY_NAME="Dunder Mifflin" fastlane init  
~~~

The init command will encourage you to set up with one automation task. Pick the option "Automate App Store distribution"    

Fastlane will use your existing Xcode project schema to build. When the build completes, you will be prompted to enter your Apple ID developer credentials. If you do not have an Apple ID, you can create one [here](https://account.apple.com/account).

After authenticating with your Apple ID, Fastlane will create a new App ID on the [Apple Developer Portal](https://developer.apple.com) for you if one does not match your apps bundle identifier. Confirm this option and enter your application display name when prompted.

Next, you will be prompted to create the App in [App Store Connect](https://appstoreconnect.apple.com). Confirm the prompts and enter the same display name from the previous step.

Finally, you will be asked to use fastlane to manage your applications metadata. This is not mandatory, but makes delivery significantly smoother.

We now have a <code>fastlane</code> directory. Lets take a look at the contained <code>FastFile</code>:

~~~ ruby
# Uncomment the line if you want fastlane to automatically update itself
# update_fastlane

default_platform(:ios)

platform :ios do
  desc "Push a new release build to the App Store"
  lane :release do
    increment_build_number(xcodeproj: "App.xcodeproj")
    build_app(scheme: "App")
    upload_to_app_store
  end
end
~~~

## Android
### Manual Delivery <a id="android-manual-delivery"></a>

Ensure [Android Studio](https://developer.android.com/studio) is installed before following these instructions.


